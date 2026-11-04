import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AdviceRequestPage from './pages/AdviceRequestPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/portafolio" element={<PortfolioPage />} />
        <Route path="/solicitar-asesoria" element={<AdviceRequestPage />} />
      </Route>
    </Routes>
  );
}
