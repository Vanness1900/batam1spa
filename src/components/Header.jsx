import HeaderLogoType from '../assets/White_Logotype_Left_150DPI.png'
import HeaderLogoMark from '../assets/Pure_White_Mark_150DPI.png'
import ButtonHeader from './ButtonHeader.jsx'

function Header() {
    return (
    <header>
        <nav className="hidden lg:flex gap-4 px-30 py-12 justify-between">
            <img src={HeaderLogoType} alt="Batam1Spa's Logo" className='h-[32px]' />
            <ul className="flex gap-4">
                <ButtonHeader page="HOME" />
                <ButtonHeader page="FACILITIES" />
                <ButtonHeader page="SERVICES" />
                <ButtonHeader page="CONTACT" />
            </ul>
        </nav>

        <nav className="lg:hidden flex items-center justify-between px-4 py-4
                        bg-gradient-to-b from-c-black-1 to-transparent">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
            <img src={HeaderLogoMark} alt="Batam1Spa's Logo" className="h-8 w-auto" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
        </nav>
    </header>
    );
}

export default Header