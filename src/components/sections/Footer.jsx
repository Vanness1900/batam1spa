import { Link } from 'react-router-dom'

import Logo from '../../assets/Gold_Horizontal_Primary_150DPI.png'
import PatternBg from '../../assets/Gold_Pattern A_Batam_1.svg'

function Footer() {
    return(
        <footer className="
                            h-max xl:h-screen pt-16 lg:pt-32 pb-8 lg:pb-12 shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
            <div className="relative h-full flex flex-col md:gap-12 xl:place-content-between">
            
                {/* Logo Section */}
                <div className="px-8 md:px-16 lg:px-32 xl:px-48 pb-12 md:pb-0">
                        {/* Placeholder for logo - replace with your actual logo */}
                        <img src={Logo} alt="Logo" className="min-w-[200px] w-2/3 md:w-1/2 lg:w-1/3" />
                </div>

            {/* Main Footer Content - 4 Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-c-gold-1
                            px-8 md:px-16 lg:px-32 xl:px-48 lg:pb-8">
                {/* Column 1 - Home */}
                <div>
                    <h4 className="mb-4 md:mb-6 border-b-1 border-c-gold-1 pb-2 inline-block">HOME</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/#OurStory" className="hover:text-c-white-1 transition-colors duration-200">
                                Our Story
                            </Link>
                        </li>
                        <li>
                            <Link to="/#FeaturedServices" className="hover:text-c-white-1 transition-colors duration-200">
                                Featured Services
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 2 - Facilities */}
                <div>
                    <h4 className="mb-4 md:mb-6 border-b-1 border-c-gold-1 pb-2 inline-block">FACILITIES</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/Facilities#AboutUs" className="hover:text-c-white-1 transition-colors duration-200">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/Facilities#FacilitiesList" className="hover:text-c-white-1 transition-colors duration-200">
                                Facilities List
                            </Link>
                        </li>
                        <li>
                            <Link to="/Facilities#Gallery" className="hover:text-c-white-1 transition-colors duration-200">
                                Gallery
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3 - Services */}
                <div>
                    <h4 className="mb-4 md:mb-6 border-b-1 border-c-gold-1 pb-2 inline-block">SERVICES</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/Services" className="hover:text-c-white-1 transition-colors duration-200">
                                Book a Service
                            </Link>
                        </li>
                        <li>
                            <Link to="/Services" className="hover:text-c-white-1 transition-colors duration-200">
                                See Full Menu
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 4 - Contact */}
                <div>
                    <h4 className="mb-4 md:mb-6 border-b-1 border-c-gold-1 pb-2 inline-block">CONTACT</h4>
                    <div className="space-y-2">
                        <p>(+62) 822 8888 8888</p>
                        <p>ContactBatam1Spa@gmail.com</p>

                        <div className="flex space-x-2">
                            <a href="#" className="underline hover:text-c-white-1 transition-colors duration-200">
                                Instagram
                            </a>
                            <p>|</p>
                            <a href="#" className="underline hover:text-c-white-1 transition-colors duration-200">
                                Tiktok
                            </a>
                            <p>|</p>
                            <a href="#" className="underline hover:text-c-white-1 transition-colors duration-200">
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Location Section - Also 4 columns */}
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 text-c-gold-1
                                px-8 md:px-16 lg:px-32 xl:px-48 ">
                    <div>
                        <h4 className="mb-2 hidden lg:block">LOCATION</h4>
                    </div>
                    
                    <div></div>
                    
                    <div>
                        <h4 className="mb-2 hidden lg:block">INDONESIA</h4>
                    </div>

                    <div>
                        <h4 className="mb-2 hidden lg:block">KOTA BATAM</h4>
                    </div>
                </div>

                <div className="relative ">
                        {/* Background Pattern */}
                        <div 
                            className="absolute inset-0 -bottom-8 lg:-bottom-12 bg-cover bg-center opacity-10 pb-8"
                            style={{ backgroundImage: `url(${PatternBg})` }}
                        ></div>

                    {/* HR Line */}
                        <div className="h-[1px] w-full bg-c-gold-1 relative z-10 " />

                    {/* Location Details */}
                        <div className="grid lg:grid-cols-4 gap-8 text-c-gold-1 px-8 md:px-16 lg:px-32 xl:px-48 relative z-10 pb-8 md:pb-12 lg:pb-16">
                            <div className="hidden lg:block"></div>
                            <div className="hidden lg:block"></div>
                            <div className="hidden lg:block"></div>
                            <div className="mt-6 space-y-2">
                                <h4 className="mb-4 md:mb-6 border-b-1 border-c-gold-1 pb-2 inline-block lg:hidden">LOCATION</h4>               
                                <p>Komplek sarana wisata batamia,</p>
                                <p>Jl. Komp. Bumi Indah,</p>
                                <p>Kota Batam, Indonesia, 29432</p>
                            </div>
                        </div>

                    {/* Bottom Bar */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 lg:gap-8 text-c-gold-1 px-8 md:px-16 lg:px-32 xl:px-48 relative z-10">
                            <p className="text-c-p5">© 2024 Batam 1 Spa</p>
                            <p className="text-c-p5">All Rights Reserved.</p>
                            <a href="#" className="text-c-p5 underline hover:text-c-white-1 transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-c-p5 underline hover:text-c-white-1 transition-colors duration-200">
                                Terms & Conditions
                            </a>
                        </div>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer