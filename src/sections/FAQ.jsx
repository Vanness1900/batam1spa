import Accordion from '../components/Accordion.jsx'
import ImageContainer from '../components/ImageContainer.jsx';

import FAQImage from '../assets/FAQImage.jpg'

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
        <div className=" lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            <div className="py-8 space-y-8">
                <div className="space-y-2">
                    <h6 className="uppercase">FAQ</h6>
                    <h2 className="uppercase text-c-gold-1">Questions</h2>
                </div>
                <Accordion sections={FAQData} />
            </div>
                <div className="hidden lg:block">
                    <ImageContainer image={FAQImage}  altText="Batam1Spa Service" aspectRatio="3/2" disableModal={true}/>
                </div>
        </div>
    );
}

export default FAQ