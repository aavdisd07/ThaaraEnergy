import { Building2, Factory, Home, Zap, Truck, Sun, Battery, Leaf, Wind, Sparkles, Globe, TrendingUp } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      title: 'Residential Solar',
      description: 'Clean energy solutions for homes and residential communities with grid-tied and hybrid systems.',
      icon: Home,
      color: 'from-primary-400 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100',
      image: 'https://images.pexels.com/photos/2850290/pexels-photo-2850290.jpeg?auto=compress&cs=tinysrgb&w=800',
      solutions: ['Residential Solar Systems', 'Grid-tied Solutions', 'Hybrid Systems', 'Net Metering', 'Home Energy Storage'],
      benefits: 'Save up to 90% on electricity bills with 3-5 year payback'
    },
    {
      title: 'Commercial & Industrial',
      description: 'Comprehensive solar solutions for businesses with CAPEX and OPEX models to reduce operational costs.',
      icon: Building2,
      color: 'from-secondary-400 to-secondary-600',
      bgColor: 'from-secondary-50 to-secondary-100',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      solutions: ['Commercial Rooftop Solar', 'Industrial Solar Systems', 'CAPEX & OPEX Models', 'Energy Management', 'Corporate PPAs'],
      benefits: 'Reduce energy costs and meet ESG mandates'
    },
    {
      title: 'Manufacturing',
      description: 'Industrial sustainability solutions to reduce operational costs and carbon footprint for manufacturing facilities.',
      icon: Factory,
      color: 'from-nature-400 to-nature-600',
      bgColor: 'from-nature-50 to-nature-100',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
      solutions: ['Process Optimization', 'Waste Heat Recovery', 'Cogeneration Systems', 'Energy Audits', 'Sustainability Consulting'],
      benefits: 'Optimize energy consumption and reduce carbon emissions'
    },
    {
      title: 'Utilities & IPPs',
      description: 'Large-scale solar park development and grid integration solutions for utilities and independent power producers.',
      icon: Zap,
      color: 'from-accent-400 to-accent-600',
      bgColor: 'from-accent-50 to-accent-100',
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800',
      solutions: ['Utility-Scale Solar Parks', 'Grid Integration', 'Power Purchase Agreements', 'O&M Services', 'Asset Management'],
      benefits: 'MW-scale renewable energy generation with long-term contracts'
    },
    {
      title: 'Transportation & Logistics',
      description: 'Electric mobility infrastructure for fleets and transportation companies transitioning to clean energy.',
      icon: Truck,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
      solutions: ['Fleet Electrification', 'Charging Infrastructure', 'Route Optimization', 'Maintenance Services', 'Energy Management'],
      benefits: 'Reduce fuel costs by 50% and improve sustainability ratings'
    },
    {
      title: 'Agriculture',
      description: 'Solar solutions for agricultural applications including irrigation pumps and agri-feeders under PM-KUSUM scheme.',
      icon: Leaf,
      color: 'from-emerald-400 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100',
      image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800',
      solutions: ['Solar Water Pumps', 'Agri-Feeder Solarization', 'PM-KUSUM Implementation', 'Grid-Connected Systems', 'Subsidy Optimization'],
      benefits: 'Reduce irrigation costs and increase farm productivity'
    }
  ];

  const caseStudies = [
    {
      industry: 'Commercial',
      client: 'Office Complex - 500 kW Installation',
      challenge: 'Reduce electricity costs by 40% while maintaining operations',
      solution: 'Rooftop solar system with net metering and energy management',
      result: '45% reduction in energy costs, 3.5-year payback period',
      savings: '₹15 lakhs annual savings',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      industry: 'Industrial',
      client: 'Manufacturing Plant - 2 MW Installation',
      challenge: 'Meet ESG targets while reducing operational expenses',
      solution: 'Large-scale rooftop solar with OPEX model and monitoring',
      result: '50% renewable energy mix, carbon neutral operations',
      savings: '₹60 lakhs annual savings',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      industry: 'Agriculture',
      client: 'Farmer Cooperative - PM-KUSUM Project',
      challenge: 'Reduce irrigation costs for 100+ farmers',
      solution: 'Solar water pumps and feeder solarization with subsidies',
      result: '70% reduction in irrigation costs, improved crop yield',
      savings: '₹2 lakhs per farmer annually',
      image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const marketOpportunities = [
    {
      sector: 'Residential',
      potential: '40 GW by 2026',
      drivers: ['MNRE subsidies up to 40%', 'Net metering policies', 'Rising electricity tariffs'],
      icon: Home,
      color: 'from-primary-500 to-primary-600'
    },
    {
      sector: 'Commercial & Industrial',
      potential: '60 GW by 2030',
      drivers: ['Corporate ESG mandates', 'Open access regulations', 'Tax benefits'],
      icon: Building2,
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      sector: 'Utility Scale',
      potential: '280 GW by 2030',
      drivers: ['Government tenders', 'Falling solar costs', 'Grid parity achievement'],
      icon: Sun,
      color: 'from-accent-500 to-accent-600'
    },
    {
      sector: 'Agriculture',
      potential: '25 GW by 2026',
      drivers: ['PM-KUSUM scheme', 'Feeder separation', 'Water security needs'],
      icon: Leaf,
      color: 'from-nature-500 to-nature-600'
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
            <Globe className="h-8 w-8 text-white animate-pulse" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 animate-slide-up">
            Industries We Serve
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto animate-slide-up delay-100">
            Delivering tailored renewable energy solutions across diverse industry sectors 
            to drive efficiency, reduce costs, and accelerate the clean energy transition.
          </p>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
            <path d="M0,120 C300,80 900,80 1200,120 L1200,120 L0,120 Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Industries Grid */}
      {/* Industries Carousel */}
      <section className="py-24 bg-gradient-to-br from-white via-primary-50/30 to-nature-50/30 relative">
        <div className="absolute inset-0 bg-leaf-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Replacing Slider with a responsive grid for better compatibility */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${industry.bgColor} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-primary-100 hover:border-primary-200`}
              >
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <img src={industry.image} alt={industry.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10 p-8">
                  <div className={`bg-gradient-to-r ${industry.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">{industry.title}</h3>
                  <p className="text-primary-700 mb-6 leading-relaxed">{industry.description}</p>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-primary-900 mb-3">Key Solutions:</h4>
                    {industry.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                        <span className="text-primary-800 text-sm">{solution}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-primary-200">
                    <p className="text-primary-700 font-semibold text-sm">{industry.benefits}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunities */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-nature-50 relative overflow-hidden">
        {/* Curved Top */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
            <path d="M0,0 C300,40 900,40 1200,0 L1200,0 L0,0 Z" fill="white"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-primary-100 to-nature-100 rounded-2xl mb-6">
              <div className="bg-gradient-to-r from-primary-500 to-nature-500 p-3 rounded-xl">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Market Opportunities
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              India's renewable energy sector presents unprecedented growth opportunities across all segments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketOpportunities.map((opportunity, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center overflow-hidden border border-primary-100 hover:border-primary-200"
              >
                {/* Decorative Header */}
                <div className={`bg-gradient-to-r ${opportunity.color} h-2`}></div>
                
                <div className="p-8">
                  <div className={`bg-gradient-to-r ${opportunity.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <opportunity.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">{opportunity.sector}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-6">{opportunity.potential}</div>
                  <div className="space-y-2">
                    {opportunity.drivers.map((driver, driverIndex) => (
                      <div key={driverIndex} className="text-sm text-primary-700 flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></div>
                        {driver}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-700 relative overflow-hidden">
        {/* Organic Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-x-48 -translate-y-48 animate-spin-slow"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-nature-400/20 to-transparent rounded-full translate-x-40 translate-y-40 animate-float"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-8 backdrop-blur-sm">
              <Sparkles className="h-8 w-8 text-white animate-pulse" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Real-world examples of how we've helped businesses across different industries 
              achieve their sustainability and cost reduction goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.client}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 text-white">
                  <h3 className="text-xl font-bold mb-6">{study.client}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-nature-200 mb-2">Challenge:</h4>
                      <p className="text-white/80 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-nature-200 mb-2">Solution:</h4>
                      <p className="text-white/80 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-nature-200 mb-2">Result:</h4>
                      <p className="text-white text-sm font-medium">{study.result}</p>
                    </div>
                    <div className="bg-nature-500/20 rounded-2xl p-4 border border-nature-400/30">
                      <p className="text-nature-200 font-semibold text-sm">{study.savings}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
            <path d="M0,120 C300,80 900,80 1200,120 L1200,120 L0,120 Z" fill="#f0fdf4"/>
          </svg>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="py-24 bg-gradient-to-br from-primary-50 via-nature-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-nature-100 to-primary-100 rounded-2xl mb-6">
              <div className="bg-gradient-to-r from-nature-500 to-primary-500 p-3 rounded-xl">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Why Choose Thaara Energy?
            </h2>
            <p className="text-xl text-primary-600">
              Proven expertise across industries with a track record of successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Industry Expertise', 
                description: 'Deep understanding of sector-specific energy challenges and regulatory requirements.',
                number: '01',
                color: 'from-primary-500 to-primary-600'
              },
              { 
                title: 'Proven Track Record', 
                description: 'Successful project delivery across 10+ MW of installations with guaranteed performance.',
                number: '02',
                color: 'from-secondary-500 to-secondary-600'
              },
              { 
                title: 'End-to-End Solutions', 
                description: 'Complete project lifecycle management from planning and design to installation and maintenance.',
                number: '03',
                color: 'from-nature-500 to-nature-600'
              },
              { 
                title: 'Subsidy Optimization', 
                description: 'Maximize project returns through comprehensive subsidy navigation and documentation support.',
                number: '04',
                color: 'from-accent-500 to-accent-600'
              }
            ].map((benefit, index) => (
              <div key={index} className="group text-center">
                <div className={`bg-gradient-to-r ${benefit.color} w-20 h-20 rounded-3xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  {benefit.number}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">{benefit.title}</h3>
                <p className="text-primary-600">{benefit.description}</p>
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
            <Wind className="h-8 w-8 text-white animate-pulse" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Industry with Clean Energy?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Contact us today to discuss your specific industry requirements and discover how we can help 
            you achieve significant cost savings while meeting your sustainability goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative bg-gradient-to-r from-nature-500 via-primary-500 to-nature-600 text-white px-12 py-6 rounded-2xl font-semibold text-lg hover:from-nature-600 hover:via-primary-600 hover:to-nature-700 transition-all duration-500 inline-flex items-center justify-center shadow-2xl transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Get Industry-Specific Quote</span>
              <Battery className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button className="group relative border-2 border-white/80 text-white px-12 py-6 rounded-2xl font-semibold text-lg hover:bg-white hover:text-primary-900 transition-all duration-500 backdrop-blur-sm bg-white/10 transform hover:scale-105">
              <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 group-hover:text-primary-900">Download Case Studies</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;