import { Quote, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";

type AboutTestimonialProps = {
  tag: string;
  quote: string;
  author: string;
  role: string;
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const AboutTestimonial = ({
  tag,
  quote,
  author,
  role,
  imageSrc,
  videoSrc,
  textAnimation,
}: AboutTestimonialProps) => {
  return (
    <section aria-label="Testimonial section" className="py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mx-auto w-content-width items-stretch">
        <div className="relative lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 md:p-10 card rounded-2xl">
          <div className="absolute flex items-center justify-center -top-4 -left-3 sm:-top-5 sm:-left-4 size-11 sm:size-13 primary-button rounded-xl shadow-lg z-10">
            <Quote className="size-5 sm:size-6 text-primary-cta-text" strokeWidth={2} />
          </div>

          <div className="relative flex flex-col gap-4 sm:gap-6 my-auto pt-2">
            <div className="w-fit px-3 py-1 text-xs sm:text-sm card rounded-full flex items-center gap-1.5 text-foreground/80">
              <Sparkles className="size-3.5 text-primary-cta" />
              <span>{tag}</span>
            </div>

            <TextAnimation
              text={quote}
              variant={textAnimation}
              gradientText={false}
              tag="h2"
              className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-relaxed font-medium text-foreground tracking-tight text-balance"
            />
          </div>

          <div className="pt-6 mt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="size-9 rounded-full bg-primary-cta/20 border border-primary-cta/40 flex items-center justify-center text-primary-cta font-bold text-sm shrink-0">
                {author.charAt(0)}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm sm:text-base font-semibold text-foreground truncate">{author}</span>
                <span className="text-xs sm:text-sm text-foreground/70 truncate">{role}</span>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-background-accent/80 text-xs text-foreground/80 border border-border/30">
              <span>Punta Cana & Santo Domingo, RD</span>
            </div>
          </div>
        </div>

        <ScrollReveal variant="fade" className="lg:col-span-5 h-64 sm:h-80 lg:h-auto min-h-[280px] card rounded-2xl overflow-hidden relative group">
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 text-xs font-medium text-foreground/90 bg-background/60 backdrop-blur-md p-2.5 rounded-lg border border-border/30">
            🎬 Producción Audiovisual & Storytelling para Redes
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutTestimonial;
