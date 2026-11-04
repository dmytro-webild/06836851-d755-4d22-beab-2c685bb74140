export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Inicio', pageFile: 'HomePage' },
  { path: '/servicios', label: 'Servicios', pageFile: 'ServicesPage' },
];
