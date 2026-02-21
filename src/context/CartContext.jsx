import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    // Inicializar estado desde localStorage si existe
    const [cartItems, setCartItems] = useState(() => {
        try {
            const localData = localStorage.getItem('ceramica_cart');
            return localData ? JSON.parse(localData) : [];
        } catch (error) {
            console.error("Error al cargar carrito local", error);
            return [];
        }
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    // Guardar en localStorage cuando cambie el carrito
    useEffect(() => {
        try {
            localStorage.setItem('ceramica_cart', JSON.stringify(cartItems));
        } catch (error) {
            console.error("Error guardando carrito local", error);
        }
    }, [cartItems]);

    // Calcular totales
    const { total, count } = useMemo(() => {
        return cartItems.reduce(
            (acc, item) => ({
                total: acc.total + item.product.rawPrice * item.quantity,
                count: acc.count + item.quantity
            }),
            { total: 0, count: 0 }
        );
    }, [cartItems]);

    const addItem = (product, quantity = 1) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.product.id === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { product, quantity }];
        });
        setIsCartOpen(true); // Abrir carrito al añadir
    };

    const removeItem = (productId) => {
        setCartItems(prev => prev.filter(item => item.product.id !== productId));
    };

    const updateQuantity = (productId, delta) => {
        setCartItems(prev => prev.map(item => {
            if (item.product.id === productId) {
                const newQuantity = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const value = {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        cartTotal: total,
        cartCount: count,
        addItem,
        removeItem,
        updateQuantity,
        clearCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

// Hook personalizado para usar el carrito
export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe estar dentro de un CartProvider");
    }
    return context;
}
