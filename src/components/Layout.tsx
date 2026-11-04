import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    {
      "name": "Servicios",
      "href": "#services"
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
              title: "Servicios",
              items: [
                {
                  label: "Fotografía Profesional",
                  href: "#services",
                },
                {
                  label: "Gestión de Redes Sociales",
                  href: "#services",
                },
                {
                  label: "Producción de Video",
                  href: "#videos",
                },
                {
                  label: "Embudos de Ventas",
                  href: "#services",
                },
              ],
            },
            {
              title: "Navegación",
              items: [
                {
                  label: "Estrategia",
                  href: "#about",
                },
                {
                  label: "Portafolio Visual",
                  href: "#portfolio",
                },
                {
                  label: "Resultados",
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
