import { useState, useRef } from "react";
import { 
  Instagram, 
  Heart, 
  Eye, 
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  TrendingUp,
  Grid
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ActiveBadge from "@/components/ui/ActiveBadge";

interface GalleryItem {
  id: string;
  category: "all" | "realestate" | "hospitality" | "automotive";
  handle: string;
  clientName: string;
  title: string;
  videoSrc?: string;
  imageSrc?: string;
  reach: string;
  likes: string;
  metricsResult: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "m1",
    category: "realestate",
    handle: "@villas_capcana_realty",
    clientName: "Cap Cana Luxury Real Estate",
    title: "Tour Inmobiliario Cap Cana",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4?_wi=1",
    reach: "1.9M Alcance",
    likes: "28.4K",
    metricsResult: "+18 Inversionistas Captados & Venta Cerrada",
    caption: "Recorrido exclusivo por villa de lujo en Cap Cana con muelle privado y vista marina. Estrategia de contenido orgánico para inversores calificados.",
  },
  {
    id: "m2",
    category: "hospitality",
    handle: "@puntacana_luxury_resort",
    clientName: "Grand Resort & Spa Punta Cana",
    title: "Experiencia Oceanfront Resort",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4?_wi=1",
    reach: "1.4M Alcance",
    likes: "24.8K",
    metricsResult: "+140 Reservas Directas Generadas",
    caption: "Atracción de viajeros internacionales mediante narrativa aspiracional de suites frente al mar y reservas sin intermediarios.",
  },
  {
    id: "m3",
    category: "realestate",
    handle: "@agente_marco_pena",
    clientName: "Marco Peña | Broker Inmobiliario",
    title: "Penthouse de Lujo Piantini",
    imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/rooms/oceanpavillion.webp",
    reach: "1.1M Alcance",
    likes: "19.3K",
    metricsResult: "12 Citas de Venta Agendadas",
    caption: "Captación de inversionistas dominicanos y extranjeros interesados en rentabilidad de alquileres en el centro financiero.",
  },
  {
    id: "m4",
    category: "hospitality",
    handle: "@boutique_hotel_lasterrenas",
    clientName: "Las Terrenas Eco Resort",
    title: "Eco Bungalows & Playa",
    imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/journeys/sailing.webp",
    reach: "2.1M Alcance",
    likes: "31.2K",
    metricsResult: "88% Ocupación Directa",
    caption: "Contenido envolvente de estilo de vida tropical produciendo tráfico constante al motor directo de reservaciones.",
  },
  {
    id: "m5",
    category: "automotive",
    handle: "@autohaus_concesionario_rd",
    clientName: "AutoHaus Dominicana",
    title: "Lanzamiento SUV Luxury 2026",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4?_wi=1",
    reach: "850K Alcance",
    likes: "18.4K",
    metricsResult: "48 Test Drives Agendados por DM",
    caption: "Presentación cinematográfica de modelos de alta gama con llamadas a la acción para agendar prueba de manejo inmediata.",
  },
  {
    id: "m6",
    category: "automotive",
    handle: "@autotech_taller_mecanico",
    clientName: "AutoTech Taller Mecánico",
    title: "Detallado & Servicio Mecánico",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4?_wi=1",
    reach: "620K Alcance",
    likes: "12.9K",
    metricsResult: "+210 Citas de Taller Captadas",
    caption: "Videos demostrativos de trabajo de precisión en taller técnico creando máxima confianza comercial en clientes de Santiago.",
  },
  {
    id: "m7",
    category: "realestate",
    handle: "@capcana_penthouses",
    clientName: "Marina Cap Cana Residences",
    title: "Apartamentos Frente al Mar",
    imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/amenities/pool.jpg",
    reach: "980K Alcance",
    likes: "15.1K",
    metricsResult: "+14 Cierres Inmobiliarios",
    caption: "Fotografía y videos de alta estética resaltando acabados marinos, amenidades y playa privada.",
  },
  {
    id: "m8",
    category: "hospitality",
    handle: "@bayahibe_catamaran",
    clientName: "Excursiones Catamarán Bayahíbe",
    title: "Aventura Náutica & Saona",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/marbella/hero/hero.mp4?_wi=1",
    reach: "1.7M Alcance",
    likes: "22.6K",
    metricsResult: "+320 Tours Vendidos en Temporada",
    caption: "Experiencia en aguas cristalinas capturada con drones 4K y reels de alta retención para turistas.",
  },
];

