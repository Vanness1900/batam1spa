import Header from './Header.jsx'

function Banner({image, text}){
    return(
        <div className="w-full h-screen"
            style={{backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}>
            <Header />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                            text-white text-h1/16 text-center">{text}</h1>
        </div>
    );
}

export default Banner