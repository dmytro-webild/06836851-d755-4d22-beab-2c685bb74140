import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Video,
  Target,
  Sparkles,
  Clapperboard,
  Instagram,
  CheckCircle2,
  Building2,
  MapPin,
  Globe,
  Share2,
  Users,
  Film,
  Camera,
  Clock,
  ChevronRight,
  ChevronLeft,
  Check,
  RotateCcw,
  Maximize2,
  X,
  Volume2,
  VolumeX,
  Layers,
  ArrowRight
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import { sendContactEmail } from "@/lib/api/email";

interface MediaItem {
  id: string;
  title: string;
  client: string;
  category: string;
  format: "vertical" | "horizontal";
  videoSrc?: string;
  imageSrc: string;
  aspect: string;
  stats: string;
  tags: string[];
  description: string;
  featured?: boolean;
}

const mediaGalleryItems: MediaItem[] = [
  {
    id: "v1",
    title: "Tour Inmobiliario Estilo Reel",
    client: "Punta Cana Luxury Real Estate",
    category: "Reels & Shorts (9:16)",
    format: "vertical",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4?_wi=1",
    imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/rooms/oceanpavillion.webp?_wi=1",
    aspect: "aspect-[9/16]",
    stats: "+4.2M Visualizaciones",
    tags: ["Real Estate", "Instagram Reel", "4K Vertical"],
    description: "Recorrido dinámico por villa de lujo en Cap Cana, estructurado con ganchos de alta retención para agentes de bienes raíces.",
    featured: true
  },
  {
    id: "h1",
    title: "Cortometraje de Marca & Storytelling",
    client: "Dominican Golf & Residences",
    category: "Cine & Web (16:9)",
    format: "horizontal",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4?_wi=1",
    imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/rooms/gardenvilla.webp?_wi=1",
    aspect: "aspect-video",
    stats: "Documental Comercial 4K",
    tags: ["Branded Content", "Widescreen 16:9", "Dirección de Arte"],
    description: "Pieza cinematográfica institucional grabada en campo de golf y marina privada para proyección internacional.",
    featured: true
  },
  {
    id: "v2",
    title: "Experiencia Resort & Beach Club",
    client: "Cap Cana Boutique Hotel",
    category: "Reels & Shorts (9:16)",
    format: "vertical",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4?_wi=1",
    imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/amenities/pool.jpg?_wi=1",
    aspect: "aspect-[9/16]",
    stats: "3.8x Reservas Directas",
    tags: ["Hotelería", "Lifestyle", "High Retention"],
    description: "Contenido de inmersión total en estilo de vida caribeño enfocado en la conversión directa de huéspedes.",
  },
  {
    id: "v3",
    title: "Showroom Auto de Lujo",
    client: "Santo Domingo Exotics",
    category: "Reels & Shorts (9:16)",
    format: "vertical",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?_wi=1",
    imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/features/feature1.webp?_wi=1",
    aspect: "aspect-[9/16]",
    stats: "+2.9M Alcance Orgánico",
    tags: ["Automotriz", "Storytelling", "Viral Sound"],
    description: "Edición ritmada con diseño sonoro de alta fidelidad para el lanzamiento de vehículo deportivo.",
  },
  {
    id: "h2",
    title: "Campaña Arquitectónica Widescreen",
    client: "Oceanfront Towers RD",
    category: "Cine & Web (16:9)",
    format: "horizontal",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4?_wi=1",
    imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/journeys/sailing.webp?_wi=1",
    aspect: "aspect-video",
    stats: "Cine Spot HD / TV & Web",
    tags: ["Arquitectura", "Dron 4K", "Color Grading"],
    description: "Tomas aéreas con dron cinematográfico e iluminación natural en costa tropical para lanzamiento de torre.",
    featured: true
  },
];

const availableServices = [
  { id: "videos", label: "Creación de Contenido Audiovisual" },
  { id: "reels", label: "Grabación & Reels para Instagram" },
  { id: "direction", label: "Dirección & Storytelling de Marca" },
  { id: "internal_team", label: "Dirección de Proyectos para Equipo Interno" },
  { id: "social_media", label: "Gestión de Redes Sociales (SMM)" },
  { id: "web_design", label: "Diseño & Desarrollo de Página Web" },
  { id: "photography", label: "Fotografía Comercial & Editorial" },
  { id: "consulting", label: "Consultoría Estratégica 1:1" },
];

