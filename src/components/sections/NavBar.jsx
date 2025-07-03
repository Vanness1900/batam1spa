import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import HeaderLogoType from '../../assets/White_Logotype_Left_150DPI.png'
import HeaderLogoMark from '../../assets/Pure_White_Mark_150DPI.png'

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    // Close menu when clicking on a link
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <header className="relative">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex justify-between gap-4 px-32 xl:px-48 py-12">
                <Link to="/">
                    <img src={HeaderLogoType} alt="Batam1Spa's Logo" className='h-[32px] xl:h-[48px]' />
                </Link>
                
                <ul className="flex gap-4">
                    <Link to="/">
                        <button className="px-8 xl:px-12 pb-3 text-xl xl:text-2xl font-primary relative inline-block cursor-pointer group">
                            Home
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-c-white-1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-800 ease-in-out"></span>
                        </button>
                    </Link>
                    <Link to="/Facilities">
                        <button className="px-8 xl:px-12 pb-3 text-xl xl:text-2xl font-primary relative inline-block cursor-pointer group">
                            Facilities
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-c-white-1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-800 ease-in-out"></span>
                        </button>
                    </Link>
                    <Link to="/Services">
                        <button className="px-8 xl:px-12 pb-3 text-xl xl:text-2xl font-primary relative inline-block cursor-pointer group">
                            Services
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-c-white-1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-800 ease-in-out"></span>
                        </button>
                    </Link>
                    <Link to="/Contact">
                        <button className="px-8 xl:px-12 pb-3 text-xl xl:text-2xl font-primary relative inline-block cursor-pointer group">
                            Contact
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-c-white-1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-800 ease-in-out"></span>
                        </button>
                    </Link>
                </ul>
            </nav>





            {/* Mobile Navigation Header */}
            <nav className="lg:hidden flex items-center justify-between px-8 md:px-16 py-4 bg-gradient-to-b from-c-black-1 to-transparent relative z-50">
                {/* Hamburger Button */}
                <button 
                    onClick={toggleMenu}
                    className="relative z-50 p-2 -ml-2"
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-6 flex flex-col justify-center items-center">
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                            isMenuOpen ? 'rotate-45 translate-y-1.5' : 'translate-y-0'
                        }`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out mt-1 ${
                            isMenuOpen ? 'opacity-0' : 'opacity-100'
                        }`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out mt-1 ${
                            isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0'
                        }`}></span>
                    </div>
                </button>

                {/* Logo */}
                <Link to="/" onClick={handleLinkClick}>
                    <img src={HeaderLogoMark} alt="Batam1Spa's Logo" className="h-8 w-auto" />
                </Link>

                {/* Cart Icon */}
                <Link to="/cart" className="p-2 -mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                </Link>
            </nav>



            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sx transition-opacity duration-300 z-75 ${
                isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`} onClick={toggleMenu}></div>



            {/* Mobile Menu Panel */}
            <div className={`lg:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-c-black-1 transform transition-transform duration-300 ease-in-out z-100 ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                {/* Menu Header */}
                <div className="flex items-center p-8 gap-8">
                    <button 
                        onClick={toggleMenu}
                        className="hover:bg-c-white-1/10 rounded transition-colors"
                        aria-label="Close menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <img src={HeaderLogoType} alt="Batam1Spa's Logo" className="max-w-[60%]" />
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col">

                    <Link 
                        to="/" 
                        onClick={handleLinkClick}
                        className="group px-8 py-4 text-xl font-primary hover:bg-c-white-1/5 transition-colors border-l-4 border-transparent hover:border-c-gold-1"
                    >
                        <span className="flex items-center justify-between">
                            Home
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </Link>

                    <Link 
                        to="/Facilities" 
                        onClick={handleLinkClick}
                        className="group px-8 py-4 text-xl font-primary hover:bg-c-white-1/5 transition-colors border-l-4 border-transparent hover:border-c-gold-1"
                    >
                        <span className="flex items-center justify-between">
                            Facilities
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </Link>

                    <Link 
                        to="/Services" 
                        onClick={handleLinkClick}
                        className="group px-8 py-4 text-xl font-primary hover:bg-c-white-1/5 transition-colors border-l-4 border-transparent hover:border-c-gold-1"
                    >
                        <span className="flex items-center justify-between">
                            Services
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </Link>

                    <Link 
                        to="/Contact" 
                        onClick={handleLinkClick}
                        className="group px-8 py-4 text-xl font-primary hover:bg-c-white-1/5 transition-colors border-l-4 border-transparent hover:border-c-gold-1"
                    >
                        <span className="flex items-center justify-between">
                            Contact
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </Link>
                </nav>

                {/* Menu Footer */}
                <div className="mt-auto p-8">
                    <Link 
                        to="/cart" 
                        onClick={handleLinkClick}
                        className="flex items-center gap-3 p-3 bg-c-gold-1 text-c-black-1 rounded-lg hover:bg-c-gold-1/90 transition-colors font-secondary"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>
                        View Cart
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default NavBar