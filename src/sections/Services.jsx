import ServicesImage from  '../assets/ServicesImage.jpg'

import ImageContainer from '../components/ImageContainer.jsx';
import Button from '../components/Button.jsx';
import ServiceList from '../components/ServiceList.jsx';

function Services(){
    return(
        <div className="lg:grid lg:grid-cols-2 lg:items-center
                        py-8 space-y-8
                        lg:py-12 lg:space-x-12
                        xl:py-12">
            <div >
                <ImageContainer image={ServicesImage} altText="Batam1Spa Service" aspectRatio="3/2" />
            </div>
            <div className="space-y-8">
                <div className="space-y-2">
                    <div className="space-y-2">
                        <h6 className="uppercase">Featured Services</h6>
                        <h2 className="uppercase text-c-gold-1">Rejuvenate Your inner Senses</h2>
                    </div>
                    <div>
                        <ServiceList name="Hot Stone Message" duration="60-120" price="89" />
                        <ServiceList name="Hot Stone Message" duration="60-120" price="89" />
                        <ServiceList name="Hot Stone Message" duration="60-120" price="89" />
                    </div>
                </div>
                <Button text="More Services" />
            </div>
        </div>
    );
}

export default Services