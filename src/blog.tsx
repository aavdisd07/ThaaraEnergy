import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import './index.css';

function BlogApp() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <Header />
        <main className="pt-16">
          <Blog />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BlogApp />
  </StrictMode>
);