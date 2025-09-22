import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from "../../components/common/Button";
import { useService } from '../../context/ServicesContext.jsx';

function Confirmation() {
    const location = useLocation();
    const { clearCart } = useService();
    
    // Get form data and cart from navigation state
    const formData = location.state?.formData || {};
    const confirmedCart = location.state?.cart || [];

    useEffect(() => {
        // Clear the cart after successful booking, but with a small delay
        // to avoid interfering with navigation
        if (confirmedCart.length > 0) {
            const timeoutId = setTimeout(() => {
                clearCart();
                console.log('Cart cleared after confirmation');
            }, 100); // Small delay to ensure component is fully mounted

            return () => clearTimeout(timeoutId);
        }
    }, [clearCart, confirmedCart.length]);

    const totalLocal = confirmedCart.reduce((total, item) => {
        return total + (item.lprice * item.quantity);
    }, 0);

    const totalTourist = confirmedCart.reduce((total, item) => {
        return total + (item.tprice * item.quantity);
    }, 0);

    return (
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
                            <span>{formData.fullName || 'Guest'}</span>
                            <span>{formData.countryCode} {formData.phone || 'Not provided'}</span>
                            <span>{formData.email || 'Not provided'}</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Link to="/">
                        <Button text="Back To Home" />
                    </Link>
                    <Link to="/Services">
                        <Button text="Book Another Service" />
                    </Link>
                </div>
            </div>

            {/* right panel */}
            <div className="flex flex-col overflow-hidden bg-c-black-2 pt-20 pb-8 px-8 md:px-16 lg:pr-32 xl:pr-48 lg:pl-16">
                <h2 className="uppercase border-b-1 border-c-white-1 pb-4 flex-shrink-0">Booking Summary</h2>

                {/* Scrollable Services List */}
                <div className="overflow-y-auto h-fill">
                    <div className="flex flex-col h-fill">
                        {confirmedCart.length === 0 ? (
                            <div className="flex items-center justify-center h-full">
                                <p className="text-c-white-1">No services booked</p>
                            </div>
                        ) : (
                            // Use cartId as key for proper React rendering
                            confirmedCart.map(item => (
                                <div key={item.cartId || item.id} className="grid grid-cols-5 gap-8 h-fit py-8 border-b-1 border-c-white-1">
                                    {/* Service Image */}
                                    <div className="h-24 w-full rounded-lg overflow-hidden">
                                        <img 
                                            src={item.image} 
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Service Information */}
                                    <div className="flex flex-col justify-between gap-8 col-span-4">
                                        <div className="flex flex-col">
                                            <h4 className="uppercase text-c-white-1">{item.title}</h4>

                                            {/* Details */}
                                            <div className="grid grid-cols-4 pr-4">
                                                <div className="flex flex-col gap-1 justify-end">
                                                    <span className="text-c-black-4">Duration</span>
                                                    <span className="text-c-black-4">Date</span>
                                                    <span className="text-c-black-4">Check-in</span>
                                                </div>

                                                <div className="flex flex-col gap-1 justify-end">
                                                    <span className="text-c-black-4">{item.selectedDuration} min</span>
                                                    <span className="text-c-black-4">{item.selectedDate || 'TBD'}</span>
                                                    <span className="text-c-black-4">{item.selectedTime ? `${item.selectedTime}:00` : 'TBD'}</span>
                                                </div>

                                                <div className="flex flex-col gap-1 justify-end">
                                                    <span className="text-c-black-4">Local</span>
                                                    <span className="text-c-black-4">Tourist</span>
                                                    <span className="text-c-black-4">Qty</span>
                                                </div>

                                                <div className="flex flex-col gap-1 justify-center">
                                                    <span className="text-c-black-4">Rp. {(item.lprice * item.quantity)?.toLocaleString()}</span>
                                                    <span className="text-c-black-4">Rp. {(item.tprice * item.quantity)?.toLocaleString()}</span>
                                                    <span className="text-c-black-4">{item.quantity} person{item.quantity > 1 ? 's' : ''}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Fixed Footer */}
                {confirmedCart.length > 0 && (
                    <div className="flex flex-col justify-between">
                        <h2 className="uppercase border-y-1 border-c-white-1 py-4 mb-4 text-c-white-1">Total Cost</h2>
                        <span className="flex justify-between text-c-white-1">
                            <h4 className="uppercase">Local</h4>
                            <h4 className="uppercase">Rp. {totalLocal.toLocaleString()}</h4>
                        </span>
                        <span className="flex justify-between text-c-white-1">
                            <h4 className="uppercase">Tourist</h4>
                            <h4 className="uppercase">Rp. {totalTourist.toLocaleString()}</h4>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Confirmation;