import { useState } from "react";
import ImageModal from "./ImageModal.jsx";

function ImageContainer({ image, altText = "Batam1Spa Image", aspectRatio = "1/1", lgAspectRatio , disableModal = false}) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`
            relative w-full mx-auto overflow-hidden rounded-2xl
            ${aspectRatio === "1/1" ? "aspect-[1/1]" : "aspect-[3/2]"} // Use explicit Tailwind classes
            ${lgAspectRatio === "1/1" ? "lg:aspect-[1/1]" : "lg:aspect-[3/2]"}
            `}>
            <img 
                src={image} 
                alt={altText} 
                className="w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                onClick={() => {
                    if (!disableModal) setOpen(true);
                }} 
            />
            <div className="absolute inset-4 border border-c-gold-1 pointer-events-none"></div>

            {/* Modal (Only if disableModal is false) */}
            {!disableModal && (
                <ImageModal open={open} onClose={() => setOpen(false)}>
                    <img src={image} alt={altText} className="max-w-[85vw] max-h-[80vh] rounded-lg" />
                </ImageModal>
            )}
        </div>
    );
}

export default ImageContainer;
