import React, {useState} from 'react'

const AccordionSection = ({section, isSelected, setActiveIndex, sectionIndex}) => {
    const toggleSection =() => {
        const nextIndex = isSelected ? null : sectionIndex;
        setActiveIndex(nextIndex);
    }
    
    return(
        <div className="pb-4">
            <div className="flex justify-between space-y-4" onClick={toggleSection}>
                <h6 className="uppercase pr-4">{section.question}</h6>
                <div>
                {isSelected ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
                : 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                }
                </div>
            </div>
            <div className="h-[1px] w-full bg-c-gold-1"></div>
            <div
                className={`transition-all duration-300 constant overflow-hidden ${
                    isSelected ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
                }`}
            >
                <p className="px-4 text-c-black-4">{section.answer}</p>
            </div>
        </div>
    );
    
}

function Accordion({sections}) {
    const [activeIndex, setActiveIndex] = useState(0);

    return(
        <div>
            {sections.map((section, index) => (
                <AccordionSection section={section} 
                key={index} 
                isSelected={index === activeIndex}
                setActiveIndex={setActiveIndex}
                sectionIndex={index}
                />
            ))}
        </div>
    );
}

export default Accordion