export default function InstagramShowcase() {
  const [activeTab, setActiveTab] = useState<"all" | "realestate" | "hospitality" | "automotive">("all");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const filteredItems = galleryItems.filter(
    (item) => activeTab === "all" || item.category === activeTab
  );

  const visibleItems = filteredItems.slice(0, visibleCount);

  const handleOpenModal = (index: number) => {
    setSelectedIndex(index);
    setIsMuted(false); // Enable sound when opening fullscreen modal
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! === filteredItems.length - 1 ? 0 : prev! + 1));
    }
  };

  const toggleSound = () => {
    setIsMuted((prev) => !prev);
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !isMuted;
    }
  };

  const selectedItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <section className="py-16 md:py-24 w-content-width mx-auto">
      <ScrollReveal variant="slide-up">
        <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col items-center">
          <ActiveBadge text="Mosaico Interactivo & Galería Cinematográfica" className="mb-3" />
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            Galería Mosaico de Producción
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            Muestra visual de fotos y videos producidos para inmobiliarias, resorts y empresas. Haz clic en cualquier pieza para explorarla a pantalla completa con activación de sonido.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6">
            <button
              onClick={() => { setActiveTab("all"); setVisibleCount(6); }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "all"
                  ? "primary-button text-white shadow-md"
                  : "bg-card text-foreground/80 hover:text-foreground border border-white/10"
              }`}
            >
              Todos ({galleryItems.length})
            </button>
            <button
              onClick={() => { setActiveTab("realestate"); setVisibleCount(6); }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "realestate"
                  ? "primary-button text-white shadow-md"
                  : "bg-card text-foreground/80 hover:text-foreground border border-white/10"
              }`}
            >
              🏢 Bienes Raíces
            </button>
            <button
              onClick={() => { setActiveTab("hospitality"); setVisibleCount(6); }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "hospitality"
                  ? "primary-button text-white shadow-md"
                  : "bg-card text-foreground/80 hover:text-foreground border border-white/10"
              }`}
            >
              🏨 Hoteles & Resorts
            </button>
            <button
              onClick={() => { setActiveTab("automotive"); setVisibleCount(6); }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "automotive"
                  ? "primary-button text-white shadow-md"
                  : "bg-card text-foreground/80 hover:text-foreground border border-white/10"
              }`}
            >
              🏎️ Concesionarios
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* 2-Column Mobile & 3-4 Column Desktop Pinterest Mosaic Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {visibleItems.map((item, idx) => (
          <ScrollReveal key={item.id} variant="slide-up" delay={idx * 0.05}>
            <div
              onClick={() => handleOpenModal(idx)}
              className="group relative rounded-2xl overflow-hidden card border border-white/10 cursor-pointer hover:border-primary/60 transition-all duration-300 aspect-3/4 flex flex-col justify-between"
            >
              {item.videoSrc ? (
                <video
                  src={item.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}

              {/* Top Badges */}
              <div className="relative z-10 p-2.5 sm:p-3 flex items-center justify-between bg-gradient-to-b from-black/80 via-black/30 to-transparent">
                <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-black/60 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <Eye className="size-3" />
                  <span>{item.reach}</span>
                </span>

                <div className="size-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                  {item.videoSrc ? <Play className="size-3.5 fill-white" /> : <Instagram className="size-3.5" />}
                </div>
              </div>

              {/* Bottom Hover Caption */}
              <div className="relative z-10 p-2.5 sm:p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <p className="text-xs sm:text-sm font-bold text-white truncate">
                  {item.title}
                </p>
                <p className="text-[10px] sm:text-xs text-white/80 truncate">
                  {item.clientName}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Button: Ver Más */}
      {visibleCount < filteredItems.length && (
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="px-6 py-3 rounded-full primary-button font-bold text-xs sm:text-sm shadow-lg flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
          >
            <Grid className="size-4" />
            <span>Ver más contenido ({filteredItems.length - visibleCount} restantes)</span>
          </button>
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX / MODAL WITH SLIDE NAVIGATION & UNMUTE AUDIO CONTROL */}
      {selectedItem && (
        <div className="fixed inset-0 z-10000 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-300">
          
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10020 size-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
            aria-label="Cerrar vista previa"
          >
            <X className="size-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-10020 size-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="size-7" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-10020 size-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
            aria-label="Siguiente"
          >
            <ChevronRight className="size-7" />
          </button>

          {/* Modal Card Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#14141a] rounded-3xl overflow-hidden border border-white/15 flex flex-col md:flex-row shadow-2xl">
            
            {/* Left/Top Media Viewer */}
            <div className="relative w-full md:w-3/5 aspect-9/16 md:aspect-auto max-h-[55vh] md:max-h-[85vh] bg-black flex items-center justify-center overflow-hidden">
              {selectedItem.videoSrc ? (
                <>
                  <video
                    ref={modalVideoRef}
                    src={selectedItem.videoSrc}
                    autoPlay
                    loop
                    playsInline
                    muted={isMuted}
                    className="w-full h-full object-contain"
                  />

                  {/* Audio Toggle Button */}
                  <button
                    onClick={toggleSound}
                    className="absolute bottom-4 left-4 z-20 px-4 py-2 rounded-full bg-black/80 hover:bg-primary border border-white/20 text-white font-semibold text-xs flex items-center gap-2 backdrop-blur-md transition-all cursor-pointer shadow-lg"
                  >
                    {isMuted ? (
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
                  src={selectedItem.imageSrc}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* Right/Bottom Project Info Panel */}
            <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#14141a] border-t md:border-t-0 md:border-l border-white/10 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">
                    {selectedItem.handle}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    {selectedItem.reach}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {selectedItem.title}
                </h3>

                <p className="text-xs font-semibold text-foreground/60">
                  {selectedItem.clientName}
                </p>

                <p className="text-sm text-foreground/80 leading-relaxed pt-2">
                  {selectedItem.caption}
                </p>

                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-start gap-3">
                  <TrendingUp className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-white">Impacto Comercial Medible</p>
                    <p className="text-xs text-foreground/80 mt-0.5">{selectedItem.metricsResult}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-2.5 mt-6">
                <a
                  href="/servicios#briefing"
                  className="w-full py-3 px-4 rounded-xl primary-button font-bold text-xs sm:text-sm text-center shadow-md transition-transform hover:scale-102"
                >
                  Solicitar Asesoría para Mi Marca
                </a>
                <div className="flex items-center justify-between text-xs text-foreground/60 px-1">
                  <span className="flex items-center gap-1">
                    <Heart className="size-3.5 text-rose-500 fill-rose-500" /> {selectedItem.likes} Me gusta
                  </span>
                  <span>Crowned RD</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
