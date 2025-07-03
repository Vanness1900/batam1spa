import { Link } from 'react-router-dom'

import AboutImage from '../../assets/AboutImage.jpg'

import ImageContainer from '../../components/ui/ImageContainer.jsx'

import Button from '../../components/common/Button.jsx';

function OurStory() {
    return (
        <div    id="OurStory" 
                className="lg:grid lg:grid-cols-2 lg:items-center
                        py-8 lg:py-12 xl:py-18
                        space-y-8 lg:space-y-0
                        lg:gap-12 xl:gap-24
                        ">
            <div className="text-center space-y-8 lg:text-left">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h6 className="uppercase">Our Story</h6>
                        <h2 className="uppercase text-c-gold-1">Sanctuary for the Body and Soul</h2>
                    </div>
                    <p>Experience the pinnacle of luxury at Batam1Spa, Batam’s 
                        largest and most opulent spa, opening in 2025. Indulge 
                        in world-class massages and holistic therapies within a 
                        serene, state-of-the-art sanctuary designed for ultimate 
                        relaxation and rejuvenation.</p>
                </div>
                <Link to="/Facilities">
                    <Button text="Explore Facilities"/>
                </Link>
            </div>
            <ImageContainer image={AboutImage} alt="Image of Batam1Spa's Lounge" aspectRatio="3/2" disableModal={true} />
        </div>
    );
}

export default OurStory