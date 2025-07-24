import { Sun, Zap, Settings, Users, ArrowRight, CheckCircle, Battery, Target, Award, TrendingUp, Wind, Globe } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      title: 'Utility-Scale Solar Parks',
      description: 'We identify, develop, and deliver bankable solar projects with strong returns and long-term viability.',
      icon: Sun,
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
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center text-center bg-cover bg-full"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20231004/pngtree-illustrated-3d-render-of-solar-cell-industrial-technology-harnessing-clean-energy-image_13558074.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Our Services
          </h1>
          <p className="text-white/80 text-lg">
          Comprehensive renewable energy solutions designed to accelerate your transition 
          to sustainable and efficient energy systems across the entire value chain.          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
              Portfolio of Services
            </h2>
            <p className="text-xl text-gray-400">
              We are strategically positioned for sustainable infrastructure development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-lg p-10 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-gray-600"
              >
                <div className="bg-white w-20 h-20 rounded-lg flex items-center justify-center mb-8">
                  <service.icon className="h-10 w-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                {service.highlight && (
                  <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
                    {service.highlight}
                  </div>
                )}
                <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-black" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Offerings */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
              Our Offerings
            </h2>
            <p className="text-xl text-gray-400">
              We offer partners and clients a strategic advantage in the clean energy transition
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {detailedOfferings.map((offering, index) => (
              <div 
                key={index}
                className="bg-black rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-gray-600"
              >
                {/* Icon Header */}
                <div className="h-32 bg-gray-800 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <offering.icon className="h-12 w-12 text-black" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{offering.title}</h3>
                  <p className="text-gray-400 font-medium mb-6">{offering.subtitle}</p>
                  
                  <div className="space-y-3 mb-8">
                    {offering.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <p className="text-white font-semibold">{offering.benefits}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidy Strategy */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
              Subsidy Strategy
            </h2>
            <p className="text-xl text-gray-400">
              Maximize your project returns through comprehensive subsidy optimization
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {subsidyPrograms.map((category, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-10 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-8">{category.category}</h3>
                <div className="space-y-4">
                  {category.programs.map((program, programIndex) => (
                    <div key={programIndex} className="flex items-start space-x-3">
                      <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="h-4 w-4 text-black" />
                      </div>
                      <span className="text-gray-300">{program}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-lg p-12 text-white text-center border border-gray-800">
            <h3 className="text-3xl font-bold mb-8">Our Role in Subsidy Optimization</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="bg-white/10 p-6 rounded-lg mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <Award className="h-12 w-12 mx-auto" />
                </div>
                <p className="font-semibold text-lg">Identify Applicable Subsidies</p>
              </div>
              <div className="group">
                <div className="bg-white/10 p-6 rounded-lg mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <Settings className="h-12 w-12 mx-auto" />
                </div>
                <p className="font-semibold text-lg">Handle Documentation & Approvals</p>
              </div>
              <div className="group">
                <div className="bg-white/10 p-6 rounded-lg mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <TrendingUp className="h-12 w-12 mx-auto" />
                </div>
                <p className="font-semibold text-lg">Optimize Project IRR Using Subsidy Stacking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
              Why Choose Thaara Energy?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                title: 'Proven Track Record', 
                description: 'Proven track record across 10 MW+ of installations with successful project delivery.',
                icon: Award
              },
              { 
                title: 'Expert Team', 
                description: 'Team of solar engineers, policy experts, and project managers with deep industry knowledge.',
                icon: Users
              },
              { 
                title: 'Best-in-Class Components', 
                description: 'Best-in-class components and warranties ensuring long-term performance and reliability.',
                icon: CheckCircle
              },
              { 
                title: 'Client-First Approach', 
                description: 'Client-first approach with dedicated post-installation support and maintenance services.',
                icon: Target
              },
              { 
                title: 'Reliable & Scalable', 
                description: 'Reliable, scalable, and profitable solutions designed for long-term success.',
                icon: TrendingUp
              },
              { 
                title: 'Full-Service Provider', 
                description: 'Complete end-to-end solutions from planning and design to installation and maintenance.',
                icon: Settings
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-black rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-gray-600"
              >
                {/* Icon Header */}
                <div className="h-32 bg-gray-800 flex items-center justify-center">
                  <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center shadow-lg">
                    <benefit.icon className="h-8 w-8 text-black" />
                  </div>
                </div>
                
                <div className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Energy Future?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Contact us today to discuss your renewable energy requirements and discover how we can help 
            you achieve your sustainability and financial goals.
          </p>
          <button className="bg-white text-black px-12 py-6 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all duration-300 inline-flex items-center shadow-lg">
            Get Started Today
            <ArrowRight className="ml-3 h-6 w-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;