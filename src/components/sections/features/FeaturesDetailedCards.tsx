import { useRef } from "react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

type FeatureItem = {
  title: string;
  description: string;
  tags: string[];
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

interface FeaturesDetailedCardsProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: FeatureItem[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}

const FeaturesDetailedCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
  textAnimation,
}: FeaturesDetailedCardsProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.75;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section aria-label="Services carousel section" className="py-16 md:py-24 overflow-hidden">
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-center w-content-width mx-auto gap-3 text-center">
          <div className="px-3.5 py-1 text-xs sm:text-sm card rounded-full border border-white/10 uppercase tracking-widest font-semibold text-primary">
            <p>{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={true}
            tag="h2"
            className="md:max-w-8/10 text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-center text-balance"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="md:max-w-7/10 text-base sm:text-lg leading-relaxed text-foreground/80 text-center text-balance"
          />

          <div className="flex items-center gap-3 mt-2">
            {(primaryButton || secondaryButton) && (
              <div className="flex flex-wrap justify-center gap-3">
                {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>}
                {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />}
              </div>
            )}

            {/* Carousel navigation buttons */}
            <div className="hidden sm:flex items-center gap-2 ml-4">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Anterior"
                className="size-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-foreground transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Siguiente"
                className="size-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-foreground transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Touch Scrollable Container */}
        <div className="w-full relative">
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory px-4 sm:px-[calc((100vw-var(--width-content-width))/2)] scrollbar-none py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {items.map((item) => (
              <ScrollReveal
                variant="slide-up"
                key={item.title}
                className="w-[88vw] sm:w-[62vw] lg:w-[45vw] shrink-0 snap-center flex flex-col justify-between p-6 sm:p-8 card rounded-3xl border border-white/10 hover:border-primary/50 transition-all group min-h-[460px] sm:min-h-[500px]"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((itemTag) => (
                      <span key={itemTag} className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-background/80 border border-white/10 text-primary">
                        #{itemTag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed line-clamp-4">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 aspect-16/9 sm:aspect-21/9 rounded-2xl overflow-hidden relative border border-white/10">
                  <ImageOrVideo
                    imageSrc={item.imageSrc}
                    videoSrc={item.videoSrc}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesDetailedCards;
