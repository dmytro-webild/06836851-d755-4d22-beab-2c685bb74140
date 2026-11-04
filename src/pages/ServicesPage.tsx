import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Video,
  Target,
  Sparkles,
  Clapperboard,
  Instagram,
  CheckCircle2,
  Send,
  Building2,
  MapPin,
  Globe,
  Share2,
  Users,
  Play,
  Film,
  Camera,
  Clock,
  ChevronRight,
  Check,
  RotateCcw,
  Sparkle
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

export default function ServicesPage() {
  const [activeMediaTab, setActiveMediaTab] = useState<"all" | "vertical" | "horizontal">("all");

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

  return (
    <div className="w-full pt-28 md:pt-36 pb-24 overflow-x-hidden">
      
      {/* HERO SECTION: CREATIVE TYPOGRAPHY & VARIABLE SIZES */}
      <section className="w-content-width mx-auto mb-20 md:mb-28">
        <ScrollReveal variant="slide-up">
          <div className="flex flex-col items-start gap-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full card border border-border/80 shadow-sm">
              <Sparkles className="size-4 text-primary animate-pulse" />
              <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-foreground/80">
                Agencia Audiovisual & Estrategia Creativa · Punta Cana & Santo Domingo
              </span>
            </div>

            {/* Dynamic Contrast Title Play */}
            <div className="w-full">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.92] text-foreground text-balance uppercase">
                CREACIÓN <span className="font-serif italic font-normal text-primary lowercase underline decoration-primary/40 decoration-2">audiovisual</span>
                <br />
                & DIRECCIÓN DE <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-foreground/75 font-mono">[CONTENIDO]</span>
              </h1>
            </div>

            {/* Explanatory Subheadline with Varied Text Sizes */}
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

      {/* DETAILED SERVICES OFFER: CREATIVE BENTO GRID */}
      <section className="w-content-width mx-auto mb-24 md:mb-32">
        <ScrollReveal variant="slide-up">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/60 pb-8">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-primary mb-2 block">
                [ Portafolio de Servicios ]
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                Nuestra Oferta Especializada
              </h2>
            </div>
            <p className="text-base text-foreground/75 max-w-md">
              Desarrollamos cada proyecto como una obra cinematográfica orientada a la conversión y la reputación de marca.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid layout with variable size cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Creación Audiovisual (Large 8 cols) */}
          <ScrollReveal variant="slide-up" className="md:col-span-8">
            <div className="card rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between border border-border/70 hover:border-primary/50 transition-all group relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <Video className="size-7" />
                </div>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase">
                  Servicio Core
                </span>
              </div>
              <div>
                <h3 className="text-2xl sm:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  Creación de Contenido Audiovisual para Empresas
                </h3>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-6">
                  Producimos piezas audiovisuales de categoría cinematográfica que proyectan la autoridad, el lujo y la esencia diferenciadora de tu marca. Desde locaciones de alto nivel en Punta Cana y Santo Domingo hasta edición ritmada y corrección de color profesional.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Producción 4K", "Iluminación de Cine", "Audio de Estudio", "Edición Dinámica"].map((tag) => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-lg bg-background border border-border/80 text-foreground/80">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Grabación de Videos para Instagram (4 cols) */}
          <ScrollReveal variant="slide-up" className="md:col-span-4">
            <div className="card rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between border border-border/70 hover:border-rose-500/50 transition-all group bg-gradient-to-br from-card via-card to-rose-500/5">
              <div className="flex items-center justify-between mb-8">
                <div className="size-14 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500 border border-rose-500/20">
                  <Instagram className="size-7" />
                </div>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 uppercase">
                  Formato 9:16
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-rose-500 transition-colors">
                  Grabación de Videos para Instagram
                </h3>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6">
                  Reels con hook inicial optimizado, retención sostenida y llamado a la acción claro para multiplicar interacciones y ventas directas en Instagram.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Reels Virales", "Retención Visual", "Hooks Efectivos"].map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-background border border-border/80 text-foreground/80">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Planificación Estratégica & Ejecución (4 cols) */}
          <ScrollReveal variant="slide-up" className="md:col-span-4">
            <div className="card rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between border border-border/70 hover:border-emerald-500/50 transition-all group">
              <div className="flex items-center justify-between mb-8">
                <div className="size-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                  <Target className="size-7" />
                </div>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 uppercase">
                  Estrategia
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-emerald-500 transition-colors">
                  Planificación Estratégica & Ejecución
                </h3>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6">
                  Toda producción responde a un objetivo de negocio: captar leads, cerrar ventas o construir prestigio. Trazamos la ruta exacta desde la idea hasta el resultado.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Guiones Claves", "Embudo de Contenido", "Medición de KPI"].map((tag) => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-background border border-border/80 text-foreground/80">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: Storytelling & Dirección Audiovisual (8 cols) */}
          <ScrollReveal variant="slide-up" className="md:col-span-8">
            <div className="card rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between border border-border/70 hover:border-amber-500/50 transition-all group">
              <div className="flex items-center justify-between mb-8">
                <div className="size-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                  <Clapperboard className="size-7" />
                </div>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 uppercase">
                  Storytelling de Marca
                </span>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-amber-500 transition-colors">
                  Storytelling de Marca & Dirección Creativa
                </h3>
                <p className="text-base text-foreground/80 leading-relaxed mb-6">
                  Convertimos los valores y la visión de tu empresa en una narrativa emocional memorable. Nos encargamos de la dirección de arte, dirección de actores o voceros y edición conceptual para transmitir máxima confianza.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Narrativa de Marca", "Dirección Escénica", "Identidad Visual", "Cine Comercial"].map((tag) => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-lg bg-background border border-border/80 text-foreground/80">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Additional Services Ribbon (Full 12 cols) */}
          <ScrollReveal variant="slide-up" className="md:col-span-12">
            <div className="card rounded-3xl p-8 sm:p-10 border border-border/70 bg-secondary/50">
              <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Sparkle className="size-5 text-primary" />
                <span>Servicios Complementarios de Alto Valor Incluidos en Briefs:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "Dirección para Equipo Interno",
                    desc: "Supervisamos y dirigimos estratégicamente a tu propio equipo in-house para multiplicar su eficiencia.",
                    icon: Users,
                  },
                  {
                    title: "Gestión de Redes (SMM)",
                    desc: "Publicación estratégica, gestión de comunidad y optimización continua en Instagram y TikTok.",
                    icon: Share2,
                  },
                  {
                    title: "Fotografía Comercial & Editorial",
                    desc: "Sesiones fotográficas en alta resolución para catálogos, web, vallas y presencia institucional.",
                    icon: Camera,
                  },
                  {
                    title: "Diseño & Desarrollo Web",
                    desc: "Creación de plataformas web ultra-rápidas enfocadas en convertir visitantes en solicitudes calificadas.",
                    icon: Globe,
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-card border border-border/60 hover:border-primary/40 transition-colors">
                    <item.icon className="size-6 text-primary mb-3" />
                    <h5 className="font-bold text-foreground text-base mb-1.5">{item.title}</h5>
                    <p className="text-xs text-foreground/75 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* DYNAMIC MEDIA SHOWCASE: VERTICAL (9:16) & HORIZONTAL (16:9) GALLERIES */}
      <section className="w-content-width mx-auto mb-28 md:mb-36">
        <ScrollReveal variant="slide-up">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-primary mb-2 block">
                [ Muestra de Formatos ]
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                Galería de Fotos & Videos Dinámicos
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="inline-flex p-1.5 rounded-2xl card border border-border/80 self-start md:self-auto">
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

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {filteredMedia.map((media) => (
              <motion.div
                key={media.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="card rounded-3xl overflow-hidden border border-border/70 group hover:border-primary/50 transition-all flex flex-col"
              >
                {/* Media Container */}
                <div className={`relative w-full ${media.aspect} overflow-hidden bg-black`}>
                  <ImageOrVideo
                    imageSrc={media.imageSrc}
                    videoSrc={media.videoSrc}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Badges Overlay */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-md text-white border border-white/20">
                      {media.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/90 text-white shadow-md">
                      {media.stats}
                    </span>
                  </div>

                  {/* Play Indicator Overlay */}
                  {media.videoSrc && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="size-14 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play className="size-6 fill-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Info Container */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-card">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary font-bold block mb-1">
                      {media.client}
                    </span>
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      {media.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-border/50">
                    {media.tags.map((t) => (
                      <span key={t} className="text-[11px] font-medium text-foreground/70 bg-background px-2.5 py-1 rounded-md border border-border/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* AGENCY BRIEFING REQUEST FORM SECTION */}
      <section id="briefing" className="w-content-width mx-auto pt-10">
        <ScrollReveal variant="slide-up">
          <div className="card rounded-3xl p-6 sm:p-10 md:p-12 border border-border/80 shadow-2xl relative overflow-hidden bg-card">
            
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
              /* Automatic Confirmation Screen */
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
              /* Comprehensive Agency Brief Form */
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

                  {/* Interactive Multi-Select Checkboxes */}
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

                  {/* Additional notes / commercial goals */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Objetivos del Proyecto o Detalles Adicionales
                    </label>
                    <textarea
                      rows={4}
                      value={formState.additionalNotes}
                      onChange={(e) => setFormState({ ...formState, additionalNotes: e.target.value })}
                      placeholder="Cuéntanos sobre tus metas comerciales, fechas tentativas de inicio o inquietudes específicas..."
                      className="w-full p-4 rounded-xl bg-background border border-border/80 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/60">
                  <div className="flex items-center gap-2 text-xs text-foreground/75">
                    <Clock className="size-4 text-primary shrink-0" />
                    <span>Recibirás respuesta formal en menos de 24 horas.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-full primary-button font-bold text-base shadow-lg transition-transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Enviando Briefing...</span>
                      </>
                    ) : (
                      <>
                        <Send className="size-5" />
                        <span>Enviar Solicitud de Briefing</span>
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
