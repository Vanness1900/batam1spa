import { Link } from 'react-router-dom'

import ServicesImage from '../../assets/ServicesImage.jpg';

import ImageContainer from '../../components/ui/ImageContainer.jsx';
import Button from '../../components/common/Button.jsx';
import ServiceList from '../../components/cards/ServiceList.jsx';

function FeaturedServices() {
    return (
        <div id="FeaturedServices"
            className="
            lg:grid lg:grid-cols-2 lg:items-center
            py-8 lg:py-12 xl:py-18
            space-y-8 lg:space-y-0
            lg:gap-12 xl:gap-24
        ">
            <ImageContainer image={ServicesImage} altText="Batam1Spa Service" aspectRatio="3/2" disableModal={true}/>

            <div className="space-y-8">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h6 className="uppercase">Featured Services</h6>
                        <h2 className="uppercase text-c-gold-1">Rejuvenate Your Inner Senses</h2>
                    </div>
                    
                    <div>
                        <ServiceList name="Hot Stone Massage" duration="60-120" price="89" />
                        <ServiceList name="Swedish Massage" duration="60-120" price="79" />
                        <ServiceList name="Aromatherapy Massage" duration="60-120" price="99" />
                    </div>
                </div>

                <Link to="/Services">
                    <Button text="More Services" />
                </Link>
            </div>
        </div>
    );
}

export default FeaturedServices;
