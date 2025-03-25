import HeaderLogo from '../assets/White_Logotype_Left_150DPI.png'
import ButtonHeader from './ButtonHeader.jsx'

function Header() {
    return (
    <header>
        <nav className="flex gap-4 px-30 py-12 justify-between">
            <img src={HeaderLogo} className='h-[32px]' />
            <ul className="flex gap-4">
                <ButtonHeader page="HOME" />
                <ButtonHeader page="FACILITIES" />
                <ButtonHeader page="SERVICES" />
                <ButtonHeader page="CONTACT" />
            </ul>
        </nav>
    </header>
    );
}

export default Header