import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, Sparkles, Leaf, Wind } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['Hyderabad, India', 'Serving India & Europe'],
      color: 'from-primary-400 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9966886880'],
      color: 'from-nature-400 to-nature-600',
      bgColor: 'from-nature-50 to-nature-100'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['rajeev@thaaraenergy.com', 'amrithaa@thaararajeev.com'],
      color: 'from-secondary-400 to-secondary-600',
      bgColor: 'from-secondary-50 to-secondary-100'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      color: 'from-accent-400 to-accent-600',
      bgColor: 'from-accent-50 to-accent-100'
    }
  ];

  const services = [
    'Renewable Energy Solutions',
    'Electric Mobility Infrastructure',
    'Industrial Sustainability',
    'Clean-Tech Advisory',
    'Energy Audits',
    'Project Consulting',
    'Other'
  ];

  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Green Energy Theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-nature-800/85 to-secondary-900/90"></div>
          <div className="absolute inset-0 bg-leaf-pattern opacity-20"></div>
        </div>
        
        {/* Floating Energy Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-400/30 to-nature-400/30 rounded-full animate-float blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-secondary-400/30 to-accent-400/30 rounded-full animate-float delay-1000 blur-lg"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-nature-400/20 to-primary-400/20 rounded-full animate-bounce-slow blur-2xl"></div>
          <div className="absolute bottom-20 right-16 w-28 h-28 bg-gradient-to-br from-accent-400/30 to-secondary-400/30 rounded-full animate-float delay-2000 blur-lg"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-8 backdrop-blur-sm">
            <Mail className="h-8 w-8 text-white animate-pulse" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 animate-slide-up">
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto animate-slide-up delay-100">
            Ready to transform your energy future? Contact us to discuss your clean energy 
            and sustainability requirements. We're here to help you achieve your goals.
          </p>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
            <path d="M0,120 C300,80 900,80 1200,120 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-white via-primary-50/30 to-nature-50/30 relative">
        <div className="absolute inset-0 bg-leaf-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-primary-100 hover:border-primary-200">
              {/* Form Header with Image */}
              <div className="relative h-32 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Contact Us"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
                </div>
              </div>
              
              <div className="p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-primary-50/50"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-primary-50/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-primary-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-primary-50/50"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-primary-50/50"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-primary-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-primary-50/50"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none bg-primary-50/50"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full bg-gradient-to-r from-primary-500 via-primary-600 to-nature-600 text-white py-4 rounded-xl font-semibold hover:from-primary-600 hover:via-primary-700 hover:to-nature-700 transition-all duration-500 flex items-center justify-center shadow-lg transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Send Message</span>
                    <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-primary-100 to-nature-100 rounded-2xl mb-6">
                  <div className="bg-gradient-to-r from-primary-500 to-nature-500 p-3 rounded-xl">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-primary-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-primary-600 mb-8 text-lg">
                  We're here to help you with your clean energy and sustainability needs. 
                  Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className={`group relative bg-gradient-to-br ${info.bgColor} rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-primary-100 hover:border-primary-200`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/30 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <div className="relative z-10 flex items-start space-x-4 p-8">
                      <div className={`bg-gradient-to-r ${info.color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                        <info.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary-900 mb-3">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-primary-700 font-medium">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-r from-primary-50 via-nature-50 to-primary-50 rounded-3xl p-8 border border-primary-200 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-primary-500 to-nature-500 p-3 rounded-2xl">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900">Quick Response</h3>
                </div>
                <p className="text-primary-700 leading-relaxed">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-nature-50 relative overflow-hidden">
        {/* Curved Top */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
            <path d="M0,0 C300,40 900,40 1200,0 L1200,0 L0,0 Z" fill="white"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-nature-100 to-primary-100 rounded-2xl mb-6">
              <div className="bg-gradient-to-r from-nature-500 to-primary-500 p-3 rounded-xl">
                <MapPin className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Our Location
            </h2>
            <p className="text-xl text-primary-600">
              Headquartered in Hyderabad, India, serving emerging markets across India and Europe.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-primary-100">
            {/* Map Header with Image */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Hyderabad Solar Infrastructure"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="bg-white/20 p-6 rounded-3xl mb-4 backdrop-blur-sm">
                    <MapPin className="h-16 w-16 mx-auto animate-bounce" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Hyderabad, India</h3>
                  <p className="text-white/90 text-lg">
                    Strategic location for serving emerging markets in India and expanding to Europe
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-12 text-center">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-900 mb-2">Global Reach</h4>
                  <p className="text-primary-600">Serving India & Europe</p>
                </div>
                <div className="group">
                  <div className="bg-gradient-to-r from-nature-500 to-nature-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Wind className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-900 mb-2">Clean Energy Hub</h4>
                  <p className="text-primary-600">Renewable Energy Focus</p>
                </div>
                <div className="group">
                  <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-900 mb-2">Sustainable Future</h4>
                  <p className="text-primary-600">Green Technology Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;