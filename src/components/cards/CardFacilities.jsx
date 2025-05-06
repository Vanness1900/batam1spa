import ImageContainer from "../ui/ImageContainer";

function CardFacilities({ image, title, text }) {
    return (
    <div className="space-y-4">
        <ImageContainer
            image={image}
            altText={title}
            aspectRatio="3/2"
            disableModal={true}
        />
        <div className="space-y-2">
            <h6 className="uppercase text-c-gold-1">{title}</h6>
            <p className="text-c-p4">{text}</p>
        </div>
    </div>
    );
}

export default CardFacilities;
