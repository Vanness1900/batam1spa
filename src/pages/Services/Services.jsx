import HeroImage from '../../assets/BannerServices.jpg'

import FAQ from '../../components/sections/FAQ.jsx'

import Hero from '../../components/sections/Hero.jsx'
import Footer from '../../components/sections/Footer.jsx'
import Whatsapp from '../../components/common/Whatsapp.jsx'

import Massage from './Massage.jsx'

function Services() {
    const spaServicesFAQ = [
    {
        question: "How long are the spa treatments?",
        answer: "Treatment durations range from 30 to 120 minutes, depending on the service you choose."
    },
    {
        question: "Can I request a specific therapist?",
        answer: "Yes, you can request a preferred therapist during booking. While we strive to fulfill requests, it depends on availability."
    },
    {
        question: "What massage techniques do you offer?",
        answer: "We offer a variety including Swedish, deep tissue, hot stone, aromatherapy, Balinese, and Thai massages."
    },
    {
        question: "Are your services suitable for pregnant women?",
        answer: "Some treatments can be adjusted for pregnant guests. Please inform us during booking so we can make necessary accommodations."
    },
    {
        question: "Can I customize my spa package?",
        answer: "Yes, we offer customizable packages. You can choose your preferred treatments and durations to suit your needs."
    }
];

    return (
        <>
            <Hero image={HeroImage} text="Unwind with World Class Therapies" />

            {/* Other content below hero */}
            <div className="px-8 md:px-16 lg:px-32 xl:px-48">
                <Massage />
                <FAQ spaFAQData={spaServicesFAQ}/>
            </div>

            <Footer />
            <Whatsapp />
        </>
    );
}

export default Services;
