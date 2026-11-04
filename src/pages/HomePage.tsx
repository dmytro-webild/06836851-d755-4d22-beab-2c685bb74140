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
            tag="Creación de Contenido & Gestión de Redes"
            title="Contenido Estratégico & Video que"
            titleHighlight="Impulsa tus Ventas"
            description="En Crowned transformamos la presencia de tu marca en redes sociales. Combinamos creación de contenido audiovisual de alto impacto, videos en tendencia y gestión integral de redes sociales enfocada en convertir seguidores en clientes."
            primaryButton={{
              text: "Agendar Sesión Estratégica",
              href: "#contact",
            }}
            note="Creación de contenido estratégico y gestión integral de redes diseñadas para generar ingresos reales."
            badgeText="Estrategia & Producción Crowned"
            textAnimation="fade-blur"
            videos={[
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-amara.mp4?_wi=1",
                name: "Gestión Integral Instagram",
                followers: "+1.2M Reproducciones",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/features/feature-1.webp?_wi=1",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-chloe.mp4?_wi=1",
                name: "Estrategia & Campañas",
                followers: "+340K Ventas Generadas",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/product-1.webp?_wi=1",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-elena.mp4?_wi=1",
                name: "Storytelling Visual",
                followers: "4.8x ROI en Redes",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/features/feature-2.webp?_wi=1",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-isla.mp4?_wi=1",
                name: "Crecimiento de Redes",
                followers: "+1.1M Interacciones",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/product-2.webp",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-zara.mp4?_wi=1",
                name: "Creación de Contenido Pro",
                followers: "+890K Alcance Único",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/features/feature-3.webp",
              },
              {
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-nadia.mp4?_wi=1",
                name: "Estrategia de Ventas SMM",
                followers: "+5.2M Impresiones",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/product-3.webp",
              },
            ]}
          />
        </SectionErrorBoundary>
      </div>

      <div id="about" data-section="about">
        <SectionErrorBoundary name="about">
          <AboutTestimonial
            tag="Filosofía Crowned"
            quote="En un entorno saturado de ruido digital, Crowned construye la corona de tu marca. El contenido no es solo publicar vídeos o imágenes aisladas; es la combinación de estrategia creativa de alta gama, Reels de alto rendimiento y gestión integral de redes para impulsar tus ventas."
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
                title: "Estrategia & Dirección Creativa de Contenido",
                description: "Diseño de concepto visual, líneas editoriales e identidad de marca para redes sociales. Creamos contenido estético de alto impacto diseñado para proyectar autoridad, captar miradas y elevar el valor percibido de tu negocio.",
                tags: ["Dirección Creativa", "Estrategia de Marca", "Identidad Visual", "Contenido Premium"],
                imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/features/feature-1.webp?_wi=2",
              },
              {
                title: "Gestión Integral de Redes Sociales (SMM)",
                description: "Administración completa de Instagram, TikTok y canales principales. Diseñamos la estrategia mensual, planificamos el calendario editorial, redactamos copies persuasivos, programamos publicaciones y optimizamos continuamente orientados a ventas.",
                tags: ["Estrategia de Redes", "Calendario Editorial", "Community Management", "Growth & Conversión"],
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-amara.mp4?_wi=10",
              },
              {
                title: "Producción de Video Short-Form (Reels & TikToks)",
                description: "Creación de videos dinámicos con narrativa de alto impacto, ganchos visuales en los primeros 3 segundos y edición profesional diseñados para maximizar retención, virabilidad y tracción comercial.",
                tags: ["Reels & TikToks", "Hooks de Retención", "Edición Dinámica", "Anuncios en Video"],
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?_wi=10",
              },
              {
                title: "Embudos de Contenido & Conversión",
                description: "Conectamos tu contenido visual y tus videos estratégicos con rutas de compra claras, landing pages e interacciones guiadas para transformar tráfico en clientes recurrentes.",
                tags: ["Embudos de Ventas", "Atracción de Leads", "ROI Medible", "Optimización de Perfil"],
                videoSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/hero/hero.mp4?_wi=10",
              },
            ]}
            textAnimation="slide-up"
          />
        </SectionErrorBoundary>
      </div>

      <div id="videos" data-section="videos">
        <SectionErrorBoundary name="videos">
          <FeaturesMediaCarousel
            tag="Formatos Audiovisuales"
            title="Contenido & Video Diseñados para Convertir"
            description="Piezas visuales y reels optimizados para detener el scroll, transmitir autoridad instantánea y activar la decisión de compra en tu audiencia."
            primaryButton={{
              text: "Explorar Portafolio",
              href: "#portfolio",
            }}
            items={[
              {
                title: "Reels & TikToks de Retención Masiva",
                description: "Edición dinámica con hooks visuales, ritmo acelerado y narrativa envolvente.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?_wi=1",
                buttonIcon: "Play",
                buttonHref: "#portfolio",
              },
              {
                title: "Storytelling Visual & Contenido de Marca",
                description: "Narrativas en video estructuradas para comunicar la esencia de tu marca e impulsar pedidos.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-amara.mp4?_wi=2",
                buttonIcon: "TrendingUp",
                buttonHref: "#portfolio",
              },
              {
                title: "Gestión Estratégica & Embudos Orgánicos",
                description: "Planificación de contenido en secuencia que educa y cualifica a tus clientes potenciales.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/hero/hero.mp4?_wi=1",
                buttonIcon: "Target",
                buttonHref: "#portfolio",
              },
              {
                title: "Anuncios Visuales de Alto Impacto",
                description: "Combinación de formatos dinámicos y videos optimizados para escalar campañas pautadas.",
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
            tag="Portafolio Visual & Redes"
            title="Casos de Éxito & Contenido Estratégico"
            description="Muestras de nuestra dirección creativa, producción en video y los sistemas de contenido que impulsan las ventas de nuestros clientes."
            primaryButton={{
              text: "Iniciar Mi Proyecto",
              href: "#contact",
            }}
            items={[
              {
                title: "Dirección Creativa & Estilo de Vida",
                description: "Piezas de marca con alta estética y edición cuidada para redes sociales.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/features/feature-1.webp?_wi=3",
              },
              {
                title: "Crecimiento Orgánico en Instagram",
                description: "Hooks de impacto, estética pulida y gestión de comentarios enfocada en conversión.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-chloe.mp4?_wi=2",
              },
              {
                title: "Estrategia Visual de Producto",
                description: "Detalle y elegancia para hacer que cada producto luzca irresistible en feed y tienda.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/product-1.webp?_wi=2",
              },
              {
                title: "Gestión Integral & Copies de Venta",
                description: "Copywriting psicológico y calendario estratégico orientado a generación de leads.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?_wi=2",
              },
              {
                title: "Producción Audiovisual Premium",
                description: "Narrativas visuales que posicionan tu marca en el segmento más alto de tu mercado.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-isla.mp4?_wi=2",
              },
              {
                title: "Posicionamiento de Marca Personal",
                description: "Proyección de autoridad y liderazgo para fundadores y ejecutivos.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/features/feature-2.webp?_wi=2",
              },
              {
                title: "Gestión Completa & Optimización SMM",
                description: "Monitoreo diario, análisis de rendimiento y escalado continúo de ventas.",
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
            tag="Resultados Comprobados"
            title="Métricas de Impacto en Redes y Ventas Directas"
            description="Combinamos producción audiovisual, contenido estratégico y gestión analítica de redes sociales para convertir el alcance en facturación."
            metrics={[
              {
                value: "+350%",
                title: "Crecimiento en Facturación",
                description: "Aumento promedio de ventas tras implementar nuestra gestión integral de redes y estrategia de contenido.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?_wi=3",
              },
              {
                value: "4.8x",
                title: "Mayor Tasa de Interacción",
                description: "Sube el engagement cualificado gracias a creativos profesionales y guiones estratégicos.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-chloe.mp4?_wi=3",
              },
              {
                value: "100%",
                title: "Gestión Llave en Mano",
                description: "Nos encargamos de la producción, edición, redacción de copies y publicación diaria.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/joes-coffee/hero/hero.mp4?_wi=2",
              },
              {
                value: "98%",
                title: "Retención de Clientes",
                description: "Marcas que confían en nuestra gestión continua por su ROI medible y constante.",
                videoSrc: "https://storage.googleapis.com/webild/default/templates/skincare-luxury/influencer-zara.mp4?_wi=3",
              },
              {
                value: "15M+",
                title: "Impresiones Totales",
                description: "Alcance masivo acumulado en cuentas gestionadas bajo el sello Crowned.",
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
            description="Fundadores y marcas que delegaron su contenido y gestión de redes en Crowned para multiplicar sus ingresos."
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
            title="Potenciando Marcas en Redes Sociales"
            description="Impulsamos la imagen, el contenido y la facturación de empresas líderes."
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
            title="Resuelve tus Dudas sobre el Servicio"
            description="Claridad, profesionalismo y procesos estructurados desde el primer momento."
            items={[
              {
                question: "¿Qué abarca la gestión integral de redes sociales?",
                answer: "Nos encargamos de absolutamente todo: diseño de la estrategia de contenido, planificación del calendario editorial, producción de video, diseño visual, redacción de copies de conversión, programación de publicaciones y seguimiento analítico orientado a ventas.",
              },
              {
                question: "¿Qué tipo de contenido producen para las redes sociales?",
                answer: "Nos especializamos en videos de formato corto (Reels, TikToks, Shorts), piezas gráficas de alto impacto, historias interactivas y recursos de marca diseñados para captar la atención y generar conversión.",
              },
              {
                question: "¿Cómo garantizan que el contenido genera ventas y no solo vistas?",
                answer: "Diseñamos cada video y publicación con un objetivo comercial específico. Incorporamos ganchos psicológicos, ofertas claras, optimización del perfil y llamados a la acción estratégicos hacia tus canales de venta.",
              },
              {
                question: "¿Cuánto tiempo toma poner en marcha el servicio?",
                answer: "Tras la sesión estratégica de inicio, estructuramos la línea editorial y realizamos las primeras producciones de contenido y video en menos de 10 días laborables para comenzar a publicar sin demora.",
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
