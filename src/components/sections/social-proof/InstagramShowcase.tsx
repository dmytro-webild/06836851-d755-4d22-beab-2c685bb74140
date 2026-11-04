import { useState } from "react";
import { 
  Instagram, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  CheckCircle2, 
  TrendingUp, 
  MapPin, 
  Eye, 
  Sparkles,
  Users,
  Play
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ActiveBadge from "@/components/ui/ActiveBadge";
import ImageOrVideo from "@/components/ui/ImageOrVideo";

interface InstagramPost {
  id: string;
  category: "all" | "realestate" | "hospitality" | "automotive";
  handle: string;
  clientName: string;
  verified: boolean;
  location: string;
  avatarSrc: string;
  imageSrc?: string;
  videoSrc?: string;
  likes: string;
  comments: string;
  reach: string;
  caption: string;
  metricsResult: string;
  tagLabel: string;
  date: string;
}

const posts: InstagramPost[] = [
  {
    id: "1",
    category: "realestate",
    handle: "@villas_capcana_realty",
    clientName: "Cap Cana Luxury Real Estate",
    verified: true,
    location: "Cap Cana, República Dominicana",
    avatarSrc: "https://randomuser.me/api/portraits/women/68.jpg",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/about-video.mp4?_wi=1",
    likes: "28,450",
    comments: "1,420",
    reach: "1.9M Alcance",
    caption: "🏡 Recorrido exclusivo por esta villa de lujo en Cap Cana con muelle privado y vista marina 🌊 Un proyecto diseñado para inversionistas que buscan alta rentabilidad. Agenda una visita privada por DM. #RealEstateRD #BienesRaicesRD #CapCana #AgentesInmobiliarios #CrownedSales",
    metricsResult: "+18 Inversionistas Captados & Venta Cerrada",
    tagLabel: "Agencia Inmobiliaria de Lujo",
    date: "HACE 1 DÍA",
  },
  {
    id: "2",
    category: "hospitality",
    handle: "@puntacana_luxury_resort",
    clientName: "Grand Resort & Spa Punta Cana",
    verified: true,
    location: "Punta Cana, República Dominicana",
    avatarSrc: "https://randomuser.me/api/portraits/women/44.jpg",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4",
    likes: "24,850",
    comments: "1,240",
    reach: "1.4M Alcance",
    caption: "¡El paraíso caribeño te espera! 🌴☀️ Despierta con el sonido de las olas turquesa en nuestras suites oceanfront en Punta Cana. Reserva con un 20% OFF exclusivo para esta temporada. #TurismoRD #PuntaCana #ResortsRD #PlayasCaribe #CrownedSMM",
    metricsResult: "+140 Reservas Directas Generadas",
    tagLabel: "Resort 5 Estrellas RD",
    date: "HACE 2 DÍAS",
  },
  {
    id: "3",
    category: "realestate",
    handle: "@agente_marco_pena",
    clientName: "Marco Peña | Broker Inmobiliario",
    verified: true,
    location: "Santo Domingo (Piantini), Rep. Dom.",
    avatarSrc: "https://randomuser.me/api/portraits/men/46.jpg",
    imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/rooms/oceanpavillion.webp",
    likes: "19,300",
    comments: "980",
    reach: "1.1M Alcance",
    caption: "🏢 ¿Buscas invertir en un Penthouse en Piantini con retorno garantizado? Te muestro cada detalle en este tour guiado 🎥 Escríbeme por mensaje directo para enviarte el dossier completo. #AgenteInmobiliario #RealEstateAgent #SantoDomingo #InversionesRD",
    metricsResult: "12 Citas de Venta Agendadas",
    tagLabel: "Agente Inmobiliario Top Producer",
    date: "HACE 3 DÍAS",
  },
  {
    id: "4",
    category: "hospitality",
    handle: "@boutique_hotel_lasterrenas",
    clientName: "Las Terrenas Eco Resort & Villas",
    verified: true,
    location: "Las Terrenas, Samaná, Rep. Dom.",
    avatarSrc: "https://randomuser.me/api/portraits/women/28.jpg",
    imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/journeys/sailing.webp",
    likes: "31,200",
    comments: "1,580",
    reach: "2.1M Alcance",
    caption: "Desconéctate en medio de palmeras y bungalows frente al mar en Las Terrenas. Campaña de contenido cinematográfico enfocada en venta directa de estadías. 🌿🌊 #LasTerrenas #Samana #HotelesRD #TurismoSostenible",
    metricsResult: "88% Ocupación Directa sin Comisiones",
    tagLabel: "Hotel Boutique & Resort",
    date: "HACE 4 DÍAS",
  },
  {
    id: "5",
    category: "automotive",
    handle: "@autohaus_concesionario_rd",
    clientName: "AutoHaus Dominicana",
    verified: true,
    location: "Santo Domingo, República Dominicana",
    avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4",
    likes: "18,420",
    comments: "892",
    reach: "850K Alcance",
    caption: "Llegó la nueva línea SUV Luxury 2026 a nuestro showroom 🔥 Rendimiento, confort y elegancia para las calles de RD. Pide tu prueba de manejo por DM hoy mismo. 🏎️💨 #ConcesionarioRD #AutosRD #VehiculosRD #SantoDomingo #CrownedManagement",
    metricsResult: "48 Test Drives Agendados por DM",
    tagLabel: "Concesionario Automotriz",
    date: "HACE 5 DÍAS",
  },
  {
    id: "6",
    category: "automotive",
    handle: "@autotech_taller_mecanico",
    clientName: "AutoTech Taller Mecánico Especializado",
    verified: true,
    location: "Santiago de los Caballeros, Rep. Dom.",
    avatarSrc: "https://randomuser.me/api/portraits/men/75.jpg",
    videoSrc: "https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4",
    likes: "12,940",
    comments: "645",
    reach: "620K Alcance",
    caption: "Diagnóstico computarizado, mantenimiento preventivo y reparación especializada multimarca en Santiago. Mantén tu auto al 100% con técnicos certificados. 🛠️🚗 Agenda por WhatsApp en el link del perfil. #TallerMecanicoRD #MantenimientoRD #MecanicaRD #SantiagoRD",
    metricsResult: "+210 Citas de Taller Captadas",
    tagLabel: "Taller Mecánico Especializado",
    date: "HACE 6 DÍAS",
  },
];

export default function InstagramShowcase() {
  const [activeTab, setActiveTab] = useState<"all" | "realestate" | "hospitality" | "automotive">("all");

  const filteredPosts = posts.filter(
    (post) => activeTab === "all" || post.category === activeTab
  );

  return (
    <section className="py-20 w-content-width mx-auto">
      <ScrollReveal variant="slide-up">
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <ActiveBadge text="Gestión de Redes Sociales en Vivo" className="mb-4" />
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            Contenido con Propósito & Resultados Reales
          </h2>
          <p className="text-lg text-foreground/80">
            Aplicamos storytelling y embudos de ventas en la gestión de Instagram. Aquí puedes ver la ejecución visual y el impacto en ventas para Agentes & Agencias de Bienes Raíces, Hoteles & Resorts, y marcas destacadas.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "all"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground/70 hover:text-foreground border border-border"
              }`}
            >
              Todos los Clientes ({posts.length})
            </button>
            <button
              onClick={() => setActiveTab("realestate")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "realestate"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground/70 hover:text-foreground border border-border"
              }`}
            >
              🏢 Bienes Raíces & Agentes
            </button>
            <button
              onClick={() => setActiveTab("hospitality")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "hospitality"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground/70 hover:text-foreground border border-border"
              }`}
            >
              🏨 Hoteles & Resorts
            </button>
            <button
              onClick={() => setActiveTab("automotive")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "automotive"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground/70 hover:text-foreground border border-border"
              }`}
            >
              🏎️ Concesionarios & Talleres
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Grid of Instagram Mockups */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <ScrollReveal key={post.id} variant="slide-up" delay={0.1}>
            <div className="bg-card border border-border/80 rounded-xl overflow-hidden shadow-lg hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
              {/* Instagram Header */}
              <div className="p-4 flex items-center justify-between border-b border-border/50 bg-card/60">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={post.avatarSrc}
                      alt={post.clientName}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/60 p-0.5"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-gradient-to-tr from-amber-500 to-pink-500 rounded-full p-0.5 text-white">
                      <Instagram className="w-2.5 h-2.5" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-sm text-foreground hover:underline cursor-pointer">
                        {post.handle}
                      </span>
                      {post.verified && (
                        <CheckCircle2 className="w-4 h-4 text-sky-500 fill-sky-500/20" />
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-foreground/60">
                      <MapPin className="w-3 h-3 text-primary/70" />
                      <span className="truncate max-w-[170px]">{post.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full font-medium">
                  <Sparkles className="w-3 h-3" />
                  <span>Managed</span>
                </div>
              </div>

              {/* Media Container */}
              <div className="relative aspect-square bg-black overflow-hidden group">
                <ImageOrVideo
                  imageSrc={post.imageSrc}
                  videoSrc={post.videoSrc}
                  className="w-full h-full object-cover"
                />
                
                {/* Media overlay indicators */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium border border-white/20">
                  {post.videoSrc ? (
                    <>
                      <Play className="w-3 h-3 fill-white" />
                      <span>Reel</span>
                    </>
                  ) : (
                    <>
                      <Instagram className="w-3 h-3" />
                      <span>Post</span>
                    </>
                  )}
                </div>

                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-emerald-400 text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 font-semibold border border-emerald-500/30">
                  <Eye className="w-3 h-3" />
                  <span>{post.reach}</span>
                </div>

                {/* Bottom Result Banner over media */}
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-lg flex items-center justify-between shadow-lg backdrop-blur-sm">
                    <span className="flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {post.metricsResult}
                    </span>
                    <span className="text-[10px] opacity-80 uppercase tracking-wider">SMM Impact</span>
                  </div>
                </div>
              </div>

              {/* Instagram Action Bar */}
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 text-foreground">
                    <div className="flex items-center gap-4">
                      <button className="hover:text-red-500 transition-colors flex items-center gap-1">
                        <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                        <span className="text-xs font-semibold">{post.likes}</span>
                      </button>
                      <button className="hover:text-primary transition-colors flex items-center gap-1">
                        <MessageCircle className="w-5 h-5 text-foreground/80" />
                        <span className="text-xs font-semibold">{post.comments}</span>
                      </button>
                      <button className="hover:text-primary transition-colors">
                        <Share2 className="w-5 h-5 text-foreground/80" />
                      </button>
                    </div>
                    <button className="hover:text-primary transition-colors">
                      <Bookmark className="w-5 h-5 text-foreground/80" />
                    </button>
                  </div>

                  {/* Caption */}
                  <p className="text-xs text-foreground/90 line-clamp-3 leading-relaxed mb-3">
                    <span className="font-bold mr-1.5">{post.handle}</span>
                    {post.caption}
                  </p>
                </div>

                {/* Post Footer */}
                <div className="pt-3 border-t border-border/40 flex items-center justify-between text-[11px] text-foreground/60">
                  <span className="font-medium text-accent">{post.tagLabel}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Bottom SMM Summary Callout */}
      <ScrollReveal variant="slide-up" delay={0.2}>
        <div className="mt-14 p-6 md:p-8 rounded-2xl bg-card border border-primary/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg">
              <Instagram className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                ¿Quieres que gestionemos las redes sociales de tu marca?
              </h3>
              <p className="text-sm text-foreground/80 mt-1">
                Estrategia mensual de contenido, Reels para agentes de bienes raíces, proyectos inmobiliarios, hoteles, resorts y empresas, enfocada en captación directa de clientes y ventas.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shrink-0 shadow-md flex items-center gap-2"
          >
            <span>Ver Plan de Redes</span>
            <Users className="w-4 h-4" />
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
