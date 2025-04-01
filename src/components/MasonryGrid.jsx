import GallerySquare from "../assets/GallerySquare.jpg";
import GalleryVertical from "../assets/GalleryVertical.jpg";
import GalleryHorizontal from "../assets/GalleryHorizontal.jpg";

const Images = [
    GallerySquare
    , GalleryHorizontal
    , GalleryHorizontal
    , GallerySquare
    , GallerySquare
    , GalleryHorizontal
    , GalleryHorizontal
    , GallerySquare
]

const MasonryGrid = () => {
    return <div className="columns-1 md:columns-2 lg:columns-4
                            gap-8 ">
                {Images.map((src, index) => (
                    <div key={index} className="mb-4 break-inside-avoid ">
                        <img src={src} className="w-full object-cover rounded-2xl" />
                    </div>
                ))}
            </div>
}

export default MasonryGrid