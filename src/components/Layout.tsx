import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    {
      "name": "Inicio",
      "href": "/"
    },
    {
      "name": "Servicios",
      "href": "/servicios"
    },
    {
      "name": "Portafolio",
      "href": "/portafolio"
    },
    {
      "name": "Preguntas",
      "href": "/#faq"
    },
    {
      "name": "Contacto",
      "href": "/#contact"
    },
    {
      "name": "Solicitar Asesoría",
      "href": "/solicitar-asesoria"
    }
  ];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="floatingGradient" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
          logo="Crowned"
          logoImageSrc="/crowned-logo-white.png"
          ctaButton={{
            text: "Solicitar Asesoría",
            href: "/solicitar-asesoria",
          }}
          navItems={navItems}
        />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
          brand="Crowned"
          brandImageSrc="/crowned-logo-white.png"
          columns={[
            {
              title: "Servicios & Soluciones",
              items: [
                {
                  label: "Producción de Reels & Video",
                  href: "/servicios",
                },
                {
                  label: "Storytelling & Dirección",
                  href: "/servicios",
                },
                {
                  label: "Portafolio Cinematográfico",
                  href: "/portafolio",
                },
                {
                  label: "Solicitar Asesoría 1:1",
                  href: "/solicitar-asesoria",
                },
              ],
            },
            {
              title: "Contacto & Ubicación",
              items: [
                {
                  label: "Email: contacto@creativecrowned.com",
                  href: "mailto:contacto@creativecrowned.com",
                },
                {
                  label: "WhatsApp: +1 (849) 266-5501",
                  href: "https://wa.me/18492665501",
                },
                {
                  label: "Instagram: @crowned.rd",
                  href: "https://instagram.com/crowned.rd",
                },
                {
                  label: "Punta Cana & Santo Domingo, RD",
                  href: "/#contact",
                },
              ],
            },
            {
              title: "Navegación Principal",
              items: [
                {
                  label: "Inicio",
                  href: "/",
                },
                {
                  label: "Servicios Creativos",
                  href: "/servicios",
                },
                {
                  label: "Portafolio",
                  href: "/portafolio",
                },
                {
                  label: "Solicitar Asesoría",
                  href: "/solicitar-asesoria",
                },
                {
                  label: "Preguntas Frecuentes",
                  href: "/#faq",
                },
                {
                  label: "Contacto Directo",
                  href: "/#contact",
                },
              ],
            },
          ]}
          copyright="© 2026 Crowned Agency. Todos los derechos reservados."
          links={[
            {
              label: "Política de Privacidad",
              href: "#",
            },
            {
              label: "Términos y Condiciones",
              href: "#",
            },
          ]}
        />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
