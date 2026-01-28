
import AnimalGallery from "../components/home/AnimalGallery";
import FacilitiesSection from "../components/home/FacilitiesSection";
import FaqSection from "../components/home/FaqSection";
import HeroSection from "../components/home/heroSection";
import StatsSection from "../components/home/statsSection";
import ZoofariSection from "../components/home/zoofariSection";
import Testimonials from "../components/home/Testimonals";

const Home = () => {
  return (
    <div>
     
      <HeroSection />
      <ZoofariSection />
      <FacilitiesSection />
      <StatsSection />
      <AnimalGallery />
      <FaqSection />
      <Testimonials />
   
  
    </div>
  );
};

export default Home;
