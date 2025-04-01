import CardGallery from "../components/CardGallery.jsx";
import MasonryGrid from "../components/MasonryGrid.jsx";
import Carousel from "../components/Carousel.jsx";

import GallerySquare from "../assets/GallerySquare.jpg";
import GalleryVertical from "../assets/GalleryVertical.jpg";
import GalleryHorizontal from "../assets/GalleryHorizontal.jpg";

const Images = [
    {src: GallerySquare,
        alt: "Image of Candle Therapy",
        title: "Candle Therapy",
        category: "Therapy"
        }
    , {src: GalleryVertical,
        alt: "Image of Morning Venue",
        title: "Morning Venue",
        category: "Venue"
        }
    , {src: GalleryVertical,
        alt: "Image of Morning Venue",
        title: "Morning Venue",
        category: "Venue"
        }
    , {src: GallerySquare,
        alt: "Image of Candle Therapy",
        title: "Candle Therapy",
        category: "Therapy"
        }
    , {src: GallerySquare,
        alt: "Image of Candle Therapy",
        title: "Candle Therapy",
        category: "Therapy"
        }
    , {src: GalleryVertical,
        alt: "Image of Morning Venue",
        title: "Morning Venue",
        category: "Venue"
        }
    , {src: GalleryVertical,
        alt: "Image of Morning Venue",
        title: "Morning Venue",
        category: "Venue"
        }
    , {src: GallerySquare,
        alt: "Image of Candle Therapy",
        title: "Candle Therapy",
        category: "Therapy"
        }
]

function Gallery() {
    return(
        <div className="py-8 space-y-8
                        lg:py-12 lg:space-x-12
                        xl:py-12">
            <div className="space-y-8">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h6 className="uppercase">Gallery</h6>
                        <div className="flex justify-between items-end">
                            <h2 className="uppercase text-c-gold-1">Step Into Our World</h2>
                            <a className="uppercase hidden lg:block">View More</a>
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-c-gold-1" />
                </div>

                <div className="hidden lg:block">
                    <MasonryGrid sections={Images} />
                </div>

                <div className="lg:hidden">
                    <Carousel sections={Images} />
                </div>
            </div>
        </div>
    );
}

export default Gallery