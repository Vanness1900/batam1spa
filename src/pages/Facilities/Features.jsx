import FeatureImage1 from "../../assets/FeatureImage1.jpg"
import FeatureImage2 from "../../assets/FeatureImage2.jpg"
import FeatureImage3 from "../../assets/FeatureImage3.jpg"
import FeatureImage4 from "../../assets/FeatureImage4.jpg"

import CardFeatures from "../../components/cards/CardFeatures";

function Features () {
    return(
        <div className="space-y-8 py-8 lg:py-12 xl:py-18">
            <div className="space-y-2">
                        <h6 className="uppercase">Features</h6>
                        <h2 className="uppercase text-c-gold-1">Excellence in our Customer Care</h2>
            </div>
            <div    id="Stats"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-evenly 
                            gap-4 md:gap-8 lg:gap-12
                            space-y-4
                            my-4 lg:my-0
                            ">
                <CardFeatures image={FeatureImage1} title="VIP Spa Welcome" text="Experience a warm greeting from our dedicated staff as you enter our exclusive VIP lounge, crafted to deliver luxury from the very first moment."/>
                <CardFeatures image={FeatureImage2} title="Tranquility Lounge" text="Start your day with calming rituals or unwind in the afternoon with signature teas and treats in our serene lounge, surrounded by stunning views."/>
                <CardFeatures image={FeatureImage3} title="Seamless Check-In" text="Sip on a refreshing welcome drink as we assist with a smooth and effortless check-in to your private spa suite or relaxation area."/>
                <CardFeatures image={FeatureImage4} title="Personalized Butler Service" text="Our dedicated 24-hour butler team is ready to cater to your every need, creating tailored wellness experiences both within and beyond the spa."/>
            </div>
        </div>
    );
}

export default Features