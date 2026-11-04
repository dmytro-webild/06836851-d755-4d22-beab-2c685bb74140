import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
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
            tag="Agencia de Contenido & Embudos"
            title="Storytelling en Video que"
            titleHighlight="Dispara tus Ventas"
            description="En Crowned creamos contenido audiovisual para redes sociales con propósito. Diseñamos sistemas de Reels, TikToks y embudos que convierten espectadores en clientes leales."
            primaryButton={{
              text: "Agendar Sesión Estratégica",
              href: "#contact",
            }}
            note="Estrategias de video personalizadas para escalar marcas y creadores"
            badgeText="Producción Crowned"
            textAnimation="fade-blur"
            videos={[
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-amara.mp4?_wi=1",
                name: "@crowned.studio",
                followers: "+1.2M Reproducciones",
                imageSrc: "http://img.b2bpic.net/free-photo/studio-lighting-isolated-white_93675-131426.jpg",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-chloe.mp4?_wi=1",
                name: "Embudo E-Commerce",
                followers: "+340K Ventas Generadas",
                imageSrc: "http://img.b2bpic.net/free-photo/businessman-using-his-mobile-phone_53876-176729.jpg",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-elena.mp4?_wi=1",
                name: "Brand Storytelling",
                followers: "4.8x ROI en Redes",
                imageSrc: "http://img.b2bpic.net/free-photo/portrait-fitness-influencer_23-2151564843.jpg",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-isla.mp4?_wi=1",
                name: "Crecimiento Orgánico",
                followers: "+1.1M Interacciones",
                imageSrc: "http://img.b2bpic.net/free-photo/silhouette-man-gym_23-2148024305.jpg",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-zara.mp4?_wi=1",
                name: "Estrategia Reel Viral",
                followers: "+890K Alcance Único",
                imageSrc: "http://img.b2bpic.net/free-photo/top-view-elegant-plates-table_23-2148517973.jpg",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-nadia.mp4?_wi=1",
                name: "Conversión High-Ticket",
                followers: "+5.2M Impresiones",
                imageSrc: "http://img.b2bpic.net/free-photo/colleagues-preparing-business-strategies_482257-120467.jpg",
              },
            ]}
          />
        </SectionErrorBoundary>
      </div>

      <div id="about" data-section="about">
        <SectionErrorBoundary name="about">
          <AboutTestimonial
            tag="Nuestra Filosofía"
            quote="En un entorno saturado de ruido digital, Crowned construye la corona. El contenido no es solo publicar posts; es la infraestructura estratégica de ingresos y autoridad para tu marca."
            author="El Equipo Crowned"
            role="Estrategas de Video & Conversión"
            videoSrc="https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4"
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="videos" data-section="videos">
        <SectionErrorBoundary name="videos">
          <FeaturesMediaCarousel
            tag="Formatos de Alto Rendimiento"
            title="Producción de Video Diseñada para Convertir"
            description="Reels, Shorts y contenido vertical optimizados para captar la atención en los primeros 3 segundos y retener al espectador hasta la llamada a la acción."
            primaryButton={{
              text: "Ver Portafolio",
              href: "#portfolio",
            }}
            items={[
              {
                title: "Reels de Retención Masiva",
                description: "Edición dinámica con hooks visuales y narrativa envolvente.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?_wi=1",
                buttonIcon: "Play",
                buttonHref: "#portfolio",
              },
              {
                title: "Storytelling de Marca & Venta",
                description: "Videos estructurados para transmitir valor e impulsar compras.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-amara.mp4?_wi=2",
                buttonIcon: "TrendingUp",
                buttonHref: "#portfolio",
              },
              {
                title: "Embudos de Contenido Orgánico",
                description: "Sistemas de contenido en secuencia que califican prospectos.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/hero/hero.mp4?_wi=1",
                buttonIcon: "Target",
                buttonHref: "#portfolio",
              },
              {
                title: "Anuncios en Video de Alto Impacto",
                description: "Piezas publicitarias optimizadas para escalar campañas pagadas.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4",
                buttonIcon: "Zap",
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
            tag="Portafolio de Redes"
            title="Estrategias de Video & Casos de Éxito"
            description="Explora nuestro flujo visual y los sistemas de contenido que impulsan a marcas líderes en Instagram y TikTok."
            primaryButton={{
              text: "Iniciar Proyecto",
              href: "#contact",
            }}
            items={[
              {
                title: "Cinemática de Marca",
                description: "Narrativa visual de alta gama y posicionamiento de autoridad.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-amara.mp4?_wi=3",
              },
              {
                title: "Crecimiento en Instagram Reels",
                description: "Hook inicial, ritmo acelerado y call-to-action efectivo.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-chloe.mp4?_wi=2",
              },
              {
                title: "Guiones con Propósito",
                description: "Copywriting enfocado en la psicología del comprador.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-elena.mp4?_wi=2",
              },
              {
                title: "Edición Dinámica & Efectos",
                description: "Transiciones fluidas y diseño sonoro envolvente.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?_wi=2",
              },
              {
                title: "Campañas de Estilo de Vida",
                description: "Conexión emocional y estética sofisticada.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-isla.mp4?_wi=2",
              },
              {
                title: "Embudos de Retención",
                description: "Optimización de embudos de ventas en video.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-zara.mp4?_wi=2",
              },
              {
                title: "Producción & Dirección",
                description: "Calidad de producción profesional sin fricción.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-nadia.mp4?_wi=2",
              },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="results" data-section="results">
        <SectionErrorBoundary name="results">
          <MetricsMediaCards
            tag="Resultados Probados"
            title="Métricas Reales en Redes y Conversión"
            description="Unimos creatividad estética con analítica rigurosa para generar impacto comercial en cada cliente."
            metrics={[
              {
                value: "+350%",
                title: "Incremento en Ventas",
                description: "Promedio de crecimiento en ventas para clientes con embudo de contenido.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?_wi=3",
              },
              {
                value: "4.8x",
                title: "Mayor Engagement",
                description: "Aumento de interacciones cualificadas en Instagram y TikTok.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-chloe.mp4?_wi=3",
              },
              {
                value: "24h",
                title: "Velocidad de Entrega",
                description: "Flujo continuo de producción y edición para publicaciones diarias.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/hero/hero.mp4?_wi=2",
              },
              {
                value: "98%",
                title: "Retención de Clientes",
                description: "Relaciones estratégicas a largo plazo basadas en retorno directo.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-zara.mp4?_wi=3",
              },
              {
                value: "15M+",
                title: "Visualizaciones Totales",
                description: "Reproducciones acumuladas en canales gestionados por Crowned.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-nadia.mp4?_wi=3",
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
            description="Marcas y fundadores que confiaron en nuestra metodología para transformar sus redes en canales de ingresos."
            testimonials={[
              {
                name: "Alex Rivet",
                role: "CEO",
                company: "Vantage Group",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-amara.mp4?_wi=4",
              },
              {
                name: "Sofía Miller",
                role: "Directora de Marketing",
                company: "LuxBrand Co.",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-chloe.mp4?_wi=4",
              },
              {
                name: "Jonah K.",
                role: "Fundador",
                company: "Rise Apparel",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-elena.mp4?_wi=3",
              },
              {
                name: "Elena M.",
                role: "CMO",
                company: "Flow Digital",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-isla.mp4?_wi=3",
              },
              {
                name: "Marcos T.",
                role: "Fundador",
                company: "Sprint Health",
                rating: 5,
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-zara.mp4?_wi=4",
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
            title="Creando Líderes en Redes Sociales"
            description="Trabajamos junto a empresas y creadores que marcan tendencia en sus industrias."
            names={[
              "Lumina",
              "Apex Studio",
              "Nova Agency",
              "Stellar Media",
              "Orbit Funnels",
              "Flux Commerce",
              "Zenith Luxury",
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="faq" data-section="faq">
        <SectionErrorBoundary name="faq">
          <FaqSplitMedia
            tag="Preguntas Frecuentes"
            title="Todo lo que Necesitas Saber"
            description="Transparencia, claridad y procesos ágiles desde el primer día."
            items={[
              {
                question: "¿Cuál es el tiempo de inicio para nuevos clientes?",
                answer: "Diseñamos la estrategia, los guiones y comenzamos las producciones de video en menos de 10 días laborables.",
              },
              {
                question: "¿Solo crean contenido en formato video?",
                answer: "Nos especializamos en video corto (Reels, TikToks, Shorts) y en el diseño del embudo estratégico completo para convertir esas vistas en ventas reales.",
              },
              {
                question: "¿Cómo miden el éxito de las campañas?",
                answer: "Analizamos retención de audiencia, tasa de interacción, leads cualificados y el retorno de inversión comercial directo.",
              },
              {
                question: "¿Qué necesita aportar mi empresa?",
                answer: "Nosotros nos encargamos del análisis de mercado, la estrategia de guiones, edición y optimización. Tu equipo solo aprueba el plan o participa en las grabaciones clave.",
              },
            ]}
            videoSrc="https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4"
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="contact" data-section="contact">
        <SectionErrorBoundary name="contact">
          <ContactCta
            tag="¿Listo para Escalar tu Marca?"
            text="Tu negocio merece la estrategia, elegancia y resultados de Crowned. Hablemos hoy y construyamos tu infraestructura de contenido."
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
