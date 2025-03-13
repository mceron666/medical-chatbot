'use client';

import { useState, useRef, useEffect } from 'react';
import { Stethoscope, Send, X, Loader2, MessageSquare } from 'lucide-react';
import { sendMessageToDialogflow } from '@/lib/actions';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Add user message to chat
    const userMessage = {
      id: Date.now().toString(),
      role: 'user' as const,
      content: input,
    };
    
    setMessages((messages) => [...messages, userMessage]);
    setIsLoading(true);
    const currentInput = input;
    setInput('');

    try {
      // Send message to Dialogflow
      const response = await sendMessageToDialogflow(currentInput);
      
      // Add bot response to chat
      const botMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: response.fulfillmentText || "Lo siento, no pude entender tu pregunta.",
      };
      
      setMessages((messages) => [...messages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: "Lo siento, hubo un error al procesar tu solicitud. Por favor, intenta de nuevo más tarde.",
      };
      
      setMessages((messages) => [...messages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="chat-bot-button" onClick={toggleChat}>
        <MessageSquare size={24} />
      </div>

      {/* Chat Container */}
      <div className={`chat-container ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <Stethoscope className="chat-header-icon" size={20} />
          <div className="chat-title">Asistente Virtual</div>
          <button className="chat-close" onClick={toggleChat}>
            <X size={20} />
          </button>
        </div>

        <div className="chat-messages">
          {messages.length === 0 ? (
            <div className="chat-welcome">
              <Stethoscope className="chat-welcome-icon" size={40} />
              <h3>¡Bienvenido al Centro Médico!</h3>
              <p>¿En qué puedo ayudarte hoy?</p>
            </div>
          ) : (
            messages.map((message) => (
              <div 
                key={message.id} 
                className={message.role === 'user' ? 'user-message' : 'bot-message'}
              >
                {message.content}
              </div>
            ))
          )}

          {isLoading && (
            <div className="bot-message typing-indicator">
              <Loader2 size={16} />
              <span>Escribiendo...</span>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Escribe tu pregunta aquí..."
            value={input}
            onChange={handleInputChange}
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="chat-send" 
            disabled={isLoading || !input.trim()}
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </>
  );
}