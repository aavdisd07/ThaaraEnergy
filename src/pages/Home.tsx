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
    const [videoFailed, setVideoFailed] = useState(false);

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
                        {/* Background Image with Overlay */}
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
                                    <h2 className="text-8xl sm:text-2xl lg:text-6xl font-bold text-white bg-clip-text mb-6 " style={{ textShadow: '2px 1px 0px rgba(9, 0, 0, 0.98)' }}

                                    >
                                        Empowering Progress, Sustainably
                                    </h2>
                                </div>
                                <p className="text-4xl text-transparent sm:text-lg text-white/90 lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed" style={{ textShadow: '2px 1px 0px rgba(9, 0, 0, 0.98)' }}
                                >
                                    Thaara Energy stands at the intersection of innovation, sustainability, and investment opportunity.
                                    We specialize in the development and delivery of innovative, high-impact solutions across the renewable energy value chain.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                                    {/* Primary Blue Button */}
                                    <a
                                        href="/services.html"
                                        className="group relative bg-white text-black px-8 py-4 rounded-xl font-semibold text-base flex items-center justify-center shadow-2xl"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl opacity-0 "></div>
                                        <span className="relative z-10 ">
                                            Explore Our Solutions
                                        </span>
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>

                                    <a href="/contact.html"
                                        className="group relative bg-black text-white px-8 py-4 rounded-xl font-semibold text-base  shadow-xl"
                                    >
                                        <div className="absolute inset-0 from-white/10 to-transparent rounded-xl opacity-0"></div>
                                        <span className="relative z-10 group-hover:text-white">
                                            Start Your Project
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Curved Bottom */}
                        <div className="absolute bottom-0 left-0 right-0">
                            <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
                                <path d="M0,120 C300,80 900,80 1200,120 L1200,120 L0,120 Z" fill="#FFFFFF" />
                            </svg>
                        </div>
                    </section>

                    {/* Solution */}
                    <section className="py-16 bg-white relative">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                            {/* Title and Single-Line Description */}
                            <div className="mb-12 text-left">
                                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                                    Solutions
                                </h2>
                                <p className="text-lg text-black max-w-5xl">
                                    Explore our diverse portfolio of renewable energy projects across different sectors and applications
                                </p>
                            </div>



                            {/* Cards Grid */}
                            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-16">
                            {galleryImages.map((_image, index) => (
                                    <div
                                        key={index}
                                        className="group relative bg-gray-100 rounded-4xl overflow-hidden shadow-2xl hover:shadow-white/60 w-[400px] mx-auto"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >

                                        {/* Image Container with Increased Height */}
                                        <div className="relative h-[520px]  overflow-hidden">
                                            <img
                                                src={_image.src}
                                                alt={_image.title}
                                                className="w-full h-full object-cover"
                                            />

                                            {/* Overlay gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                            {/* Hover tint */}
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            {/* Top Gradient with Title */}
                                            <div className="absolute top-0 left-0 right-0 z-10">
                                                <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-black via-black/80 to-transparent transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0"></div>
                                                <div className="relative px-6 pt-6 pb-4">
                                                    <h3
                                                        className="text-white text-4xl font-semibold"
                                                        style={{ textShadow: '1px 1px 2px rgb(0, 0, 0)' }}
                                                    >
                                                        {_image.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            {/* Bottom Description and Button */}
                                            <div className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300">
                                                <p
                                                    className="lg:text-lg text-base opacity-0 group-hover:opacity-100 leading-lg font-figtree text-black md:text-white lg:leading-5 xl:leading-6 md:line-clamp-6"
                                                    style={{ textShadow: '1px 1px 2px rgb(0, 0, 0)' }}
                                                >
                                                    {_image.description}
                                                </p>
                                                <button
                                                    className="mt-4 inline-block px-4 py-2 bg-white text-black text-sm font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                >
                                                    Explore {_image.title.split(' ')[0]}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </section>


                    {/* Stats Section */}
                    {/* Our Vision Section */}
                    <section className="w-full bg-black pt-5 pb-10 px-8 lg:px-12 xl:px-24 relative" id="section-gJN66">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                            {/* Title and Single-Line Description */}
                            <div className="mb-12 text-left mt-4">
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                    Our Vision
                                </h2>
                                <p className="text-lg text-gray-300 max-w-5xl">
                                    We empower a cleaner future through smart energy and sustainable solutions.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="py-3">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* Feature 1 */}
                                    <div className="flex flex-col items-start gap-2 md:gap-4">
                                        <img src="https://images.ctfassets.net/k6ot5nj1c6f9/72mevNe8g5b1cl9WjmeaIK/68048e850437442601ba1435beadb9ff/customer-experience.svg" alt="customer-experience" width="50" height="50" />
                                        <p className="text-xl lg:text-2xl font-medium text-gray-300">Unmatched Experience</p>
                                        <p className="text-sm lg:text-base text-gray-500">The SunPower name represents decades of solar innovation.</p>
                                    </div>

                                    {/* Feature 2 */}
                                    <div className="flex flex-col items-start gap-2 md:gap-4">
                                        <img src="https://images.ctfassets.net/k6ot5nj1c6f9/2rzFvdxUtuH4P7KQwC58ul/1eebac8670ec4d469be8a95d94e15a43/exclusive.svg" alt="exclusive" width="50" height="50" />
                                        <p className="text-xl lg:text-2xl font-medium text-gray-300">Premium Quality</p>
                                        <p className="text-sm lg:text-base text-gray-500">High-efficiency solar panels tested for durability.</p>
                                    </div>

                                    {/* Feature 3 */}
                                    <div className="flex flex-col items-start gap-2 md:gap-4">
                                        <img src="https://images.ctfassets.net/k6ot5nj1c6f9/2UWanDb90tcJevFtKxNle7/a1aea0c5ac1426658240bee4122232d7/bulb.svg" alt="bulb" width="50" height="50" />
                                        <p className="text-xl lg:text-2xl font-medium text-gray-300">Custom Solutions</p>
                                        <p className="text-sm lg:text-base text-gray-500">Solar + storage systems tailored to your home or business’s unique needs.</p>
                                    </div>

                                    {/* Feature 4 */}
                                    <div className="flex flex-col items-start gap-2 md:gap-4">
                                        <img src="https://images.ctfassets.net/k6ot5nj1c6f9/1G8XIrihQNLVdsb44R2Ogx/6a4daa4d5185b4a48babaaeb4fef9a7f/checking.svg" alt="checking" width="50" height="50" />
                                        <p className="text-xl lg:text-2xl font-medium text-gray-300">Seamless Process</p>
                                        <p className="text-sm lg:text-base text-gray-500">Expert support from consultation to installation.</p>
                                    </div>

                                    {/* Feature 5 */}
                                    <div className="flex flex-col items-start gap-2 md:gap-4">
                                        <img src="https://images.ctfassets.net/k6ot5nj1c6f9/2EmEicVvmG0mfOB4FWfWYp/d465d019e92ae0f686115571778cdd5a/guarantee.svg" alt="guarantee" width="50" height="50" />
                                        <p className="text-xl lg:text-2xl font-medium text-gray-300">25-Year Manufacturer Warranty</p>
                                        <p className="text-sm lg:text-base text-gray-500">Industry-leading warranties and guarantees for peace of mind.</p>
                                    </div>

                                    {/* Feature 6 */}
                                    <div className="flex flex-col items-start gap-2 md:gap-4">
                                        <img src="https://images.ctfassets.net/k6ot5nj1c6f9/4PX3DwcwAUh6pOAst2bquD/01d6b44f7b57ee99540cba898ea497cd/solar-energy.svg" alt="solar-energy" width="50" height="50" />
                                        <p className="text-xl lg:text-2xl font-medium text-gray-300">Smart Energy Ecosystem</p>
                                        <p className="text-sm lg:text-base text-gray-500">Enabling an intelligent, sustainable energy future for your home.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/*  Mission */}
                    <section
                        className="relative bg-black text-white min-h-[700px] py-28 px-8 sm:px-12 lg:px-24 overflow-hidden"
                        style={{
                            backgroundImage:
                                "url('https://cosmosmagazine.com/wp-content/uploads/2022/10/sellmore.Getty_.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/60 z-0"></div>

                        {/* Curved Top */}
                        <div className="absolute top-0 left-0 right-0 z-10">
                            <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
                                <path d="M0,0 C300,40 900,40 1200,0 L1200,0 L0,0 Z" fill="black" />
                            </svg>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-7xl my-40 mx-auto flex flex-col gap-6">
                            {/* Right-aligned Heading */}
                            <div className="text-center">
                                <h2 className="text-4xl lg:text-5xl font-bold drop-shadow-lg" style={{ textShadow: '1px 1px 2px rgb(0, 0, 0)' }}>Our Mission</h2>
                            </div>

                            {/* Centered Paragraph */}
                            <div className="text-center max-w-2xl mx-auto">
                                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed" style={{ textShadow: '1px 1px 2px rgb(0, 0, 0)' }}>
                                    Drive clean energy adoption through innovative and efficient solar solutions. We empower
                                    communities, industries, and nations through resilient, clean energy solutions with a focus
                                    on innovation, sustainability, and impact.
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* industry sectionu */}
                    <section className="py-28 bg-black text-white relative overflow-hidden">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            {/* Heading */}


                            {/* Title and Single-Line Description */}
                            <div className="mb-12 text-left mt-4">
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                    Industry Opportunity
                                </h2>
                                <p className="text-lg text-gray-300 max-w-5xl">
                                    India's renewable energy sector presents unprecedented growth opportunities.
                                </p>
                            </div>


                            {/* Carousel Section */}
                            <div className="relative mb-16">
                                {/* Navigation Buttons */}
                                <button
                                    ref={prevRef}
                                    className="absolute top-1/2 -translate-y-1/2 -left-10 z-30"
                                >
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  text-black">
                                        <svg className="w-10 h-10 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24">
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
                                    className="absolute top-1/2 -translate-y-1/2 -right-10 z-30"
                                >
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  text-black transition">
                                        <svg className="w-10 h-10 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24">
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
                                    spaceBetween={24}
                                    slidesPerView={1}
                                    breakpoints={{
                                        640: { slidesPerView: 2 },
                                        1024: { slidesPerView: 3 },
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                        bulletClass:
                                            'swiper-pagination-bullet !bg-white/40 !opacity-60 hover:!opacity-100',
                                        bulletActiveClass:
                                            'swiper-pagination-bullet-active !bg-white !opacity-100 !scale-110',
                                    }}
                                    className="!pb-12"
                                >
                                    {carouselData.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="bg-white text-black  shadow-md overflow-hidden h-[320px] flex flex-col">
                                                <img
                                                    src={item.image}
                                                    alt={`Slide ${index + 1}`}
                                                    className="w-full h-56 object-cover"
                                                />
                                                <div className="p-4 text-center font-semibold flex-1 flex items-center">
                                                    {item.text}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Static Image Card Below Carousel */}
                            {/* Full-Width Section with Text Left and Image Right */}
                            <div className="bg-black text-white w-full py-28 px-4 lg:px-0">
                                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                                    {/* Left Text Section */}
                                    <div className="w-full lg:w-1/2 space-y-10 px-2 lg:px-0">
                                        <h4 className="text-gray-500 text-xl font-medium">From Vision to Viability</h4>

                                        <div>
                                            <h2 className="text-3xl font-semibold text-white mb-2">From Installation to Impact</h2>
                                            <p className="text-gray-300 text-base leading-relaxed">
                                                We accelerate clean energy adoption with turnkey solar and renewable solutions.<br />
                                                From project development and permitting to grid integration, we handle it all.<br />
                                                Our expert team ensures every system is optimized for performance and built for long-term value.
                                            </p>
                                        </div>

                                        <h4 className="text-gray-500 text-xl font-medium">From Local Sites to National Scale</h4>
                                    </div>

                                    {/* Right Image Section */}
                                    <div className="w-full lg:w-1/2">
                                        <div className=" overflow-hidden shadow-2xl border border-white/10">
                                            <img
                                                src="https://media.istockphoto.com/id/525206743/photo/solar-panel-on-a-red-roof.jpg?s=612x612&w=0&k=20&c=xcAkdNj8dFDhu8734FpRDAZDtN2bjr48RKEd9j2FL0U="
                                                alt="Solar Installation"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </section>


                    {/* CTA Section */}
                    <section className="py-28 bg-black text-white relative overflow-hidden">
                        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid md:grid-cols-2 gap-16 items-center">

                                {/* Left Side - Text */}
                                <div>
                                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                        Ready to Power Your Future with Clean Energy?
                                    </h2>
                                    <p className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed">
                                        Join us in building India's renewable energy infrastructure. <br />
                                        From rooftop solar to utility-scale parks, we deliver reliable, scalable,<br />
                                        and profitable clean energy solutions — all under one roof.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href="/contact.html"
                                            className="group relative bg-white text-black px-8 py-4 rounded-xl font-semibold text-base hover:bg-gray-200 transition-all duration-300 inline-flex items-center justify-center shadow-lg transform hover:scale-105"
                                        >
                                            <span className="relative z-10">Start Your Project</span>
                                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                                        </a>

                                        <a
                                            href="/services.html"
                                            className="group relative border border-white/70 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                                        >
                                            <span className="relative z-10">View All Services</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Right Side - Image */}
                                <div className="flex justify-center">
                                    <img
                                        src="https://www.shutterstock.com/image-photo/modern-house-black-solar-panels-600nw-2188743139.jpg"
                                        alt="Clean Energy House"
                                        className="w-full max-w-2xl rounded-xl shadow-2xl object-cover"
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
