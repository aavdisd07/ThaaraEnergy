import { Mail, MapPin, Leaf, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white bg-black w-screen">
      {/* Subtle Solar Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(#222222_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-20" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-start mb-4 space-x-3">
              <div>
                <h4 className="text-xl font-bold">Thaara Energy</h4>
                <p className="text-gray-400 text-sm flex items-center mt-1">
                  <Leaf className="h-4 w-4 mr-1 text-green-500" />
                  Empowering Progress, Sustainably
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              We develop scalable renewable infrastructure across solar, energy storage, and e-mobility. Innovation meets impact at Thaara Energy.
            </p>
            <div className="mt-4 px-4 py-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md shadow-md">
              <p className="text-white font-medium text-sm flex items-center">
                <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                "Solar Today, Secure Tomorrow."
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h5 className="text-lg font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services.html' },
                { name: 'Industries', href: '/industries.html' },
                { name: 'About Us', href: '/about.html' },
                { name: 'Insight and Perp', href: '/blog.html' },
                { name: 'Contact Us', href: '/contact.html' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all flex items-center group"
                  >
                    <span className="w-2 h-2 mr-3 bg-white rounded-full group-hover:scale-125 transition-transform"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold mb-3">Contact Info</h5>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="text-white w-5 h-5" />
                <span className="text-gray-300">Hyderabad, India</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-white w-5 h-5" />
                <div className="text-gray-300">
                  <a 
                    href="mailto:rajeev@thaaraenergy.com" 
                    className="hover:text-white transition-colors duration-200"
                  >
                    rajeev@thaaraenergy.com
                  </a>
                  <a 
                    href="mailto:amrithaa@thaaraenergy.com" 
                    className="block mt-1 hover:text-white transition-colors duration-200"
                  >
                    amrithaa@thaaraenergy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-500 text-xs">© 2025 Thaara Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
