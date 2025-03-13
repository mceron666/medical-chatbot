import { Stethoscope, Clock, Phone, MapPin, Mail,  Heart, Activity, Microscope } from 'lucide-react';
import ChatBot from '@/components/chatbot';

export default function HomePage() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <Stethoscope size={24} />
            <span>Medi Center</span>
          </div>
          <nav className="nav">
            <a href="#servicios" className="nav-link">Servicios</a>
            <a href="#especialistas" className="nav-link">Especialistas</a>
            <a href="#contacto" className="nav-link">Contacto</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Cuidamos de tu salud y bienestar</h1>
          <p className="hero-subtitle">
            Nuestro equipo de profesionales médicos está comprometido a brindarte la mejor atención con tecnología de vanguardia. 
            accede a nuestro chatbot para obtener información precisa de cualquier pregunta que tengas
          </p>
          <a href="#contacto" className="hero-button">Agenda una cita</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="servicios">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Ofrecemos una amplia gama de servicios médicos para cuidar de tu salud y la de tu familia.
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Heart size={24} />
              </div>
              <h3 className="service-title">Consultas Médicas</h3>
              <p className="service-description">
                Atención médica personalizada con los mejores especialistas en diversas áreas de la medicina.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <Activity size={24} />
              </div>
              <h3 className="service-title">Exámenes Diagnósticos</h3>
              <p className="service-description">
                Contamos con equipos de última generación para realizar diagnósticos precisos y oportunos.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <Microscope size={24} />
              </div>
              <h3 className="service-title">Laboratorio Clínico</h3>
              <p className="service-description">
                Análisis clínicos con resultados rápidos y confiables para un diagnóstico certero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="section section-alt" id="especialistas">
        <div className="container">
          <h2 className="section-title">Nuestros Especialistas</h2>
          <p className="section-subtitle">
            Contamos con un equipo de médicos altamente calificados en diversas especialidades.
          </p>
          
          <div className="doctors-grid">
            <div className="doctor-card">
              <img 
                src="/placeholder.svg?height=200&width=300" 
                alt="Dr. Carlos Rodríguez" 
                className="doctor-image" 
              />
              <div className="doctor-info">
                <h3 className="doctor-name">Dr. Carlos Rodríguez</h3>
                <p className="doctor-specialty">Cardiología</p>
                <p className="doctor-bio">
                  Especialista en cardiología con más de 15 años de experiencia en el diagnóstico y tratamiento de enfermedades cardiovasculares.
                </p>
              </div>
            </div>
            
            <div className="doctor-card">
              <img 
                src="/placeholder.svg?height=200&width=300" 
                alt="Dra. Ana Martínez" 
                className="doctor-image" 
              />
              <div className="doctor-info">
                <h3 className="doctor-name">Dra. Ana Martínez</h3>
                <p className="doctor-specialty">Pediatría</p>
                <p className="doctor-bio">
                  Pediatra con amplia experiencia en el cuidado de la salud infantil, desde recién nacidos hasta adolescentes.
                </p>
              </div>
            </div>
            
            <div className="doctor-card">
              <img 
                src="/placeholder.svg?height=200&width=300" 
                alt="Dr. Miguel Sánchez" 
                className="doctor-image" 
              />
              <div className="doctor-info">
                <h3 className="doctor-name">Dr. Miguel Sánchez</h3>
                <p className="doctor-specialty">Neurología</p>
                <p className="doctor-bio">
                  Neurólogo especializado en trastornos neurológicos y enfermedades neurodegenerativas con enfoque en tratamientos innovadores.
                </p>
              </div>
            </div>
            
            <div className="doctor-card">
              <img 
                src="/placeholder.svg?height=200&width=300" 
                alt="Dra. Laura Gómez" 
                className="doctor-image" 
              />
              <div className="doctor-info">
                <h3 className="doctor-name">Dra. Laura Gómez</h3>
                <p className="doctor-specialty">Dermatología</p>
                <p className="doctor-bio">
                  Dermatóloga especializada en el diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contacto">
        <div className="container">
          <h2 className="section-title">Contacto y Ubicación</h2>
          <p className="section-subtitle">
            Estamos aquí para atenderte. Contáctanos o visítanos en nuestras instalaciones.
          </p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <Clock size={24} />
                <div className="contact-item-content">
                  <h3>Horario de Atención</h3>
                  <p>Lunes a Viernes: 8:00 AM - 8:00 PM</p>
                  <p>Sábados: 8:00 AM - 2:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
              
              <div className="contact-item">
                <Phone size={24} />
                <div className="contact-item-content">
                  <h3>Teléfonos</h3>
                  <p>Citas: (502) 2222-3333</p>
                  <p>Emergencias: (502) 2222-4444</p>
                  <p>WhatsApp: (502) 5555-6666</p>
                </div>
              </div>
              
              <div className="contact-item">
                <MapPin size={24} />
                <div className="contact-item-content">
                  <h3>Dirección</h3>
                  <p>Avenida Reforma 15-45, Zona 10</p>
                  <p>Ciudad de Guatemala, Guatemala</p>
                </div>
              </div>
              
              <div className="contact-item">
                <Mail size={24} />
                <div className="contact-item-content">
                  <h3>Correo Electrónico</h3>
                  <p>info@centromedico.com</p>
                  <p>citas@centromedico.com</p>
                </div>
              </div>
            </div>
            
            <div className="map">
              <p>Mapa de ubicación aquí</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt" id="faq">
        <div className="container">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p className="section-subtitle">
            Respuestas a las preguntas más comunes sobre nuestros servicios.
          </p>
          
          <div className="faq-container">
            <div className="faq-item">
              <h3 className="faq-question">¿Cómo puedo agendar una cita?</h3>
              <p className="faq-answer">
                Puede agendar una cita llamando a nuestro número de teléfono (502) 2222-3333, a través de nuestro sitio web en la sección de citas, o enviando un mensaje por WhatsApp al (502) 5555-6666.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">¿Qué debo llevar a mi primera consulta?</h3>
              <p className="faq-answer">
                Para su primera consulta, debe traer su documento de identificación, tarjeta de seguro médico (si aplica), historial médico previo y lista de medicamentos que esté tomando actualmente.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">¿Cuánto tiempo tarda en estar listos los resultados de laboratorio?</h3>
              <p className="faq-answer">
                Los resultados de laboratorio básicos suelen estar disponibles en 24-48 horas. Exámenes más especializados pueden tomar entre 3-5 días hábiles. Puede consultar sus resultados en línea o recogerlos personalmente.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">¿Atienden emergencias las 24 horas?</h3>
              <p className="faq-answer">
                Sí, nuestro servicio de emergencias está disponible las 24 horas del día, los 7 días de la semana, incluyendo días festivos.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">¿Aceptan seguros médicos?</h3>
              <p className="faq-answer">
                Sí, trabajamos con las principales aseguradoras del país. Le recomendamos verificar la cobertura específica de su seguro antes de su visita llamando a nuestro departamento de admisiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>Medi Center</h3>
              <ul className="footer-links">
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#especialistas">Especialistas</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Especialidades</h3>
              <ul className="footer-links">
                <li><a href="#">Cardiología</a></li>
                <li><a href="#">Pediatría</a></li>
                <li><a href="#">Neurología</a></li>
                <li><a href="#">Dermatología</a></li>
                <li><a href="#">Ginecología</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Horarios</h3>
              <ul className="footer-links">
                <li>Lunes a Viernes: 8:00 AM - 8:00 PM</li>
                <li>Sábados: 8:00 AM - 2:00 PM</li>
                <li>Domingos: Cerrado</li>
                <li>Emergencias: 24/7</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Contacto</h3>
              <ul className="footer-links">
                <li>Teléfono: (502) 2222-3333</li>
                <li>Email: info@centromedico.com</li>
                <li>Dirección: Avenida Reforma 15-45, Zona 10</li>
                <li>Ciudad de Guatemala, Guatemala</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Medi Center. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Chat Bot */}
      <ChatBot />
    </div>
  );
}