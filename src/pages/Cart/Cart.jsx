import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Button from "../../components/common/Button";
import CardCart from '../../components/cards/CardCart';
import { useService } from '../../context/ServicesContext.jsx';

function Cart() {
    const navigate = useNavigate();
    const { cart, getCartTotal, clearCart } = useService();
    
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        countryCode: '+62',
        newsletter: false
    });

    const [phoneError, setPhoneError] = useState('');

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Feature 7: Phone validation
        if (name === 'phone') {
            const phoneRegex = /^\d+$/; // Only numbers allowed
            if (value && !phoneRegex.test(value)) {
                setPhoneError('Phone number must contain only numbers');
            } else if (value.length < 8 && value.length > 0) {
                setPhoneError('Phone number must be at least 8 digits');
            } else {
                setPhoneError('');
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Feature 7: Validate phone before proceeding
        if (!formData.phone) {
            setPhoneError('Phone number is required');
            return;
        }
        
        const phoneRegex = /^\d{8,}$/; // At least 8 digits, only numbers
        if (!phoneRegex.test(formData.phone)) {
            setPhoneError('Please enter a valid phone number (numbers only, minimum 8 digits)');
            return;
        }

        // Navigate to confirmation with form data and cart
        navigate('/Confirmation', { state: { formData, cart } });
    };

    return (
        <div className="h-screen w-full overflow-hidden grid grid-cols-1 lg:grid-cols-[7fr_3fr]">
            {/* Left Panel: Shopping Cart */}
            <div className="flex flex-col overflow-hidden pt-20 px-8 md:px-16 lg:pl-32 xl:pl-48 lg:pr-16">
                {/* Fixed Header */}
                <div className="flex-shrink-0">
                    <div className="flex justify-between border-b-1 border-c-white-1 pb-4">
                        <div className="flex items-center gap-2">
                            <button onClick={() => navigate(-1)} className="hover:text-c-gold-1 transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <h2 className="uppercase">Shopping Cart</h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <h6 className="uppercase">({cart.length}) Services</h6>
                            <Link to="/Services" className="hover:text-c-gold-1 transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scrollable Services List */}
                <div className="overflow-y-auto h-fill">
                    <div className="flex flex-col">
                        {cart.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full py-16">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-16 text-c-black-3 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5-2.5M7 13l2.5 2.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                                <h3 className="text-c-black-3 mb-2">Your cart is empty</h3>
                                <p className="text-c-black-3 text-center mb-4">Add some services to get started</p>
                                <Link to="/Services">
                                    <Button text="Browse Services" />
                                </Link>
                            </div>
                        ) : (
                            cart.map(item => (
                                <CardCart key={item.cartId} item={item} />
                            ))
                        )}
                    </div>
                </div>

                {/* Fixed Footer */}
                <div className="pb-8">
                    <div className="flex justify-between items-center mb-4 border-y-1 border-c-white-1">
                        <h2 className="uppercase py-4">Total Cost</h2>
                        {cart.length > 0 && (
                            <button 
                                onClick={() => {
                                    clearCart();
                                    console.log("Cart cleared");
                                }}
                                className="uppercase text-lg text-c-black-3 underline hover:text-red-500 transition-all"
                            >
                                Clear Cart
                            </button>
                        )}
                    </div>
                    <span className="flex justify-between">
                        <h4 className="uppercase">Local</h4>
                        <h4 className="uppercase">Rp. {getCartTotal('local').toLocaleString()}</h4>
                    </span>
                    <span className="flex justify-between">
                        <h4 className="uppercase">Tourist</h4>
                        <h4 className="uppercase">Rp. {getCartTotal('tourist').toLocaleString()}</h4>
                    </span>
                </div>
            </div>

            {/* Right Panel: Booking Form - Fixed, No Scroll */}
            <div className="bg-c-black-2 overflow-hidden">
                <form onSubmit={handleSubmit} className="h-full px-8 md:px-16 lg:pl-16 lg:pr-32 xl:pr-48 pt-8 space-y-8 overflow-y-auto pt-20">
                    <h2 className="uppercase pb-4 border-b border-c-white-1">Contact</h2>

                    {/* Inputs */}
                    <div className="space-y-4">
                        <div>
                            <h6 className="uppercase">Full Name</h6>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Full Name"
                                className="bg-c-white-1 w-full h-10 rounded-lg text-c-black-1 px-4 font-secondary text-c-p4"
                                required
                            />
                        </div>
                        <div>
                            <h6 className="uppercase">Email</h6>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="JohnDoe@gmail.com"
                                className="bg-c-white-1 w-full h-10 rounded-lg text-c-black-1 px-4 font-secondary text-c-p4"
                                required
                            />
                            <label className="flex items-center gap-2 mt-2 text-c-p4 font-secondary cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="newsletter"
                                    checked={formData.newsletter}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 rounded bg-transparent border border-c-white-1 appearance-none checked:bg-c-white-1 accent-c-black-1 checked:bg-[url('data:image/svg+xml,%3csvg%20viewBox%3d%270%200%2016%2016%27%20fill%3d%27black%27%20xmlns%3d%27http%3a//www.w3.org/2000/svg%27%3e%3cpath%20d%3d%27m13.854%203.646-9%209-.354.354-.5-.5-3-3%201.414-1.414L4.5%2010.086l8.146-8.146%201.414%201.414z%27/%3e%3c/svg%3e')] transition-colors"
                                />
                                I want to be notified for newsletters.
                            </label>
                        </div>
                        <div>
                            <h6 className="uppercase">Phone Number</h6>
                            <div className="flex gap-2">
                                <select 
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleInputChange}
                                    className="bg-c-white-1 max-w-[80px] h-10 rounded-lg text-c-black-1 px-4 font-secondary text-c-p4"
                                >
                                    <option value="+62">+62</option>
                                    <option value="+65">+65</option>
                                </select>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="82288888888"
                                    className={`bg-c-white-1 w-full h-10 rounded-lg text-c-black-1 px-4 font-secondary text-c-p4 ${phoneError ? 'border-2 border-red-500' : ''}`}
                                    required
                                />
                            </div>
                            {phoneError && (
                                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                            )}
                        </div>
                    </div>

                    <Button 
                        text={cart.length === 0 ? "Add Services First" : "Book Service"} 
                        className="w-full" 
                        type="submit"
                        disabled={cart.length === 0 || phoneError}
                    />
                </form>
            </div>
        </div>
    );
}

export default Cart;