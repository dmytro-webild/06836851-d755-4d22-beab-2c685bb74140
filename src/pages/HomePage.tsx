import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesDetailedCards from '@/components/sections/features/FeaturesDetailedCards';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import FeaturesMediaCarousel from '@/components/sections/features/FeaturesMediaCarousel';
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
            tag="Turismo RD & Sector Automotriz en Instagram"
            title="Contenido Audiovisual que"
            titleHighlight="Multiplica tus Ventas"
            description="Creamos videos de alto impacto de resorts y playas en República Dominicana, contenido para concesionarios y talleres mecánicos, y gestionamos tus redes sociales para convertir vistas en clientes."
            primaryButton={{
              text: "Agendar Sesión Estratégica",
              href: "#contact",
            }}
            note="Estrategia, producción y gestión enfocadas en facturación real."
            badgeText="Estrategia & Producción Crowned RD"
            textAnimation="fade-blur"
            videos={[
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4",
                name: "Resorts & Playas en Punta Cana",
                followers: "+4.8M Reproducciones",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/amenities/pool.jpg",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4",
                name: "Concesionarios & Showrooms de Lujo",
                followers: "+3.2M Interacciones",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/features/feature1.webp",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4",
                name: "Villas de Playa & Vistas Aéreas en Cap Cana",
                followers: "+5.1M Alcance Único",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/rooms/oceanpavillion.webp",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4",
                name: "Talleres Mecánicos & Servicio Especializado",
                followers: "+2.9M Visualizaciones",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/features/features2.webp",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4",
                name: "Excursiones en Catamarán & Bayahíbe",
                followers: "4.8x Conversión Directa",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/journeys/sailing.webp",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?v=2",
                name: "Taller & Detallado Automotriz en Santo Domingo",
                followers: "+6.5M Impresiones",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/features/feature1.webp",
              },
            ]}
          />
        </SectionErrorBoundary>
      </div>

      <div id="about" data-section="about">
        <SectionErrorBoundary name="about">
          <AboutTestimonial
            tag="Filosofía Crowned Dominicana"
            quote="Posicionamos las mejores marcas del país combinando la belleza paradisíaca de los resorts y playas de República Dominicana con la solidez visual de concesionarios y talleres mecánicos, todo gestionado mediante estrategias de Instagram diseñadas para llenar habitaciones y agendar citas."
            author="El Equipo Crowned"
            role="Gestión de Redes Sociales & Producción Audiovisual Especializada"
            videoSrc="https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4"
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="services" data-section="services">
        <SectionErrorBoundary name="services">
          <FeaturesDetailedCards
            tag="Nuestros Servicios Especializados"
            title="Gestión de Instagram & Producción para Turismo y Sector Automotriz"
            description="Llevamos tu marca al siguiente nivel uniendo la producción audiovisual de estética cinematográfica con una administración activa de canales en Instagram y TikTok."
            primaryButton={{
              text: "Solicitar Propuesta",
              href: "#contact",
            }}
            items={[
              {
                title: "Turismo & Resorts en República Dominicana",
                description: "Estrategia visual y Reels virales para resorts 5 estrellas, villas de lujo, hoteles boutique y playas en Punta Cana, Cap Cana, Las Terrenas y Bayahíbe. Resaltamos experiencias caribeñas exclusivas para atraer viajeros nacionales e internacionales.",
                tags: ["Punta Cana", "Resorts de Lujo", "Playas RD", "Turismo"],
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/amenities/pool.jpg",
              },
              {
                title: "Concesionarios de Vehículos & Showrooms",
                description: "Creación de contenido para concesionarios de vehículos nuevos y seminuevos. Destacamos lanzamientos, recorridos 360°, pruebas de manejo y promociones estratégicas que generan solicitudes directas por mensaje privado.",
                tags: ["Concesionarios", "Showrooms", "Ventas de Autos", "Reels Automotrices"],
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4",
              },
              {
                title: "Talleres Mecánicos & Centros de Mantenimiento",
                description: "Mostramos la capacidad técnica, diagnósticos computarizados y antes/después de reparación mecánica y auto detailing. Generamos máxima credibilidad para agendar citas de servicio semanalmente.",
                tags: ["Talleres Mecánicos", "Mantenimiento Preventivo", "Auto Detailing", "Citas por DM"],
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4",
              },
              {
                title: "Gestión Integral de Redes Sociales (Instagram SMM)",
                description: "Administración completa de tu perfil de Instagram: diseño del calendario editorial, redacción de copies persuasivos, publicación de stories interactivas, gestión de mensajes y analítica para optimizar conversiones.",
                tags: ["Instagram SMM", "Calendario Editorial", "Community Management", "Embudos de Ventas"],
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
            title="Contenido que Destaca en el Feed de Instagram"
            description="Piezas de video diseñadas estratégicamente para detener el scroll, transmitir autoridad y activar reservas en resorts y visitas a concesionarios y talleres mecánicos."
            primaryButton={{
              text: "Explorar Portafolio",
              href: "#portfolio",
            }}
            items={[
              {
                title: "Resorts & Hoteles en Punta Cana",
                description: "Videos envolventes que muestran piscinas infinitas, suites de lujo y gastronomía de clase mundial.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4",
                buttonIcon: "Compass",
                buttonHref: "#portfolio",
              },
              {
                title: "Exhibición en Concesionarios",
                description: "Presentaciones cinematográficas de vehículos con ángulos dinámicos y sonido envolvente.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4",
                buttonIcon: "Car",
                buttonHref: "#portfolio",
              },
              {
                title: "Playas Paradisiacas & Cap Cana",
                description: "Tomas aéreas y estilo de vida costero en las playas más icónicas de República Dominicana.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4",
                buttonIcon: "Sun",
                buttonHref: "#portfolio",
              },
              {
                title: "Procesos en Talleres Mecánicos",
                description: "Contenido detallado de mecánica especializada, afinación y acabados de auto detailing.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4",
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
            title="Proyectos de Turismo & Sector Automotriz"
            description="Muestras de nuestra dirección creativa, producción en video y gestión de redes para clientes destacados en República Dominicana."
            primaryButton={{
              text: "Iniciar Mi Proyecto",
              href: "#contact",
            }}
            items={[
              {
                title: "Resorts de Lujo en Punta Cana",
                description: "Producción audiovisual de alta gama para complejos turísticos y suites frente al mar.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/amenities/pool.jpg",
              },
              {
                title: "Showroom & Concesionario de Vehículos",
                description: "Reels de impacto para lanzamientos de autos de lujo e inventario nuevo.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4",
              },
              {
                title: "Playas & Vistas Aéreas de Cap Cana",
                description: "Contenido aspiracional de lifestyle playero y villas de vacaciones.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/rooms/oceanpavillion.webp",
              },
              {
                title: "Taller Mecánico & Mantenimiento Especializado",
                description: "Demostraciones paso a paso de servicios mecánicos y reparaciones de precisión.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4",
              },
              {
                title: "Excursiones en Catamarán & Bayahíbe",
                description: "Videos de aventuras marítimas y turismo ecológico en aguas turquesas.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/journeys/sailing.webp",
              },
              {
                title: "Villas de Playa & Hospitalidad",
                description: "Tours guiados para alquileres vacacionales y clubes de playa privados.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/rooms/gardenvilla.webp",
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
            title="Métricas en Instagram & Ventas Directas"
            description="Estrategias orientadas a retorno sobre inversión para empresas turísticas y automotrices en República Dominicana."
            metrics={[
              {
                value: "+380%",
                title: "Reservas en Resorts",
                description: "Incremento en consultas y reservas directas para hoteles y villas en Punta Cana.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4",
              },
              {
                value: "4.5x",
                title: "Pruebas de Manejo",
                description: "Aumento en citas de test drive agendadas por DM para concesionarios automotrices.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4",
              },
              {
                value: "+240",
                title: "Citas en Taller Mecánico",
                description: "Clientes nuevos recibidos mensualmente gracias a reels de mantenimiento y diagnóstico.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4",
              },
              {
                value: "18M+",
                title: "Alcance en Instagram",
                description: "Visualizaciones orgánicas acumuladas en contenido de playas, resorts y autos en RD.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4",
              },
              {
                value: "98%",
                title: "Fidelización de Clientes",
                description: "Marcas del sector turísticos y automotriz que mantienen su gestión de redes con Crowned.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4",
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
            description="Líderes del turismo en República Dominicana y del sector automotriz que confían en Crowned."
            testimonials={[
              {
                name: "Don Gustavo Peralta",
                role: "Director de Operaciones",
                company: "Punta Cana Ocean Resort",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4",
              },
              {
                name: "Ing. Marcos Almonte",
                role: "Gerente de Ventas",
                company: "AutoHaus Concesionario RD",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4",
              },
              {
                name: "Lic. Laura Reyes",
                role: "Directora de Marketing",
                company: "Cap Cana Luxury Villas",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4",
              },
              {
                name: "Taller AutoTech RD",
                role: "Propietario",
                company: "Taller Mecánico Especializado Santiago",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4",
              },
              {
                name: "Carlos Manuel Cabrera",
                role: "Fundador",
                company: "Bayahíbe Excursions & Catamarán",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4",
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
            title="Potenciando el Turismo RD & Sector Automotriz"
            description="Gestionamos y posicionamos marcas líderes en redes sociales."
            names={[
              "Punta Cana Ocean Resort",
              "AutoHaus Dominicana",
              "Cap Cana Luxury Villas",
              "Taller Mecánico AutoTech",
              "Bayahíbe Catamarán Tours",
              "Santo Domingo Motors Showroom",
              "Las Terrenas Beach Club",
              "Apex Performance Workshop",
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
            description="Respuestas claras sobre nuestra producción audiovisual y gestión de Instagram para turismo y autos."
            items={[
              {
                question: "¿Cómo abarca Crowned la gestión de Instagram para resorts y turismo?",
                answer: "Realizamos grabaciones periódicas en los resorts, villas y playas de República Dominicana (Punta Cana, Cap Cana, Bayahíbe, etc.), editamos Reels con música en tendencia y ganchos visuales de alta retención, programamos el contenido y gestionamos la interacción con viajeros interesados.",
              },
              {
                question: "¿Qué tipo de contenido crean para concesionarios y talleres mecánicos?",
                answer: "Para concesionarios, grabamos exhibiciones de autos en showroom, pruebas de manejo y entregas de vehículos. Para talleres mecánicos, mostramos el trabajo técnico, cambios de piezas, diagnósticos y antes/después de mantenimiento para generar confianza y llamadas de clientes.",
              },
              {
                question: "¿Incluyen la gestión de mensajes directos (DM) y comentarios?",
                answer: "Sí, nuestro equipo de Community Management supervisa tus cuentas de Instagram para responder dudas frecuentes, enviar enlaces de reserva o dirigir prospectos a tu canal de ventas por WhatsApp.",
              },
              {
                question: "¿Cuál es el tiempo de producción e inicio del servicio?",
                answer: "Tras la reunión de planificación estratégica y la toma del contenido inicial en las instalaciones de tu resort, concesionario o taller, lanzamos el primer calendario editorial en menos de 7 a 10 días laborables.",
              },
            ]}
            videoSrc="https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4"
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="contact" data-section="contact">
        <SectionErrorBoundary name="contact">
          <ContactCta
            tag="¿Listo para Escalar tu Marca en RD?"
            text="Si tienes un resort, hotel, villa, concesionario o taller mecánico en República Dominicana, llevamos tu cuenta de Instagram al siguiente nivel con contenido de clase mundial que genera ventas reales."
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
