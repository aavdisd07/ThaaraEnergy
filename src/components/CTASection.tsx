import { ArrowRight } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="pt-2 sm:pt-10 md:pt-12 lg:pt-8 pb-8 sm:pb-20 md:pb-24 lg:pb-28 bg-black text-white relative overflow-hidden w-screen">
            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-12 lg:gap-12 items-center w-full">

                    {/* Image Section */}
                    <div className="flex justify-center order-1 md:order-2 w-full">
                        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
                            <img
                                src="https://www.shutterstock.com/image-photo/modern-house-black-solar-panels-600nw-2188743139.jpg"
                                alt="Modern house with black solar panels"
                                className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg md:rounded-xl shadow-2xl object-cover hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="order-2 md:order-1 text-center md:text-left w-full">
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
    );
};

export default CTASection; 