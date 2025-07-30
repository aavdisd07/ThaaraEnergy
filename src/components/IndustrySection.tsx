import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const IndustrySection = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

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
        <section className="pt-8 sm:pt-20 md:pt-24 lg:pt-28 sm:pb-10 md:pb-12 lg:pb-12 bg-black text-white relative overflow-hidden w-screen">
            <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Heading */}
                <div className="mb-8 sm:mb-10 md:mb-12 text-left mt-2 sm:mt-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
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
                <div className="w-full bg-black text-white py-16 sm:py-20 md:py-24 lg:py-28">
                    <div className="w-full flex flex-col lg:flex-row items-center gap-6 sm:gap-10 md:gap-12 xl:gap-12 px-4 lg:px-4">
                        {/* Right Image Section */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
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
                        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 md:space-y-10 text-center lg:text-left">
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
    );
};

export default IndustrySection; 