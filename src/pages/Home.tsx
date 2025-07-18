import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Zap, Target, Award, TrendingUp, Sun, Battery, Leaf, CheckCircle, Users, Globe, Sparkles, Wind, Play, Calendar, MapPin, Star, Shield, Lightbulb } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [, setActiveIndex] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = 360 + 24; // card width + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };


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
      image:'https://d382rz2cea0pah.cloudfront.net/wp-content/uploads/2023/06/Untitled-design-1.jpg'
    },
    {
      title: 'EPCM for Renewable Infrastructure',
      description: 'From engineering to procurement and construction management, we offer turnkey solutions optimized for efficiency, quality, and ROI.',
      icon: Zap,
      color: 'from-secondary-400 via-secondary-500 to-secondary-600',
      bgColor: 'from-secondary-50 to-secondary-100',
      image: 'https://media.istockphoto.com/id/2208060389/photo/energy-saving-homes-energy-efficiency-concepts-eco-friendly-home-improvements-cost-savings.jpg?s=2048x2048&w=is&k=20&c=bf-LumLn4ra5V23KEs9hwEVC6opCqihQaqDWF-J3q00='
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
      src: '/industrialSolar.jpg',
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
              {/* <video
                className="w-full h-full object-cover"
                src="/BgVideo.mp4"
                autoPlay
                loop
                muted
                playsInline
              /> */}
    {!videoFailed && (
        <video
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          src="/BgVideo.mp4" // Update with your actual path
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoFailed(true)} // fallback trigger
        />
      )}

      {/* Fallback YouTube background */}
      {videoFailed && (
        <iframe
          className="w-full h-full absolute top-0 left-0 z-0 pointer-events-none"
          src="https://www.youtube.com/embed/iCvUFavByJE?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=iCvUFavByJE"
          title="Fallback Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
              
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
          {/* <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
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
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/Thaara energy background.webp"
                    alt="50 MW Solar Park Development"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-nature-500 to-primary-500 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-xl animate-pulse">
                      🚧 IN PROGRESS
                    </div>
                  </div>

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

                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
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
          </section> */}

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
                <path d="M0,0 C300,40 900,40 1200,0 L1200,0 L0,0 Z" fill="#444444" />
              </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
              <div className="grid lg:grid-cols-2 gap-12">
                <div
                  className="group bg-gradient-to-br from-gray-800 to-yellow-900 rounded-2xl p-8 shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 border border-gray-700 hover:border-primary-500/50 relative overflow-hidden"
                  style={{
                    backgroundImage:
                      "url('https://assets.telegraphindia.com/telegraph/2020/Jul/1596146234_solar-cells.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Overlay to darken background for readability */}
                  <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>

                  {/* Content above background */}
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-white inline-block">
                        Our Vision
                      </h2>
                      <div className="mx-auto mt-2 w-24 h-1 bg-gradient-to-r from-primary-200 to-primary-400 rounded-full"></div>
                    </div>

                    <p className="text-gray-300 text-base leading-relaxed">
                      To be a leading renewable energy player in India, creating resilient ecosystems that empower
                      communities, future-proof industries, and drive inclusive economic growth across emerging markets.
                    </p>
                  </div>

                </div>


                <div
                  className="group rounded-2xl p-8 shadow-2xl hover:shadow-nature-500/20 transition-all duration-500 animate-slide-in-right border border-gray-700 hover:border-nature-500/50 relative overflow-hidden"
                  style={{
                    backgroundImage:
                      "url('https://img.freepik.com/free-photo/solar-panels-roof-solar-cell_335224-1324.jpg?semt=ais_hybrid&w=740')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Overlay for readability */}
                  <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>

                  {/* Content Layer */}
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-white inline-block">
                        Our Mission
                      </h2>
                      <div className="mx-auto mt-2 w-24 h-1 bg-gradient-to-r from-nature-200 to-nature-400 rounded-full"></div>
                    </div>

                    <p className="text-gray-300 text-base leading-relaxed">
                      Drive clean energy adoption through innovative and efficient solar solutions. We empower
                      communities, industries, and nations through resilient, clean energy solutions with a focus
                      on innovation, sustainability, and impact.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </section >

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
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Content */}
        <div className="mb-16 bg-black px-6 py-12 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://truesun.in/wp-content/uploads/2021/08/Landing-Carbon-Emission-Assessment-1024x933.png"
                alt="services"
                className="w-full max-w-md animate-zoom"
              />
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <h2 className="text-8xl lg:text-5xl font-bold mb-6  text-white bg-clip-text text-transparent">
                Portfolio of Services
              </h2>
              <p className="text-4xl text-white max-w-3xl leading-relaxed">
                We are strategically positioned for sustainable infrastructure development across the renewable energy value chain.
              </p>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="flex justify-center">
            <div className="w-1/4 m-6 h-1 bg-gradient-to-r from-primary-500 to-nature-500 rounded-full"></div>
          </div>
        </div>

        {/* Carousel with Controls */}
        <div className="relative ">
          {/* Slider Controls */}
          <button
            type="button"
            className="swiper-button-prev absolute top-1/2 -left-8 z-30 flex items-center justify-center -translate-y-1/2 px-2 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="swiper-button-next absolute top-1/2 -right-8 z-30 flex items-center justify-between -translate-y-1/2 px-0 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false,
              waitForTransition: true,
              stopOnLastSlide: false,
            }}
            speed={800}
            pagination={{
              clickable: true,
              bulletClass:
                'swiper-pagination-bullet !bg-primary-500/50 !opacity-60 hover:!opacity-100 !transition-all !duration-300',
              bulletActiveClass:
                'swiper-pagination-bullet-active !bg-gradient-to-r !from-primary-500 !to-nature-500 !opacity-100 !scale-110',
            }}
            loop={true}
            loopAdditionalSlides={1}
            watchSlidesProgress={true}
            grabCursor={true}
            className="!pb-16 select-none"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="group relative h-full">
                  <div className="relative bg-gradient-to-br from-gray-800/10 to-gray-900/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary-500/30 transition-all duration-700 transform hover:-translate-y-2 border border-gray-700/50 hover:border-primary-500/50 h-full">
                    <div className="absolute bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-nature-500/0 opacity-1 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 group-hover:opacity-25 transition-opacity duration-500">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                    </div>
                    <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-nature-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-nature-500/15 to-primary-500/15 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700 delay-200"></div>
                    <div className="relative z-10 p-8 h-full flex flex-col min-h-[400px]">
                      <div className="mb-6">
                        <div className="relative inline-block">
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
                          ></div>
                          <div
                            className={`relative bg-gradient-to-r ${service.color} w-18 h-18 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}
                          >
                            <service.icon className="h-9 w-9 text-white" />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-100 transition-colors duration-300 line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-8 leading-relaxed flex-grow group-hover:text-gray-200 transition-colors duration-300 line-clamp-4">
                        {service.description}
                      </p>
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
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>

          {/* Industry Opportunity */}
          <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-gradient-to-br from-primary-500/10 to-nature-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-nature-500/10 to-primary-500/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
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

        {/* Image Card */}
        <div className="flex justify-center mb-12">
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-primary-600/40 hover:shadow-primary-500/40 transition-all duration-700 max-w-md w-full bg-gradient-to-br from-gray-900/40 to-gray-800/70 backdrop-blur-xl">
            {/* <img
              src="https://t3.ftcdn.net/jpg/05/54/51/40/360_F_554514065_A5Y17mmaZgxkbcKri1g52RrLDtLzOU54.jpg"
              alt="Industry Opportunity"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            /> */}
 <img
  src="https://t3.ftcdn.net/jpg/05/54/51/40/360_F_554514065_A5Y17mmaZgxkbcKri1g52RrLDtLzOU54.jpg"
  alt="Industry Opportunity"
  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
  style={{
    WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
    maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
  }}
/>


            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white text-center text-lg font-semibold">
              Clean & Green Energy Future
            </div>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          {/* Decorative Arrows */}
          <button
            type="button"
            className="swiper-button-prev absolute top-1/2 -translate-y-1/2 -left-8 z-30 flex items-center justify-center px-2 group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-lg transition shadow-lg ring-1 ring-white/30">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="swiper-button-next absolute top-1/2 -translate-y-1/2 -right-8 z-30 flex items-center justify-center px-2 group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-lg transition shadow-lg ring-1 ring-white/30">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            pagination={{
              clickable: true,
              bulletClass:
                'swiper-pagination-bullet !bg-primary-500/50 !opacity-60 hover:!opacity-100 !transition-all !duration-300',
              bulletActiveClass:
                'swiper-pagination-bullet-active !bg-gradient-to-r !from-primary-500 !to-nature-500 !opacity-100 !scale-110',
            }}
            className="!pb-10"
          >
            {opportunities.map((opportunity, index) => (
              <SwiperSlide key={index}>
                <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-4 shadow-xl hover:shadow-primary-500/30 transition-all duration-500 border border-gray-700 hover:border-primary-500/60 backdrop-blur-md relative overflow-hidden min-h-[100px] h-[120px] flex flex-col justify-between">
                  {/* Decorative Glow */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-primary-500/30 to-nature-500/30 rounded-full blur-2xl opacity-50 group-hover:scale-125 transition-transform duration-700"></div>

                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="bg-gradient-to-r from-primary-500 to-nature-500 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors duration-300 text-base line-clamp-3">
                      {opportunity}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>





          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-gray-900 via-yellow-900 to-gray-800 relative overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Left Side - Text Content */}
                <div>
                  <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-xl mb-6 backdrop-blur-sm w-fit">
                    <Zap className="h-6 w-6 text-white animate-pulse" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    Ready to Power Your Future with Clean Energy?
                  </h2>
                  <p className="text-lg text-white/90 mb-8 leading-relaxed">
                    Join us in building India's renewable energy infrastructure. From rooftop solar to utility-scale
                    parks, we deliver reliable, scalable, and profitable clean energy solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
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

                {/* Right Side - Image */}
                <div className="flex justify-center">
                  <img
                    src="/1684748307930.jpeg"
                    alt="Clean Energy"
                    className="w-full max-w-lg rounded-2xl shadow-lg animate-zoom"
                  />
                </div>
              </div>
            </div>
          </section>

        </div >
      </main >
      <Footer />
    </div >
  );
};

export default Home;
