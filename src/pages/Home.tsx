import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [] = useState(0);

    const galleryImages = [
        {
            src: '/WhatsApp Image 2025-07-01 at 1.01.34 PM.jpeg',
            title: 'Solar Park Development',
            description: 'We identify, develop, and deliver bankable solar projects with strong returns and long-term viability. Currently executing a 50 MW Solar Park with full EPC scope.',
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
            description: 'We are advancing early-stage development of green hydrogen as a key pillar of deep decarbonization for industrial and energy applications.',
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
        },
        {
            src: 'https://media.istockphoto.com/id/2208060389/photo/energy-saving-homes-energy-efficiency-concepts-eco-friendly-home-improvements-cost-savings.jpg?s=2048x2048&w=is&k=20&c=bf-LumLn4ra5V23KEs9hwEVC6opCqihQaqDWF-J3q00=',
            title: 'EPCM for Renewable Infrastructure',
            description: 'From engineering to procurement and construction management, we offer turnkey solutions optimized for efficiency, quality, and ROI.',
        },
        {
            src: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
            title: 'Strategic Advisory in Renewables',
            description: 'Our expertise supports governments, corporations, and investors in navigating the energy transition with policy guidance and technical advisory.',
        },

        {
            src: "https://media.istockphoto.com/id/1035403678/photo/solar-photovoltaic-panels-and-substations-in-the-evening.jpg?s=612x612&w=0&k=20&c=d03DYzZqCdr39sgyrYMRxj7NE4Aq26EyrXdilNw98Qk=",
            title: "Portable Substation",
            description: "A solar portable substation is a self-contained, transportable unit that integrates solar power generation with electrical distribution equipment, often housed within a container or trailer for easy relocation."

        },
        {
            src: 'https://media.istockphoto.com/id/1339079398/photo/agrivoltaic.jpg?s=612x612&w=0&k=20&c=TNMuoNoANhWmkIhr5FMxvw0Vb0Aq2Ufsem4Esra8S2A=',
            title: 'Agrivoltaics',
            description: 'We integrate agriculture with solar power systems to maximize land productivity, ensuring renewable energy generation and food cultivation coexist efficiently.',


        },
        {
            src: 'https://c1.wallpaperflare.com/preview/941/871/807/solar-system-renewable-energy-pv-power-generation-eco-energy.jpg',
            title: "Photovoltaic (PV) System",
            description: 'Our PV systems harness solar energy through advanced photovoltaic modules, enabling reliable, clean electricity for homes, businesses, and industries.',

        },
        {
            src: 'https://img.microgridknowledge.com/files/base/ebm/microgridknowledge/image/2022/09/1663688582199-lamontana.png?auto=format,compress&fit=fill&fill=blur&w=1200&h=630',
            title: 'Solar Microgrids',
            description: 'Decentralized solar microgrids delivering energy access to remote and underserved regions with resilience and reliability.'
        }


    ];
    const carouselData = [
        {
            image: 'https://d382rz2cea0pah.cloudfront.net/wp-content/uploads/2024/02/Indias-500-GW-Non-fossil-Energy-Target-Moved-to-2031-32.jpg',
            text: "India's Target: 500 GW of non-fossil fuel capacity by 2030",
        },
        {
            image: 'https://plantix.net/en/assets/blog/blog-content/2021-12-09/pm-kusum.jpg',
            text: 'Government Push: PM-KUSUM, Rooftop Solar Phase II, Green Energy Corridor',
        },
        {
            image: 'https://iea.imgix.net/9e2bec5d-108d-4a90-93ab-1ec7ba071adf/CoverofElectricityMid-YearUpdateJuly2024_shutterstock_279307778.jpg?auto=compress%2Cformat&fit=min&q=80&rect=815%2C997%2C4074%2C2286&w=1220&h=685&fit=crop&fm=jpg&q=70&auto=format',
            text: 'Rising electricity demand and cost pressures',
        },
        {
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80',
            text: 'Corporate ESG mandates driving renewable energy demand',
        },
        {
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
            text: 'Untapped potential in Tier II/III cities and rural areas',
        },
    ];



    return (
        <div className="min-h-screen bg-black">
            <Header />
            <main className="pt-16">
                <div className="overflow-hidden">
                    {/* Hero Section */}
                    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                        {/* Background Video */}
                        <div className="absolute inset-0 w-full h-full overflow-hidden">
                            <video
                                className="fixed inset-0 w-full h-full object-cover"
                                src="https://res.cloudinary.com/dnywncw8q/video/upload/q_auto,f_auto/13492018_1920_1080_60fps_5_yufubi.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ pointerEvents: 'none' }}
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <div className="max-w-6xl mx-auto">
                                <div className="relative">
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6" style={{ textShadow: '5px 5px 5px rgba(11, 9, 9, 0.98)' }}>
                                        Empowering Progress, Sustainably
                                    </h2>
                                </div>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4" style={{ textShadow: '5px 5px 5px rgba(11, 9, 9, 0.98)' }}>
                                    Thaara Energy stands at the intersection of innovation, sustainability, and investment opportunity.
                                    We specialize in the development and delivery of innovative, high-impact solutions across the renewable energy value chain.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4">
                                    <a
                                        href="/services.html"
                                        className="group relative bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center shadow-2xl hover:bg-gray-100 transition-all duration-300"
                                    >
                                        <span className="relative z-10">
                                            Explore Our Solutions
                                        </span>
                                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                                    </a>

                                    <a href="/contact.html"
                                        className="group relative bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base shadow-xl border border-white/20 hover:bg-gray-900 transition-all duration-300"
                                    >
                                        <span className="relative z-10 group-hover:text-white">
                                            Start Your Project
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </section>

                    {/* Solutions Section */}
                    <section className="py-12 sm:py-16 lg:py-20 bg-white relative">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            {/* Title and Description */}

                            <div className="mb-8 sm:mb-10 md:mb-12 text-left mt-2 sm:mt-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-3 sm:mb-4 leading-tight">
                                    Solutions
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-black max-w-5xl leading-relaxed">
                                    Explore our diverse portfolio of renewable energy projects across different sectors and applications
                                </p>
                            </div>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                                {galleryImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className="group relative bg-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto lg:max-w-none"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        {/* Image Container */}
                                        <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[520px] overflow-hidden">
                                            <img
                                                src={image.src}
                                                alt={image.title}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            />

                                            {/* Overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>

                                            {/* Hover tint */}
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>

                                            {/* Top Gradient with Title */}
                                            <div className="absolute top-0 left-0 right-0 z-10">
                                                <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 lg:h-36 bg-gradient-to-b from-black via-black/60 to-transparent transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0"></div>
                                                <div className="relative px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4">
                                                    <h3
                                                        className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold leading-tight"
                                                        style={{ textShadow: '1px 1px 2px rgb(0, 0, 0)' }}
                                                    >
                                                        {image.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            {/* Bottom Description and Button */}
                                            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 transition-all duration-300">
                                                <p
                                                    className="text-sm sm:text-base lg:text-lg opacity-0 group-hover:opacity-100 leading-relaxed text-white mb-3 sm:mb-4"
                                                    style={{ textShadow: '1px 1px 2px rgb(0, 0, 0)' }}
                                                >
                                                    {image.description}
                                                </p>
                                                <button
                                                    className="inline-block px-3 sm:px-4 py-2 bg-white text-black text-xs sm:text-sm font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                >
                                                    Explore More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Our Vision Section */}
                    {/* <section className="w-full bg-black pt-8 sm:pt-12 pb-8 sm:pb-16 px-4 sm:px-8 lg:px-12 xl:px-24 relative">
                        <div className="max-w-7xl mx-auto"> */}

                    <section className="py-12 sm:py-16 lg:py-20 bg-black relative">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            {/* Title and Description */}
                            <div className="mb-8 sm:mb-10 md:mb-12 text-left mt-2 sm:mt-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                                    Our Vision
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-white max-w-5xl leading-relaxed">
                                    We empower a cleaner future through smart energy and sustainable solutions.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="py-3">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                    {/* Feature 1 */}
                                    <div className="flex flex-col items-start gap-3 sm:gap-4">
                                        <img
                                            src="https://images.ctfassets.net/k6ot5nj1c6f9/72mevNe8g5b1cl9WjmeaIK/68048e850437442601ba1435beadb9ff/customer-experience.svg"
                                            alt="customer-experience"
                                            width={40}
                                            height={40}
                                            className="sm:w-12 sm:h-12"
                                            style={{ filter: 'brightness(0) invert(1)' }}
                                        />
                                        <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white">Unmatched Experience</p>
                                        <p className="text-sm sm:text-base text-white leading-relaxed">The Thaara Energy name represents decades of solar innovation.</p>
                                    </div>

                                    {/* Feature 2 */}
                                    <div className="flex flex-col items-start gap-3 sm:gap-4 text-white">
                                        <img
                                            src="https://images.ctfassets.net/k6ot5nj1c6f9/2rzFvdxUtuH4P7KQwC58ul/1eebac8670ec4d469be8a95d94e15a43/exclusive.svg"
                                            alt="premium-quality"
                                            width={40}
                                            height={40}
                                            className="sm:w-12 sm:h-12"
                                            style={{ filter: 'brightness(0) invert(1)' }}
                                        />
                                        <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white">Premium Quality</p>
                                        <p className="text-sm sm:text-base text-white leading-relaxed">High-efficiency solar panels tested for durability.</p>
                                    </div>

                                    {/* Feature 3 */}
                                    <div className="flex flex-col items-start gap-3 sm:gap-4 text-white">
                                        <img
                                            src="https://images.ctfassets.net/k6ot5nj1c6f9/2UWanDb90tcJevFtKxNle7/a1aea0c5ac1426658240bee4122232d7/bulb.svg"
                                            alt="custom-solutions"
                                            width={40}
                                            height={40}
                                            className="sm:w-12 sm:h-12"
                                            style={{ filter: 'brightness(0) invert(1)' }}
                                        />
                                        <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white">Custom Solutions</p>
                                        <p className="text-sm sm:text-base text-white leading-relaxed">Solar + storage systems tailored to your home or business's unique needs.</p>
                                    </div>

                                    {/* Feature 4 */}
                                    <div className="flex flex-col items-start gap-3 sm:gap-4">
                                        <img
                                            src="https://images.ctfassets.net/k6ot5nj1c6f9/1G8XIrihQNLVdsb44R2Ogx/6a4daa4d5185b4a48babaaeb4fef9a7f/checking.svg"
                                            alt="seamless-process"
                                            width={40}
                                            height={40}
                                            className="sm:w-12 sm:h-12"
                                            style={{ filter: 'brightness(0) invert(1)' }}
                                        />
                                        <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white">Seamless Process</p>
                                        <p className="text-sm sm:text-base text-white leading-relaxed">Expert support from consultation to installation.</p>
                                    </div>

                                    {/* Feature 5 */}
                                    <div className="flex flex-col items-start gap-3 sm:gap-4">
                                        <img
                                            src="https://images.ctfassets.net/k6ot5nj1c6f9/2EmEicVvmG0mfOB4FWfWYp/d465d019e92ae0f686115571778cdd5a/guarantee.svg"
                                            alt="warranty"
                                            width={40}
                                            height={40}
                                            className="sm:w-12 sm:h-12"
                                            style={{ filter: 'brightness(0) invert(1)' }}
                                        />
                                        <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white">25-Year Manufacturer Warranty</p>
                                        <p className="text-sm sm:text-base text-white leading-relaxed">Industry-leading warranties and guarantees for peace of mind.</p>
                                    </div>

                                    {/* Feature 6 */}
                                    <div className="flex flex-col items-start gap-3 sm:gap-4">
                                        <img
                                            src="https://images.ctfassets.net/k6ot5nj1c6f9/4PX3DwcwAUh6pOAst2bquD/01d6b44f7b57ee99540cba898ea497cd/solar-energy.svg"
                                            alt="smart-energy"
                                            width={40}
                                            height={40}
                                            className="sm:w-12 sm:h-12"
                                            style={{ filter: 'brightness(0) invert(1)' }}
                                        />
                                        <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white">Smart Energy Ecosystem</p>
                                        <p className="text-sm sm:text-base text-white leading-relaxed">Enabling an intelligent, sustainable energy future for your home.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Mission Section */}
                    <section className="relative bg-black text-white min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-12 xl:px-24 overflow-hidden"
                        style={{
                            backgroundImage: "url('https://cosmosmagazine.com/wp-content/uploads/2022/10/sellmore.Getty_.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/60 z-0"></div>



                        {/* Content */}
                        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-6 justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                            {/* Heading */}
                            <div className="text-center">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg" style={{ textShadow: '1px 1px 2px rgb(0, 0, 0)' }}>Our Mission</h2>
                            </div>

                            {/* Paragraph */}
                            <div className="text-center max-w-2xl mx-auto px-4">
                                <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed" style={{ textShadow: '1px 1px 2px rgb(0, 0, 0)' }}>
                                    Drive clean energy adoption through innovative and efficient solar solutions. We empower
                                    communities, industries, and nations through resilient, clean energy solutions with a focus
                                    on innovation, sustainability, and impact.
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* industry sectionu */}
                    <section className="pt-8 sm:pt-20 md:pt-24 lg:pt-28 sm:pb-10 md:pb-12 lg:pb-12 bg-black text-white relative overflow-hidden">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            {/* Heading */}
                            <div className="mb-8 sm:mb-10 md:mb-12 text-left mt-2 sm:mt-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                                    Industry Opportunity
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl text-white max-w-5xl leading-relaxed">
                                    India's renewable energy sector presents unprecedented growth opportunities.
                                </p>
                            </div>

                            <div className="relative mb-12 sm:mb-14 md:mb-16 w-full max-w-[1600px] mx-auto">
                                {/* Carousel Section */}
                                <div className="relative mb-12 sm:mb-14 md:mb-16 w-full px-2 sm:px-4">
                                    {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
                                    <button
                                        ref={prevRef}
                                        className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-6 xl:-left-10 z-30 hover:scale-110 transition-transform duration-200"
                                    >
                                        <span className="inline-flex items-center justify-center w-8 h-8 xl:w-10 xl:h-10 rounded-full text-white hover:text-gray-300 transition-colors">
                                            <svg className="w-6 h-6 xl:w-8 xl:h-8" fill="none" viewBox="0 0 24 24">
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 19l-7-7 7-7"
                                                />
                                            </svg>
                                        </span>
                                    </button>

                                    <button
                                        ref={nextRef}
                                        className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-6 xl:-right-10 z-30 hover:scale-110 transition-transform duration-200"
                                    >
                                        <span className="inline-flex items-center justify-center w-8 h-8 xl:w-10 xl:h-10 rounded-full text-white hover:text-gray-300 transition-colors">
                                            <svg className="w-6 h-6 xl:w-8 xl:h-8" fill="none" viewBox="0 0 24 24">
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </span>
                                    </button>

                                    <Swiper
                                        modules={[Autoplay, Pagination, Navigation]}
                                        onBeforeInit={(swiper) => {
                                            if (
                                                swiper.params.navigation &&
                                                typeof swiper.params.navigation !== 'boolean'
                                            ) {
                                                swiper.params.navigation.prevEl = prevRef.current;
                                                swiper.params.navigation.nextEl = nextRef.current;
                                            }
                                        }}
                                        navigation={{
                                            prevEl: prevRef.current,
                                            nextEl: nextRef.current,
                                        }}
                                        spaceBetween={16}
                                        slidesPerView={1}
                                        centeredSlides={false}
                                        breakpoints={{
                                            480: {
                                                slidesPerView: 1.2,
                                                spaceBetween: 16,
                                                centeredSlides: true
                                            },
                                            640: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                                centeredSlides: false
                                            },
                                            768: {
                                                slidesPerView: 2.5,
                                                spaceBetween: 24
                                            },
                                            1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 24
                                            },
                                            1280: {
                                                slidesPerView: 4,
                                                spaceBetween: 24
                                            },
                                            1536: {
                                                slidesPerView: 4,
                                                spaceBetween: 32
                                            }
                                        }}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: true,
                                        }}
                                        loop={true}
                                        pagination={{
                                            clickable: true,
                                            bulletClass:
                                                'swiper-pagination-bullet !bg-white/40 !opacity-60 hover:!opacity-100 !w-2 !h-2 sm:!w-3 sm:!h-3',
                                            bulletActiveClass:
                                                'swiper-pagination-bullet-active !bg-white !opacity-100 !scale-110',
                                        }}
                                        className="!pb-8 sm:!pb-10 md:!pb-12"
                                    >
                                        {carouselData.map((item, index) => (
                                            <SwiperSlide key={index} className="flex">
                                                <div className="bg-white text-black shadow-lg hover:shadow-xl transition-shadow duration-300 h-[280px] sm:h-[300px] md:h-[320px] w-full flex flex-col rounded-lg md:rounded-xl overflow-hidden">
                                                    <img
                                                        src={item.image}
                                                        alt={`${item.text} - Slide ${index + 1}`}
                                                        className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover"
                                                        loading="lazy"
                                                    />
                                                    <div className="p-3 sm:p-4 text-center font-semibold flex-1 flex items-center justify-center text-sm sm:text-base">
                                                        {item.text}
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>

                            {/* Full-Width Section with Text Left and Image Right */}
                            <div className="bg-black text-white w-full py-16 sm:py-20 md:py-24 lg:py-28 px-4 lg:px-0">
                                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 xl:gap-16">

                                    {/* Right Image Section */}
                                    <div className="w-full lg:w-1/2 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none">
                                        <div className="overflow-hidden shadow-2xl border border-white/10 rounded-lg md:rounded-xl">
                                            <img
                                                src="https://media.istockphoto.com/id/525206743/photo/solar-panel-on-a-red-roof.jpg?s=612x612&w=0&k=20&c=xcAkdNj8dFDhu8734FpRDAZDtN2bjr48RKEd9j2FL0U="
                                                alt="Solar Installation on red roof"
                                                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                    {/* Left Text Section */}
                                    <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 md:space-y-10 px-0 sm:px-2 lg:px-0 text-center lg:text-left">
                                        <h4 className="text-white text-lg sm:text-xl font-medium">From Vision to Viability</h4>

                                        <div className="space-y-4 sm:space-y-6">
                                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 sm:mb-4 leading-tight">
                                                From Installation to Impact
                                            </h2>
                                            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                                We accelerate clean energy adoption with turnkey solar and renewable solutions.
                                                <br className="hidden sm:block" />
                                                From project development and permitting to grid integration, we handle it all.
                                                <br className="hidden sm:block" />
                                                Our expert team ensures every system is optimized for performance and built for long-term value.
                                            </p>
                                        </div>

                                        <h4 className="text-white text-lg sm:text-xl font-medium">From Local Sites to National Scale</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="pt-2 sm:pt-10 md:pt-12 lg:pt-8 pb-8 sm:pb-20 md:pb-24 lg:pb-28 bg-black text-white relative overflow-hidden">
                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
                                {/* Image Section - Shows first on mobile, second on desktop */}
                                <div className="flex justify-center order-1 md:order-2">
                                    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
                                        <img
                                            src="https://www.shutterstock.com/image-photo/modern-house-black-solar-panels-600nw-2188743139.jpg"
                                            alt="Modern house with black solar panels"
                                            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg md:rounded-xl shadow-2xl object-cover hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                {/* Text Section - Shows second on mobile, first on desktop */}
                                <div className="order-2 md:order-1 text-center md:text-left">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                                        Ready to Power Your Future with Clean Energy?
                                    </h2>
                                    <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
                                        Join us in building India's renewable energy infrastructure.
                                        <br className="hidden sm:block" />
                                        From rooftop solar to utility-scale parks, we deliver reliable, scalable,
                                        <br className="hidden lg:block" />
                                        and profitable clean energy solutions — all under one roof.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                                        <a
                                            href="/contact.html"
                                            className="group relative bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg md:rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-200 transition-all duration-300 inline-flex items-center justify-center shadow-lg transform hover:scale-105"
                                        >
                                            <span className="relative z-10">Start Your Project</span>
                                            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                                        </a>

                                        <a
                                            href="/services.html"
                                            className="group relative border border-white/70 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg md:rounded-xl font-semibold text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                                        >
                                            <span className="relative z-10">View All Services</span>
                                        </a>
                                    </div>
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
