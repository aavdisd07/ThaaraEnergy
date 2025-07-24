import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Industries from './pages/Industries';
import './index.css';

function IndustriesApp() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-24">
        <Industries />
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IndustriesApp />
  </StrictMode>
);