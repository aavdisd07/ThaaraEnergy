import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './pages/Services';
import './index.css';

function ServicesApp() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-24">
        <Services />
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ServicesApp />
  </StrictMode>
);