import { useState } from "react";
import { motion } from "motion/react";
import {
  Building2,
  MapPin,
  Globe,
  Share2,
  Users,
  CheckCircle2,
  Send,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  RotateCcw,
  Check,
  ShieldCheck,
  Briefcase,
  Mail,
  Phone,
  User,
  Target
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { sendContactEmail } from "@/lib/api/email";

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

export default function AdviceRequestPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [formState, setFormState] = useState({
    companyName: "",
    locations: "",
    sector: "Bienes Raíces",
    customSector: "",
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
  const [errorMessage, setErrorMessage] = useState("");

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

  const validateStep = (step: number): boolean => {
    setErrorMessage("");
    if (step === 1) {
      if (!formState.companyName.trim()) {
        setErrorMessage("Por favor ingresa el nombre de tu empresa o marca.");
        return false;
      }
      if (!formState.locations.trim()) {
        setErrorMessage("Por favor especifica las sedes o ubicaciones.");
        return false;
      }
    } else if (step === 2) {
      if (formState.selectedServices.length === 0) {
        setErrorMessage("Por favor selecciona al menos un servicio que requieras.");
        return false;
      }
    } else if (step === 3) {
      if (!formState.contactName.trim()) {
        setErrorMessage("Por favor ingresa tu nombre de contacto.");
        return false;
      }
      if (!formState.email.trim() || !formState.email.includes("@")) {
        setErrorMessage("Por favor ingresa un correo electrónico válido.");
        return false;
      }
      if (!formState.phone.trim()) {
        setErrorMessage("Por favor ingresa tu número de teléfono o WhatsApp.");
        return false;
      }
    }
    return true;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handlePrevStep = () => {
    setErrorMessage("");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    const chosenServiceNames = formState.selectedServices
      .map((id) => availableServices.find((s) => s.id === id)?.label)
      .filter(Boolean)
      .join(", ");

    const finalSector = formState.sector === "Otro" ? formState.customSector || "Otro" : formState.sector;

    try {
      await sendContactEmail({
        formData: {
          "Nombre de Empresa": formState.companyName,
          "Sedes / Ubicaciones": formState.locations,
          "Sector Económico": finalSector,
          "Redes Sociales": formState.socialMedia || "No especificado",
          "Sitio Web": formState.website || "No especificado",
          "Contacto Principal": `${formState.contactName} (${formState.role || "Representante"})`,
          "Correo Electrónico": formState.email,
          "Teléfono / WhatsApp": formState.phone,
          "Número de Empleados": formState.employeeCount,
          "Presupuesto a Destinar": formState.budget,
          "Servicios Seleccionados": chosenServiceNames || "Ninguno",
          "Objetivos del Proyecto": formState.additionalNotes || "Sin comentarios adicionales",
        },
      });
    } catch {
      // API call fallback
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="w-full pt-28 sm:pt-36 pb-24 min-h-screen flex flex-col justify-between overflow-x-hidden">
      
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="slide-up">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full card border border-white/10 shadow-sm mb-4">
              <Sparkles className="size-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-foreground">
                Solicitud de Asesoría Estratégica & Briefing Oficial
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground uppercase mb-4">
              Solicitar Asesoría 1:1
            </h1>

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              Completa el briefing paso a paso para analizar las metas comerciales de tu negocio y entregarte una propuesta a medida con respuesta en menos de 24 horas.
            </p>
          </div>
        </ScrollReveal>

        {/* Multi-Step Carousel Container */}
        <div className="max-w-4xl mx-auto card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative">
          
          {isSubmitted ? (
            /* Confirmation View */
            <div className="py-8 text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
              <div className="size-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/60 flex items-center justify-center text-emerald-400 mb-6 shadow-xl shadow-emerald-500/20 animate-bounce">
                <CheckCircle2 className="size-12" />
              </div>

              <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-4">
                Confirmación Automática Activada
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                ¡Solicitud Recibida Con Éxito!
              </h2>

              <p className="text-base sm:text-lg text-foreground/85 max-w-2xl mb-8 leading-relaxed">
                Hola <span className="font-bold text-primary">{formState.contactName}</span>, hemos registrado el briefing de <span className="font-bold text-white">{formState.companyName}</span>. Nuestro equipo de dirección revisará tu perfil corporativo y te contactará en las próximas <span className="font-bold text-emerald-400">24 horas</span>.
              </p>

              <div className="w-full max-w-lg p-5 rounded-2xl bg-background/80 border border-white/10 text-left mb-8 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-foreground/60 border-b border-white/10 pb-2">
                  <span>Resumen de Solicitud</span>
                  <span className="font-mono text-primary">#CRW-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <p className="text-sm text-foreground">
                  <strong className="text-foreground/70">Empresa:</strong> {formState.companyName} ({formState.locations})
                </p>
                <p className="text-sm text-foreground">
                  <strong className="text-foreground/70">Presupuesto:</strong> {formState.budget}
                </p>
                <p className="text-sm text-foreground">
                  <strong className="text-foreground/70">Contacto:</strong> {formState.email} | {formState.phone}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://wa.me/18492665501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full primary-button font-bold text-sm shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <Send className="size-4" />
                  <span>Hablar por WhatsApp con un Consultor</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="px-6 py-3.5 rounded-full secondary-button font-semibold text-sm flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="size-4" />
                  <span>Enviar otra solicitud</span>
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Wizard Progress Bar Header */}
              <div className="mb-8 border-b border-white/10 pb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Paso {currentStep} de 3: {currentStep === 1 ? "Información de la Empresa" : currentStep === 2 ? "Servicios & Presupuesto" : "Contacto & Confirmación"}
                  </span>
                  <span className="text-xs font-mono font-bold text-foreground/70">
                    {Math.round((currentStep / 3) * 100)}% Completado
                  </span>
                </div>

                {/* Progress Bar Track */}
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "33%" }}
                    animate={{ width: `${(currentStep / 3) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Error Alert Box */}
              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <span>⚠️ {errorMessage}</span>
                </div>
              )}

              {/* STEP 1: EMPRESA Y SECTOR */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2 flex items-center gap-1.5">
                        <Building2 className="size-4 text-primary" />
                        <span>Nombre de la Empresa o Marca *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.companyName}
                        onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
                        placeholder="Ej. Cap Cana Real Estate / Hotel Resort"
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-white/15 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2 flex items-center gap-1.5">
                        <MapPin className="size-4 text-primary" />
                        <span>Sedes & Ubicaciones *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.locations}
                        onChange={(e) => setFormState({ ...formState, locations: e.target.value })}
                        placeholder="Ej. Punta Cana, Santo Domingo, Cap Cana"
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-white/15 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2 flex items-center gap-1.5">
                        <Briefcase className="size-4 text-primary" />
                        <span>Sector Económico *</span>
                      </label>
                      <select
                        value={formState.sector}
                        onChange={(e) => setFormState({ ...formState, sector: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-white/15 text-foreground focus:border-primary focus:outline-none text-sm transition-colors cursor-pointer"
                      >
                        <option value="Bienes Raíces">Bienes Raíces (Real Estate & Agentes)</option>
                        <option value="Turismo & Hotelería">Turismo, Hotelería & Resorts</option>
                        <option value="Automotriz & Concesionarios">Automotriz, Concesionarios & Detailing</option>
                        <option value="Servicios Profesionales">Servicios Profesionales & Agencias</option>
                        <option value="Gastronomía & Restaurantes">Gastronomía & Restaurantes</option>
                        <option value="Otro">Otro sector...</option>
                      </select>

                      {formState.sector === "Otro" && (
                        <input
                          type="text"
                          value={formState.customSector}
                          onChange={(e) => setFormState({ ...formState, customSector: e.target.value })}
                          placeholder="Especifica tu sector..."
                          className="w-full px-4 py-3 rounded-xl bg-background border border-white/15 text-foreground focus:border-primary focus:outline-none text-sm mt-2"
                        />
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2 flex items-center gap-1.5">
                        <Users className="size-4 text-primary" />
                        <span>Número de Empleados</span>
                      </label>
                      <select
                        value={formState.employeeCount}
                        onChange={(e) => setFormState({ ...formState, employeeCount: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-white/15 text-foreground focus:border-primary focus:outline-none text-sm transition-colors cursor-pointer"
                      >
                        <option value="1-5 empleados">1 - 5 empleados</option>
                        <option value="6-20 empleados">6 - 20 empleados</option>
                        <option value="21-50 empleados">21 - 50 empleados</option>
                        <option value="Más de 50 empleados">Más de 50 empleados</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2 flex items-center gap-1.5">
                        <Share2 className="size-4 text-primary" />
                        <span>Instagram / Redes Sociales</span>
                      </label>
                      <input
                        type="text"
                        value={formState.socialMedia}
                        onChange={(e) => setFormState({ ...formState, socialMedia: e.target.value })}
                        placeholder="Ej. @miempresa_rd"
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-white/15 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2 flex items-center gap-1.5">
                        <Globe className="size-4 text-primary" />
                        <span>Sitio Web Actual</span>
                      </label>
                      <input
                        type="text"
                        value={formState.website}
                        onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                        placeholder="Ej. https://miempresa.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-white/15 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: SERVICIOS Y PRESUPUESTO */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-1.5">
                      <Target className="size-4 text-primary" />
                      <span>Selecciona los Servicios que te Interesan (Elige uno o varios) *</span>
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
                                ? "bg-primary/15 border-primary text-foreground shadow-sm"
                                : "bg-background border-white/10 text-foreground/75 hover:border-white/20"
                            }`}
                          >
                            <div
                              className={`size-5 rounded flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                isSelected ? "bg-primary text-white" : "border border-white/20 bg-card"
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

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-3">
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
                            className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                              isSelected
                                ? "primary-button text-white border-primary shadow-md"
                                : "bg-background border-white/10 text-foreground/80 hover:border-white/30"
                            }`}
                          >
                            {range}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                      Objetivos Comerciales o Detalles Adicionales
                    </label>
                    <textarea
                      rows={3}
                      value={formState.additionalNotes}
                      onChange={(e) => setFormState({ ...formState, additionalNotes: e.target.value })}
                      placeholder="Cuéntanos brevemente qué resultados te gustaría lograr..."
                      className="w-full p-4 rounded-xl bg-background border border-white/15 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors resize-none"
                    />
                  </div>
                </motion.div>
              )}

              {/* STEP 3: CONTACTO Y CONFIRMACIÓN */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2 flex items-center gap-1.5">
                        <User className="size-4 text-primary" />
                        <span>Nombre Completo *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.contactName}
                        onChange={(e) => setFormState({ ...formState, contactName: e.target.value })}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-white/15 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2 flex items-center gap-1.5">
                        <Mail className="size-4 text-primary" />
                        <span>Correo Electrónico Oficial *</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="contacto@empresa.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-white/15 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2 flex items-center gap-1.5">
                        <Phone className="size-4 text-primary" />
                        <span>Teléfono / WhatsApp *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+1 (809) 000-0000"
                        className="w-full px-4 py-3.5 rounded-xl bg-background border border-white/15 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground/80 mb-2">
                      Cargo o Rol en la Empresa
                    </label>
                    <input
                      type="text"
                      value={formState.role}
                      onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                      placeholder="Ej. CEO / Director de Marketing"
                      className="w-full px-4 py-3.5 rounded-xl bg-background border border-white/15 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none text-sm transition-colors"
                    />
                  </div>

                  <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-start gap-3.5">
                    <ShieldCheck className="size-6 text-primary shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                      <strong>Garantía Crowned:</strong> Al enviar la solicitud recibirás notificación de confirmación en pantalla y un consultor analizará tu marca para enviarte una propuesta en menos de <strong>24 horas</strong>.
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Wizard Controls Footer */}
              <div className="pt-8 border-t border-white/10 flex items-center justify-between gap-4 mt-8">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-5 py-3 rounded-xl secondary-button text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer"
                  >
                    <ArrowLeft className="size-4" />
                    <span>Atrás</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-3.5 rounded-xl primary-button text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-md hover:scale-102 transition-transform"
                  >
                    <span>Siguiente Paso</span>
                    <ArrowRight className="size-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-xl primary-button font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Enviando Solicitud...</span>
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        <span>Enviar Solicitud de Asesoría</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </>
          )}

        </div>
      </div>

    </div>
  );
}
