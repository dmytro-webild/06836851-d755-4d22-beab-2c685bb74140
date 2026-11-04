import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import Button from "@/components/ui/Button";
import { MessageCircle, Instagram, MapPin } from "lucide-react";

const ContactCta = ({
  tag,
  text,
  primaryButton,
  secondaryButton,
  textAnimation,
}: {
  tag: string;
  text: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => {
  return (
    <section aria-label="Contact section" className="py-16 md:py-20">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="slide-up">
          <div className="flex flex-col items-center gap-8 md:gap-10 py-12 px-6 sm:px-10 md:py-16 md:px-12 rounded-2xl card relative overflow-hidden border border-border/50">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="px-3 py-1 text-xs sm:text-sm card rounded-full w-fit">
                <p>{tag}</p>
              </div>

              <TextAnimation
                text={text}
                variant={textAnimation}
                gradientText={true}
                tag="h2"
                className="md:max-w-8/10 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance"
              />

              {/* Direct Interactive Contact Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl mt-4">
                <a
                  href="https://wa.me/18492665501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-card border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-950/20 text-foreground transition-all group"
                >
                  <MessageCircle className="size-5 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
                  <div className="flex flex-col text-left min-w-0">
                    <span className="text-[11px] uppercase tracking-wider text-foreground/60 font-medium">WhatsApp RD</span>
                    <span className="text-sm font-semibold text-foreground truncate">+1 (849) 266-5501</span>
                  </div>
                </a>

                <a
                  href="https://instagram.com/crowned.rd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-card border border-rose-500/30 hover:border-rose-500/60 hover:bg-rose-950/20 text-foreground transition-all group"
                >
                  <Instagram className="size-5 text-rose-400 group-hover:scale-110 transition-transform shrink-0" />
                  <div className="flex flex-col text-left min-w-0">
                    <span className="text-[11px] uppercase tracking-wider text-foreground/60 font-medium">Instagram</span>
                    <span className="text-sm font-semibold text-foreground truncate">@crowned.rd</span>
                  </div>
                </a>

                <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-card border border-primary-cta/30 text-foreground">
                  <MapPin className="size-5 text-primary-cta shrink-0" />
                  <div className="flex flex-col text-left min-w-0">
                    <span className="text-[11px] uppercase tracking-wider text-foreground/60 font-medium">Ubicación</span>
                    <span className="text-xs sm:text-sm font-semibold text-foreground truncate">Punta Cana & Santo Domingo</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />
                <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactCta;
