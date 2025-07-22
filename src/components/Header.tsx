import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services.html',
      dropdown: [
        { name: 'Our Services', href: '/services.html#our-services' },
        { name: 'Portfolio of Services', href: '/services.html#portfolio' },
        { name: 'Our Offerings', href: '/services.html#offerings' },
        { name: 'Subsidy Strategy', href: '/services.html#subsidy' },
        { name: 'Why Choose Us', href: '/services.html#why-us' },
        { name: 'Ready to Transform Your Energy', href: '/services.html#transform' },
      ],
    },
    {
      name: 'Industries',
      href: '/industries.html',
      dropdown: [
        { name: 'Residential', href: '/industries.html#residential' },
        { name: 'Commercial', href: '/industries.html#commercial' },
        { name: 'Industrial', href: '/industries.html#industrial' },
        { name: 'Agriculture', href: '/industries.html#agriculture' },
        { name: 'Government', href: '/industries.html#government' },
      ],
    },
    {
      name: 'About Us',
      href: '/about.html',
      dropdown: [
        { name: 'Who We Are', href: '/about.html#who-we-are' },
        { name: 'Vision and Mission', href: '/about.html#vision-mission' },
        { name: 'Our Core Values', href: '/about.html#core-values' },
        { name: 'About Founder', href: '/about.html#founder' },
      ],
    },
    {
      name: 'Blog',
      href: '/blog.html',
      dropdown: [
        { name: 'Renewable Energy', href: '/blog.html#renewable' },
        { name: 'Electric Mobility', href: '/blog.html#mobility' },
        { name: 'Sustainability', href: '/blog.html#sustainability' },
        { name: 'Solar Energy', href: '/blog.html#solar' },
        { name: 'Investment', href: '/blog.html#investment' },
        { name: 'Energy Storage', href: '/blog.html#storage' },
      ],
    },
    {
      name: 'Contact',
      href: '/contact.html',
      dropdown: [
        { name: 'Get in Touch', href: '/contact.html#get-in-touch' },
        { name: 'Our Location', href: '/contact.html#location' },
      ],
    },
    {
      name:'FAQ',
      href:'/faq.html',
    
    }
  ];

  const isActive = (path: string) => {
    const currentPath = window.location.pathname;
    if (path === '/') return currentPath === '/' || currentPath === '/index.html';
    return currentPath.includes(path.replace('.html', ''));
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-4xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <img
                src="/thaaraLogo.png"
                alt="Thaara Energy Logo"
                className="h-16 w-auto object-contain"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}

              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`text-sm font-medium uppercase tracking-wide transition-all duration-300 px-3 py-2 rounded-lg flex items-center gap-1 ${isActive(item.href)
                    ? 'text-white'
                    : 'text-white hover:text-white'
                    }`}
                  style={{ textShadow: '1px 1px 2px rgb(4, 4, 4)' }}
                >
                  {item.name}
                </a>
                <div
                  className={`absolute left-0 right-0 bottom-0 h-0.5 rounded-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${isActive(item.href) ? 'scale-x-100' : ''
                    }`}
                />
                {item.dropdown && (
                  <div
                    className={`absolute top-full ${item.name === 'Contact' ? 'right-0' : 'left-0'
                      } mt-0 w-64 bg-white/50 backdrop-blur-4xl border border-gray-700 rounded-lg shadow-xl py-2 
                    opacity-0 group-hover:opacity-100 group-hover:translate-y-1 translate-y-3 
                    pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50`}
                  >
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-black hover:text-white hover:bg-black/60 transition-colors duration-200"
                        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-black"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-white/10 backdrop-blur-3xl border-t border-gray-700 rounded-b-2xl">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  <a
                    href={item.href}
                    className={`block px-4 py-2 text-base font-semibold uppercase tracking-wide rounded-lg transition-all duration-300 flex items-center gap-1 ${isActive(item.href)
                      ? 'text-white'
                      : 'text-white hover:text-black'
                      }`}
                    style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                    onClickCapture={() =>
                      item.dropdown &&
                      setDropdownOpen(dropdownOpen === item.name ? null : item.name)
                    }
                  >
                    {item.name}
                  </a>
                  {item.dropdown && dropdownOpen === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-black hover:text-white hover:bg-black/60 rounded-lg transition-colors duration-200"
                          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
                                                                                                  