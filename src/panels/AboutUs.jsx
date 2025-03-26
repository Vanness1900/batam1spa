import lounge from '../assets/lounge.jpg'

import ImageContainer from '../components/ImageContainer.jsx';
import ButtonCommon from '../components/ButtonCommon.jsx';

function AboutUs() {
    return (
        <div className="flex items-center gap-x-12
                        px-30 py-12">
            <div className="flex flex-col gap-y-8 w-1/2">
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-1">
                        <h6 className="uppercase">About Us</h6>
                        <h2 className="uppercase text-c-gold-1">Sanctuary for the Body and Soul</h2>
                    </div>
                    <p>Experience the pinnacle of luxury at Batam1Spa, Batam’s 
                        largest and most opulent spa, opening in 2025. Indulge 
                        in world-class massages and holistic therapies within a 
                        serene, state-of-the-art sanctuary designed for ultimate 
                        relaxation and rejuvenation.</p>
                </div>
                <ButtonCommon text="Explore Facilities"/>
            </div>
                <ImageContainer image={lounge} alt="Image of Batam1Spa's Lounge"/>
        </div>
        
    );
}

export default AboutUs