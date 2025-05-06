import { useState } from 'react'

import HeroImage from '../../assets/BannerHome.jpg'

import Hero from '../../components/sections/Hero.jsx'
import Footer from '../../components/sections/Footer.jsx'
import Whatsapp from '../../components/common/Whatsapp.jsx'

import About from './About.jsx'
import Stats from './Stats.jsx'
import Services from './Services.jsx'
import Gallery from './Gallery.jsx'
import FAQ from '../../components/sections/FAQ.jsx'
import CTA from '../../components/sections/CTA.jsx'


function Home() {

    return (
    <>
        <Hero image={HeroImage} text={"UNPARALLELED SPA LUXURY"}/>
        <Whatsapp />

        <div className="px-8 md:px-16 lg:px-32 xl:px-48">
            <About />
            <Stats />
            <Services />
            <Gallery />
            <FAQ />
            <CTA />
        </div>


        <Footer />
    </>
    )
}

export default Home
