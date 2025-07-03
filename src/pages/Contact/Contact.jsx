import HeroImage from '../../assets/BannerContact.jpg'

import Hero from '../../components/sections/Hero.jsx'
import Footer from '../../components/sections/Footer.jsx'
import Whatsapp from '../../components/common/Whatsapp.jsx'

function Facilities() {
    return (
        <>
            <Hero image={HeroImage} text="We’re Just a Message Away" />

            {/* Other content below hero */}
            <div className="px-8 md:px-16 lg:px-32 xl:px-48
                            py-8 lg:py-12 xl:py-18
                            space-y-8">
                <div className="space-y-4">
                    <h2 className="uppercase text-c-gold-1">Contact us</h2>
                    <div className="space-y-4">    
                        <p>For enquiries, reservations, or general information, reach out to us at:<br/>
                        Phone:  (+62) 0888 8888 8888<br/>
                        Email:  info@batam1spa.com</p>
                        
                        <p>For emergencies, please contact:<br/>
                        Emergency Phone: (+62) 0888 8888 8889</p>
                    </div>
                </div>
                
                <div className="h-[1px] w-full bg-c-black-3"/>

                <div className="space-y-4">
                    <h2 className="uppercase text-c-gold-1">Location</h2>
                    <div className="space-y-4">    
                        <p>jl Lorem Ipsum 13, Indonesia, Batam, 230984</p>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-c-black-3"/>

                <div className="space-y-4">
                    <h2 className="uppercase text-c-gold-1">Operating Hours</h2>
                    <div className="space-y-4">    
                        <p>Sunday - Thursday: 10:30 AM - 10:00 PM<br/>
                        Friday, Saturday & Eve of Public Holidays: 10:30 AM - 11:00 PM</p>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-c-black-3"/>

                <div className="space-y-4">
                    <h2 className="uppercase text-c-gold-1">Follow us</h2>
                    <div className="space-y-4">    
                        <p>Stay connected for updates, promotions, and wellness tips:<br/>
                        Instagram | Facebook | TikTok | Twitter</p>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-c-black-3"/>
                
                <div className="space-y-4">
                    <h2 className="uppercase text-c-gold-1">Parking Information</h2>
                    <div className="space-y-4">    
                        <p>Parking facilities are available [details about parking options].</p>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-c-black-3"/>
                
                <div className="space-y-4">
                    <h2 className="uppercase text-c-gold-1">Language Spoken</h2>
                    <div className="space-y-4">    
                        <p>Our staff speaks English, Indonesian, and [other languages].</p>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-c-black-3"/>
                
                <div className="space-y-4">
                    <h2 className="uppercase text-c-gold-1">Live Chat Option</h2>
                    <div className="space-y-4">    
                        <p>For real-time assistance, use our Live Chat Option.</p>
                    </div>
                </div>
            </div>

            <Footer />
            <Whatsapp />
        </>
    );
}

export default Facilities;
