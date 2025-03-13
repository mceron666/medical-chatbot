"use server"

import { GoogleAuth } from "google-auth-library"
import fs from "fs"
import path from "path"

// Interface para la respuesta de Dialogflow
interface DialogflowResponse {
  queryResult: {
    fulfillmentText: string
    fulfillmentMessages: Array<{
      text: {
        text: string[]
      }
    }>
    intent: {
      displayName: string
    }
  }
}

// Obtener token de acceso para la API de Dialogflow
async function getAccessToken() {
  try {
    // Leer el archivo credentials.json y convertirlo a objeto
    const filePath = path.resolve(process.cwd(), "credentials.json")
    const fileContents = fs.readFileSync(filePath, "utf8")
    const credentials = JSON.parse(fileContents)

    const auth = new GoogleAuth({
      credentials, // <- aquí va el objeto
      scopes: "https://www.googleapis.com/auth/cloud-platform",
    })

    const client = await auth.getClient()
    const token = await client.getAccessToken()

    console.log("Access Token:", token)
    return token.token
  } catch (error) {
    console.error("Error obteniendo el token de acceso:", error)
    throw new Error("Fallo en la autenticación con Google")
  }
}

// Enviar mensaje a Dialogflow
export async function sendMessageToDialogflow(message: string) {
  try {
    const token = await getAccessToken()

    const response = await fetch(
      "https://dialogflow.googleapis.com/v2/projects/chatbot-medico-453221/agent/sessions/user-001:detectIntent",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          queryInput: {
            text: {
              text: message,
              languageCode: "es",
            },
          },
        }),
      },
    )

    if (!response.ok) {
      throw new Error(`Error en la API de Dialogflow: ${response.status}`)
    }

    const data = (await response.json()) as DialogflowResponse

    return {
      fulfillmentText: data.queryResult.fulfillmentText,
      intent: data.queryResult.intent.displayName,
    }
  } catch (error) {
    console.error("Error al enviar mensaje a Dialogflow:", error)
    throw error
  }
}