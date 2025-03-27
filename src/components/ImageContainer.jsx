

function ImageContainer({image, altText = "Batam1Spa Image"}) {
    return (
        <div className="relative w-full ">
            <img src={image} alt={altText} className="rounded-2xl w-full "/>
            <div className="absolute inset-4
                            border-1 border-c-gold-1"></div>
        </div>
    );
}

export default ImageContainer