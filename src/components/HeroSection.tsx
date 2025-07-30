
const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-screen">
            {/* Background Video */}
            <div className="absolute inset-0 w-screen h-full overflow-hidden">
                <video
                    className="absolute inset-0 w-screen h-full object-cover"
                    src="mp123.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ pointerEvents: 'none' }}
                />
            </div>

            {/* Content */}
            <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-6xl">
                    <div className="absolute top-[25%] left-[50%] -translate-x-[50%]">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 sm:mb-6" style={{ textShadow: '5px 5px 5px rgba(11, 9, 9, 0.98)' }}>
                            Empowering Progress,<br />
                            Sustainably
                        </h2>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-lg absolute top-[38%] left-[50%] -translate-x-[50%] text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4" style={{ textShadow: '5px 5px 5px rgba(11, 9, 9, 0.98)' }}>
                        Thaara Energy stands at the intersection of innovation, sustainability, and investment opportunity.
                        We specialize in the development and delivery of innovative, high-impact solutions across the renewable energy value chain.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 absolute bottom-[1%] left-[50%] -translate-x-[50%] sm:mb-12 px-4">
                        <a
                            href="/services.html"
                            className="group relative bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center shadow-2xl hover:bg-gray-100 border border-black/100 transition-all duration-300"
                        >
                            Explore Our Solutions
                        </a>

                        <a href="/contact.html"
                            className="group relative bg-grey-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base shadow-xl border border-white/100 hover:bg-black transition-all duration-500"
                        >
                            <span className="relative z-10 group-hover:text-white">
                                Start Your Project
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 