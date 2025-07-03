import { Link } from 'react-router-dom'

import Button from "../../components/common/Button";
import CardCart from "../../components/cards/CardCart";

function Confirmation () {
    return(
        <div className="h-screen w-full overflow-hidden grid grid-cols-1 lg:grid-cols-[5fr_5fr]">
            {/* left panel */}
            <div className="flex flex-col pt-20 pb-8 place-content-center px-8 md:px-16 lg:pl-32 xl:pl-48 lg:pr-16 gap-16">
                <div className="space-y-2 w-full">
                    <h6 className="uppercase">Thank you for choosing Batam1Spa</h6>
                    <h2 className="text-c-gold-1 uppercase max-w-[75%]">You're all set and ready to relax!</h2>
                    <p className="text-c-black-3 max-w-[75%]">A confirmation email/SMS with your booking details has been sent. Please check your inbox and spam folder.</p>
                </div>

                <div className="space-y-2">
                    <h4 className="uppercase">Reservation Information</h4>
                    <div className="flex gap-16">
                        <div className="text-c-black-3 flex flex-col">
                            <span>Name</span>
                            <span>Phone Number</span>
                            <span>Email</span>
                        </div>
                        <div className="text-c-black-3 flex flex-col">
                            <span>JohnDoe</span>
                            <span>822 8888 8888</span>
                            <span>JohnDoe@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Link to="/">
                        <Button text="Back To Home" />
                    </Link>
                    <Link to="/Services">
                        <Button text="Book Service" />
                    </Link>
                </div>
            </div>





            {/* right panel */}
            <div className="flex flex-col overflow-hidden bg-c-black-2 pt-20 pb-8 px-8 md:px-16 lg:pr-32 xl:pr-48 lg:pl-16">
                <h2 className="uppercase border-b-1 border-c-white-1 pb-4 flex-shrink-0">Booking Summary</h2>

                {/* Scrollable Services List */}
                <div className="overflow-y-auto h-fill">
                    <div className="flex flex-col h-fill">
                        <CardCart />
                        <CardCart />
                        <CardCart />
                    </div>
                </div>

                {/* Fixed Footer */}
                <div className="flex flex-col justify-between">
                    <h2 className="uppercase border-b-1 border-c-white-1 py-4 mb-4">Total Cost</h2>
                    <span className="flex justify-between">
                        <h4 className="uppercase">Local</h4>
                        <h4 className="uppercase">Rp. 1.950.000</h4>
                    </span>
                    <span className="flex justify-between">
                        <h4 className="uppercase">Tourist</h4>
                        <h4 className="uppercase">Rp. 2.550.000</h4>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Confirmation