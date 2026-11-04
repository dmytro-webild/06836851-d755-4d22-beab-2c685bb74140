import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, ArrowUpRight } from "lucide-react";
import { cls } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface NavbarFloatingProps {
  logo: string;
  logoImageSrc?: string;
  navItems: { name: string; href: string }[];
  ctaButton: { text: string; href: string };
}

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, onClose?: () => void) => {
  if (href.startsWith("#")) {
    if (window.location.pathname !== "/") {
      window.location.href = "/" + href;
    } else {
      e.preventDefault();
      const element = document.getElementById(href.slice(1));
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  } else if (href.includes("#")) {
    const [path, hash] = href.split("#");
    if (window.location.pathname === path) {
      e.preventDefault();
      const element = document.getElementById(hash);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  onClose?.();
};

const NavbarFloating = ({ logo, logoImageSrc, navItems, ctaButton }: NavbarFloatingProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-999 bg-foreground"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <nav data-section="navbar" className="fixed z-1000 top-4 sm:top-5 left-1/2 -translate-x-1/2 w-[92vw] max-w-2xl">
        <div className="mx-auto w-full overflow-hidden rounded-2xl bg-[#14141a]/95 backdrop-blur-xl border border-white/15 shadow-2xl">
          <div className="relative z-10 flex items-center justify-between gap-3 xl:gap-4 p-3.5 sm:p-4">
            <a href="/" className="flex items-center gap-2 group">
              {logoImageSrc ? (
                <img src={logoImageSrc} alt={logo} className="h-7 sm:h-8 w-auto object-contain" />
              ) : (
                <span className="text-xl font-extrabold tracking-tight text-foreground">{logo}</span>
              )}
            </a>

            <div className="flex items-center gap-2 sm:gap-3">
              {ctaButton && (
                <a
                  href={ctaButton.href}
                  className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold primary-button transition-transform hover:scale-105"
                >
                  {ctaButton.text}
                </a>
              )}

              <button
                type="button"
                aria-label="Menú"
                className="flex items-center justify-center shrink-0 size-9 sm:size-10 rounded-xl cursor-pointer bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Plus
                  className={cls(
                    "w-5 h-5 text-foreground transition-transform duration-300",
                    menuOpen ? "rotate-45 text-primary-cta" : "rotate-0"
                  )}
                  strokeWidth={2}
                />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.5, ease: [0.625, 0.05, 0, 1] }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-3 xl:gap-4 2xl:gap-5 p-3 xl:p-4 2xl:p-5 pt-0 xl:pt-0 2xl:pt-0">
                  <div className="px-3 xl:px-4 2xl:px-5 py-0 md:py-1 2xl:py-2 rounded card">
                    {navItems.map((item, index) => (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href, () => setMenuOpen(false))}
                          className="group flex items-center justify-between py-3 w-full"
                        >
                          <span className="text-xl md:text-2xl font-medium text-foreground group-hover:ml-3 transition-[margin] duration-300">
                            {item.name}
                          </span>
                          <ArrowUpRight
                            className="h-(--text-xl) md:h-(--text-2xl) w-auto text-foreground group-hover:rotate-45 group-hover:mr-3 transition-all duration-300"
                            strokeWidth={2}
                          />
                        </a>
                        {index < navItems.length - 1 && (
                          <div className="h-px bg-accent/50" />
                        )}
                      </div>
                    ))}
                  </div>

                  <Button text={ctaButton.text} href={ctaButton.href} variant="primary" animate={false} className="w-full" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default NavbarFloating;
