import HeroImage from '../../assets/BannerFacilities.jpg'

import Hero from '../../components/sections/Hero.jsx'
import Footer from '../../components/sections/Footer.jsx'
import Whatsapp from '../../components/common/Whatsapp.jsx'

import About from './About.jsx'
import Features from './Features.jsx'
import FacilitiesSlider from './FacilitiesSlider.jsx'

function Facilities() {
    return (
        <>
            <Hero image={HeroImage} text="Batam’s Largest Spa Haven" />

            {/* Other content below hero */}
            <div className="px-8 md:px-16 lg:px-32 xl:px-48">
                <About />
                <Features />
                <FacilitiesSlider />
            </div>
        </>
    );
}

export default Facilities;
