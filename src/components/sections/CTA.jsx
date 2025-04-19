import ImageContainer from '../ui/ImageContainer.jsx'

import Button from '../common/Button.jsx'

import CTAImage from '../../assets/CTAImage.jpg'

function CTA () {
    return(
        <div    id="CTA"
                className="
                        relative
                        py-8 lg:py-12 xl:py-18
                        lg:gap-12 xl:gap-24
                        ">
            <ImageContainer image={CTAImage} altText="Batam1Spa Click to Book" aspectRatio="3/2" disableModal={false}/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-4 lg:space-y-8 w-full max-w-[65%] lg:max-w-[75%]">
                <h1 className="uppercase text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">Enjoy a Relaxing Getaway Today</h1>
                <Button text="View Services" />
            </div>
        </div>
    )
}

export default CTA