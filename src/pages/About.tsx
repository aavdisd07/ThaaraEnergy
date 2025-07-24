import { Target, Eye, Heart, Users, Globe, Award, Calendar } from 'lucide-react';

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
    <div className="bg-black text-white">
      {/* Hero Section */}
    
      <section
        className="relative min-h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/thaaraLogo.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <div className="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          About Thaara Energy
          </h1>
          <p className="text-white/80 text-lg">
          A forward-looking clean energy company committed to accelerating the global transition to sustainable power.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
                Who We Are
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
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
            <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
              <img 
                src="/Thaara energy background.webp" 
                alt="Solar Park with Green Landscape" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-black rounded-lg p-10 shadow-lg border border-gray-800">
              <div className="flex items-center mb-8">
                <Eye className="h-10 w-10 text-white mr-4" />
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                To be a leading renewable energy player in India, creating resilient ecosystems that empower 
                communities, future-proof industries, and drive inclusive economic growth across emerging markets.
              </p>
            </div>

            <div className="bg-black rounded-lg p-10 shadow-lg border border-gray-800">
              <div className="flex items-center mb-8">
                <Target className="h-10 w-10 text-white mr-4" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Drive clean energy adoption through innovative and efficient solar solutions. At Thaara Energy, 
                our mission is to accelerate the transition to clean, efficient, and scalable energy solutions by:
              </p>
              <ul className="text-gray-400 space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Developing innovative renewable energy projects that reduce carbon footprints
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Building robust electric mobility infrastructure
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Delivering sustainable industrial solutions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Collaborating with strategic partners for impactful clean-tech initiatives
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Championing responsible entrepreneurship where profitability and sustainability co-exist
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              The principles that guide our decision-making and drive our commitment to sustainable progress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-lg p-8 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-gray-600"
              >
                <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
                About the Founder
              </h2>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ponnam Rajeev Chandra
              </h3>
              <p className="text-lg text-gray-300 mb-6 font-medium">
                Founder & Managing Director, Thaara Energy
              </p>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
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
            <div className="bg-black rounded-lg p-8 border border-gray-800">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Ponnam Rajeev Chandra - Founder" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5-Year Strategic Plan */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
              5-Year Strategic Plan
            </h2>
            <p className="text-xl text-gray-400">
              Our roadmap for growth and expansion in the renewable energy sector
            </p>
          </div>

          <div className="space-y-8">
            {strategicPlan.map((plan, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-lg shadow-lg p-8 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-gray-600"
              >
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="text-center">
                    <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {plan.year}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      plan.status === 'In Progress' 
                        ? 'bg-green-900 text-green-300 border border-green-700' 
                        : 'bg-blue-900 text-blue-300 border border-blue-700'
                    }`}>
                      {plan.status}
                    </span>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.focus}</h3>
                    <p className="text-gray-400">{plan.milestone}</p>
                  </div>
                  <div className="text-center">
                    <Calendar className="h-8 w-8 text-white mx-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">
              Our Impact & Growth
            </h2>
            <p className="text-xl text-gray-400">
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
              <div key={index} className="text-center bg-black rounded-lg p-8 border border-gray-800">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-4">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;