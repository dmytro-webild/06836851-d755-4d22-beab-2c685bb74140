import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    {
      "name": "Especialidades",
      "href": "#specialties"
    },
    {
      "name": "Servicios",
      "href": "#services"
    },
    {
      "name": "Embudo",
      "href": "#funnel"
    },
    {
      "name": "Instagram SMM",
      "href": "#instagram"
    },
    {
      "name": "Portafolio",
      "href": "#portfolio"
    },
    {
      "name": "Formatos",
      "href": "#videos"
    },
    {
      "name": "Estrategia",
      "href": "#about"
    },
    {
      "name": "Resultados",
      "href": "#results"
    },
    {
      "name": "Preguntas",
      "href": "#faq"
    },
    {
      "name": "Contacto",
      "href": "#contact"
    }
  ];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="floatingGradient" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
          logo="Crowned"
          ctaButton={{
            text: "Agendar Sesión",
            href: "#contact",
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
                  label: "Especialidades",
                  href: "#specialties",
                },
                {
                  label: "Servicios Estratégicos",
                  href: "#services",
                },
                {
                  label: "Portafolio Visual",
                  href: "#portfolio",
                },
                {
                  label: "Resultados Comerciales",
                  href: "#results",
                },
                {
                  label: "Preguntas Frecuentes",
                  href: "#faq",
                },
                {
                  label: "Contacto",
                  href: "#contact",
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