const complementaryProposals = [
  {
    id: "p1",
    title: "Dirección para Equipo Interno",
    subtitle: "Acompañamiento In-House",
    description: "Supervisamos, capacitamos y dirigimos estratégicamente a tu propio equipo interno de creadores para elevar exponencialmente su estándar estético y efectividad comercial.",
    icon: Users,
    badge: "Eficiencia de Equipo",
    tags: ["Supervisión Creativa", "Capacitación 1:1", "Control de Calidad"],
  },
  {
    id: "p2",
    title: "Gestión Integral de Redes (SMM)",
    subtitle: "Crecimiento Orgánico & ROI",
    description: "Calendario editorial, diseño de publicaciones, copys orientados a conversión y gestión activa de comunidad para posicionar tu marca en Instagram y TikTok.",
    icon: Share2,
    badge: "Gestión Completa",
    tags: ["Calendario Editorial", "Community Management", "Estrategia SMM"],
  },
  {
    id: "p3",
    title: "Fotografía Comercial & Editorial",
    subtitle: "Imágenes de Alta Resolución",
    description: "Sesiones fotográficas de catálogo, prensa, vallas y presencia digital en ultra-alta resolución, con iluminación profesional y estilismo de marca.",
    icon: Camera,
    badge: "Calidad Print & Digital",
    tags: ["Retoque Avanzado", "Catálogos & Web", "Estilismo Visual"],
  },
  {
    id: "p4",
    title: "Diseño & Desarrollo Web de Alta Conversión",
    subtitle: "Presencia Digital Premium",
    description: "Plataformas web e interactivas ultra-rápidas diseñadas para mostrar tu portafolio audiovisual y convertir visitantes calificados en solicitudes directas de briefing.",
    icon: Globe,
    badge: "Web High-Speed",
    tags: ["Vite + React", "Diseño Mobile First", "Optimización SEO"],
  },
  {
    id: "p5",
    title: "Consultoría Estratégica & Asesoría 1:1",
    subtitle: "Acompañamiento Ejecutivo",
    description: "Sesiones privadas para estructurar la estrategia de comunicación visual, narrativa de líderes ejecutivos y hoja de ruta para la atracción de inversionistas.",
    icon: Sparkles,
    badge: "Nivel Ejecutivo",
    tags: ["Hoja de Ruta", "Análisis de Mercado", "Pitch Deck Visual"],
  },
];

