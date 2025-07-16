import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import './index.css';

function AboutApp() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AboutApp />
  </StrictMode>
);