import HeroImage from '../../assets/BannerFacilities.jpg'

import Hero from '../../components/sections/Hero.jsx'
import Footer from '../../components/sections/Footer.jsx'
import Whatsapp from '../../components/common/Whatsapp.jsx'

import AboutUs from './AboutUs.jsx'
import Features from './Features.jsx'
import FacilitiesList from './FacilitiesList.jsx'
import FeaturedImages from './Gallery.jsx'

import FAQ from '../../components/sections/FAQ.jsx'

function Facilities() {
    const spaFacilitiesFAQ = [
    {
        question: "What amenities are available at the spa?",
        answer: "Our spa includes private treatment rooms, steam rooms, relaxation lounges, showers, and couple's suites."
    },
    {
        question: "Is there a locker room or changing area?",
        answer: "Yes, we provide secure lockers and private changing rooms with fresh robes, slippers, and towels for your comfort."
    },
    {
        question: "Are the facilities gender-separated?",
        answer: "Yes, we offer separate changing and shower facilities for male and female guests."
    },
    {
        question: "Do you offer refreshments or tea?",
        answer: "Yes, complimentary herbal tea and infused water are available in our relaxation lounge before and after treatments."
    },
    {
        question: "Is your spa wheelchair accessible?",
        answer: "Yes, our spa is fully accessible for guests with mobility needs, including ramps and accessible treatment rooms."
    }
];

    return (
        <>
            <Hero image={HeroImage} text="Batam’s Largest Spa Haven" />

            {/* Other content below hero */}
            <div className="px-8 md:px-16 lg:px-32 xl:px-48">
                <AboutUs />
                <Features />
                <FacilitiesList />
                <FeaturedImages />
                <FAQ spaFAQData={spaFacilitiesFAQ} />
            </div>

            <Footer />
            <Whatsapp />
        </>
    );
}

export default Facilities;
