import { Link } from 'react-router-dom'

import FacilitiesAboutImage from '../../assets/FacilitiesAboutImage.jpg'

import ImageContainer from '../../components/ui/ImageContainer.jsx'

import Button from '../../components/common/Button.jsx';

function AboutUs () {
    return (
        <div    id="AboutUs" 
                className="lg:grid lg:grid-cols-2 lg:items-center
                        py-8 lg:py-12 xl:py-18
                        space-y-8 lg:space-y-0
                        lg:gap-12 xl:gap-24
                        ">
            <ImageContainer image={FacilitiesAboutImage} alt="Image of Batam1Spa's Lounge" aspectRatio="3/2" disableModal={true} />
            <div className="text-center space-y-8 lg:text-left">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h6 className="uppercase">About Us</h6>
                        <h2 className="uppercase text-c-gold-1">The  peaceful escape, where relaxation and rejuvenation bond.</h2>
                    </div>
                    <p>As Batam’s largest spa, we offer luxurious treatments and a tranquil escape for your ultimate relaxation and well-being.</p>
                </div>
                <Link to="/Services">
                    <Button text="Book a Service"/>
                </Link>
            </div>
        </div>
    );
}

export default AboutUs