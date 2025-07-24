import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Faq from './pages/FAQ';
import './index.css';
function FaqApp() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-16">
        <Faq />
      </main>
      <Footer />
    </div>
  );
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FaqApp />
  </StrictMode>
);