import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Button from "../../components/common/Button";
import CardCart from '../../components/cards/CardCart';

function Cart() {
    const navigate = useNavigate();

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
                            <h6 className="uppercase">(0) Services</h6>
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
                        <CardCart />
                        <CardCart />
                        <CardCart />
                    </div>
                </div>

                {/* Fixed Footer */}
                <div className="pb-8">
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






            {/* Right Panel: Booking Form - Fixed, No Scroll */}
            <div className="bg-c-black-2 overflow-hidden">
                <form className="h-full px-8 md:px-16 lg:pl-16 lg:pr-32 xl:pr-48 pt-8 space-y-8 overflow-y-auto pt-20">
                    <h2 className="uppercase pb-4 border-b border-c-white-1">Contact</h2>

                    {/* Inputs */}
                    <div className="space-y-4">
                        <div>
                            <h6 className="uppercase">Full Name</h6>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="bg-c-white-1 w-full h-10 rounded-lg text-c-black-1 px-4 font-secondary text-c-p4"
                            />
                        </div>
                        <div>
                            <h6 className="uppercase">Email</h6>
                            <input
                                type="email"
                                placeholder="JohnDoe@gmail.com"
                                className="bg-c-white-1 w-full h-10 rounded-lg text-c-black-1 px-4 font-secondary text-c-p4"
                            />
                            <label className="flex items-center gap-2 mt-2 text-c-p4 font-secondary cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded bg-transparent border border-c-white-1 appearance-none checked:bg-c-white-1 accent-c-black-1 checked:bg-[url('data:image/svg+xml,%3csvg%20viewBox%3d%270%200%2016%2016%27%20fill%3d%27black%27%20xmlns%3d%27http%3a//www.w3.org/2000/svg%27%3e%3cpath%20d%3d%27m13.854%203.646-9%209-.354.354-.5-.5-3-3%201.414-1.414L4.5%2010.086l8.146-8.146%201.414%201.414z%27/%3e%3c/svg%3e')] transition-colors"
                                />
                                I want to be notified for newsletters.
                            </label>
                        </div>
                        <div>
                            <h6 className="uppercase">Phone Number</h6>
                            <div className="flex gap-2">
                                <select className="bg-c-white-1 max-w-[80px] h-10 rounded-lg text-c-black-1 px-4 font-secondary text-c-p4">
                                    <option>+62</option>
                                    <option>+65</option>
                                </select>
                                <input
                                    type="tel"
                                    placeholder="822 8888 8888"
                                    className="bg-c-white-1 w-full h-10 rounded-lg text-c-black-1 px-4 font-secondary text-c-p4"
                                />
                            </div>
                        </div>
                    </div>

                    <Link to="/Confirmation">
                        <Button text="Book Service" className="w-full" />
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Cart;