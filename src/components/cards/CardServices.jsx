import ImageContainer from '../ui/ImageContainer.jsx'; // Make sure this import is correct

function CardServices({ image, title, duration, description, included, lprice, tprice }) {
    return (
        <div className="space-y-4">
            <ImageContainer
                image = {image}
                altText = {title}
                description = {description}
                aspectRatio = "3/2"
                type = "service"
                duration = {duration}
                included={included}
                lprice={lprice}
                tprice={tprice}

            />
            <div className="space-y-1">
                <h5 className="uppercase text-c-gold-1">{title}</h5>
                <p className="text-c-p4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>                
                    {Array.isArray(duration) 
                        ? `${Math.min(...duration)} - ${Math.max(...duration)} minutes` 
                        : `${duration} minutes`}
                </p>
            </div>
        </div>
    );
}

export default CardServices;
