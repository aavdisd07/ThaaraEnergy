const MissionSection = () => {
    return (
        <section className="relative bg-black text-white min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] py-16 sm:py-20 lg:py-28 overflow-hidden w-screen"
            style={{
                backgroundImage: "url('https://cosmosmagazine.com/wp-content/uploads/2022/10/sellmore.Getty_.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Content */}
            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col gap-6 justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold drop-shadow-lg" style={{ textShadow: '1px 1px 2px rgb(0, 0, 0)' }}>Our Mission</h2>
                </div>

                {/* Paragraph */}
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed" style={{ textShadow: '1px 1px 2px rgb(0, 0, 0)' }}>
                        Drive clean energy adoption through innovative and efficient solar solutions. We empower
                        communities, industries, and nations through resilient, clean energy solutions with a focus
                        on innovation, sustainability, and impact.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MissionSection; 