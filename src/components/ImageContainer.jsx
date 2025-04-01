function ImageContainer({ image, altText = "Batam1Spa Image", aspectRatio = "1/1" }) {
    return (
        <div className={`relative w-full mx-auto overflow-hidden rounded-2xl aspect-${aspectRatio}`}>
            <img 
                src={image} 
                alt={altText} 
                className="w-full h-full object-cover rounded-2xl transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            <div className="absolute inset-4 border border-c-gold-1 pointer-events-none"></div>
        </div>
    );
}

export default ImageContainer;
