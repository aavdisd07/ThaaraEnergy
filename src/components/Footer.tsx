import React from 'react';
import { Zap, Mail, MapPin, Leaf, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0">
      <img
          src="https://static.vecteezy.com/system/resources/previews/022/145/333/non_2x/concept-idea-clean-energy-in-nature-lightbulb-with-solar-panel-and-wind-turbine-on-soil-free-photo.jpg"
          alt="Clean Energy Concept"
          className="absolute -left-1 -bottom-24 transform -translate-y-1/2 w-64 rounded-2xl opacity-70 shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-nature-400/10 to-transparent rounded-full -translate-x-32 -translate-y-32 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-primary-400/10 to-transparent rounded-full translate-x-40 translate-y-40 animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-secondary-400/5 to-transparent rounded-full -translate-x-48 -translate-y-48 animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="bg-gradient-to-r from-nature-400 via-primary-400 to-secondary-400 p-2 rounded-xl shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="h-4 w-4 text-nature-300 animate-pulse" />
                </div>
              </div>
              <div>
                <span className="text-lg font-bold">Thaara Energy</span>
                <p className="text-nature-200 text-xs font-medium flex items-center">
                  <Leaf className="h-3 w-3 mr-1" />
                  Empowering Progress, Sustainability
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed text-sm">
              A clean technology and sustainable infrastructure company committed to powering the future responsibly.
              Building scalable solutions in renewable energy, electric mobility, and industrial sustainability.
            </p>
            <div className="bg-gradient-to-r from-nature-500/20 via-primary-500/20 to-secondary-500/20 rounded-xl p-4 backdrop-blur-sm border border-nature-400/30">
              <p className="text-nature-200 font-semibold text-sm flex items-center">
                <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                "Empowering Progress, Sustainability."
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white flex items-center">
              <div className="w-2 h-2 bg-nature-400 rounded-full mr-3 animate-pulse"></div>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services.html' },
                { name: 'Industries', href: '/industries.html' },
                { name: 'About Us', href: '/about.html' },
                { name: 'Blog', href: '/blog.html' },
                { name: 'Contact Us', href: '/contact.html' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-nature-300 transition-all duration-300 flex items-center group text-sm"
                  >
                    <div className="w-2 h-2 bg-nature-400 rounded-full mr-3 group-hover:scale-125 group-hover:bg-nature-300 transition-all duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white flex items-center">
              <div className="w-2 h-2 bg-secondary-400 rounded-full mr-3 animate-pulse"></div>
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <div className="bg-nature-500/20 p-2 rounded-lg group-hover:bg-nature-500/30 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-nature-300" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">Hyderabad, India</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-secondary-500/20 p-2 rounded-lg group-hover:bg-secondary-500/30 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-secondary-300" />
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                  <div>rajeev@thaaraenergy.com</div>
                  <div className="mt-1">amrithaa@thaararajeev.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-xs">
            © 2025 Thaara Energy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;