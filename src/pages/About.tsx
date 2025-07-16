import React from 'react';
import { Target, Eye, Heart, Users, Globe, Award, TrendingUp, Calendar } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Sustainability First',
      description: 'We place environmental responsibility at the heart of every decision, ensuring our projects contribute meaningfully to a cleaner, healthier planet.'
    },
    {
      icon: Target,
      title: 'Innovation with Purpose',
      description: 'We champion forward-thinking, scalable solutions that address real-world challenges in clean energy and sustainable infrastructure.'
    },
    {
      icon: Users,
      title: 'Integrity & Transparency',
      description: 'We uphold the highest standards of ethics, governance, and accountability in every aspect of our business and stakeholder relationships.'
    },
    {
      icon: Globe,
      title: 'Collaboration for Impact',
      description: 'We believe transformative change is achieved through strong partnerships — with governments, investors, industries, and communities.'
    },
    {
      icon: Award,
      title: 'Value-Driven Growth',
      description: 'Our commitment is to build commercially successful, resilient ventures that deliver long-term value for our clients, partners, and society at large.'
    }
  ];

  const strategicPlan = [
    {
      year: '2025',
      focus: 'Project Delivery & Track Record',
      milestone: 'Complete 10 MW solar park',
      status: 'In Progress'
    },
    {
      year: '2026',
      focus: 'Replication & EPC Scale',
      milestone: 'Begin next 15–20 MW park',
      status: 'Planned'
    },
    {
      year: '2027',
      focus: 'Developer Role & Asset Ownership',
      milestone: 'Explore captive solar or RE asset SPVs',
      status: 'Planned'
    },
    {
      year: '2028',
      focus: 'Institutional Tie-ups',
      milestone: 'Work with banks for retail financing & leasing',
      status: 'Planned'
    },
    {
      year: '2029',
      focus: 'Vertical Integration',
      milestone: 'Explore module assembly or in-house BOS components',
      status: 'Planned'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-dark-800 mb-6">
            About Thaara Energy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A forward-looking clean energy company committed to accelerating the global transition to sustainable power.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-800 mb-6">
                Who We Are
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Thaara Energy is a forward-looking clean energy company committed to accelerating the global 
                  transition to sustainable power. We specialize in the development and delivery of innovative, 
                  high-impact solutions across the renewable energy value chain.
                </p>
                <p>
                  Thaara Energy stands at the intersection of innovation, sustainability, and investment opportunity. 
                  With a focus on innovation, sustainability, and impact, we are building the foundations of 
                  tomorrow's low-carbon economy.
                </p>
                <p>
                  At Thaara Energy, our mission is to empower communities, industries, and nations through resilient, 
                  clean energy solutions. We partner with governments, private enterprises, and institutional investors 
                  to develop future-ready infrastructure that is resilient, efficient, and environmentally conscious.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
              <img 
                src="/Thaara energy background.webp" 
                alt="Solar Park with Green Landscape" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-primary-500 mr-3" />
                <h2 className="text-2xl font-bold text-dark-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be a leading renewable energy player in India, creating resilient ecosystems that empower 
                communities, future-proof industries, and drive inclusive economic growth across emerging markets.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-secondary-500 mr-3" />
                <h2 className="text-2xl font-bold text-dark-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Drive clean energy adoption through innovative and efficient solar solutions. At Thaara Energy, 
                our mission is to accelerate the transition to clean, efficient, and scalable energy solutions by:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Developing innovative renewable energy projects that reduce carbon footprints</li>
                <li>• Building robust electric mobility infrastructure</li>
                <li>• Delivering sustainable industrial solutions</li>
                <li>• Collaborating with strategic partners for impactful clean-tech initiatives</li>
                <li>• Championing responsible entrepreneurship where profitability and sustainability co-exist</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decision-making and drive our commitment to sustainable progress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-800 mb-6">
                About the Founder
              </h2>
              <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                Ponnam Rajeev Chandra
              </h3>
              <p className="text-lg text-gray-700 mb-4 font-medium">
                Founder & Managing Director, Thaara Energy
              </p>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  A lawyer by profession and a sustainability enthusiast by conviction, Ponnam Rajeev Chandra 
                  has always believed that progressive businesses must lead the way toward a cleaner, more resilient future.
                </p>
                <p>
                  Based in Hyderabad, India, Rajeev brings together the precision of legal acumen with the vision 
                  of a responsible entrepreneur. With years of experience in navigating complex regulatory frameworks 
                  and advising businesses on corporate strategy, his journey into clean energy was driven by a 
                  deeper personal commitment to build enterprises that create measurable, lasting impact.
                </p>
                <p>
                  Thaara Energy was founded as a reflection of this belief. Under his leadership, the company is 
                  actively working to bridge the gap between sustainable technologies and scalable, commercially 
                  viable projects in India and emerging markets. Rajeev is particularly passionate about developing 
                  clean energy solutions that are not only environmentally responsible but also economically transformative.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Ponnam Rajeev Chandra - Founder" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Year Strategic Plan */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-800 mb-4">
              5-Year Strategic Plan
            </h2>
            <p className="text-xl text-gray-600">
              Our roadmap for growth and expansion in the renewable energy sector
            </p>
          </div>

          <div className="space-y-8">
            {strategicPlan.map((plan, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-2">
                      {plan.year}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      plan.status === 'In Progress' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {plan.status}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-dark-800 mb-2">{plan.focus}</h3>
                    <p className="text-gray-600">{plan.milestone}</p>
                  </div>
                  <div className="text-center">
                    <Calendar className="h-8 w-8 text-primary-500 mx-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Impact & Growth
            </h2>
            <p className="text-xl text-white/90">
              Building India's renewable energy future with proven results
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '10+ MW', label: 'Solar Capacity Under Development' },
              { value: '5+', label: 'Years Industry Experience' },
              { value: '50+', label: 'Projects Completed' },
              { value: '100+', label: 'Satisfied Clients' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;