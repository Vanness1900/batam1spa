import Accordion from '../ui/Accordion.jsx'
import ImageContainer from '../ui/ImageContainer.jsx'
;

import FAQImage from '../../assets/FAQImage.jpg'

const FAQData = [
    {question: "Can I book a spa treatment on-site?",
        answer: "White we allow on-site bookings, appointments are encouraged to be pre-booked in advance through our website."
    },
    {question: "Can I book a spa treatment on-site?",
        answer: "White we allow on-site bookings, appointments are encouraged to be pre-booked in advance through our website."
    },
    {question: "Can I book a spa treatment on-site?",
        answer: "White we allow on-site bookings, appointments are encouraged to be pre-booked in advance through our website."
    },
    {question: "Can I book a spa treatment on-site?",
        answer: "White we allow on-site bookings, appointments are encouraged to be pre-booked in advance through our website."
    },
    {question: "Can I book a spa treatment on-site?",
        answer: "White we allow on-site bookings, appointments are encouraged to be pre-booked in advance through our website."
    },
    
]

function FAQ() {


    return(
        <div    id="FAQ"
                className=" lg:grid lg:grid-cols-2 items-center
                        pt-8 lg:py-12 xl:py-18
                        space-y-8 lg:space-y-0
                        lg:gap-12 xl:gap-24">
            <div>
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h6 className="uppercase">FAQ</h6>
                        <h2 className="uppercase text-c-gold-1">Questions</h2>
                    </div>
                    <Accordion sections={FAQData} />
                </div>
            </div>
                <div className="hidden lg:block">
                    <ImageContainer image={FAQImage}  altText="Batam1Spa Service" lgAspectRatio="1/1" disableModal={true}/>
                </div>
        </div>
    );
}

export default FAQ