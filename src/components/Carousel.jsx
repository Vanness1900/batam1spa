import { useState, useEffect } from "react";
import ImageContainer from "./ImageContainer.jsx";

const Carousel = ({ sections }) => {
    const [current, setCurrent] = useState(0);

    // Function to go to the previous slide
    const previous = () => setCurrent(current === 0 ? sections.length - 1 : current - 1);
    
    // Function to go to the next slide
    const next = () => setCurrent(current === sections.length - 1 ? 0 : current + 1);

    // Auto-scroll logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev === sections.length - 1 ? 0 : prev + 1));
        }, 3000); // Change slide every 3 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [sections.length]);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Sliding Container */}
            <div 
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {sections.map(({ src, alt }, index) => (
                    <div key={index} className="flex-shrink-0 w-full aspect-3/2">
                        <ImageContainer image={src} altText={alt} aspectRatio="3/2"/>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button 
                onClick={previous} 
                className="absolute left-2 top-1/2 -translate-y-1/2 text-c-gold-1 bg-c-black-1/75 hover:bg-black hover:scale-110 transition-all duration-300 ease-in-out p-2 rounded-full"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>

            <button 
                onClick={next} 
                className="absolute right-2 top-1/2 -translate-y-1/2 text-c-gold-1 bg-c-black-1/75 hover:bg-black hover:scale-110 transition-all duration-300 ease-in-out p-2 rounded-full"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Pagination Dots (Moved Below the Images) */}
            <div className="flex justify-center gap-2 mt-4">
                {sections.map((_, index) => (
                    <div 
                        key={index} 
                        className="relative flex justify-center items-center"
                    >
                        {/* Outer circle */}
                        <div 
                            className={`w-6 h-6 rounded-full transition-all 
                                ${current === index ? "bg-transparent border-2" : "bg-transparent"}
                            `}
                        />
                        {/* Inner circle */}
                        <div 
                            className={`absolute w-1 h-1 rounded-full bg-white transition-all 
                                ${current === index ? "scale-125" : ""}
                            `}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;