import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import { TrendingUp, Filter, CheckCircle2, ArrowRight, Zap, Users, MessageSquare } from "lucide-react";

interface SalesFunnelSectionProps {
  tag?: string;
  title?: string;
  description?: string;
  textAnimation?: "slide-up" | "fade-blur" | "fade";
}

export default function SalesFunnelSection({
  tag = "Embudo de Ventas Sencillo",
  title = "Cómo Convertimos tu Audiencia Orgánica en Clientes Potenciales",
  description = "Estructuramos un proceso simple y efectivo de 3 etapas para transformar el alcance y la atención ganada en redes sociales en oportunidades reales de venta.",
  textAnimation = "slide-up",
}: SalesFunnelSectionProps) {
  const steps = [
    {
      number: "01",
      icon: TrendingUp,
      title: "Atracción Orgánica de Calidad",
      subtitle: "Captación de Atención",
      description: "Producimos videos y piezas narrativas con ganchos de alta retención. Captamos a tu audiencia ideal en Instagram y TikTok de forma orgánica sin depender únicamente de pauta publicitaria.",
      highlights: ["Reels & TikToks Cinematográficos", "Ganchos Visuales y Narrativos", "Segmentación por Contenido"],
      badge: "Paso 1: Atraer",
    },
    {
      number: "02",
      icon: Filter,
      title: "Captura & Calificación Directa",
      subtitle: "Filtro de Clientes Potenciales",
      description: "Guiamos a los usuarios interesados hacia llamadas a la acción muy claras: interactuar por mensaje directo (DM), llenar un formulario rápido o escribirnos a WhatsApp.",
      highlights: ["Mensajes Directos Persuasivos", "Formulario Optimizado de Calificación", "Filtrado por Negocio y Sector"],
      badge: "Paso 2: Capturar",
    },
    {
      number: "03",
      icon: CheckCircle2,
      title: "Conversión & Cierre Comercial",
      subtitle: "Atención en < 24 Horas",
      description: "Conectamos las solicitudes con respuestas automatizadas y personalizadas en menos de 24 horas para agendar citas, recorridos de inmuebles o reservas confirmadas.",
      highlights: ["Respuesta Rápida Garantizada", "Agendamiento de Llamadas / Visitas", "Cierre de Ventas Inmobiliarias & Reservas"],
      badge: "Paso 3: Convertir",
    },
  ];

  return (
    <section aria-label="Sección Embudo de Ventas" className="py-16 md:py-24 relative overflow-hidden">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="slide-up" className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="px-3.5 py-1.5 mb-4 text-xs md:text-sm card rounded-full w-fit flex items-center gap-2 border border-border/60">
            <Zap className="size-4 text-primary" />
            <p className="font-medium">{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={true}
            tag="h2"
            className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-semibold leading-[1.15] max-w-4xl text-balance"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mt-4 opacity-90 text-balance"
          />
        </ScrollReveal>

        {/* Funnel Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <ScrollReveal key={step.number} variant="slide-up" delay={index * 0.15}>
                <div className="card rounded-2xl p-6 md:p-8 flex flex-col h-full border border-border/60 hover:border-primary/40 transition-all duration-300 relative group">
                  {/* Step Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                        <IconComponent className="size-6" />
                      </div>
                      <span className="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-secondary/80 text-foreground/80 border border-border/40">
                        {step.badge}
                      </span>
                    </div>
                    <span className="text-3xl md:text-4xl font-bold font-mono text-foreground/20 group-hover:text-primary/40 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider font-semibold text-primary/90 mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-6 flex-grow">
                    {step.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="pt-4 border-t border-border/40 flex flex-col gap-2">
                    {step.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-foreground/90">
                        <ArrowRight className="size-3.5 text-primary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Callout Footer */}
        <ScrollReveal variant="fade" delay={0.4} className="mt-10 md:mt-14">
          <div className="card rounded-xl p-5 md:p-6 border border-primary/20 bg-primary/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <div className="size-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <Users className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-sm md:text-base font-semibold text-foreground">
                  Transformamos visualizaciones en conversaciones de venta reales
                </p>
                <p className="text-xs md:text-sm text-foreground/75">
                  Especial para bienes raíces, hotelería, turismo y empresas que buscan crecer con contenido orgánico.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold primary-button rounded-lg shrink-0 flex items-center gap-2"
            >
              <MessageSquare className="size-4" />
              <span>Iniciar Embudo Ahora</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
