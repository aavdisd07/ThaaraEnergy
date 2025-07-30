import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import SolutionsSection from '../components/SolutionsSection';
import VisionSection from '../components/VisionSection';
import MissionSection from '../components/MissionSection';
import IndustrySection from '../components/IndustrySection';
import CTASection from '../components/CTASection';

const Home = () => {
    return (
        <div className="min-h-screen bg-black">
            <Header />
            {/* <main className="pt-16 relative z-10"> */}
                {/* <div className="overflow-hidden"> */}
                    <HeroSection />
                    <SolutionsSection />
                    <VisionSection />
                    <MissionSection />
                    <IndustrySection />
                    <CTASection />
                {/* </div> */}
            {/* </main> */}
            <Footer />
        </div>
    );
};

export default Home;