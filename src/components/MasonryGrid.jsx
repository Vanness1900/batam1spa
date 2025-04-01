import CardGallery from "./CardGallery.jsx"

const MasonryGrid = ({sections}) => {
    return <div className="columns-1 md:columns-2 lg:columns-4 gap-8">
                {sections.map(({ src, alt, title, category }, index) => (
                    <div key={index} className="mb-6 break-inside-avoid ">
                        <CardGallery src={src} altText={alt} title={title} category={category}/>
                    </div>
                ))}
            </div>
}

export default MasonryGrid