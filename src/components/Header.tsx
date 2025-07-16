import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services.html' },
    { name: 'Industries', href: '/industries.html' },
    { name: 'About Us', href: '/about.html' },
    { name: 'Blog', href: '/blog.html' },
    { name: 'Contact Us', href: '/contact.html' },
  ];

  const isActive = (path: string) => {
    const currentPath = window.location.pathname;
    if (path === '/') {
      return currentPath === '/' || currentPath === '/index.html';
    }
    return currentPath.includes(path.replace('.html', ''));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="group flex items-center">
            <img 
              src="/thaaraLogo.png" 
              alt="Thaara Energy Logo" 
              className="h-14 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-all duration-300 hover:text-primary-400 relative py-2 px-3 rounded-lg ${
                  isActive(item.href)
                    ? 'text-primary-400 bg-primary-900/30'
                    : 'text-gray-300 hover:bg-primary-900/20'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-primary-500 to-nature-500 rounded-full"></div>
                )}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300 p-2 rounded-lg hover:bg-primary-900/20"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-1 bg-black/95 backdrop-blur-md border-t border-gray-800 rounded-b-2xl">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                    isActive(item.href) 
                      ? 'text-primary-400 bg-gradient-to-r from-primary-900/30 to-nature-900/30' 
                      : 'text-gray-300 hover:text-primary-400 hover:bg-primary-900/20'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;