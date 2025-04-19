
function Banner({ image, text, children }) {
    return (
        <div className="relative h-screen w-full"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Header/Nav goes here */}
            <div className="absolute top-0 w-full">
                {children}
            </div>

            {/* Hero Text */}
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                            text-white text-center">
                {text}
            </h1>
        </div>
    );
}


export default Banner