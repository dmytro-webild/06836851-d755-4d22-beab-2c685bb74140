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
      "name": "Servicios Creativos",
      "href": "/servicios"
    },
    {
      "name": "Solicitar Briefing",
      "href": "/servicios#solicitud"
    },
    {
      "name": "Especialidades",
      "href": "/#specialties"
    },
    {
      "name": "Portafolio",
      "href": "/#portfolio"
    },
    {
      "name": "Embudo",
      "href": "/#funnel"
    },
    {
      "name": "Instagram SMM",
      "href": "/#instagram"
    },
    {
      "name": "Preguntas",
      "href": "/#faq"
    },
    {
      "name": "Contacto",
      "href": "/#contact"
    }
  ];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="floatingGradient" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
          logo="Crowned"
          logoImageSrc="/crowned-logo-dark.png"
          ctaButton={{
            text: "Solicitar Servicio",
            href: "/servicios#solicitud",
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
          brandImageSrc="/crowned-logo-dark.png"
          columns={[
            {
              title: "Especialización",
              items: [
                {
                  label: "Real Estate & Agentes",
                  href: "#specialties",
                },
                {
                  label: "Hoteles & Resorts",
                  href: "#specialties",
                },
                {
                  label: "Contenido Orgánico & ROI",
                  href: "#specialties",
                },
                {
                  label: "Gestión SMM Instagram",
                  href: "#instagram",
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
                  href: "#contact",
                },
              ],
            },
            {
              title: "Navegación",
              items: [
                {
                  label: "Página Principal",
                  href: "/",
                },
                {
                  label: "Oferta de Servicios",
                  href: "/servicios",
                },
                {
                  label: "Solicitud & Briefing",
                  href: "/servicios#solicitud",
                },
                {
                  label: "Especialidades",
                  href: "/#specialties",
                },
                {
                  label: "Portafolio Visual",
                  href: "/#portfolio",
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
