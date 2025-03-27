import { useState } from 'react'
import bannerImage from '../assets/BannerHome.jpg'

import TopBar from '../components/TopBar.jsx'
import Hero from '../sections/Hero.jsx'
import Footer from '../components/Footer.jsx'
import Whatsapp from '../components/Whatsapp.jsx'

import About from '../sections/About.jsx'
import Stats from '../sections/Stats.jsx'
import Services from '../sections/Services.jsx'




function Home() {

    return (
    <>
        
        <TopBar />
        <Hero image={bannerImage} text={"UNPARALLELED SPA LUXURY"}/>
        <Whatsapp />

        <About />
        <Stats />
        <Services />


        <Footer />
    </>
    )
}

export default Home
