import { useState, useRef } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Volume2,
  VolumeX,
  TrendingUp,
  Award,
  ChevronRight,
  Eye,
  Film,
  Camera,
  ArrowRight
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PortfolioProject {
  id: string;
  client: string;
  category: string;
  title: string;
  objective: string;
  strategy: string;
  results: string;
  format: "vertical" | "horizontal";
  videoSrc?: string;
  imageSrc?: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: "p1",
    client: "Sterling Real Estate Group",
    category: "Bienes Raíces & Agentes",
    title: "Tour Inmobiliario de Lujo Cap Cana",
    objective: "Atraer inversionistas internacionales de alto patrimonio para la preventa de villas marinas.",
    strategy: "Recorrido en formato vertical 9:16 con guion persuasivo enfocando amenidades, muelle privado y proyección de rentabilidad anual.",
    results: "+4.2M reproducciones orgánicas y 18 inversionistas calificados captados.",
    format: "vertical",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4?_wi=1",
    metrics: [
      { label: "Visualizaciones", value: "4.2M+" },
      { label: "Clientes Potenciales", value: "+18" },
      { label: "Cierre de Ventas", value: "USD $6.8M" },
    ],
    tags: ["Real Estate 4K", "9:16 Vertical", "Cap Cana", "Alta Retención"],
  },
  {
    id: "p2",
    client: "Punta Cana Ocean Resort & Spa",
    category: "Hoteles & Resorts",
    title: "Campaña Comercial Oceanfront Suites",
    objective: "Reducir comisiones a OTAs incrementando reservas directas desde Instagram y web.",
    strategy: "Video widescreen 16:9 de estilo cine documental con tomas aéreas con dron y música emocional de autor.",
    results: "+380% en reservas directas en la web del hotel sin comisiones intermedias.",
    format: "horizontal",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4",
    metrics: [
      { label: "Alcance Total", value: "3.8M" },
      { label: "Reservas Directas", value: "+380%" },
      { label: "ROI Comercial", value: "5.4x" },
    ],
    tags: ["Cine Widescreen 16:9", "Dron 4K", "Resort Lujo", "Booking Directo"],
  },
  {
    id: "p3",
    client: "AutoHaus Dominicana Showroom",
    category: "Concesionarios & Automotriz",
    title: "Reel Cinematográfico SUV Luxury 2026",
    objective: "Llenar la agenda de pruebas de manejo para el nuevo inventario de SUV importadas.",
    strategy: "Planos dinámicos en movimiento con iluminación nocturna en Santo Domingo y sonido envolvente.",
    results: "48 test drives agendados por mensaje directo en los primeros 7 días.",
    format: "vertical",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4",
    metrics: [
      { label: "Reproducciones", value: "2.9M" },
      { label: "Test Drives", value: "48" },
      { label: "Engagement Rate", value: "9.4%" },
    ],
    tags: ["Automotriz", "Reels Dinámicos", "Santo Domingo", "Storytelling"],
  },
  {
    id: "p4",
    client: "Bayahíbe Excursiones & Catamarán",
    category: "Turismo & Experiencias",
    title: "Documental Marítimo Isla Saona",
    objective: "Posicionar la empresa como la opción #1 en turismo VIP de playa y catamarán.",
    strategy: "Filmación hiperrealista bajo el agua y tomas aereas de cayos turquesas en Saona y Bayahíbe.",
    results: "+320 cupos de excursiones VIP vendidos directamente en temporada alta.",
    format: "horizontal",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4",
    metrics: [
      { label: "Visualizaciones", value: "1.7M" },
      { label: "Excursiones Vendidas", value: "+320" },
      { label: "Calificación", value: "5.0 ★" },
    ],
    tags: ["Turismo RD", "4K Acuático", "Catamarán VIP", "Bayahíbe"],
  },
  {
    id: "p5",
    client: "Taller AutoTech Mecánica Especializada",
    category: "Servicios Técnicos",
    title: "Serie Técnica de Precisión Mecánica",
    objective: "Generar confianza en clientes de vehículos alemanes e italianos en Santiago.",
    strategy: "Explicaciones paso a paso de diagnósticos computarizados y reparación certificada.",
    results: "+210 citas captadas y calendario de taller completo por 2 meses consecutivos.",
    format: "vertical",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4",
    metrics: [
      { label: "Alcance Local", value: "620K" },
      { label: "Citas Captadas", value: "+210" },
      { label: "Fidelización", value: "96%" },
    ],
    tags: ["Mecánica Especializada", "Santiago RD", "Autoridad de Marca"],
  },
];

