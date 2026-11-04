export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Inicio', pageFile: 'HomePage' },
  { path: '/servicios', label: 'Servicios', pageFile: 'ServicesPage' },
  { path: '/portafolio', label: 'Portafolio', pageFile: 'PortfolioPage' },
  { path: '/solicitar-asesoria', label: 'Solicitar Asesoría', pageFile: 'AdviceRequestPage' },
];
