import { createContext, useContext, useState } from 'react';

const ServiceContext = createContext(null);

export function ServiceProvider({ children }) {
    const [services, setServices] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (service, selectedDuration, quantity = 1, date = '', time = '') => {
        // Generate a UNIQUE cart ID that's different from service ID
        const uniqueCartId = `cart_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        
        const cartItem = {
            cartId: uniqueCartId, // Use cartId instead of id for cart items
            serviceId: service.id, // Keep original service ID for reference
            ...service,
            selectedDuration,
            quantity,
            selectedDate: date,
            selectedTime: time
        };
        
        setCart(prev => [...prev, cartItem]);
        console.log('Added to cart with unique cartId:', cartItem);
    };

    const removeFromCart = (cartItemId) => {
        console.log('Attempting to remove cart item with cartId:', cartItemId);
        console.log('Current cart before removal:', cart);
        
        setCart(prevCart => {
            const updatedCart = prevCart.filter(item => {
                // Use cartId for precise matching
                const shouldKeep = item.cartId !== cartItemId;
                if (!shouldKeep) {
                    console.log('Removing specific cart item:', item);
                }
                return shouldKeep;
            });
            
            console.log('Cart after removal:', updatedCart);
            return updatedCart;
        });
    };

    const updateCartItem = (cartItemId, updatedData) => {
        console.log('Updating cart item with cartId:', cartItemId, 'with data:', updatedData);
        
        setCart(prev => 
            prev.map(item => {
                if (item.cartId === cartItemId) {
                    console.log('Found cart item to update:', item);
                    const updatedItem = { ...item, ...updatedData };
                    console.log('Updated cart item:', updatedItem);
                    return updatedItem;
                }
                return item;
            })
        );
    };

    const clearCart = () => {
        console.log('Clearing entire cart');
        setCart([]);
    };

    const getCartTotal = (priceType = 'local') => {
        return cart.reduce((total, item) => {
            const price = priceType === 'local' ? (item.lprice || 0) : (item.tprice || 0);
            return total + (price * item.quantity);
        }, 0);
    };

    const value = {
        services,
        setServices,
        cart,
        addToCart,
        removeFromCart,
        updateCartItem,
        clearCart,
        getCartTotal
    };

    return (
        <ServiceContext.Provider value={value}>
            {children}
        </ServiceContext.Provider>
    );
}

// Custom hook to use the service context
export function useService() {
    const context = useContext(ServiceContext);
    if (!context) {
        throw new Error('useService must be used within a ServiceProvider');
    }
    return context;
}