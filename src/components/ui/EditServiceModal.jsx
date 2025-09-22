import React, { useState, useEffect } from 'react';
import Button from '../common/Button.jsx';
import { useService } from '../../context/ServicesContext.jsx';

// Image Modal Component
function ImageModal({ open, onClose, children }) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => document.body.style.overflow = "auto";
    }, [open]);
    
    return (
        <div
            onClick={onClose} 
            className={`
                fixed inset-0 flex justify-center items-center
                transition-colors z-50
                ${open ? "visible bg-black/70" : "invisible"}
            `}
        >
            <div 
                className={`relative transition-all duration-300 scale-80 ${open ? "opacity-100" : "opacity-0"}`}  
                onClick={(e) => e.stopPropagation()}
            >
                {children}
                <button
                    onClick={onClose}
                    className="absolute top-8 left-8 w-12 h-12 bg-c-black-1/50 hover:bg-c-gold-1 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

function EditServiceModal({ isOpen, onClose, item }) {
    const { updateCartItem } = useService();
    
    // Current values (what user is changing)
    const [pax, setPax] = useState(item.quantity);
    const [selectedDuration, setSelectedDuration] = useState(item.selectedDuration);
    const [selectedDate, setSelectedDate] = useState(item.selectedDate || '');
    const [selectedTime, setSelectedTime] = useState(item.selectedTime || '10');

    // Store original values for cancel/revert functionality
    const originalData = {
        quantity: item.quantity,
        selectedDuration: item.selectedDuration,
        selectedDate: item.selectedDate || '',
        selectedTime: item.selectedTime || '10'
    };

    const updatePax = (change) => {
        setPax(prev => Math.min(8, Math.max(1, prev + change)));
    };

    const today = new Date();
    const minDate = today.toISOString().split("T")[0];
    const maxDate = new Date(today.setDate(today.getDate() + 90)).toISOString().split("T")[0];

    // Fix 2: Update Service button
    const handleUpdateService = () => {
        updateCartItem(item.cartId, {
            selectedDuration,
            quantity: pax,
            selectedDate,
            selectedTime
        });
        console.log("Updated service with new details using cartId:", item.cartId);
        onClose();
    };

    // Fix 2: Cancel button - revert to original values
    const handleCancel = () => {
        // Revert all changes back to original
        setPax(originalData.quantity);
        setSelectedDuration(originalData.selectedDuration);
        setSelectedDate(originalData.selectedDate);
        setSelectedTime(originalData.selectedTime);
        onClose();
    };

    return (
        <ImageModal open={isOpen} onClose={onClose}>
            <div className="flex space-x-8">
                <div className="relative w-[60vw] h-[90vh] bg-c-black-1 rounded-2xl shadow-2xl grid grid-cols-3">
                    <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-auto h-full object-cover rounded-l-2xl"
                    />
                    <div className="col-span-2 p-8 overflow-y-auto space-y-12">
                        <div className="space-y-2">
                            <h4 className="uppercase text-c-gold-1">{item.title}</h4>
                            <p className="text-c-white-1">{item.description}</p>
                        </div>

                        <div className="space-y-2">
                            <h4 className="uppercase text-c-gold-1">What's Included</h4>
                            <ul className="list-disc list-inside text-c-white-1 space-y-4">
                                {item.included && item.included.map((inc, index) => (
                                    <li key={index}>{inc}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h4 className="uppercase text-c-gold-1">Price</h4>
                            <span className="flex justify-between">
                                <p className="text-c-white-1">Local</p>
                                <p className="text-c-white-1">Rp. {item.lprice?.toLocaleString()}</p>
                            </span>
                            <span className="flex justify-between">
                                <p className="text-c-white-1">Tourist</p>
                                <p className="text-c-white-1">Rp. {item.tprice?.toLocaleString()}</p>
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h4 className="uppercase text-c-gold-1">Session Duration</h4>
                            <ul className="list-disc list-inside text-c-white-1 space-y-4">
                                {item.duration && item.duration.map((dur, index) => (
                                    <li key={index}>{dur} minutes</li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-2">
                            <h4 className="uppercase text-c-gold-1">Additional Information</h4>
                            <ul className="list-disc list-inside text-c-white-1 space-y-4">
                                <li>
                                    Reservations are recommended at least one week in advance; walk-ins are accommodated based on availability.
                                </li>
                                <li>
                                    Not recommended for pregnant individuals or those with certain medical conditions. Please consult with our staff before booking.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <form className="relative bg-c-black-1 w-[20vw] h-[90vh] rounded-2xl shadow-2xl flex flex-col place-content-between p-8">
                    <div className="space-y-4">
                        <h4 className="uppercase text-c-gold-1 border-b-1 border-c-gold-1">Edit Booking</h4>

                        {/* Quantity */}
                        <div className="space-y-2">
                            <h6 className="uppercase text-c-white-1"><label>Quantity</label></h6>
                            <div className="flex justify-around border-1 border-c-white-1 h-10 place-items-center rounded-lg px-4">
                                <svg onClick={() => updatePax(-1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 cursor-pointer w-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                                <p className="text-c-white-1 w-full text-center">{pax}</p>
                                <svg onClick={() => updatePax(1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 cursor-pointer w-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                        </div>

                        {/* Duration */}
                        <div className="space-y-2">
                            <h6 className="uppercase text-c-white-1"><label>Duration</label></h6>
                            <select 
                                name="duration"
                                value={selectedDuration}
                                onChange={(e) => setSelectedDuration(parseInt(e.target.value))}
                                className="bg-transparent outline-none w-full flex justify-around border-1 border-c-white-1 h-10 place-items-center rounded-lg px-4 font-secondary text-c-p3 xl:text-c-p2"
                            >
                                {item.duration && item.duration.map(dur => (
                                    <option key={dur} value={dur} className="bg-c-black-1">
                                        {dur} minutes
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Date */}
                        <div className="space-y-2">
                            <h6 className="uppercase text-c-white-1"><label>Date</label></h6>
                            <div className="relative cursor-pointer" onClick={() => document.querySelector('input[name="edit-date"]').showPicker()}>
                                <input 
                                    type="date" 
                                    name="edit-date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    className="bg-transparent outline-none w-full border-1 border-c-white-1 h-10 rounded-lg px-4 pr-12 text-c-white-1  font-secondary text-c-p3 xl:text-c-p2
                                            cursor-pointer focus:border-c-white-1 focus:ring-1 focus:ring-c-white-1
                                            [&::-webkit-calendar-picker-indicator]:opacity-0 
                                            [&::-webkit-calendar-picker-indicator]:absolute
                                            [&::-webkit-calendar-picker-indicator]:right-0
                                            [&::-webkit-calendar-picker-indicator]:w-full
                                            [&::-webkit-calendar-picker-indicator]:h-full
                                            [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                                    min={minDate}
                                    max={maxDate}
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Check In */}
                        <div className="space-y-2">
                            <h6 className="uppercase text-c-white-1"><label>Check In</label></h6>
                            <select 
                                name="checkin"
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                                className="bg-transparent outline-none w-full flex justify-around border-1 border-c-white-1 h-10 place-items-center rounded-lg px-4 font-secondary text-c-p3 xl:text-c-p2"
                            >
                                <option value="10" className="bg-c-black-1">10:00</option>
                                <option value="11" className="bg-c-black-1">11:00</option>
                                <option value="12" className="bg-c-black-1">12:00</option>
                                <option value="13" className="bg-c-black-1">13:00</option>
                                <option value="14" className="bg-c-black-1">14:00</option>
                                <option value="15" className="bg-c-black-1">15:00</option>
                                <option value="16" className="bg-c-black-1">16:00</option>
                            </select>
                        </div>
                    </div>

                    {/* Fix 2: New buttons - Update Service and Cancel */}
                    <div className="flex flex-col space-y-4 w-full">
                        <Button 
                            text="Update Service" 
                            onClick={handleUpdateService}
                            type="button"
                            className="w-full bg-c-black-1 hover:bg-c-gold-1"
                        />
                        <Button 
                            text="Cancel" 
                            onClick={handleCancel}
                            type="button"
                            className="w-full bg-c-black-1 hover:bg-c-black-2"
                        />
                    </div>
                </form>
            </div>
        </ImageModal>
    );
}

export default EditServiceModal;