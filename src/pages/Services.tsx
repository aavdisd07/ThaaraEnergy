import React from 'react';
import { Sun, Zap, Settings, Users, ArrowRight, CheckCircle, Battery, Leaf, Target, Award, TrendingUp, Sparkles, Wind, Globe } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      title: 'Utility-Scale Solar Parks',
      description: 'We identify, develop, and deliver bankable solar projects with strong returns and long-term viability.',
      icon: Sun,
      color: 'from-primary-400 via-primary-500 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100',
      features: [
        'Land acquisition and development',
        'Turnkey park infrastructure',
        'Corporate PPA facilitation',
        'Multi-MW scale projects',
        'Grid integration and O&M'
      ],
      highlight: 'Currently executing 10 MW Solar Park'
    },
    {
      title: 'EPCM for Renewable Infrastructure',
      description: 'From engineering to procurement and construction management, we offer turnkey solutions optimized for efficiency, quality, and ROI.',
      icon: Zap,
      color: 'from-secondary-400 via-secondary-500 to-secondary-600',
      bgColor: 'from-secondary-50 to-secondary-100',
      features: [
        'End-to-end execution',
        'Design optimization',
        'Tier-1 module & inverter supply',
        'BOS, civil and electrical works',
        'Quality control and commissioning'
      ]
    },
    {
      title: 'Strategic Advisory in Renewables',
      description: 'Our expertise supports governments, corporations, and investors in navigating the energy transition.',
      icon: Users,
      color: 'from-accent-400 via-accent-500 to-accent-600',
      bgColor: 'from-accent-50 to-accent-100',
      features: [
        'Policy and subsidy navigation',
        'Technical guidance',
        'Financial advisory',
        'Investment planning',
        'Regulatory compliance'
      ]
    },
    {
      title: 'EV Charging Infrastructure',
      description: 'We enable the shift to electric mobility by deploying reliable, smart charging networks.',
      icon: Battery,
      color: 'from-nature-400 via-nature-500 to-nature-600',
      bgColor: 'from-nature-50 to-nature-100',
      features: [
        'Urban charging hubs',
        'Commercial charging solutions',
        'Smart charging networks',
        'Fleet charging infrastructure',
        'Maintenance and support'
      ]
    },
    {
      title: 'Green Hydrogen Initiatives',
      description: 'We are advancing early-stage development of green hydrogen as a key pillar of deep decarbonization.',
      icon: Wind,
      color: 'from-teal-400 via-teal-500 to-teal-600',
      bgColor: 'from-teal-50 to-teal-100',
      features: [
        'Industrial hydrogen solutions',
        'Energy sector applications',
        'Electrolyzer deployment',
        'Storage and distribution',
        'Pilot project development'
      ]
    }
  ];

  const detailedOfferings = [
    {
      title: 'Rooftop Solar Solutions',
      subtitle: 'Clean Power, Right Above You',
      icon: Sun,
      color: 'from-primary-500 to-primary-600',
      features: [
        'Residential – Grid-tied and hybrid systems',
        'Commercial & Industrial – CAPEX & OPEX models',
        'Net metering assistance',
        'AMC and remote monitoring',
        'Reduce grid dependency up to 90%',
        'Payback in 3–5 years | 25+ years of energy savings'
      ],
      benefits: 'Save up to 90% on electricity bills'
    },
    {
      title: 'Solar Parks',
      subtitle: 'Scale Up with Utility-Grade Infrastructure',
      icon: Globe,
      color: 'from-secondary-500 to-secondary-600',
      features: [
        'Land assessment and development',
        'Design and deployment of large-scale solar farms',
        'Grid integration and long-term O&M',
        'Ideal for IPPs, DISCOMs, and institutional clients',
        'MW-scale development with efficiency-focused engineering'
      ],
      benefits: 'Utility-scale renewable energy generation'
    },
    {
      title: 'EPC Services',
      subtitle: 'From Blueprint to Bright Light',
      icon: Settings,
      color: 'from-nature-500 to-nature-600',
      features: [
        'Complete Engineering, Procurement & Construction',
        'In-house technical expertise',
        'Procurement leverage and strict quality control',
        'On-time, on-budget project delivery',
        'Built for performance. Designed for scale.'
      ],
      benefits: 'Turnkey project delivery with guaranteed performance'
    },
    {
      title: 'Subsidy Optimization',
      subtitle: 'Turn Subsidies Into Savings',
      icon: TrendingUp,
      color: 'from-accent-500 to-accent-600',
      features: [
        'Navigate complex government schemes with ease',
        'Maximize financial returns through subsidies',
        'State and central subsidies, tax breaks, net metering',
        'Full documentation and compliance support',
        'Get back up to 30–70% of project cost in incentives'
      ],
      benefits: 'Maximize project ROI through subsidy optimization'
    }
  ];

  const subsidyPrograms = [
    {
      category: 'Central Subsidies',
      programs: [
        'MNRE rooftop subsidy (up to 40% for residential)',
        'PM-KUSUM for agri-feeders and standalone pumps',
        'ALMM compliance and VGF schemes for solar parks'
      ]
    },
    {
      category: 'State Incentives',
      programs: [
        'Gujarat: Surya Urja Rooftop Yojana',
        'Maharashtra: Net metering & capital subsidy',
        'Tamil Nadu: TANGEDCO-driven solar rooftop benefits'
      ]
    }
  ];

  return (
    <div className="animate-fade-in overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Green Energy Theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=1600')",
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
            <Sparkles className="h-8 w-8 text-white animate-pulse" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 animate-slide-up">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto animate-slide-up delay-100">
            Comprehensive renewable energy solutions designed to accelerate your transition 
            to sustainable and efficient energy systems across the entire value chain.
          </p>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
            <path d="M0,120 C300,80 900,80 1200,120 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-gradient-to-br from-white via-primary-50/30 to-nature-50/30 relative">
        <div className="absolute inset-0 bg-leaf-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-primary-100 to-nature-100 rounded-2xl mb-6">
              <div className="bg-gradient-to-r from-primary-500 to-nature-500 p-3 rounded-xl">
                <Globe className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Portfolio of Services
            </h2>
            <p className="text-xl text-primary-600">
              We are strategically positioned for sustainable infrastructure development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br ${service.bgColor} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up border border-primary-100 hover:border-primary-200`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Organic Overlay */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/30 to-transparent rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10 p-10">
                  <div className={`bg-gradient-to-r ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">{service.title}</h3>
                  {service.highlight && (
                    <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-4 animate-pulse">
                      {service.highlight}
                    </div>
                  )}
                  <p className="text-primary-700 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="bg-primary-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-primary-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Offerings */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-nature-50 relative overflow-hidden">
        {/* Curved Top */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
            <path d="M0,0 C300,40 900,40 1200,0 L1200,0 L0,0 Z" fill="white"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-nature-100 to-primary-100 rounded-2xl mb-6">
              <div className="bg-gradient-to-r from-nature-500 to-primary-500 p-3 rounded-xl">
                <Leaf className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Our Offerings
            </h2>
            <p className="text-xl text-primary-600">
              We offer partners and clients a strategic advantage in the clean energy transition
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {detailedOfferings.map((offering, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-primary-100 hover:border-primary-200"
              >
                {/* Icon Header */}
                <div className="relative h-32 bg-gradient-to-br from-primary-50 to-nature-50 flex items-center justify-center">
                  <div className={`bg-gradient-to-r ${offering.color} p-6 rounded-3xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <offering.icon className="h-12 w-12 text-white" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">{offering.title}</h3>
                  <p className="text-primary-600 font-medium mb-6">{offering.subtitle}</p>
                  
                  <div className="space-y-3 mb-8">
                    {offering.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                        <span className="text-primary-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-primary-50 to-nature-50 rounded-2xl p-6 border border-primary-100">
                    <p className="text-primary-700 font-semibold">{offering.benefits}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidy Strategy */}
      <section className="py-24 bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-700 relative overflow-hidden">
        {/* Organic Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-x-48 -translate-y-48 animate-spin-slow"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-nature-400/20 to-transparent rounded-full translate-x-40 translate-y-40 animate-float"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-8 backdrop-blur-sm">
              <Target className="h-8 w-8 text-white animate-pulse" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Subsidy Strategy
            </h2>
            <p className="text-xl text-white/90">
              Maximize your project returns through comprehensive subsidy optimization
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {subsidyPrograms.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8">{category.category}</h3>
                <div className="space-y-4">
                  {category.programs.map((program, programIndex) => (
                    <div key={programIndex} className="flex items-start space-x-3">
                      <div className="bg-nature-400 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-white/90">{program}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 text-white text-center border border-white/20 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Our Role in Subsidy Optimization</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="bg-white/20 p-6 rounded-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-12 w-12 mx-auto" />
                </div>
                <p className="font-semibold text-lg">Identify Applicable Subsidies</p>
              </div>
              <div className="group">
                <div className="bg-white/20 p-6 rounded-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="h-12 w-12 mx-auto" />
                </div>
                <p className="font-semibold text-lg">Handle Documentation & Approvals</p>
              </div>
              <div className="group">
                <div className="bg-white/20 p-6 rounded-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-12 w-12 mx-auto" />
                </div>
                <p className="font-semibold text-lg">Optimize Project IRR Using Subsidy Stacking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
            <path d="M0,120 C300,80 900,80 1200,120 L1200,120 L0,120 Z" fill="#f0fdf4"/>
          </svg>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-nature-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-primary-100 to-nature-100 rounded-2xl mb-6">
              <div className="bg-gradient-to-r from-primary-500 to-nature-500 p-3 rounded-xl">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Why Choose Thaara Energy?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                title: 'Proven Track Record', 
                description: 'Proven track record across 10 MW+ of installations with successful project delivery.',
                icon: Award,
                color: 'from-primary-500 to-primary-600'
              },
              { 
                title: 'Expert Team', 
                description: 'Team of solar engineers, policy experts, and project managers with deep industry knowledge.',
                icon: Users,
                color: 'from-secondary-500 to-secondary-600'
              },
              { 
                title: 'Best-in-Class Components', 
                description: 'Best-in-class components and warranties ensuring long-term performance and reliability.',
                icon: CheckCircle,
                color: 'from-nature-500 to-nature-600'
              },
              { 
                title: 'Client-First Approach', 
                description: 'Client-first approach with dedicated post-installation support and maintenance services.',
                icon: Target,
                color: 'from-accent-500 to-accent-600'
              },
              { 
                title: 'Reliable & Scalable', 
                description: 'Reliable, scalable, and profitable solutions designed for long-term success.',
                icon: TrendingUp,
                color: 'from-teal-500 to-teal-600'
              },
              { 
                title: 'Full-Service Provider', 
                description: 'Complete end-to-end solutions from planning and design to installation and maintenance.',
                icon: Settings,
                color: 'from-purple-500 to-purple-600'
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-primary-100 hover:border-primary-200"
              >
                {/* Icon Header */}
                <div className="relative h-32 bg-gradient-to-br from-primary-50 to-nature-50 flex items-center justify-center">
                  <div className={`bg-gradient-to-r ${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">{benefit.title}</h3>
                  <p className="text-primary-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-900 via-primary-800 to-secondary-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-nature-400/20 to-transparent rounded-full animate-float blur-xl"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-accent-400/20 to-transparent rounded-full animate-bounce-slow blur-lg"></div>
          <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-gradient-to-br from-primary-400/15 to-transparent rounded-full animate-spin-slow blur-2xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-8 backdrop-blur-sm">
            <Zap className="h-8 w-8 text-white animate-pulse" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Energy Future?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Contact us today to discuss your renewable energy requirements and discover how we can help 
            you achieve your sustainability and financial goals.
          </p>
          <button className="group relative bg-gradient-to-r from-nature-500 via-primary-500 to-nature-600 text-white px-12 py-6 rounded-2xl font-semibold text-lg hover:from-nature-600 hover:via-primary-600 hover:to-nature-700 transition-all duration-500 inline-flex items-center shadow-2xl transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Get Started Today</span>
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;