import { Link } from 'react-router-dom'

import Button from "../../components/common/Button";
import PatternBg from "../../assets/Gold_Pattern A_Batam_1.svg"

function Error404() {
    return (
        <div className="relative h-screen w-full">
            {/* Background Pattern */}
            <div 
                className="absolute inset-0 bg-cover bg-center z-0 opacity-5"
                style={{ backgroundImage: `url(${PatternBg})` }}
            />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
                <div className="flex flex-col items-center">
                    <h1 className="text-c-gold-1 text-6xl">404</h1>
                    <div className="flex flex-col items-center gap-2">
                        <h6 className="text-c-white-1 text-xl">Page not found</h6>
                        <p className="text-c-black-3 text-center max-w-md">
                            Either the internet has broken or<br />
                            we couldn't find the page you're looking for
                        </p>
                    </div>
                </div>

                <Link to="/">
                    <Button text="Take Me Back" />
                </Link>
            </div>
        </div>
    );
}

export default Error404;
