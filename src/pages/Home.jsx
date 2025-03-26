import { useState } from 'react'
import TopBar from '../components/TopBar.jsx'
import Banner from '../panels/Banner.jsx'
import Footer from '../components/Footer.jsx'
import AboutUs from '../panels/AboutUs.jsx'

import bannerImage from '../assets/banner_home.jpg'

import Whatsapp from '../components/Whatsapp.jsx'

function Home() {

    return (
    <>
        
        <TopBar />
        <Banner image={bannerImage} text={"UNPARALLELED SPA LUXURY"}/>
        <Whatsapp />
        <AboutUs />
        <Footer />
    </>
    )
}

export default Home
