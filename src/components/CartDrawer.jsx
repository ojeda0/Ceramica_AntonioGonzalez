import { useCart } from '../context/CartContext';

export default function CartDrawer() {
    const { isCartOpen, setIsCartOpen, cartItems, cartTotal, updateQuantity, removeItem, clearCart } = useCart();

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-60 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsCartOpen(false)}
            />

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-warm-white z-70 shadow-2xl transform transition-transform duration-500 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>

                {/* Header del carrito */}
                <div className="flex items-center justify-between p-6 border-b border-navy/10">
                    <div className="flex items-center gap-3 text-navy">
                        <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <h2 className="font-serif text-lg font-medium">Carrito - {cartTotal.toFixed(2)}€</h2>
                    </div>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="text-navy/50 hover:text-navy transition-colors cursor-pointer"
                        aria-label="Cerrar carrito"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Contenido del carrito */}
                {cartItems.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-cream/30">
                        <svg className="w-16 h-16 text-navy/10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <p className="font-serif text-lg text-navy mb-6">Tu carrito está vacío</p>
                        <a
                            href="/tienda"
                            onClick={() => setIsCartOpen(false)}
                            className="px-6 py-2.5 bg-transparent border border-navy/20 text-navy hover:border-gold hover:text-gold transition-colors text-sm uppercase tracking-wider font-medium"
                        >
                            Ver productos
                        </a>
                    </div>
                ) : (
                    <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 bg-cream/20">
                        {cartItems.map((item) => (
                            <div key={item.product.id} className="flex gap-4 items-center bg-white p-3 rounded-xl border border-navy/5 shadow-sm">
                                <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-navy/5">
                                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-navy font-semibold text-sm leading-tight mb-1">{item.product.name}</h3>
                                    <span className="text-terracotta text-sm block mb-2">{item.product.price}</span>

                                    {/* Controles de Cantidad */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center border border-navy/10 rounded-md overflow-hidden bg-warm-white">
                                            <button
                                                onClick={() => updateQuantity(item.product.id, -1)}
                                                className="w-8 h-8 flex items-center justify-center text-navy/70 hover:bg-navy/5 hover:text-terracotta transition-colors"
                                            >
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                                </svg>
                                            </button>
                                            <span className="w-8 text-center text-sm font-medium text-navy">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.product.id, 1)}
                                                className="w-8 h-8 flex items-center justify-center text-navy/70 hover:bg-navy/5 hover:text-terracotta transition-colors"
                                            >
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                </svg>
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.product.id)}
                                            className="text-navy/40 hover:text-red-500 transition-colors ml-auto p-2"
                                            title="Eliminar producto"
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Footer del carrito (Total y Checkout) - Solo se muestra si hay items */}
                {cartItems.length > 0 && (
                    <div className="border-t border-navy/10 p-6 bg-white shrink-0 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-navy/70 text-sm font-medium tracking-wide">Total a pagar:</span>
                            <span className="text-2xl font-serif text-navy font-bold">{cartTotal.toFixed(2)}€</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <a
                                href="/carrito"
                                onClick={() => setIsCartOpen(false)}
                                className="block w-full text-center bg-terracotta text-white py-4 rounded-md font-semibold tracking-widest text-sm hover:bg-terracotta/90 transition-colors shadow-lg shadow-terracotta/20 cursor-pointer"
                            >
                                PROCEDER AL PAGO
                            </a>
                            <button
                                onClick={clearCart}
                                className="w-full bg-transparent border border-navy/20 text-navy py-3 rounded-md font-medium tracking-wider text-xs hover:border-red-500 hover:text-red-500 transition-colors cursor-pointer"
                            >
                                VACIAR CARRITO
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
