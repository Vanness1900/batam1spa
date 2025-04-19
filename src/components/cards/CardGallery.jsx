import ImageContainer from "../ui/ImageContainer.jsx";

function CardGallery({src, altText = "Batam1Spa Image", title, category}) {
    return(
        <div className="space-y-2">
            <ImageContainer image={src} alt={altText} className="w-full object-cover rounded-2xl"/>
            <div className="space-y-0">
                <h5>{title}</h5>
                <p className="text-c-gold-1 xl:text-c-p3">{category}</p>
            </div>
        </div>
    );
}

export default CardGallery