import React, { useState } from 'react';

const AccordionSection = ({ section, isSelected, setActiveIndex, sectionIndex }) => {
    const toggleSection = () => {
        setActiveIndex(isSelected ? null : sectionIndex);
    };

    return (
        <div className="pb-4">
            <div 
                className="flex justify-between items-center cursor-pointer py-2 hover:opacity-80 transition-opacity duration-200" 
                onClick={toggleSection}
            >
                <h6 className="uppercase pr-4 font-medium">{section.question}</h6>
                <div className={`transition-all duration-500 ease-out ${isSelected ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="size-6"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" 
                        />
                    </svg>
                </div>
            </div>
            <div className="h-[1px] w-full bg-c-gold-1"></div>
            <div
                className={`transition-all duration-700 ease-out overflow-hidden ${
                    isSelected ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className={`transition-all duration-500 ease-out ${
                    isSelected ? 'py-4 transform translate-y-0' : 'py-0 transform -translate-y-4'
                }`}>
                    <p className="px-4 text-c-black-4 transition-all duration-300 delay-200">{section.answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ = ({ spaFAQData = [] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Default fallback FAQ
    const generalFAQ = [
        {
            question: "How do I make a booking?",
            answer: "You can book through our website by selecting a service, choosing a date and time, and filling in your contact details."
        },
        {
            question: "Can I cancel or reschedule my booking?",
            answer: "Yes, bookings can be rescheduled or cancelled up to 24 hours before your appointment time."
        },
        {
            question: "Do you accept credit cards?",
            answer: "Yes, we accept all major credit cards, debit cards, and digital payments."
        },
        {
            question: "Are group bookings available?",
            answer: "Absolutely! Please contact us in advance for group packages and customized experiences."
        },
        {
            question: "Is there a loyalty program?",
            answer: "Yes, our loyalty program rewards returning customers with discounts, free treatments, and exclusive offers."
        }
    ];

    const sectionsToRender = spaFAQData.length > 0 ? spaFAQData : generalFAQ;

    return (
        <div id="FAQ" className="items-center pt-8 lg:py-12 xl:py-18 space-y-8 lg:space-y-0 lg:gap-12 xl:gap-24">
            <div>
                <div className="space-y-4 md:flex md:gap-12 lg:gap-24 xl:gap-36">
                    <div className="space-y-2">
                        <h6 className="uppercase">FAQ</h6>
                        <h2 className="uppercase text-c-gold-1"><h2 className="hidden md:block">Frequently<br />Asked<br /></h2>Questions</h2>
                    </div>
                    <div className="space-y-2">
                        {sectionsToRender.map((section, index) => (
                            <AccordionSection 
                                key={index}
                                section={section} 
                                isSelected={index === activeIndex}
                                setActiveIndex={setActiveIndex}
                                sectionIndex={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;