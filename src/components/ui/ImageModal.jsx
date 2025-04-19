import React, { useState, useEffect } from 'react'

function ImageModal ({ open, onClose, children }){
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";  // Disable scrolling
        } else {
            document.body.style.overflow = "auto";   // Enable scrolling
        }
        return () => document.body.style.overflow = "auto"; // Reset on unmount
    }, [open]);
    
    return(
        <div
            onClick={onClose} 
            className={`
                fixed inset-0 flex justify-center items-center
                transition-colors z-50
                ${open ? "visible bg-black/50" : "invisible"}`
        }>
            <div className={`relative transition-all duration-300 ${open ? "opacity-100" : "opacity-0"}`}  onClick={(e) => e.stopPropagation()}>
                {children}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={onClose} 
                    className="size-12 absolute top-8 left-8 transition-all duration-300 bg-c-black-1/75 hover:bg-c-black-1 hover:text-c-gold-1 rounded-full p-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
    );
}

export default ImageModal