export default function PortfolioPage() {
  const [heroMuted, setHeroMuted] = useState(true);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const toggleHeroSound = () => {
    setHeroMuted((prev) => !prev);
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = !heroMuted;
    }
  };

  return (
    <div className="w-full pt-28 sm:pt-36 pb-24 overflow-x-hidden">
      
      {/* HERO FEATURED REEL - MAGAZINE STYLE */}
      <section className="w-content-width mx-auto mb-20 md:mb-28">
        <ScrollReveal variant="slide-up">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full card border border-white/10 mb-4 shadow-sm">
              <Sparkles className="size-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-foreground">
                Revista Digital & Reel Cinematográfico · Crowned RD
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground uppercase leading-[0.95] mb-4">
              PORTAFOLIO <span className="font-serif italic font-normal text-primary text-3xl sm:text-5xl md:text-6xl lowercase">cinematográfico</span>
            </h1>

            <p className="text-base sm:text-xl text-foreground/85 leading-relaxed text-balance">
              Historias visuales diseñadas con dirección de arte, narrativa envolvente y un objetivo comercial claro para potenciar el alcance de tu negocio.
            </p>
          </div>
        </ScrollReveal>

        {/* Big Vertical Featured Reel Hero Box */}
        <ScrollReveal variant="slide-up" delay={0.1}>
          <div className="relative w-full max-w-3xl mx-auto aspect-9/16 sm:aspect-16/10 rounded-3xl overflow-hidden card border border-white/15 shadow-2xl group bg-black">
            <video
              ref={heroVideoRef}
              src="https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4?_wi=1"
              autoPlay
              loop
              playsInline
              muted={heroMuted}
              preload="metadata"
              className="w-full h-full object-cover"
            />

            {/* Overlays */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary text-white shadow-lg uppercase tracking-wider">
                PROYECTO DESTACADO
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/70 text-emerald-400 border border-emerald-500/30">
                +4.2M Reproducciones
              </span>
            </div>

            <button
              onClick={toggleHeroSound}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 px-4 py-2 rounded-full bg-black/80 hover:bg-primary border border-white/20 text-white font-semibold text-xs flex items-center gap-2 backdrop-blur-md transition-all cursor-pointer shadow-lg"
            >
              {heroMuted ? (
                <>
                  <VolumeX className="size-4 text-rose-400" />
                  <span>Activar Audio</span>
                </>
              ) : (
                <>
                  <Volume2 className="size-4 text-emerald-400" />
                  <span>Audio Activado</span>
                </>
              )}
            </button>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-primary mb-1 block">
                  Cap Cana Real Estate
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">
                  Tour Inmobiliario de Lujo Cap Cana
                </h2>
                <p className="text-xs sm:text-sm text-white/80 max-w-lg leading-relaxed">
                  Recorrido exclusivo en villas de lujo con muelle privado. Producción en 4K diseñada para captación directa de compradores e inversores.
                </p>
              </div>

              <a
                href="/solicitar-asesoria"
                className="px-6 py-3 rounded-xl primary-button font-bold text-xs sm:text-sm shrink-0 flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <span>Crear Proyecto Similar</span>
                <ChevronRight className="size-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ANIMATED KPI METRICS BLOCKS SECTION */}
      <section className="w-content-width mx-auto mb-24 md:mb-32">
        <ScrollReveal variant="slide-up">
          <div className="p-8 sm:p-12 rounded-3xl card border border-white/10 bg-gradient-to-br from-card via-card to-primary/10 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">
                  [ Métricas Generadas ]
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-foreground">
                  Impacto Medible en Redes & Ventas
                </h2>
              </div>
              <p className="text-sm sm:text-base text-foreground/80 max-w-md">
                Resultados consolidados de las producciones audiovisuales ejecutadas para nuestros clientes en República Dominicana.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Reproducciones Orgánicas", value: "+18.5M", change: "Acumulado 2026", icon: Eye },
                { label: "Conversión Directa", value: "+380%", change: "En Consultas & Citas", icon: TrendingUp },
                { label: "Retención de Audiencia", value: "84%", change: "Primeros 5 segundos", icon: Film },
                { label: "Satisfacción de Clientes", value: "98%", change: "Retención de Servicio", icon: Award },
              ].map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-5 sm:p-6 rounded-2xl bg-background/80 border border-white/10 flex flex-col justify-between"
                >
                  <metric.icon className="size-6 text-primary mb-3" />
                  <div>
                    <span className="text-3xl sm:text-5xl font-black text-foreground tracking-tight block mb-1">
                      {metric.value}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-foreground/90">{metric.label}</p>
                    <span className="text-[11px] text-primary font-mono font-semibold mt-1 block">
                      {metric.change}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ALTERNATING FORMATS SHOWCASE: VERTICAL (9:16) & HORIZONTAL (16:9) */}
      <section className="w-content-width mx-auto mb-24 md:mb-32">
        <ScrollReveal variant="slide-up">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
              [ Casos de Éxito Detallados ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
              Alternancia de Formatos Horizontal & Vertical
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-12 md:gap-20">
          {portfolioProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <ScrollReveal key={project.id} variant="slide-up">
                <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center card rounded-3xl p-6 sm:p-10 border border-white/10 group`}>
                  
                  {/* Media Display */}
                  <div className={`w-full ${project.format === "vertical" ? "lg:w-2/5 aspect-9/16" : "lg:w-3/5 aspect-16/9"} rounded-2xl overflow-hidden bg-black relative border border-white/10`}>
                    {project.videoSrc ? (
                      <video
                        src={project.videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <img
                        src={project.imageSrc}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}

                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/80 text-white border border-white/20">
                        {project.format === "vertical" ? "Vertical (9:16)" : "Horizontal (16:9)"}
                      </span>
                    </div>
                  </div>

                  {/* Project Details Panel */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">
                          {project.client}
                        </span>
                        <span className="text-xs text-foreground/50">•</span>
                        <span className="text-xs text-foreground/70">{project.category}</span>
                      </div>

                      <h3 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
                        {project.title}
                      </h3>

                      <div className="space-y-3 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                        <p>
                          <strong className="text-white">Objetivo:</strong> {project.objective}
                        </p>
                        <p>
                          <strong className="text-white">Estrategia:</strong> {project.strategy}
                        </p>
                        <p>
                          <strong className="text-emerald-400 font-bold">Resultado Medible:</strong> {project.results}
                        </p>
                      </div>
                    </div>

                    {/* Metric Cards Row */}
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="p-3 rounded-xl bg-background/80 border border-white/10">
                          <span className="text-lg sm:text-2xl font-extrabold text-white block">
                            {m.value}
                          </span>
                          <span className="text-[10px] text-foreground/60 leading-tight block">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((t) => (
                        <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-background border border-white/10 text-foreground/80">
                          #{t}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* PORTFOLIO BOTTOM CALL TO ACTION */}
      <section className="w-content-width mx-auto">
        <ScrollReveal variant="slide-up">
          <div className="card rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center bg-gradient-to-r from-card via-card to-primary/10 border border-primary/30 shadow-2xl">
            <div className="size-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6">
              <Camera className="size-8" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground mb-4 max-w-2xl">
              ¿Listo para Transformar la Presencia Audiovisual de tu Empresa?
            </h2>

            <p className="text-base sm:text-lg text-foreground/80 max-w-xl mb-8 leading-relaxed">
              Solicita una sesión de asesoría estratégica y diseñemos la producción audiovisual ideal para tus objetivos comerciales.
            </p>

            <a
              href="/solicitar-asesoria"
              className="px-8 py-4 rounded-full primary-button font-bold text-sm sm:text-base shadow-xl flex items-center gap-3 hover:scale-105 transition-transform"
            >
              <span>Solicitar Asesoría para Mi Marca</span>
              <ArrowRight className="size-5" />
            </a>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
