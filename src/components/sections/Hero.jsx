import NavBar from '../../components/sections/NavBar.jsx';

function Hero({ image, text, children }) {
    return (
        <div
            className="relative h-screen w-full"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Positioning container */}
            <div className="absolute inset-0">

                {/* Black overlay */}
                <div className="absolute inset-0 bg-black opacity-20 z-10" />

                {/* NavBar on top of overlay */}
                <div className="absolute top-0 left-0 w-full z-20 lg:pt-12">
                    <NavBar />
                </div>

                {/* Optional children above overlay */}
                <div className="absolute top-0 w-full z-20">
                    {children}
                </div>

                {/* Centered hero text above overlay */}
                <h1 className="uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                text-white text-center z-10">
                    {text}
                </h1>
            </div>
        </div>
    );
}

export default Hero;
