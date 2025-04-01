import ImageContainer from "./ImageContainer.jsx";

function CardGallery({image, altText = "Batam1Spa Image"}) {
    return(
        <div>
            <ImageContainer src={image} altText={altText} />
        </div>
    );
}

export default CardGallery