export default function ServicesPage() {
  const [activeMediaTab, setActiveMediaTab] = useState<"all" | "vertical" | "horizontal">("all");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isModalMuted, setIsModalMuted] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [formState, setFormState] = useState({
    companyName: "",
    locations: "",
    socialMedia: "",
    website: "",
    contactName: "",
    email: "",
    phone: "",
    role: "",
    employeeCount: "1-5 empleados",
    budget: "$3,000 - $6,000 USD",
    selectedServices: ["videos", "reels", "direction"] as string[],
    additionalNotes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (serviceId: string) => {
    setFormState((prev) => {
      const exists = prev.selectedServices.includes(serviceId);
      if (exists) {
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter((s) => s !== serviceId),
        };
      } else {
        return {
          ...prev,
          selectedServices: [...prev.selectedServices, serviceId],
        };
      }
    });
  };

  const handleBriefSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const chosenServiceNames = formState.selectedServices
      .map((id) => availableServices.find((s) => s.id === id)?.label)
      .filter(Boolean)
      .join(", ");

    try {
      await sendContactEmail({
        formData: {
          "Nombre de Empresa": formState.companyName,
          "Sedes / Ubicaciones": formState.locations,
          "Redes Sociales": formState.socialMedia || "No especificado",
          "Sitio Web": formState.website || "No especificado",
          "Contacto Principal": `${formState.contactName} (${formState.role || "Representante"})`,
          "Correo Electrónico": formState.email,
          "Teléfono / WhatsApp": formState.phone,
          "Número de Empleados": formState.employeeCount,
          "Presupuesto a Destinar": formState.budget,
          "Servicios Seleccionados": chosenServiceNames || "Ninguno seleccionado",
          "Detalles del Proyecto": formState.additionalNotes || "Sin detalles adicionales",
        },
      });
    } catch {
      // Graceful error handling for UI flow
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const filteredMedia =
    activeMediaTab === "all"
      ? mediaGalleryItems
      : mediaGalleryItems.filter((m) => m.format === activeMediaTab);

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % complementaryProposals.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + complementaryProposals.length) % complementaryProposals.length);
  };

  return (
    <div className="w-full pt-28 md:pt-36 pb-24 overflow-x-hidden bg-background text-foreground">
      
      {/* HERO SECTION: CREATIVE TYPOGRAPHY */}
      <section className="w-content-width mx-auto mb-20 md:mb-28">
        <ScrollReveal variant="slide-up">
          <div className="flex flex-col items-start gap-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full card border border-border/80 shadow-sm bg-card">
              <Sparkles className="size-4 text-primary animate-pulse" />
              <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-foreground/90">
                Agencia Audiovisual & Estrategia Creativa · Punta Cana & Santo Domingo
              </span>
            </div>

            {/* Dynamic Title */}
            <div className="w-full">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.92] text-foreground text-balance uppercase">
                CREACIÓN <span className="font-serif italic font-normal text-primary lowercase underline decoration-primary/40 decoration-2">audiovisual</span>
                <br />
                & DIRECCIÓN DE <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-foreground/75 font-mono">[CONTENIDO]</span>
              </h1>
            </div>

            {/* Subheadline */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mt-4 pt-6 border-t border-border/60 w-full">
              <div className="md:col-span-7">
                <p className="text-lg sm:text-2xl md:text-3xl font-medium leading-snug text-foreground/90 text-balance">
                  Planificamos, diseñamos y ejecutamos la estrategia de contenido ideal para tu empresa, basándonos estrictamente en tus <span className="text-primary font-bold">objetivos comerciales</span>.
                </p>
              </div>
              <div className="md:col-span-5 flex flex-col gap-3">
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                  Para acceder a propuestas a medida y cotizaciones exactas, completa nuestro briefing oficial de solicitud de servicios.
                </p>
                <a
                  href="#solicitud"
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 text-sm md:text-base transition-colors group"
                >
                  <span>Ir directamente al Formulario de Solicitud</span>
                  <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* 3 PRINCIPAL SERVICES SECTION */}
      <section className="w-content-width mx-auto mb-20 md:mb-28">
        <ScrollReveal variant="slide-up">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/60 pb-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-primary mb-2 block">
                [ Propuestas Principales ]
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                3 Servicios Principales
              </h2>
            </div>
            <p className="text-base text-foreground/75 max-w-md">
              Nuestra oferta central resumida en los tres pilares audiovisuales de mayor impacto y conversión para tu marca.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Main Featured Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Service 1 */}
          <ScrollReveal variant="slide-up" delay={0.1}>
            <div className="card rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between border border-border/80 hover:border-primary/60 transition-all duration-300 group bg-card shadow-sm hover:shadow-md">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <Video className="size-7" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider">
                    Pilar #1
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  Creación de Contenido Audiovisual
                </h3>
                
                <p className="text-base text-foreground/80 leading-relaxed mb-8">
                  Producimos piezas audiovisuales cinematográficas en 4K que transmiten el prestigio y la esencia diferenciadora de tu empresa. Ideal para proyectos de bienes raíces, hoteles de lujo y lanzamientos de marca en Punta Cana y Santo Domingo.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-border/60">
                  {["Producción 4K", "Iluminación de Cine", "Audio de Estudio", "Color Grading"].map((tag) => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-lg bg-background border border-border/80 text-foreground/80">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Main Service 2 */}
          <ScrollReveal variant="slide-up" delay={0.2}>
            <div className="card rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between border border-border/80 hover:border-rose-500/60 transition-all duration-300 group bg-card shadow-sm hover:shadow-md">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="size-14 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500 border border-rose-500/20">
                    <Instagram className="size-7" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 uppercase tracking-wider">
                    Pilar #2
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-rose-500 transition-colors">
                  Grabación & Reels para Instagram
                </h3>
                
                <p className="text-base text-foreground/80 leading-relaxed mb-8">
                  Contenido vertical en formato 9:16 optimizado con ganchos iniciales de alta retención visual, edición rítmica y llamados a la acción claros para maximizar el alcance orgánico y la conversión directa.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-border/60">
                  {["Reels Virales", "Retención Visual", "Hooks Efectivos", "Formato 9:16"].map((tag) => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-lg bg-background border border-border/80 text-foreground/80">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Main Service 3 */}
          <ScrollReveal variant="slide-up" delay={0.3}>
            <div className="card rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between border border-border/80 hover:border-emerald-500/60 transition-all duration-300 group bg-card shadow-sm hover:shadow-md">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="size-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                    <Target className="size-7" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 uppercase tracking-wider">
                    Pilar #3
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-emerald-500 transition-colors">
                  Planificación Estratégica & Dirección
                </h3>
                
                <p className="text-base text-foreground/80 leading-relaxed mb-8">
                  Estructuramos el embudo de contenido y el guion estratégico detrás de cada rodaje. Nos aseguramos de que cada imagen responda directamente a tus metas de ventas y reputación institucional.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-border/60">
                  {["Guiones Claves", "Embudo de Ventas", "Medición de KPI", "Dirección de Arte"].map((tag) => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-lg bg-background border border-border/80 text-foreground/80">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* SLIDER / CAROUSEL FOR REST OF PROPOSALS */}
      <section className="w-content-width mx-auto mb-28 md:mb-36">
        <ScrollReveal variant="slide-up">
          <div className="card rounded-3xl p-8 sm:p-12 border border-border/80 bg-card shadow-md relative overflow-hidden">
            
            {/* Header with Navigation Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-border/60">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                  <Layers className="size-3.5" />
                  <span>Otras Propuestas & Servicios Complementarios</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold text-foreground">
                  Catálogo de Soluciones Especializadas
                </h3>
              </div>

              {/* Slider Arrows & Dots */}
              <div className="flex items-center gap-4 self-start md:self-auto">
                <div className="flex items-center gap-1.5 mr-2">
                  {complementaryProposals.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCarouselIndex(idx)}
                      aria-label={`Ir a la propuesta ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === carouselIndex ? "w-8 bg-primary" : "w-2.5 bg-foreground/20 hover:bg-foreground/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={prevCarousel}
                  aria-label="Anterior propuesta"
                  className="size-11 rounded-full card border border-border/80 hover:border-primary/50 text-foreground flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={nextCarousel}
                  aria-label="Siguiente propuesta"
                  className="size-11 rounded-full primary-button text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>

            {/* Slider Content Viewport */}
            <div className="relative min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={carouselIndex}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Left Column: Icon & Badges */}
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                      {(() => {
                        const IconComp = complementaryProposals[carouselIndex].icon;
                        return <IconComp className="size-8" />;
                      })()}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider block mb-1">
                        {complementaryProposals[carouselIndex].subtitle}
                      </span>
                      <span className="inline-block px-3 py-1 rounded-full bg-accent text-foreground text-xs font-semibold border border-border/60">
                        {complementaryProposals[carouselIndex].badge}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Title, Description & Action */}
                  <div className="lg:col-span-8 flex flex-col justify-between h-full gap-6">
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                        {complementaryProposals[carouselIndex].title}
                      </h4>
                      <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-6">
                        {complementaryProposals[carouselIndex].description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {complementaryProposals[carouselIndex].tags.map((tag) => (
                          <span key={tag} className="text-xs font-medium px-3 py-1 rounded-lg bg-background border border-border/80 text-foreground/80">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-border/50">
                      <span className="text-xs font-mono text-foreground/60">
                        Propuesta {carouselIndex + 1} de {complementaryProposals.length}
                      </span>
                      <a
                        href="#solicitud"
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                      >
                        <span>Incluir en mi Briefing</span>
                        <ArrowRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* DYNAMIC AUDIOVISUAL GALLERY WITH LIGHTBOX PREVIEW */}
      <section className="w-content-width mx-auto mb-28 md:mb-36">
        <ScrollReveal variant="slide-up">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-primary mb-2 block">
                [ Experiencia Visual Interactiva ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                Galería Dinámica de Fotos & Videos
              </h2>
            </div>

            {/* Dynamic Filter Tabs */}
            <div className="inline-flex p-1.5 rounded-2xl card border border-border/80 bg-card self-start md:self-auto shadow-sm">
              <button
                onClick={() => setActiveMediaTab("all")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeMediaTab === "all"
                    ? "primary-button text-white shadow-md"
                    : "text-foreground/75 hover:text-foreground"
                }`}
              >
                Todos los Formatos
              </button>
              <button
                onClick={() => setActiveMediaTab("vertical")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeMediaTab === "vertical"
                    ? "primary-button text-white shadow-md"
                    : "text-foreground/75 hover:text-foreground"
                }`}
              >
                <Film className="size-3.5" />
                <span>Verticales (9:16)</span>
              </button>
              <button
                onClick={() => setActiveMediaTab("horizontal")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  activeMediaTab === "horizontal"
                    ? "primary-button text-white shadow-md"
                    : "text-foreground/75 hover:text-foreground"
                }`}
              >
                <Camera className="size-3.5" />
                <span>Horizontales (16:9)</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Dynamic Asymmetrical Bento Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredMedia.map((media) => {
              const isWide = media.format === "horizontal";
              return (
                <motion.div
                  key={media.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`card rounded-3xl overflow-hidden border border-border/80 group hover:border-primary/60 transition-all flex flex-col cursor-pointer bg-card shadow-sm hover:shadow-lg ${
                    isWide ? "md:col-span-8" : "md:col-span-4"
                  }`}
                  onClick={() => setSelectedMedia(media)}
                >
                  {/* Media Frame Container */}
                  <div className={`relative w-full ${isWide ? "aspect-video md:aspect-[16/9]" : "aspect-[9/16] md:aspect-[4/5]"} overflow-hidden bg-slate-100`}>
                    <ImageOrVideo
                      imageSrc={media.imageSrc}
                      videoSrc={media.videoSrc}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/75 backdrop-blur-md text-white border border-white/20">
                        {media.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white shadow-md">
                        {media.stats}
                      </span>
                    </div>

                    {/* Interactive Play Overlay Prompt */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-bold text-sm shadow-xl transform group-hover:scale-105 transition-transform">
                        <Maximize2 className="size-4" />
                        <span>Ver Experiencia Completa</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Description Footer */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block mb-1">
                        {media.client}
                      </span>
                      <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {media.title}
                      </h4>
                      <p className="text-xs text-foreground/75 leading-relaxed mb-4 line-clamp-2">
                        {media.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                      {media.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-medium text-foreground/70 bg-background px-2.5 py-1 rounded-md border border-border/60">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* INTERACTIVE LIGHTBOX MODAL FOR AUDIOVISUAL PREVIEW */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-4xl rounded-3xl bg-card border border-border/80 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-20 size-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="size-5" />
              </button>

              {/* Video Player Container */}
              <div className="w-full md:w-3/5 bg-black relative flex items-center justify-center min-h-[300px] md:min-h-[480px]">
                {selectedMedia.videoSrc ? (
                  <>
                    <video
                      ref={videoRef}
                      src={selectedMedia.videoSrc}
                      autoPlay
                      loop
                      muted={isModalMuted}
                      playsInline
                      className="w-full h-full object-contain max-h-[70vh]"
                    />
                    
                    {/* Audio Mute/Unmute Toggle */}
                    <button
                      onClick={() => setIsModalMuted(!isModalMuted)}
                      className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-2 border border-white/20"
                    >
                      {isModalMuted ? (
                        <>
                          <VolumeX className="size-4 text-rose-400" />
                          <span>Activar Sonido</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="size-4 text-emerald-400" />
                          <span>Sonido Activado</span>
                        </>
                      )}
                    </button>
                  </>
                ) : (
                  <img
                    src={selectedMedia.imageSrc}
                    alt={selectedMedia.title}
                    className="w-full h-full object-cover max-h-[70vh]"
                  />
                )}
              </div>

              {/* Info Details Panel */}
              <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                    {selectedMedia.category}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {selectedMedia.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-foreground/70 mb-4">
                    Cliente: {selectedMedia.client}
                  </p>
                  <p className="text-sm text-foreground/85 leading-relaxed mb-6">
                    {selectedMedia.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-background border border-border/80 mb-6 space-y-2">
                    <span className="text-xs text-foreground/60 block font-semibold">Métrica Destacada:</span>
                    <span className="text-lg font-bold text-emerald-600 flex items-center gap-2">
                      <Sparkles className="size-4" />
                      {selectedMedia.stats}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedMedia.tags.map((t) => (
                      <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-accent text-foreground">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#solicitud"
                  onClick={() => setSelectedMedia(null)}
                  className="w-full py-3.5 rounded-2xl primary-button text-white font-bold text-center text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <Clapperboard className="size-4" />
                  <span>Solicitar Producción Similar</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AGENCY BRIEFING REQUEST FORM SECTION */}
      <section id="solicitud" className="w-content-width mx-auto pt-10">
        <ScrollReveal variant="slide-up">
          <div className="card rounded-3xl p-6 sm:p-10 md:p-12 border border-border/80 shadow-lg relative overflow-hidden bg-card">
            
            {/* Form Header */}
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold mb-3">
                <Clock className="size-3.5" />
                <span>Briefing Oficial & Respuesta Garantizada en 24 Horas</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
                Formulario de Solicitud de Servicios
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                Completa este informe para que nuestro equipo creativo y de estrategia analice las necesidades de tu empresa y estructure un plan comercial totalmente a medida.
              </p>
            </div>

            {isSubmitted ? (
              /* Confirmation Screen */
              <div className="py-12 px-6 rounded-2xl bg-primary/5 border border-primary/20 text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
                <div className="size-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/60 flex items-center justify-center text-emerald-500 mb-6 shadow-xl animate-bounce">
                  <CheckCircle2 className="size-12" />
                </div>

                <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500/15 text-emerald-600 border border-emerald-500/30 mb-4">
                  Briefing Recibido Correctamente
                </span>

                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  ¡Gracias por confiar en Crowned!
                </h3>

                <p className="text-base sm:text-lg text-foreground/85 max-w-2xl mb-8 leading-relaxed">
                  Hemos registrado la solicitud de la empresa <span className="font-bold text-primary">{formState.companyName}</span>. Nuestro equipo de dirección evaluará tus objetivos y se pondrá en contacto con <span className="font-semibold text-foreground">{formState.contactName}</span> en un plazo máximo de <span className="font-bold text-emerald-600">24 horas</span> con una propuesta estratégica personalizada.
                </p>

                <div className="p-6 rounded-2xl bg-card border border-border/80 max-w-xl w-full text-left mb-8 space-y-3">
                  <div className="flex items-center justify-between text-xs text-foreground/60 border-b border-border/50 pb-2">
                    <span>Resumen de Solicitud</span>
                    <span className="font-mono text-primary">ID: #CRW-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <p className="text-sm text-foreground">
                    <strong className="text-foreground/70">Empresa:</strong> {formState.companyName}
                  </p>
                  <p className="text-sm text-foreground">
                    <strong className="text-foreground/70">Contacto:</strong> {formState.contactName} ({formState.email})
                  </p>
                  <p className="text-sm text-foreground">
                    <strong className="text-foreground/70">Presupuesto Estimado:</strong> {formState.budget}
                  </p>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full secondary-button font-medium text-sm transition-transform hover:scale-105"
                >
                  <RotateCcw className="size-4" />
                  <span>Enviar otro briefing o modificar datos</span>
                </button>
              </div>
            ) : (
              /* Agency Brief Form */
              <form onSubmit={handleBriefSubmit} className="space-y-10">
                
                {/* SECTION 1: DATOS DE LA EMPRESA */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Información General de la Empresa
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Nombre de la Empresa *
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-foreground/40" />
                        <input
                          type="text"
                          required
                          value={formState.companyName}
                          onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
                          placeholder="Ej. Riviera Cap Cana Properties"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-background border border-border/80 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Sedes & Ubicaciones *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-foreground/40" />
                        <input
                          type="text"
                          required
                          value={formState.locations}
                          onChange={(e) => setFormState({ ...formState, locations: e.target.value })}
                          placeholder="Ej. Punta Cana, Santo Domingo, Miami"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-background border border-border/80 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Redes Sociales (Instagram / TikTok)
                      </label>
                      <div className="relative">
                        <Share2 className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-foreground/40" />
                        <input
                          type="text"
                          value={formState.socialMedia}
                          onChange={(e) => setFormState({ ...formState, socialMedia: e.target.value })}
                          placeholder="Ej. @miempresa_rd"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-background border border-border/80 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Sitio Web Actual
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-foreground/40" />
                        <input
                          type="url"
                          value={formState.website}
                          onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                          placeholder="Ej. https://miempresa.com"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-background border border-border/80 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 2: DATOS DE CONTACTO & TAMAÑO DE EQUIPO */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Contacto Directo & Dimensión del Negocio
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Nombre del Contacto *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.contactName}
                        onChange={(e) => setFormState({ ...formState, contactName: e.target.value })}
                        placeholder="Tu nombre completo"
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-border/80 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="contacto@empresa.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-border/80 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+1 (809) 000-0000"
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-border/80 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Cargo / Rol en la Empresa
                      </label>
                      <input
                        type="text"
                        value={formState.role}
                        onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                        placeholder="Ej. Director de Marketing / CEO"
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-border/80 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Número de Empleados
                      </label>
                      <select
                        value={formState.employeeCount}
                        onChange={(e) => setFormState({ ...formState, employeeCount: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-border/80 text-foreground focus:border-primary focus:outline-none text-sm transition-colors"
                      >
                        <option value="1-5 empleados">1 - 5 empleados</option>
                        <option value="6-20 empleados">6 - 20 empleados</option>
                        <option value="21-50 empleados">21 - 50 empleados</option>
                        <option value="Más de 50 empleados">Más de 50 empleados</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* SECTION 3: SELECCIÓN DE SERVICIOS & PRESUPUESTO */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Servicios Requeridos & Presupuesto a Destinar
                    </h3>
                  </div>

                  {/* Multi-Select Checkboxes */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Selecciona los Servicios que te Interesan (Puedes elegir varios):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {availableServices.map((service) => {
                        const isSelected = formState.selectedServices.includes(service.id);
                        return (
                          <div
                            key={service.id}
                            onClick={() => toggleService(service.id)}
                            className={`p-3.5 rounded-xl border cursor-pointer select-none transition-all flex items-start gap-3 ${
                              isSelected
                                ? "bg-primary/10 border-primary text-foreground shadow-sm"
                                : "bg-background border-border/80 text-foreground/75 hover:border-border"
                            }`}
                          >
                            <div
                              className={`size-5 rounded flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                isSelected ? "bg-primary text-white" : "border border-border/80 bg-card"
                              }`}
                            >
                              {isSelected && <Check className="size-3.5" />}
                            </div>
                            <span className="text-xs font-semibold leading-tight">{service.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Presupuesto Estimado a Destinar *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                      {[
                        "< $1,500 USD",
                        "$1,500 - $3,000 USD",
                        "$3,000 - $6,000 USD",
                        "$6,000 - $12,000 USD",
                        "+$12,000 USD",
                      ].map((range) => {
                        const isSelected = formState.budget === range;
                        return (
                          <button
                            type="button"
                            key={range}
                            onClick={() => setFormState({ ...formState, budget: range })}
                            className={`p-3 rounded-xl border text-xs font-bold transition-all text-center ${
                              isSelected
                                ? "primary-button text-white border-primary shadow-md"
                                : "bg-background border-border/80 text-foreground/80 hover:border-foreground/30"
                            }`}
                          >
                            {range}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Detalles Adicionales / Objetivos Comerciales del Proyecto
                    </label>
                    <textarea
                      rows={4}
                      value={formState.additionalNotes}
                      onChange={(e) => setFormState({ ...formState, additionalNotes: e.target.value })}
                      placeholder="Cuéntanos sobre los objetivos de tu marca, plazos deseados o cualquier requerimiento especial..."
                      className="w-full p-4 rounded-xl bg-background border border-border/80 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors resize-y"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-2 text-xs text-foreground/70">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                    <span>Tus datos están protegidos y solo se utilizarán para la propuesta comercial.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-2xl primary-button text-white font-bold text-base shadow-lg transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Enviando Informe...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar Solicitud de Briefing</span>
                        <ChevronRight className="size-5" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
