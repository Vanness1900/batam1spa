import CardGallery from "../cards/CardGallery.jsx"

const MasonryGrid = ({sections}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {sections.map(({ src, alt, title, category }, index) => (
                <div key={index} className="">
                    <CardGallery src={src} altText={alt} title={title} category={category}/>
                </div>
            ))}
        </div>
    )
}

export default MasonryGrid