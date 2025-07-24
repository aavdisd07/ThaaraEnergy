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
      details: ['Hyderabad, India', 'Serving India & Europe']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9966886880']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['rajeev@thaaraenergy.com', 'amrithaa@thaararajeev.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM']
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
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-gray-900"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your energy future? Contact us to discuss your clean energy 
            and sustainability requirements. We're here to help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-900 rounded-lg shadow-xl border border-gray-800">
              {/* Form Header */}
              <div className="relative h-32 bg-gray-800 rounded-t-lg">
                <img 
                  src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Contact Us"
                  className="w-full h-full object-cover rounded-t-lg opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-t-lg"></div>
                <div className="absolute bottom-4 left-6">
                  <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
                </div>
              </div>
              
              <div className="p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 bg-gray-800 text-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 bg-gray-800 text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 bg-gray-800 text-white"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 bg-gray-800 text-white"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 bg-gray-800 text-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 resize-none bg-gray-800 text-white"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center shadow-lg"
                  >
                    Send Message
                    <Send className="ml-3 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">
                  Contact Information
                </h2>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  We're here to help you with your clean energy and sustainability needs. 
                  Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors duration-300"
                  >
                    <div className="flex items-start space-x-4 p-8">
                      <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-8 w-8 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-400 font-medium">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white p-3 rounded-lg">
                    <Sparkles className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Quick Response</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
              Our Location
            </h2>
            <p className="text-xl text-gray-400">
              Headquartered in Hyderabad, India, serving emerging markets across India and Europe.
            </p>
          </div>
          
          <div className="bg-black rounded-lg shadow-xl border border-gray-800">
            {/* Map Header */}
            <div className="relative h-64">
              <img 
                src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Hyderabad Solar Infrastructure"
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-t-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="bg-white/20 p-6 rounded-lg mb-4 backdrop-blur-sm">
                    <MapPin className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Hyderabad, India</h3>
                  <p className="text-gray-300 text-lg">
                    Strategic location for serving emerging markets in India and expanding to Europe
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-12 text-center">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group">
                  <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-black" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Global Reach</h4>
                  <p className="text-gray-400">Serving India & Europe</p>
                </div>
                <div className="group">
                  <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Wind className="h-8 w-8 text-black" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Clean Energy Hub</h4>
                  <p className="text-gray-400">Renewable Energy Focus</p>
                </div>
                <div className="group">
                  <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-black" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Sustainable Future</h4>
                  <p className="text-gray-400">Green Technology Innovation</p>
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