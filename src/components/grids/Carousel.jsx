import { useState, useEffect } from "react";
import ImageContainer from "../ui/ImageContainer.jsx";

const Carousel = ({ sections }) => {
    const [current, setCurrent] = useState(0);
    
    // Show 1 image at a time
    const imagesPerView = 1;
    const totalSlides = sections.length;

    // Function to go to the previous slide
    const previous = () => setCurrent(current === 0 ? totalSlides - 1 : current - 1);
    
    // Function to go to the next slide
    const next = () => setCurrent(current === totalSlides - 1 ? 0 : current + 1);

    // Auto-scroll logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
        }, 4000); // Change slide every 4 seconds (slower for multiple images)

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <div className="relative w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Sliding Container */}
            <div 
                className="flex transition-transform ease-out duration-500"
                style={{ 
                    transform: `translateX(-${current * 100}%)`, // Move by 100% to show next image
                }}
            >
                {sections.map(({ src, alt, title, category }, index) => (
                    <div 
                        key={index} 
                        className="flex-shrink-0 w-full" // Each image takes full width
                    >
                        <div className="relative group">
                            <div className="overflow-hidden rounded-lg">
                                <ImageContainer 
                                    image={src} 
                                    altText={alt} 
                                    aspectRatio="3/2" 
                                    disableModal={true}
                                />
                            </div>
                            
                            {/* Image overlay with title and category */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                <div className="absolute bottom-0 left-0 right-0 p-3">
                                    <h4 className="text-white text-sm font-medium mb-1">{title}</h4>
                                    <p className="text-c-gold-1 text-xs uppercase tracking-wide">{category}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button 
                onClick={previous} 
                className="absolute left-2 top-[40%] -translate-y-1/2 text-c-white-1 bg-c-black-1/75 hover:bg-black hover:text-c-gold-1 hover:scale-110 transition-all duration-300 ease-in-out p-2 rounded-full z-10"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>

            <button 
                onClick={next} 
                className="absolute right-2 top-[40%] -translate-y-1/2 text-c-white-1 bg-c-black-1/75 hover:bg-black hover:text-c-gold-1 hover:scale-110 transition-all duration-300 ease-in-out p-2 rounded-full z-10"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            current === index 
                                ? 'bg-c-gold-1 scale-125' 
                                : 'bg-white/50 hover:bg-white/75'
                        }`}
                    />
                ))}
            </div>

            {/* Image Counter */}
            <div className="text-center mt-3">
                <span className="text-sm text-gray-600">
                    {current + 1} of {sections.length}
                </span>
            </div>
        </div>
    );
};

export default Carousel;