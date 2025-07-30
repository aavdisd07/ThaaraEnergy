const VisionSection = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-black relative w-screen">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                {/* Title and Description */}
                <div className="mb-8 sm:mb-10 md:mb-12 text-left mt-2 sm:mt-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
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
    );
};

export default VisionSection; 