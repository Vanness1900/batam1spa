import CardGallery from "../components/CardGallery.jsx";
import MasonryGrid from "../components/MasonryGrid.jsx";

import TestImage from "../assets/GallerySquare.jpg";

function Gallery() {
    return(
        <div className="py-8 space-y-8
                        lg:py-12 lg:space-x-12
                        xl:py-12">
            <div className="space-y-8">
                <div className="space-y-2">
                    <h6 className="uppercase">Gallery</h6>
                    <h2 className="uppercase text-c-gold-1">Step Into Our World</h2>
                    <div className="h-[1px] w-full bg-c-gold-1" />
                </div>
                <div>
                    <MasonryGrid />
                </div>
            </div>
            <CardGallery image={TestImage} alt="Batam1Spa Image"/>
        </div>
    );
}

export default Gallery