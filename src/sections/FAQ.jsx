import Accordion from '../components/Accordion.jsx'

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
]

function FAQ() {


    return(
        <div className="py-8 space-y-8">
            <div className="space-y-2">
                <h6 className="uppercase">FAQ</h6>
                <h2 className="uppercase text-c-gold-1">Questions</h2>
            </div>
            <Accordion sections={FAQData} />
        </div>
    );
}

export default FAQ