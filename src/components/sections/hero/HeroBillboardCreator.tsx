import { motion } from "motion/react";
import { Check } from "lucide-react";

import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";

type CreatorVideo = {
  videoSrc: string;
  name: string;
  followers: string;
  imageSrc: string;
};

type HeroBillboardCreatorProps = {
  tag?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryButton: { text: string; href: string };
  note: string;
  videos: CreatorVideo[];
  badgeText: string;
  textAnimation: "slide-up" | "fade-blur" | "fade";
};

const HeroBillboardCreator = ({
  tag,
  description,
  primaryButton,
  note,
  videos,
  badgeText,
  textAnimation,
}: HeroBillboardCreatorProps) => {
  const duplicated = [...videos, ...videos, ...videos, ...videos];

  return (
    <section
      aria-label="Hero section"
      className="relative flex flex-col items-center justify-center gap-8 md:gap-10 w-full min-h-svh pt-32 sm:pt-36 pb-16 md:pt-40"
    >
      <HeroBackgroundSlot />
      <div className="flex flex-col items-center gap-5 sm:gap-6 w-content-width mx-auto text-center px-4 sm:px-6">
        {tag && (
          <div className="mb-2 px-4 py-1.5 w-fit text-xs sm:text-sm card rounded-full border border-white/10 tracking-widest uppercase font-semibold text-primary">
            <p>{tag}</p>
          </div>
        )}

        <motion.h1
          className="w-full max-w-4xl lg:max-w-5xl tracking-tight text-center flex flex-col items-center gap-1.5 sm:gap-2 my-2 sm:my-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.span
            className="block font-sans font-black uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-foreground leading-[1.12]"
            variants={{ hidden: { opacity: 0, y: "20%" }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
          >
            CREACIÓN
          </motion.span>

          <motion.span
            className="block font-serif italic font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.28] py-1"
            variants={{ hidden: { opacity: 0, y: "20%" }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
          >
            audiovisual
          </motion.span>

          <motion.span
            className="block font-serif font-bold uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-foreground leading-[1.15] pt-1"
            variants={{ hidden: { opacity: 0, y: "20%" }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
          >
            &amp; DIRECCIÓN
          </motion.span>

          <motion.span
            className="block font-mono font-bold uppercase text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest text-primary/90 leading-[1.25] pt-1.5"
            variants={{ hidden: { opacity: 0, y: "20%" }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
          >
            DE [CONTENIDO]
          </motion.span>
        </motion.h1>

        <TextAnimation
          text={description}
          variant={textAnimation}
          gradientText={false}
          tag="p"
          className="w-full max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed text-foreground/85 text-balance mx-auto"
        />

        <div className="flex justify-center mt-2 md:mt-3">
          <Button text={primaryButton.text} href={primaryButton.href} />
        </div>

        <motion.div
          className="flex justify-center mt-1 sm:mt-2 text-xs sm:text-sm text-foreground/70"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="flex items-center gap-2">
            <div className="flex items-center justify-center size-4 primary-button rounded-full shrink-0">
              <Check className="size-1/2 text-primary-cta-text" />
            </div>
            {note}
          </span>
        </motion.div>
      </div>

      <div className="w-content-width mx-auto overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee-horizontal" style={{ animationDuration: "60s" }}>
          {duplicated.map((video, i) => (
            <div
              key={i}
              className="relative shrink-0 mr-3 xl:mr-4 2xl:mr-5 w-60 md:w-75 2xl:w-80 aspect-4/5 overflow-hidden rounded-lg"
            >
              <div className="absolute z-10 top-3 left-3 xl:top-4 xl:left-4 2xl:top-5 2xl:left-5 px-2 py-1 xl:px-2.5 xl:py-1.5 2xl:px-3 2xl:py-2 text-xs font-medium rounded-sm border border-background/30 bg-background/50 backdrop-blur-md">
                {badgeText}
              </div>
              <ImageOrVideo
                videoSrc={video.videoSrc}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute -inset-x-px -bottom-px h-1/3 bg-background-accent/50 backdrop-blur-xl"
                style={{ maskImage: "linear-gradient(to bottom, transparent, black 60%)" }}
                aria-hidden="true"
              />
              <div className="absolute flex items-center inset-x-3 bottom-3 xl:inset-x-4 xl:bottom-4 2xl:inset-x-5 2xl:bottom-5 gap-2 xl:gap-2.5 2xl:gap-3">
                <ImageOrVideo
                  imageSrc={video.imageSrc}
                  className="size-10 md:size-11 2xl:size-12 rounded-full object-cover"
                />
                <div className="flex flex-col min-w-0">
                  <span className="flex items-center gap-1 text-base text-background font-semibold leading-snug truncate">
                    {video.name}
                    <img src="https://storage.googleapis.com/webild/default/templates/ai-ugc/verified-badge.webp" alt="Verified" className="shrink-0 h-[calc(var(--text-base)*1.25)] w-auto" />
                  </span>
                  <span className="text-base text-background/75 leading-snug truncate">{video.followers}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBillboardCreator;
