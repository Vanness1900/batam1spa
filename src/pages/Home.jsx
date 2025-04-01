import { useState } from 'react'
import bannerImage from '../assets/BannerHome.jpg'

import TopBar from '../components/TopBar.jsx'
import Hero from '../sections/Hero.jsx'
import Footer from '../components/Footer.jsx'
import Whatsapp from '../components/Whatsapp.jsx'

import About from '../sections/About.jsx'
import Stats from '../sections/Stats.jsx'
import Services from '../sections/Services.jsx'
import Gallery from '../sections/Gallery.jsx'
import FAQ from '../sections/FAQ.jsx'




function Home() {

    return (
    <>
        
        <TopBar />
        <Hero image={bannerImage} text={"UNPARALLELED SPA LUXURY"}/>
        <Whatsapp />

        <div className="px-8 md:px-16 lg:px-32 xl:px-48">
            <About />
            <Stats />
            <Services />
            <Gallery />
            <FAQ />
        </div>


        <Footer />
    </>
    )
}

export default Home
