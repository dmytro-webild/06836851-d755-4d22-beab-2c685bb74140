import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesDetailedCards from '@/components/sections/features/FeaturesDetailedCards';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import FeaturesMediaCarousel from '@/components/sections/features/FeaturesMediaCarousel';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import HeroBillboardCreator from '@/components/sections/hero/HeroBillboardCreator';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import InstagramShowcase from '@/components/sections/social-proof/InstagramShowcase';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
      <div id="hero" data-section="hero">
        <SectionErrorBoundary name="hero">
          <HeroBillboardCreator
            tag="Contenido con Propósito & Embudos de Ventas"
            title="Creamos Contenido con Propósito que"
            titleHighlight="Multiplica tus Ventas"
            description="Transformamos tu marca con storytelling de alto impacto, producción audiovisual estratégica y embudos de ventas diseñados para agentes inmobiliarios, agencias de bienes raíces, hoteles y resorts. Convertimos vistas en cierres de ventas y reservas reales."
            primaryButton={{
              text: "Agendar Sesión Estratégica",
              href: "#contact",
            }}
            note="Especialistas en Real Estate, Agentes, Hoteles & Resorts orientados a captación de clientes y facturación real."
            badgeText="Storytelling & Embudos de Ventas"
            textAnimation="fade-blur"
            videos={[
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4?_wi=1",
                name: "Real Estate & Agentes Inmobiliarios",
                followers: "+5.1M Alcance & Venta Cerrada",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/rooms/oceanpavillion.webp?_wi=1",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4?_wi=1",
                name: "Hoteles & Resorts en Punta Cana",
                followers: "+4.8M Reproducciones & Reservas Directas",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/amenities/pool.jpg?_wi=1",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?_wi=1",
                name: "Concesionarios & Showrooms de Lujo",
                followers: "+3.2M Interacciones",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/features/feature1.webp?_wi=1",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4?_wi=1",
                name: "Talleres Mecánicos & Servicio Especializado",
                followers: "+2.9M Visualizaciones",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/features/features2.webp",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4?_wi=1",
                name: "Excursiones & Experiencias Turísticas",
                followers: "4.8x Conversión Directa",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/journeys/sailing.webp?_wi=1",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?v=2",
                name: "Proyectos Inmobiliarios & Villas de Lujo",
                followers: "+6.5M Impresiones",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/rooms/gardenvilla.webp?_wi=1",
              },
            ]}
          />
        </SectionErrorBoundary>
      </div>

      <div id="about" data-section="about">
        <SectionErrorBoundary name="about">
          <AboutTestimonial
            tag="Nuestra Filosofía de Contenido"
            quote="“Creemos que el contenido sin propósito es solo ruido. Combinamos la fuerza del storytelling con la estructura de los embudos de ventas para crear contenido audiovisual con propósito que conecta emocionalmente con tu audiencia y genera conversiones medibles en redes sociales, con especial foco en bienes raíces y turismo.”"
            author="El Equipo Crowned"
            role="Estrategia & Producción Audiovisual · Punta Cana & Santo Domingo"
            videoSrc="https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4?_wi=2"
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="specialties" data-section="specialties">
        <SectionErrorBoundary name="specialties">
          <FeaturesTaggedCards
            tag="Nuestra Especialización"
            title="Especialistas en Real Estate, Agentes, Hoteles & Resorts"
            description="Desarrollamos estrategias audiovisuales de alto rendimiento diseñadas para generar resultados comerciales tangibles: cierres de ventas inmobiliarias y reservas directas de hospedaje."
            primaryButton={{
              text: "Agendar Asesoría Especializada",
              href: "#contact",
            }}
            items={[
              {
                tag: "Bienes Raíces & Agentes",
                title: "Agentes & Agencias Inmobiliarias (Real Estate)",
                description: "Producimos recorridos cinematográficos de villas, apartamentos y proyectos en plano. Diseñamos guiones estratégicos para agentes de bienes raíces y embudos en redes sociales que captan compradores e inversionistas calificados.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4?_wi=1",
                primaryButton: {
                  text: "Estrategia Real Estate",
                  href: "#contact",
                },
              },
              {
                tag: "Hoteles & Resorts",
                title: "Hoteles, Resorts & Experiencias de Hospedaje",
                description: "Producimos piezas audiovisuales de alta estética que destacan suites, experiencias gastronómicas y amenidades. Dirigimos el tráfico directamente al motor de reservas del hotel, reduciendo comisiones a intermediarios.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4?_wi=1",
                primaryButton: {
                  text: "Estrategia Hoteles & Resorts",
                  href: "#contact",
                },
              },
              {
                tag: "Resultados Comerciales",
                title: "Embudos de Ventas & Retorno de Inversión",
                description: "Unimos la dirección creativa con ganchos de retención y llamados a la acción estratégicos. Convertimos interacciones en Instagram y TikTok en consultas directas, citas de venta y compras confirmadas.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?_wi=1",
                primaryButton: {
                  text: "Multiplicar Ventas Comerciales",
                  href: "#contact",
                },
              },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="services" data-section="services">
        <SectionErrorBoundary name="services">
          <FeaturesDetailedCards
            tag="Nuestros Servicios Estratégicos"
            title="Creación de Contenido con Propósito, Storytelling & Embudos de Ventas"
            description="Llevamos tu marca al siguiente nivel uniendo la producción audiovisual de estética cinematográfica con estrategias de conversión comercial y gestión activa en redes sociales."
            primaryButton={{
              text: "Solicitar Propuesta",
              href: "#contact",
            }}
            items={[
              {
                title: "Creación de Contenido con Propósito & Video Reels",
                description: "Producimos videos cinematográficos y piezas visuales con mensajes claros que capturan la atención, comunican el valor diferencial de tu marca y detienen el scroll en Instagram y TikTok.",
                tags: ["Contenido con Propósito", "Producción Audiovisual", "Reels & TikTok", "Diseño Visual"],
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/amenities/pool.jpg?_wi=2",
              },
              {
                title: "Storytelling Estratégico & Branding Narrativo",
                description: "Desarrollamos la narrativa visual y verbal de tu marca. Conectamos con las emociones y deseos de tu audiencia ideal para construir confianza, autoridad y una comunidad leal.",
                tags: ["Storytelling", "Narrativa de Marca", "Posicionamiento", "Conexión Emocional"],
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?_wi=2",
              },
              {
                title: "Embudos de Ventas & Conversión Digital",
                description: "Estructuramos el camino completo del prospecto: desde la atracción con contenido viral hasta la conversión mediante llamadas a la acción, mensajes directos (DM) y secuencias de venta.",
                tags: ["Embudos de Ventas", "Conversión Directa", "Captación de Clientes", "Estrategia Comercial"],
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4?_wi=2",
              },
              {
                title: "Gestión Integral de Redes Sociales (Instagram & SMM)",
                description: "Administración completa de tu presencia digital: diseño del calendario editorial, redacción de copies persuasivos, publicación de historias interactivas, community management y analítica.",
                tags: ["Gestión de Redes Sociales", "Instagram SMM", "Calendario Editorial", "Community Management"],
                videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4?_wi=3",
              },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="instagram" data-section="instagram">
        <SectionErrorBoundary name="instagram">
          <InstagramShowcase />
        </SectionErrorBoundary>
      </div>

      <div id="videos" data-section="videos">
        <SectionErrorBoundary name="videos">
          <FeaturesMediaCarousel
            tag="Formatos Audiovisuales"
            title="Contenido con Propósito que Detiene el Scroll"
            description="Piezas de video diseñadas estratégicamente para transmitir autoridad, conectar mediante storytelling y activar conversiones en redes sociales."
            primaryButton={{
              text: "Explorar Portafolio",
              href: "#portfolio",
            }}
            items={[
              {
                title: "Agentes Inmobiliarios & Real Estate",
                description: "Tours cinematográficos de propiedades con narración persuasiva para acelerar el cierre de ventas.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4?_wi=2",
                buttonIcon: "Compass",
                buttonHref: "#portfolio",
              },
              {
                title: "Resorts & Hoteles en Punta Cana",
                description: "Videos envolventes que combinan narrativa aspiracional y experiencias de lujo para incentivar reservas.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4?_wi=3",
                buttonIcon: "Sun",
                buttonHref: "#portfolio",
              },
              {
                title: "Exhibición en Concesionarios",
                description: "Presentaciones cinematográficas de vehículos con ángulos dinámicos y ganchos visuales de alta retención.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?_wi=3",
                buttonIcon: "Car",
                buttonHref: "#portfolio",
              },
              {
                title: "Procesos en Talleres Mecánicos",
                description: "Contenido de valor que muestra el trabajo técnico de precisión para generar máxima confianza y citas.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4?_wi=3",
                buttonIcon: "Wrench",
                buttonHref: "#portfolio",
              },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="portfolio" data-section="portfolio">
        <SectionErrorBoundary name="portfolio">
          <FeaturesImageBento
            tag="Portafolio Visual"
            title="Estrategia Visual & Casos de Éxito"
            description="Muestras de nuestra dirección creativa, producción en video y gestión de contenido con propósito para clientes destacados."
            primaryButton={{
              text: "Iniciar Mi Proyecto",
              href: "#contact",
            }}
            items={[
              {
                title: "Agencia Inmobiliaria & Real Estate en Cap Cana",
                description: "Producción audiovisual de alta gama para proyectos inmobiliarios y captación de compradores.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/rooms/oceanpavillion.webp?_wi=2",
              },
              {
                title: "Resorts de Lujo en Punta Cana",
                description: "Producción audiovisual de alta gama para complejos turísticos y suites frente al mar.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/amenities/pool.jpg?_wi=3",
              },
              {
                title: "Showroom & Concesionario de Vehículos",
                description: "Reels de impacto para lanzamientos de autos de lujo e inventario nuevo.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?_wi=4",
              },
              {
                title: "Playas & Vistas Aéreas de Cap Cana",
                description: "Contenido aspiracional de lifestyle playero y villas de vacaciones.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/rooms/gardenvilla.webp?_wi=2",
              },
              {
                title: "Taller Mecánico & Mantenimiento Especializado",
                description: "Demostraciones paso a paso de servicios mecánicos y reparaciones de precisión.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4?_wi=4",
              },
              {
                title: "Excursiones en Catamarán & Bayahíbe",
                description: "Videos de aventuras marítimas y turismo ecológico en aguas turquesas.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/journeys/sailing.webp?_wi=2",
              },
              {
                title: "Auto Detailing & Estética Automotriz",
                description: "Tratamientos cerámicos y embellecimiento de vehículos de alta gama en Santo Domingo.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4?_wi=2",
              },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="results" data-section="results">
        <SectionErrorBoundary name="results">
          <MetricsMediaCards
            tag="Resultados Comprobados"
            title="Embudos de Ventas que Generan Facturación Real"
            description="Estrategias orientadas a retorno sobre inversión y crecimiento sostenido a través de contenido con propósito."
            metrics={[
              {
                value: "+380%",
                title: "Conversión Directa",
                description: "Incremento en consultas inmobiliarias, reservas directas de hotel y ventas generadas.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4?_wi=4",
              },
              {
                value: "4.5x",
                title: "Retorno de Inversión",
                description: "Multiplicación de resultados comerciales en campañas de contenido y embudos de ventas.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?_wi=5",
              },
              {
                value: "+240",
                title: "Clientes Potenciales",
                description: "Inversionistas y huéspedes calificados captados mensualmente mediante llamadas a la acción.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4?_wi=5",
              },
              {
                value: "18M+",
                title: "Alcance Orgánico",
                description: "Visualizaciones acumuladas en contenido audiovisual producido con storytelling estratégico.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4?_wi=3",
              },
              {
                value: "98%",
                title: "Retención de Clientes",
                description: "Marcas, agentes e inmobiliarias que mantienen su gestión continua con Crowned.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4?_wi=2",
              },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="testimonials" data-section="testimonials">
        <SectionErrorBoundary name="testimonials">
          <TestimonialOverlayCards
            tag="Historias de Éxito"
            title="Marcas que Confían en Nuestra Estrategia"
            description="Descubre cómo el contenido con propósito, el storytelling y los embudos de ventas han impulsado el crecimiento de nuestros clientes en bienes raíces, turismo y más."
            testimonials={[
              {
                name: "Lic. Alejandro Sterling",
                role: "Broker Inmobiliario & Director",
                company: "Sterling Real Estate Group",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4?_wi=4",
              },
              {
                name: "Don Gustavo Peralta",
                role: "Director de Operaciones",
                company: "Punta Cana Ocean Resort",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4?_wi=5",
              },
              {
                name: "Ing. Marcos Almonte",
                role: "Gerente de Ventas",
                company: "AutoHaus Concesionario RD",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?_wi=6",
              },
              {
                name: "Lic. Laura Reyes",
                role: "Directora de Marketing",
                company: "Cap Cana Luxury Villas",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/rooms/oceanpavillion.webp?_wi=3",
              },
              {
                name: "Taller AutoTech RD",
                role: "Propietario",
                company: "Taller Mecánico Especializado Santiago",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4?_wi=6",
              },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="social-proof" data-section="social-proof">
        <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
            tag="Marcas Destacadas"
            title="Potenciando Marcas en Redes Sociales"
            description="Transformamos la presencia digital de inmobiliarias, agentes, resorts y empresas líderes con contenido estratégico."
            names={[
              "Sterling Real Estate Group",
              "Punta Cana Ocean Resort",
              "AutoHaus Dominicana",
              "Cap Cana Luxury Villas",
              "Taller Mecánico AutoTech",
              "Bayahíbe Catamarán Tours",
              "Santo Domingo Motors Showroom",
              "Las Terrenas Beach Club",
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="faq" data-section="faq">
        <SectionErrorBoundary name="faq">
          <FaqSplitMedia
            tag="Preguntas Frecuentes"
            title="Resuelve tus Dudas sobre Nuestra Estrategia"
            description="Respuestas claras sobre cómo aplicamos contenido con propósito, storytelling y embudos de ventas en bienes raíces, hoteles y empresas."
            items={[
              {
                question: "¿Cómo ayudan a agentes y agencias de bienes raíces (real estate) a vender más?",
                answer: "Producimos recorridos cinematográficos de propiedades con guiones persuasivos para el agente. Diseñamos embudos de captación en redes sociales que llevan a compradores e inversionistas calificados directamente a tu DM o WhatsApp para agendar visitas de compra.",
              },
              {
                question: "¿De qué manera benefician a hoteles y resorts en la venta de estadías?",
                answer: "Creamos contenido envolvente que resalta las experiencias, suites y gastronomía del resort. Desarrollamos campañas dirigidas a impulsar las reservas directas en la plataforma del hotel, reduciendo la dependencia y comisiones de las OTAs.",
              },
              {
                question: "¿En qué consiste la creación de contenido con propósito?",
                answer: "Diseñamos cada video, imagen y publicación con un objetivo claro: no solo captar atención o acumular reproducciones, sino comunicar el valor diferencial de tu marca, transmitir emociones mediante storytelling y guiar al usuario hacia una acción concreta de compra o reserva.",
              },
              {
                question: "¿Cómo estructuran los embudos de ventas en redes sociales?",
                answer: "Implementamos un proceso de 3 fases: Atracción (contenido dinámico y viral para captar audiencia), Nutrición (storytelling y prueba social para generar confianza) y Conversión (llamados a la acción directos para llevar prospectos a mensajes directos, WhatsApp o formularios).",
              },
              {
                question: "¿Incluyen la gestión completa de Instagram y atención de mensajes?",
                answer: "Sí, nuestro equipo de Community Management administra tu perfil, publica el calendario editorial, monitorea interacciones y atiende consultas por mensaje directo (DM) para no perder ninguna oportunidad de venta.",
              },
            ]}
            videoSrc="https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4?_wi=6"
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="contact" data-section="contact">
        <SectionErrorBoundary name="contact">
          <ContactCta
            tag="¿Listo para Escalar tu Marca?"
            text="Impulsa tu negocio con contenido con propósito, storytelling que conecta y embudos de ventas diseñados para generar resultados reales en redes sociales en Punta Cana y Santo Domingo."
            primaryButton={{
              text: "Agendar por WhatsApp (RD)",
              href: "https://wa.me/18492665501",
            }}
            secondaryButton={{
              text: "Visitar Instagram @crowned.rd",
              href: "https://instagram.com/crowned.rd",
            }}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>
    </>
  );
}

