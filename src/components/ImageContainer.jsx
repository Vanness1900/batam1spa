

function ImageContainer({image, altText = "Image of Batam1Spa"}) {
    return (
        <div className="relative w-1/2">
            <img src={image} alt={altText} className="rounded-2xl w-full h-auto"/>
            <div className="absolute inset-0
                            transform translate-x-4 translate-y-4
                            outline-1 outline-c-gold-1"></div>
        </div>
    );
}

export default ImageContainer