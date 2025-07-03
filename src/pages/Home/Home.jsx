import { useState } from 'react'

import HeroImage from '../../assets/BannerHome.jpg'

import Hero from '../../components/sections/Hero.jsx'
import Footer from '../../components/sections/Footer.jsx'
import Whatsapp from '../../components/common/Whatsapp.jsx'

import OurStory from './OurStory.jsx'
import Stats from './Stats.jsx'
import FeaturedServices from './FeaturedServices.jsx'
import FAQ from '../../components/sections/FAQ.jsx'
import CTA from '../../components/sections/CTA.jsx'


function Home() {
    const spaHomeFAQ = [
        {
            question: "What are your opening hours?",
            answer: "We are open daily from 10:00 AM to 10:00 PM, including weekends and public holidays."
        },
        {
            question: "Do I need to make an account to book a treatment?",
            answer: "No account is required — you can book directly as a guest. However, creating an account allows you to track your bookings and receive exclusive offers."
        },
        {
            question: "Where is your spa located?",
            answer: "We are located in Batam, Indonesia. The full address and directions are available on our Contact page."
        },
        {
            question: "Do you accept walk-in customers?",
            answer: "Yes, walk-ins are welcome, but we recommend booking in advance to secure your preferred time and treatment."
        },
        {
            question: "Is parking available at your location?",
            answer: "Yes, we offer free on-site parking for all spa guests."
        }
    ];


    return (
    <>
        <Hero image={HeroImage} text={"UNPARALLELED SPA LUXURY"}/>
        <Whatsapp />

        <div className="px-8 md:px-16 lg:px-32 xl:px-48">
            <OurStory />
            <Stats />
            <FeaturedServices />
            <FAQ spaFAQData={spaHomeFAQ}/>
            <CTA />
        </div>


        <Footer />
    </>
    )
}

export default Home
