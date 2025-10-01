import { useState } from 'react';
import { useService } from '../../context/ServicesContext.jsx';
import EditServiceModal from '../ui/EditServiceModal.jsx';

function CardCart({ item, isConfirmation = false }) {
    const { removeFromCart, cart } = useService();
    const [showEditModal, setShowEditModal] = useState(false);

    if (!item) return null;

    const handleRemove = () => {
        // Use cartId for precise removal
        console.log('=== REMOVE BUTTON CLICKED ===');
        console.log('Cart item to remove:', item);
        console.log('Cart ID:', item.cartId);
        console.log('Current cart length:', cart.length);
        
        if (item.cartId) {
            console.log('Removing cart item with cartId:', item.cartId);
            removeFromCart(item.cartId);
        } else {
            console.error('Cart item missing cartId:', item);
            
            // Fallback: create a unique identifier based on all properties
            const itemIndex = cart.findIndex(cartItem => 
                cartItem.title === item.title &&
                cartItem.selectedDuration === item.selectedDuration &&
                cartItem.selectedDate === item.selectedDate &&
                cartItem.selectedTime === item.selectedTime &&
                cartItem.quantity === item.quantity
            );
            
            if (itemIndex !== -1) {
                console.log('Found item by properties at index:', itemIndex);
                const foundItem = cart[itemIndex];
                if (foundItem.cartId) {
                    removeFromCart(foundItem.cartId);
                }
            }
        }
    };

    const handleEdit = () => {
        console.log('Edit button clicked for cart item:', item);
        setShowEditModal(true);
    };

    const handleCloseEdit = () => {
        setShowEditModal(false);
    };

    const formatTime = (time) => {
        return `${time}:00`;
    };

    return (
        <>
            <div className="flex flex-col md:grid md:grid-cols-5 gap-4 md:gap-8 h-fit py-8 border-b-1 border-c-black-3">
                {/* Service Image - Made more vertical/portrait */}
                <div className="h-32 sm:h-36 md:h-24 w-full rounded-lg overflow-hidden aspect-[3/4]">
                    <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Service Information */}
                <div className="flex flex-col justify-between gap-4 sm:gap-6 md:gap-8 col-span-1 md:col-span-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <h4 className="uppercase">{item.title}</h4>
                            <span className="hidden text-xs text-c-black-3">Cart ID: {item.cartId || 'Missing'}</span>
                        </div>

                        {/* Details */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0">
                            <div className="flex flex-col gap-1 justify-end">
                                <span className="text-c-gold-1">Details</span>
                                <span className="text-c-black-3">Duration</span>
                                <span className="text-c-black-3">Date</span>
                                <span className="text-c-black-3">Check-in</span>
                            </div>

                            <div className="flex flex-col gap-1 justify-end">
                                <span></span>
                                <span className="text-c-black-3">{item.selectedDuration} min</span>
                                <span className="text-c-black-3">{item.selectedDate || 'TBD'}</span>
                                <span className="text-c-black-3">{item.selectedTime ? formatTime(item.selectedTime) : 'TBD'}</span>
                            </div>

                            <div className="flex flex-col gap-1 justify-end">
                                <span className="text-c-gold-1">Subtotal</span>
                                <span className="text-c-black-3">Local</span>
                                <span className="text-c-black-3">Tourist</span>
                                <span className="text-c-black-3">Qty</span>
                            </div>

                            <div className="flex flex-col gap-1 justify-center">
                                <span>&nbsp;</span>
                                <span className="text-c-black-3">{item.quantity} person{item.quantity > 1 ? 's' : ''}</span>
                                <span className="text-c-black-3">Rp. {(item.lprice * item.quantity)?.toLocaleString()}</span>
                                <span className="text-c-black-3">Rp. {(item.tprice * item.quantity)?.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Action buttons - only show in cart, not confirmation */}
                    {!isConfirmation && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-0">
                            <button 
                                onClick={handleRemove}
                                className="uppercase text-lg text-c-black-3 underline hover:text-red-500 transition-all text-left"
                            >
                                Remove
                            </button>
                            <button 
                                onClick={handleEdit}
                                className="uppercase text-lg text-c-white-1 underline hover:text-c-gold-1 transition-all text-left"
                            >
                                Edit
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Edit Modal */}
            {showEditModal && (
                <EditServiceModal
                    isOpen={showEditModal}
                    onClose={handleCloseEdit}
                    item={item}
                />
            )}
        </>
    );
}

export default CardCart;