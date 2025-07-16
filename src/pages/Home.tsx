import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Zap, Target, Award, TrendingUp, Sun, Battery, Leaf, CheckCircle, Users, Globe, Sparkles, Wind, Play, Calendar, MapPin, Star, Shield, Lightbulb } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Home = () => {
  const stats = [
    { label: 'MW Solar Capacity', value: '10+', icon: Sun, color: 'from-primary-400 to-primary-600' },
    { label: 'Years Experience', value: '5+', icon: Award, color: 'from-secondary-400 to-secondary-600' },
    { label: 'Projects Delivered', value: '50+', icon: TrendingUp, color: 'from-accent-400 to-accent-600' },
    // { label: 'Happy Clients', value: '100+', icon: Target, color: 'from-nature-400 to-nature-600' },
  ];

  const services = [
    {
      title: 'Utility-Scale Solar Parks',
      description: 'We identify, develop, and deliver bankable solar projects with strong returns and long-term viability. Currently executing a 50 MW Solar Park with full EPC scope.',
      icon: Sun,
      color: 'from-primary-400 via-primary-500 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100',
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'EPCM for Renewable Infrastructure',
      description: 'From engineering to procurement and construction management, we offer turnkey solutions optimized for efficiency, quality, and ROI.',
      icon: Zap,
      color: 'from-secondary-400 via-secondary-500 to-secondary-600',
      bgColor: 'from-secondary-50 to-secondary-100',
      image: 'data:image/jpeg;base64,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'
    },
    {
      title: 'EV Charging Infrastructure',
      description: 'We enable the shift to electric mobility by deploying reliable, smart charging networks in urban and commercial hubs.',
      icon: Battery,
      color: 'from-accent-400 via-accent-500 to-accent-600',
      bgColor: 'from-accent-50 to-accent-100',
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Strategic Advisory in Renewables',
      description: 'Our expertise supports governments, corporations, and investors in navigating the energy transition with policy guidance and technical advisory.',
      icon: Users,
      color: 'from-nature-400 via-nature-500 to-nature-600',
      bgColor: 'from-nature-50 to-nature-100',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Energy Storage System',
      description: 'We are advancing early-stage development of green hydrogen as a key pillar of deep decarbonization for industrial and energy applications.',
      icon: Wind,
      color: 'from-teal-400 via-teal-500 to-teal-600',
      bgColor: 'from-teal-50 to-teal-100',
      image: '/storage.jpg'
    },
    {
      title: 'Agrivoltaics',
      description: 'We integrate agriculture with solar power systems to maximize land productivity, ensuring renewable energy generation and food cultivation coexist efficiently.',
      icon: Leaf, // Replace with a suitable icon from your library
      color: 'from-green-400 via-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      image: 'https://media.istockphoto.com/id/1339079398/photo/agrivoltaic.jpg?s=612x612&w=0&k=20&c=TNMuoNoANhWmkIhr5FMxvw0Vb0Aq2Ufsem4Esra8S2A='
    },
    {
      title: 'Photovoltaic (PV) System',
      description: 'Our PV systems harness solar energy through advanced photovoltaic modules, enabling reliable, clean electricity for homes, businesses, and industries.',
      icon: Sun, // Replace with the appropriate icon
      color: 'from-yellow-400 via-orange-500 to-red-500',
      bgColor: 'from-yellow-50 to-yellow-100',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7cxq4SvuWnvZJhxXKsCvMhplKw3TLbpqLfDrVBSUqfUywb4W2LZKVG43dZ23vtjUwb8&usqp=CAU'
    }

  ];

  const opportunities = [
    "India's Target: 500 GW of non-fossil fuel capacity by 2030",
    "Government Push: PM-KUSUM, Rooftop Solar Phase II, Green Energy Corridor",
    "Rising electricity demand and cost pressures",
    "Corporate ESG mandates driving renewable energy demand",
    "Untapped potential in Tier II/III cities and rural areas"
  ];

  const galleryImages = [
    {
      src: '/WhatsApp Image 2025-07-01 at 1.01.34 PM.jpeg',
      title: 'Solar Park Development',
      description: 'Large-scale utility solar installations'
    },
    {
      src: '/WhatsApp Image 2025-07-01 at 1.01.35 PM.webp',
      title: 'Rooftop Solar Systems',
      description: 'Commercial and residential installations'
    },
    {
      src: 'https://media.wired.com/photos/63bc816a995aa119ba7ba802/3:2/w_2560%2Cc_limit/Biz-ev-charger-1242853588.jpg',
      title: 'EV Charging Infrastructure',
      description: 'Electric mobility solutions'
    },
    {
      src: '/storage.jpg',
      title: 'Energy Storage Solutions',
      description: 'Battery and grid integration'
    },
    {
      src: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Industrial Solar',
      description: 'Manufacturing and industrial applications'
    },
    {
      src: 'https://media.wired.com/photos/65eb756aeff26b3b538512d3/4:3/w_2132,h_1599,c_limit/Solar-Revolution-Groundwater-Climate-Desk-Science-1476252781.jpg',
      title: 'Agricultural Solar',
      description: 'Solar pumps and agri-feeders'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-16">
        <div className="animate-fade-in overflow-hidden bg-black">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
            >
              <video
                className="w-full h-full object-cover"
                src="/BgVideo.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-gray-90/85 to-black/40"></div>
              {/* <div className="absolute inset-0 bg-leaf-pattern"></div> */}
            </div>

            {/* Floating Organic Shapes */}
            {/* <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-nature-400/20 rounded-full animate-float blur-xl"></div>
              <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-secondary-400/20 to-accent-400/20 rounded-full animate-float delay-1000 blur-lg"></div>
              <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-nature-400/15 to-primary-400/15 rounded-full animate-bounce-slow blur-2xl"></div>
              <div className="absolute bottom-20 right-16 w-28 h-28 bg-gradient-to-br from-accent-400/20 to-secondary-400/20 rounded-full animate-float delay-2000 blur-lg"></div>
            </div> */}

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-6xl mx-auto">
                {/* <img
                  src="/thaaraLogo.png" // Make sure to adjust the path to match your project structure
                  alt="Thaara Energy Logo"
                  width={300}
                  height={100}
                  className="mx-auto mb-8 animate-slide-up w-[700px] max-w-full h-auto rounded-2xl "
        /> */}
                <h1 className="hover-underline-effect text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wide uppercase mb-6 font-sans relative inline-block">
                  <span className="bg-gradient-to-r from-black via-[#A9A9A9] to-[#C0C0C0] bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(255,255,255,0.2)] animate-shimmer bg-[length:200%_100%]">
                    𝕋ℍ𝔸𝔸ℝ𝔸 𝔼ℕ𝔼ℝ𝔾𝕐
                  </span>
                </h1>


                {/* <img
  src="/thaaraLogo.png"
  alt="Thaara Energy Logo"
  className="mx-auto mb-8 animate-slide-up w-[500px] max-w-full h-auto rounded-2xl  "
/> */}
                <div className="relative">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r from-nature-200 via-primary-200 to-accent-200 bg-clip-text mb-6 animate-slide-up delay-100">
                    Empowering Progress, Sustainability
                  </h2>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-400 to-nature-400 rounded-full animate-pulse"></div>
                </div>
                <p className="text-base sm:text-lg text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-200">
                  Thaara Energy stands at the intersection of innovation, sustainability, and investment opportunity.
                  We specialize in the development and delivery of innovative, high-impact solutions across the renewable energy value chain.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300 mb-12">
                  <a
                    href="/services.html"
                    className="group relative bg-gradient-to-r from-primary-500 via-primary-600 to-nature-600 text-white px-8 py-4 rounded-xl font-semibold text-base hover:from-primary-600 hover:via-primary-700 hover:to-nature-700 transition-all duration-500 flex items-center justify-center shadow-2xl hover:shadow-primary-500/25 transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 group-hover:text-[#F9A825] transition-colors duration-300">
                      Explore Our Solutions
                    </span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                  <a
                    href="/contact.html"
                    className="group relative bg-gradient-to-r from-secondary-500 via-secondary-600 to-secondary-700 text-white px-8 py-4 rounded-xl font-semibold text-base hover:from-secondary-600 hover:via-secondary-700 hover:to-secondary-800 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-secondary-500/25"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 group-hover:text-[#212121] transition-colors duration-300">
                      Start Your Project
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Curved Bottom */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
                <path d="M0,120 C300,80 900,80 1200,120 L1200,120 L0,120 Z" fill="#000000" />
              </svg>
            </div>
          </section>

          {/* Interactive Image Gallery */}
          <section className="py-16 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-primary-900/50 to-nature-900/50 rounded-xl mb-6 backdrop-blur-sm border border-primary-500/30">
                  <Star className="h-6 w-6 text-primary-400 animate-pulse" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Solutions
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Explore our diverse portfolio of renewable energy projects across different sectors and applications
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 transform hover:scale-105 animate-slide-up border border-gray-800 hover:border-primary-500/50"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-300 transition-colors duration-300">
                          {image.title}
                        </h3>
                        <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm">
                          {image.description}
                        </p>
                      </div>

                      {/* Interactive Icon */}
                      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                        <Lightbulb className="h-4 w-4 text-primary-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Ongoing Project Highlight */}
          <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-nature-500/10 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-secondary-500/10 to-accent-500/10 rounded-full blur-2xl animate-bounce-slow"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-primary-900/50 to-nature-900/50 rounded-xl mb-4 shadow-lg border border-primary-500/30">
                  <div className="bg-gradient-to-r from-primary-500 to-nature-500 p-2 rounded-lg">
                    <Play className="h-6 w-6 text-white animate-pulse" />
                  </div>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Ongoing First Project
                </h2>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
                {/* Project Header with Background */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/Thaara energy background.webp"
                    alt="50 MW Solar Park Development"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Floating Status Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-nature-500 to-primary-500 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-xl animate-pulse">
                      🚧 IN PROGRESS
                    </div>
                  </div>

                  {/* Project Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                        <Sun className="h-8 w-8 text-white animate-spin-slow" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">50 MW Solar Park</h3>
                        <p className="text-white/90 text-base font-medium">Full EPC Scope Development</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Description */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Project Overview</h4>
                      <p className="text-gray-300 text-base leading-relaxed mb-6">
                        Currently executing a <span className="font-bold text-primary-400">50 MW Solar Park</span> with
                        full EPC scope – demonstrating our turnkey capability in large-scale solar development.
                      </p>

                      <div className="bg-gradient-to-r from-primary-900/30 to-nature-900/30 rounded-xl p-4 border border-primary-500/30">
                        <h5 className="font-bold text-white mb-3 flex items-center text-sm">
                          <Target className="h-4 w-4 mr-2 text-primary-400" />
                          Key Highlights
                        </h5>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                            <span className="text-gray-300 text-sm">Turnkey EPC execution</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-nature-500 rounded-full animate-pulse"></div>
                            <span className="text-gray-300 text-sm">Large-scale solar development</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-secondary-500 rounded-full animate-pulse"></div>
                            <span className="text-gray-300 text-sm">Proven project delivery capability</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Right Column - Project Stats */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Project Specifications</h4>

                      <div className="space-y-4">
                        <div className="group bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-4 text-white hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-primary-100 text-xs font-medium">Capacity</p>
                              <p className="text-2xl font-bold">50 MW</p>
                            </div>
                            <Sun className="h-8 w-8 text-primary-200 group-hover:rotate-180 transition-transform duration-500" />
                          </div>
                        </div>

                        <div className="group bg-gradient-to-r from-nature-500 to-nature-600 rounded-xl p-4 text-white hover:from-nature-600 hover:to-nature-700 transition-all duration-300 transform hover:scale-105">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-nature-100 text-xs font-medium">Scope</p>
                              <p className="text-xl font-bold">Full EPC</p>
                            </div>
                            <Zap className="h-8 w-8 text-nature-200 group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>

                        <div className="group bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl p-4 text-white hover:from-secondary-600 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-secondary-100 text-xs font-medium">Status</p>
                              <p className="text-xl font-bold">In Progress</p>
                            </div>
                            <Calendar className="h-8 w-8 text-secondary-200 group-hover:rotate-12 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-gradient-to-br from-accent-900/30 to-accent-800/30 rounded-xl border border-accent-500/30">
                        <div className="flex items-center space-x-2 mb-3">
                          <MapPin className="h-5 w-5 text-accent-400" />
                          <h5 className="font-bold text-white text-sm">Project Impact</h5>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          This flagship project showcases our end-to-end capabilities in utility-scale
                          solar development, from initial planning through commissioning and grid integration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-black relative">
            <div className="absolute inset-0 bg-leaf-pattern opacity-10"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center group animate-slide-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div
                      className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}
                    >
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* Vision & Mission */}
          <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
            {/* Curved Top */}
            <div className="absolute top-0 left-0 right-0">
              <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
                <path d="M0,0 C300,40 900,40 1200,0 L1200,0 L0,0 Z" fill="#000000" />
              </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 animate-slide-in-left border border-gray-700 hover:border-primary-500/50">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Our Vision</h2>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed">
                    To be a leading renewable energy player in India, creating resilient ecosystems that empower
                    communities, future-proof industries, and drive inclusive economic growth across emerging markets.
                  </p>
                  <div className="mt-4 w-full h-1 bg-gradient-to-r from-primary-200 to-primary-400 rounded-full"></div>
                </div>

                <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl hover:shadow-nature-500/20 transition-all duration-500 animate-slide-in-right border border-gray-700 hover:border-nature-500/50">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-nature-500 to-nature-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Leaf className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Drive clean energy adoption through innovative and efficient solar solutions. We empower
                    communities, industries, and nations through resilient, clean energy solutions with a focus
                    on innovation, sustainability, and impact.
                  </p>
                  <div className="mt-4 w-full h-1 bg-gradient-to-r from-nature-200 to-nature-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </section>

    {/* Services Preview */}
{/* Services Preview */}
{/* Services Preview */}
<section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-600/20 to-nature-600/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-nature-600/15 to-primary-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary-500/10 to-nature-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
  </div>
  
  {/* Grid Pattern Overlay */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
      backgroundSize: '40px 40px'
    }}></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      {/* Icon Container */}
      <div className="inline-flex items-center justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-nature-500 rounded-2xl blur-xl opacity-60 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-primary-600 to-nature-600 p-4 rounded-2xl shadow-2xl">
            <div className="bg-gradient-to-r from-primary-500 to-nature-500 p-3 rounded-xl">
              <Globe className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Title */}
      <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
        Portfolio of Services
      </h2>
      
      {/* Subtitle */}
      <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
        We are strategically positioned for sustainable infrastructure development across the renewable energy value chain.
      </p>
      
      {/* Decorative Line */}
      <div className="mt-8 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-nature-500 rounded-full"></div>
      </div>
    </div>

    {/* Enhanced Swiper with Smooth Auto-Sliding */}
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        autoplay={{ 
          delay: 2500, // Slightly faster transition
          disableOnInteraction: false, // Continue autoplay even after user interaction
          pauseOnMouseEnter: true, // Pause when hovering
          reverseDirection: false, // Ensure forward direction
          waitForTransition: true, // Wait for transition to complete before next slide
          stopOnLastSlide: false // Continue looping
        }}
        speed={800} // Smooth transition speed (800ms)
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-primary-500/50 !opacity-60 hover:!opacity-100 !transition-all !duration-300',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-gradient-to-r !from-primary-500 !to-nature-500 !opacity-100 !scale-110'
        }}
        loop={true} // Enable infinite loop
        loopAdditionalSlides={1} // Add extra slides for smoother loop
        watchSlidesProgress={true} // Watch slide progress for smoother animations
        centeredSlides={false} // Keep slides aligned properly
        grabCursor={true} // Show grab cursor on hover
        className="!pb-16 select-none" // Prevent text selection
        onAutoplayTimeLeft={(s, time, progress) => {
          // Optional: Add progress indicator if needed
          // This can be used to show autoplay progress
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="group relative h-full">
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary-500/30 transition-all duration-700 transform hover:-translate-y-2 border border-gray-700/50 hover:border-primary-500/50 h-full">
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-nature-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Background Image */}
                <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                </div>
                
                {/* Floating Orbs */}
                <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-nature-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-nature-500/15 to-primary-500/15 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700 delay-200"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col min-h-[400px]">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
                      <div className={`relative bg-gradient-to-r ${service.color} w-18 h-18 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                        <service.icon className="h-9 w-9 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-100 transition-colors duration-300 line-clamp-2">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-8 leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300 line-clamp-4">
                    {service.description}
                  </p>
                  
                  {/* CTA Button */}
                  <div className="mt-auto">
                    <a
                      href="/services.html"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-nature-600 text-white font-semibold rounded-xl hover:from-primary-500 hover:to-nature-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:translate-x-1"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
    {/* Optional: Auto-play Progress Indicator */}
    
  </div>
</section>

          {/* Industry Opportunity */}
          <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-nature-800/50 to-primary-800/50 rounded-xl mb-5 border border-nature-500/30 shadow-lg">
                  <div className="bg-gradient-to-r from-nature-500 to-primary-500 p-3 rounded-lg shadow-inner">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wide">
                  Industry Opportunity
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  India's renewable energy sector presents unprecedented growth opportunities.
                </p>
              </div>

              {/* Horizontal Scroll Container */}
              <div className="flex gap-6 overflow-x-auto scrollbar-hide px-2 pb-4 -mx-2">
                {opportunities.map((opportunity, index) => (
                  <div
                    key={index}
                    className="min-w-[300px] sm:min-w-[340px] lg:min-w-[360px] group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6 shadow-xl hover:shadow-primary-500/30 transition-all duration-500 border border-gray-700 hover:border-primary-500/60 backdrop-blur-md relative overflow-hidden"
                  >
                    {/* Decorative Glow */}
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-primary-500/30 to-nature-500/30 rounded-full blur-2xl opacity-50 group-hover:scale-125 transition-transform duration-700"></div>

                    <div className="flex items-start space-x-4 relative z-10">
                      <div className="bg-gradient-to-r from-primary-500 to-nature-500 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors duration-300 text-base">
                        {opportunity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>



          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-800 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-nature-400/20 to-transparent rounded-full animate-float blur-xl"></div>
              <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-accent-400/20 to-transparent rounded-full animate-bounce-slow blur-lg"></div>
              <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-gradient-to-br from-primary-400/15 to-transparent rounded-full animate-spin-slow blur-2xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-xl mb-6 backdrop-blur-sm">
                <Zap className="h-6 w-6 text-white animate-pulse" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Power Your Future with Clean Energy?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Join us in building India's renewable energy infrastructure. From rooftop solar to utility-scale
                parks, we deliver reliable, scalable, and profitable clean energy solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact.html"
                  className="group relative bg-gradient-to-r from-nature-500 via-primary-500 to-nature-600 text-white px-8 py-4 rounded-xl font-semibold text-base hover:from-nature-600 hover:via-primary-600 hover:to-nature-700 transition-all duration-500 inline-flex items-center justify-center shadow-2xl transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
                <a
                  href="/services.html"
                  className="group relative border-2 border-white/80 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm bg-white/10 transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 group-hover:text-black">View All Services</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;