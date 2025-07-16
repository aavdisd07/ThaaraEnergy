import React from "react";
import "../styles/carousel.css";
import { Globe, ArrowRight } from "lucide-react";

interface Industry {
  title: string;
  description: string;
  image: string;
  icon?: string;
  color?: string;
}

interface ServicesCarouselProps {
  industries: Industry[];
}

const ServicesCarousel: React.FC<ServicesCarouselProps> = ({ industries }) => {
  return (
    <section className="py-16 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-primary-900/50 to-nature-900/50 rounded-xl mb-4 border border-primary-500/30">
            <div className="bg-gradient-to-r from-primary-500 to-nature-500 p-2 rounded-lg">
              <Globe className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Portfolio of Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We are strategically positioned for sustainable infrastructure development across the renewable energy value chain.
          </p>
        </div>

        <div className="carousel-wrapper">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{ animationDelay: `calc(40s / 6 * ${index} * -1)` }}
            >
              <img src={industry.image} alt={industry.title} />
              <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{industry.description}</p>
              <a href="/services.html" className="inline-flex items-center text-sm">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel; 