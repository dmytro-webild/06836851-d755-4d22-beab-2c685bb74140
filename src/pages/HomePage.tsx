import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesDetailedCards from '@/components/sections/features/FeaturesDetailedCards';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import FeaturesMediaCarousel from '@/components/sections/features/FeaturesMediaCarousel';
import HeroBillboardCreator from '@/components/sections/hero/HeroBillboardCreator';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
      <div id="hero" data-section="hero">
        <SectionErrorBoundary name="hero">
          <HeroBillboardCreator
            tag="Creación de Contenido & Redes Sociales"
            title="Contenido Estratégico que"
            titleHighlight="Escala tus Ventas"
            description="Creamos contenido audiovisual de alto impacto y gestionamos tus redes sociales para marcas de Real Estate, Recorridos Inmobiliarios, Turismo y Estética Automotriz."
            primaryButton={{
              text: "Agendar Sesión Estratégica",
              href: "#contact",
            }}
            note="Estrategia y gestión enfocadas en facturación real."
            badgeText="Estrategia & Producción Crowned"
            textAnimation="fade-blur"
            videos={[
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4",
                name: "Real Estate & Propiedades",
                followers: "+2.4M Reproducciones",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-1.webp",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4",
                name: "Recorridos de Casas & Villas",
                followers: "+1.8M Interacciones",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/properties/property1.webp",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4",
                name: "Empresas de Turismo & Hoteles",
                followers: "+3.5M Alcance Único",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/luxury-travel-agency/destination/destination1.webp",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4",
                name: "Estética Automotriz & Detailing",
                followers: "+4.2M Visualizaciones",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/features/feature1.webp",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4",
                name: "Tratamientos & Auto Styling",
                followers: "5.4x Conversión",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/features/features2.webp",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4?v=2",
                name: "Villas & Residencias Exclusivas",
                followers: "+6.8M Impresiones",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-2.webp",
              },
            ]}
          />
        </SectionErrorBoundary>
      </div>

      <div id="about" data-section="about">
        <SectionErrorBoundary name="about">
          <AboutTestimonial
            tag="Filosofía Crowned"
            quote="Construimos la corona de tu marca combinando estrategia creativa de alta gama, Reels de alto rendimiento y gestión integral de redes para impulsar tus ventas en inmobiliarias, turismo y estética automotriz."
            author="El Equipo Crowned"
            role="Creación de Contenido & Gestión Integral de Redes"
            videoSrc="https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4"
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="services" data-section="services">
        <SectionErrorBoundary name="services">
          <FeaturesDetailedCards
            tag="Nuestros Servicios Principales"
            title="Creación de Contenido Estratégico & Gestión de Redes"
            description="Impulsamos las ventas de tu marca uniendo estética visual impecable, producción multimedia de nivel superior y administración integral de canales sociales."
            primaryButton={{
              text: "Solicitar Propuesta",
              href: "#contact",
            }}
            items={[
              {
                title: "Estrategia & Dirección Creativa Inmobiliaria y Turística",
                description: "Diseño de concepto visual, líneas editoriales e identidad de marca para redes sociales. Creamos contenido estético de alto impacto diseñado para proyectar autoridad en bienes raíces, arquitectura y viajes.",
                tags: ["Real Estate", "Turismo", "Dirección Creativa", "Contenido Premium"],
                imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-1.webp",
              },
              {
                title: "Gestión Integral de Redes Sociales (SMM)",
                description: "Administración completa de Instagram, TikTok y canales principales. Diseñamos la estrategia mensual, planificamos el calendario editorial, redactamos copies persuasivos y optimizamos continuamente orientados a ventas.",
                tags: ["Estrategia de Redes", "Calendario Editorial", "Community Management", "Growth & Conversión"],
                videoSrc: "https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4",
              },
              {
                title: "Producción de Video & Recorridos en Short-Form (Reels & TikToks)",
                description: "Creación de videos dinámicos y tours en video con ganchos visuales en los primeros 3 segundos y edición profesional para maximizar retención y captación de clientes.",
                tags: ["Recorridos de Casas", "Auto Detailing", "Hooks de Retención", "Edición Dinámica"],
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4",
              },
              {
                title: "Embudos de Contenido & Conversión Directa",
                description: "Conectamos tu contenido visual y tus recorridos estratégicos con rutas de reserva y compra claras para transformar seguidores en clientes en bienes raíces, turismo y talleres de detallado.",
                tags: ["Embudos de Ventas", "Atracción de Leads", "ROI Medible", "Optimización de Perfil"],
                videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4",
              },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="videos" data-section="videos">
        <SectionErrorBoundary name="videos">
          <FeaturesMediaCarousel
            tag="Formatos Audiovisuales Especializados"
            title="Sectores de Alto Rendimiento Visual"
            description="Piezas en video optimizadas para detener el scroll, transmitir autoridad instantánea y activar decisiones de compra en bienes raíces, recorridos de casas, turismo y estética para autos."
            primaryButton={{
              text: "Explorar Portafolio",
              href: "#portfolio",
            }}
            items={[
              {
                title: "Real Estate & Bienes Raíces",
                description: "Videos cinematográficos de propiedades exclusivas que destacan valor arquitectónico y aceleran cierres.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4",
                buttonIcon: "Home",
                buttonHref: "#portfolio",
              },
              {
                title: "Recorridos & Tours de Casas",
                description: "Recorridos dinámicos y envolventes que muestran cada detalle con elegancia y ritmo acelerado.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4",
                buttonIcon: "Play",
                buttonHref: "#portfolio",
              },
              {
                title: "Empresas de Turismo & Hotelería",
                description: "Experiencias de viaje y conceptos de hospitalidad grabados con enfoque aspiracional para captar reservas.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4",
                buttonIcon: "Compass",
                buttonHref: "#portfolio",
              },
              {
                title: "Estética Automotriz & Auto Detailing",
                description: "Producción audiovisual hiperdetallada que resalta tratamientos cerámicos, pulido y acabados impecables.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4",
                buttonIcon: "Car",
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
            tag="Portafolio Visual & Sectores"
            title="Casos de Éxito & Contenido Estratégico"
            description="Muestras de nuestra dirección creativa, producción en video y gestión de redes para inmobiliarias, turismo y estética automotriz."
            primaryButton={{
              text: "Iniciar Mi Proyecto",
              href: "#contact",
            }}
            items={[
              {
                title: "Real Estate & Bienes Raíces",
                description: "Presentación cinematográfica de residencias de lujo y desarrollos inmobiliarios.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-1.webp",
              },
              {
                title: "Recorridos & Tours de Casas",
                description: "Reels inmersivos con ganchos visuales que destacan espacios y acabados.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4",
              },
              {
                title: "Turismo & Experiencias de Viaje",
                description: "Contenido aspiracional para resorts, agencias de viajes y destinos de lujo.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/luxury-travel-agency/destination/destination1.webp",
              },
              {
                title: "Estética Automotriz & Auto Detailing",
                description: "Showcases impactantes con edición dinámica para estudios de auto detailing.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4",
              },
              {
                title: "Tours Virtuales de Arquitectura",
                description: "Recorridos paso a paso estructurados para proyectar el estilo de vida ideal.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4",
              },
              {
                title: "Promoción Turística & Hospitalidad",
                description: "Producciones de alta calidad para captar viajeros y clientes internacionales.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/luxury-travel-agency/destination/destination3.webp",
              },
              {
                title: "Transformación & Detallado de Autos",
                description: "Demostraciones de procesos de pulido, protección y acabados en alta definición.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4",
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
            title="Métricas de Impacto en Redes y Ventas Directas"
            description="Combinamos producción audiovisual, contenido estratégico y gestión analítica de redes sociales para convertir el alcance en facturación."
            metrics={[
              {
                value: "+350%",
                title: "Ventas Inmobiliarias",
                description: "Aumento en consultas cualificadas para agencias de real estate y desarrolladoras.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4",
              },
              {
                value: "4.8x",
                title: "Visualizaciones en Recorridos",
                description: "Mayor retención en reels de tours de casas y arquitectura de lujo.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4",
              },
              {
                value: "100%",
                title: "Captación Turística",
                description: "Estrategia audiovisual efectiva para hoteles boutique y empresas de turismo.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4",
              },
              {
                value: "98%",
                title: "Reservas en Estética Automotriz",
                description: "Negocios de auto detailing que multiplican sus citas con videos de alto impacto.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4",
              },
              {
                value: "15M+",
                title: "Impresiones en Redes",
                description: "Alcance masivo logrado en sectores de bienes raíces, turismo y detailing.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4",
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
            title="Lo que Dicen Nuestros Clientes"
            description="Líderes de bienes raíces, turismos y estética automotriz que confían su gestión de redes sociales en Crowned."
            testimonials={[
              {
                name: "Carlos Mendoza",
                role: "Director Inmobiliario",
                company: "Marbella Real Estate",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4",
              },
              {
                name: "Sofía Valenzuela",
                role: "Agente de Bienes Raíces",
                company: "Habitat Property Group",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4",
              },
              {
                name: "Javier Morales",
                role: "Fundador",
                company: "Aura Luxury Travel & Hotels",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4",
              },
              {
                name: "Diego Fernández",
                role: "Propietario",
                company: "Apex Auto Detailing",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4",
              },
              {
                name: "Mateo Rossi",
                role: "Director de Marketing",
                company: "Vanguard Detailing & Styling",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4",
              },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="social-proof" data-section="social-proof">
        <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
            tag="Confían en Crowned"
            title="Potenciando Marcas en Redes Sociales"
            description="Impulsamos la imagen, el contenido y la facturación de empresas líderes."
            names={[
              "Marbella Estates",
              "Habitat Luxury",
              "Aura Travel",
              "Apex Auto Detailing",
              "Vanguard Property",
              "Grand Hotel Collection",
              "Zenith Motors",
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="faq" data-section="faq">
        <SectionErrorBoundary name="faq">
          <FaqSplitMedia
            tag="Preguntas Frecuentes"
            title="Resuelve tus Dudas sobre el Servicio"
            description="Claridad, profesionalismo y procesos estructurados desde el primer momento."
            items={[
              {
                question: "¿Qué abarca la gestión integral de redes sociales?",
                answer: "Nos encargamos de absolutamente todo: diseño de la estrategia de contenido, planificación del calendario editorial, producción de video de alta gama (real estate, recorridos, turismo y estética automotriz), redacción de copies de conversión, programación de publicaciones y seguimiento analítico orientado a ventas.",
              },
              {
                question: "¿Producen contenido en las ubicaciones de mis propiedades o taller?",
                answer: "Sí, coordinamos producciones audiovisuales directas o trabajamos con tus tomas en bruto para editarlas con ganchos de alta retención, colorización profesional y ritmo cinematográfico adaptado a Reels y TikTok.",
              },
              {
                question: "¿Cómo garantizan que el contenido genera ventas y no solo vistas?",
                answer: "Diseñamos cada video y publicación con un objetivo comercial específico. Incorporamos ganchos psicológicos, llamadas a la acción claras, optimización del perfil y embudos orientados a agendar visitas, consultas o reservas.",
              },
              {
                question: "¿Cuánto tiempo toma poner en marcha el servicio?",
                answer: "Tras la sesión estratégica de inicio, estructuramos la línea editorial y realizamos las primeras producciones de contenido y video en menos de 10 días laborables para comenzar a publicar sin demora.",
              },
            ]}
            videoSrc="https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4"
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="contact" data-section="contact">
        <SectionErrorBoundary name="contact">
          <ContactCta
            tag="¿Listo para Escalar tu Marca?"
            text="Tu negocio merece una identidad visual impecable y una gestión de redes sociales totalmente enfocada en generar ventas. Hablemos hoy y construyamos la corona de tu marca."
            primaryButton={{
              text: "Agendar Sesión Estratégica",
              href: "#",
            }}
            secondaryButton={{
              text: "Ver Portafolio en PDF",
              href: "#",
            }}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>
    </>
  );
}
