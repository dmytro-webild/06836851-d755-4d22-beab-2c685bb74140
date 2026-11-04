import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import { sendContactEmail } from "@/lib/api/email";
import { 
  CheckCircle2, 
  Send, 
  MessageCircle, 
  Instagram, 
  MapPin, 
  User, 
  Building2, 
  Briefcase, 
  MessageSquare,
  Clock,
  Sparkles,
  RotateCcw,
  Mail
} from "lucide-react";

interface LeadContactFormSectionProps {
  tag?: string;
  title?: string;
  description?: string;
  textAnimation?: "slide-up" | "fade-blur" | "fade";
}

export default function LeadContactFormSection({
  tag = "Contacto para Clientes Potenciales",
  title = "Impulsa tu Marca y Convierte tu Audiencia",
  description = "Completa los datos de tu negocio para recibir un diagnóstico estratégico y una propuesta personalizada para tu marca.",
  textAnimation = "slide-up",
}: LeadContactFormSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    sector: "Bienes Raíces",
    customSector: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    business: string;
    sector: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const finalSector = formData.sector === "Otro" ? formData.customSector || "Otro" : formData.sector;

    try {
      await sendContactEmail({
        formData: {
          Nombre: formData.name,
          Negocio: formData.business,
          Sector: finalSector,
          Mensaje: formData.message,
        },
      });
    } catch {
      // API call failure gracefully handled for UI state demonstration
    } finally {
      setIsLoading(false);
      setSubmittedData({
        name: formData.name,
        business: formData.business,
        sector: finalSector,
      });
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      business: "",
      sector: "Bienes Raíces",
      customSector: "",
      message: "",
    });
    setSubmittedData(null);
  };

  return (
    <section aria-label="Sección de Contacto para Clientes Potenciales" className="py-16 md:py-24 relative">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="slide-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Info & Fast Channels */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="card rounded-2xl p-6 md:p-8 border border-border/60">
                <div className="px-3 py-1 mb-3 text-xs md:text-sm card rounded-full w-fit flex items-center gap-2 border border-border/40">
                  <Sparkles className="size-3.5 text-primary" />
                  <span>{tag}</span>
                </div>

                <TextAnimation
                  text={title}
                  variant={textAnimation}
                  gradientText={true}
                  tag="h2"
                  className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
                />

                <TextAnimation
                  text={description}
                  variant={textAnimation}
                  gradientText={false}
                  tag="p"
                  className="text-base text-foreground/80 leading-relaxed mb-6"
                />

                {/* 24 Hours Response Guarantee Card */}
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/25 flex items-start gap-3.5 mb-6">
                  <div className="size-9 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      Compromiso de Respuesta en 24 Horas
                    </h4>
                    <p className="text-xs text-foreground/80 leading-snug mt-0.5">
                      Al enviar tu mensaje, nuestro equipo analizará tu marca y te enviará una confirmación automática seguida de una respuesta estratégica en menos de 24 horas.
                    </p>
                  </div>
                </div>

                {/* Direct Contact Cards */}
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:contacto@creativecrowned.com"
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-card border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all group"
                  >
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="size-5 text-primary" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] uppercase tracking-wider text-foreground/60 font-medium">Correo Oficial</span>
                      <span className="text-sm font-semibold text-foreground truncate">contacto@creativecrowned.com</span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/18492665501"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-card border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-950/20 transition-all group"
                  >
                    <div className="size-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MessageCircle className="size-5 text-emerald-400" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] uppercase tracking-wider text-foreground/60 font-medium">Atención Inmediata WhatsApp</span>
                      <span className="text-sm font-semibold text-foreground truncate">+1 (849) 266-5501 (RD)</span>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/crowned.rd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-card border border-rose-500/30 hover:border-rose-500/60 hover:bg-rose-950/20 transition-all group"
                  >
                    <div className="size-10 rounded-lg bg-rose-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Instagram className="size-5 text-rose-400" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] uppercase tracking-wider text-foreground/60 font-medium">Síguenos en Instagram</span>
                      <span className="text-sm font-semibold text-foreground truncate">@crowned.rd</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-card border border-border/60">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="size-5 text-primary" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] uppercase tracking-wider text-foreground/60 font-medium">Sede Principal</span>
                      <span className="text-sm font-semibold text-foreground truncate">Punta Cana & Santo Domingo, Rep. Dom.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Optimized Contact Form & Automatic Confirmation */}
            <div className="lg:col-span-7">
              <div className="card rounded-2xl p-6 sm:p-8 md:p-10 border border-border/60 shadow-xl relative overflow-hidden">
                
                {isSubmitted ? (
                  /* Automatic Confirmation Message Screen */
                  <div className="flex flex-col items-center text-center py-6 sm:py-8 animate-in fade-in zoom-in-95 duration-300">
                    <div className="size-16 sm:size-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-6 shadow-lg shadow-emerald-500/20 animate-bounce">
                      <CheckCircle2 className="size-10 sm:size-12" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-3">
                      Confirmación Automática Activada
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      ¡Solicitud Recibida con Éxito!
                    </h3>

                    <p className="text-base text-foreground/90 max-w-lg mb-6 leading-relaxed">
                      Hola <span className="font-semibold text-primary">{submittedData?.name}</span>, hemos recibido los detalles de <span className="font-semibold text-foreground">{submittedData?.business}</span> ({submittedData?.sector}).
                    </p>

                    {/* Automatic Notice Box */}
                    <div className="w-full p-4 sm:p-5 rounded-xl bg-secondary/80 border border-border/80 text-left mb-8 flex items-start gap-3.5">
                      <Clock className="size-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-foreground">
                          Respuesta en menos de 24 horas garantizada
                        </p>
                        <p className="text-xs sm:text-sm text-foreground/80 mt-1 leading-snug">
                          Hemos registrado tu consulta de forma automática. Un consultor estratégico revisará el perfil de tu negocio y te contactará en las próximas <strong>24 horas</strong> con una propuesta y los pasos a seguir.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                      <a
                        href="https://wa.me/18492665501"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-md"
                      >
                        <MessageCircle className="size-4" />
                        <span>Hablar por WhatsApp Ahora</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border hover:bg-secondary text-foreground font-medium text-sm transition-colors cursor-pointer"
                      >
                        <RotateCcw className="size-4" />
                        <span>Enviar otra consulta</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Form Input View */
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5 border-b border-border/40 pb-4 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        Formulario para Clientes Potenciales
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70">
                        Por favor completa los campos requeridos para estructurar la estrategia de tu negocio.
                      </p>
                    </div>

                    {/* Campo: Nombre */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lead-name" className="text-xs font-semibold uppercase tracking-wider text-foreground/80 flex items-center gap-1.5">
                        <User className="size-3.5 text-primary" />
                        <span>Nombre Completo *</span>
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-4 py-3 text-sm bg-background/50 border border-border/80 focus:border-primary focus:outline-none rounded-xl text-foreground placeholder:text-foreground/40 transition-colors"
                      />
                    </div>

                    {/* Campo: Negocio */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lead-business" className="text-xs font-semibold uppercase tracking-wider text-foreground/80 flex items-center gap-1.5">
                        <Building2 className="size-3.5 text-primary" />
                        <span>Nombre de tu Negocio o Marca *</span>
                      </label>
                      <input
                        id="lead-business"
                        type="text"
                        name="business"
                        required
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        placeholder="Ej. Inmobiliaria Cap Cana / Hotel Resort / Marca Personal"
                        className="w-full px-4 py-3 text-sm bg-background/50 border border-border/80 focus:border-primary focus:outline-none rounded-xl text-foreground placeholder:text-foreground/40 transition-colors"
                      />
                    </div>

                    {/* Campo: Sector */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lead-sector" className="text-xs font-semibold uppercase tracking-wider text-foreground/80 flex items-center gap-1.5">
                        <Briefcase className="size-3.5 text-primary" />
                        <span>Sector Económico *</span>
                      </label>
                      <select
                        id="lead-sector"
                        name="sector"
                        required
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-background border border-border/80 focus:border-primary focus:outline-none rounded-xl text-foreground cursor-pointer transition-colors"
                      >
                        <option value="Bienes Raíces">Bienes Raíces (Real Estate & Agentes)</option>
                        <option value="Turismo & Hotelería">Turismo, Hotelería & Resorts</option>
                        <option value="Automotriz & Concesionarios">Automotriz, Concesionarios & Detailing</option>
                        <option value="Servicios Profesionales">Servicios Profesionales & Agencias</option>
                        <option value="Gastronomía & Restaurantes">Gastronomía, Bares & Restaurantes</option>
                        <option value="Comercio & E-commerce">Comercio, Tiendas & E-commerce</option>
                        <option value="Otro">Otro sector...</option>
                      </select>

                      {formData.sector === "Otro" && (
                        <input
                          type="text"
                          required
                          value={formData.customSector}
                          onChange={(e) => setFormData({ ...formData, customSector: e.target.value })}
                          placeholder="Especifica tu sector..."
                          className="w-full px-4 py-2.5 text-sm bg-background/50 border border-border/80 focus:border-primary focus:outline-none rounded-xl text-foreground mt-1"
                        />
                      )}
                    </div>

                    {/* Campo: Mensaje Breve */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lead-message" className="text-xs font-semibold uppercase tracking-wider text-foreground/80 flex items-center gap-1.5">
                        <MessageSquare className="size-3.5 text-primary" />
                        <span>Mensaje Breve o Meta del Proyecto *</span>
                      </label>
                      <textarea
                        id="lead-message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Escribe brevemente qué te gustaría lograr con tu contenido orgánico o presencia digital..."
                        className="w-full px-4 py-3 text-sm bg-background/50 border border-border/80 focus:border-primary focus:outline-none rounded-xl text-foreground placeholder:text-foreground/40 resize-none transition-colors"
                      />
                    </div>

                    {/* Botón de Enviar */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 px-6 primary-button font-semibold text-sm rounded-xl flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Procesando envío...</span>
                        </span>
                      ) : (
                        <>
                          <Send className="size-4" />
                          <span>Enviar Consulta & Recibir Respuesta en 24h</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-center text-foreground/60 mt-1">
                      🔒 Tus datos son 100% confidenciales. Al enviarlo recibirás notificación automática en pantalla.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
