import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

export default function Vista_Pagina_Carrito() {
    const { cartItems, cartTotal, updateQuantity, removeItem } = useCart();

    useEffect(() => {
        document.title = "Carrito - Cerámica Antonio González";
        if (window.location.hash === '#cupon') {
            const el = document.getElementById('cupon');
            if (el) {
                // Pequeño timeout para asegurar que la página ha renderizado y scrolleado un poco
                setTimeout(() => el.focus(), 500);
            }
        }
    }, []);

    // Configuración de envío simulada por ahora igual a la foto
    const shippingCost = cartItems.length > 0 ? 8.01 : 0;
    const orderTotal = cartTotal + shippingCost;

    return (
        <div className="min-h-screen bg-warm-white flex flex-col font-sans text-navy">
            <Header />

            {/* Espaciador para el header fijo ajustado al diseño global */}
            <div className="relative w-full flex flex-col items-center overflow-hidden mb-12">
                {/* Background Image - Added to match other sections */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                    style={{ backgroundImage: `url('/assets/cart_tiles_hero_v3.png')` }}
                ></div>
                <div className="absolute inset-0 bg-navy/80 z-0 text-white"></div> {/* Overlay */}

                <div className="relative z-20 flex flex-col items-center w-full pt-56 pb-24 text-center px-6">
                    <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                        Carrito
                    </h1>
                    {/* Decorative Divider */}
                    <div className="w-16 h-1 bg-linear-to-r from-gold to-gold-light mx-auto rounded-full mb-8"></div>
                    <p className="text-white/80 text-lg tracking-wide max-w-2xl mx-auto">
                        Previsualización de tu carrito
                    </p>
                </div>
            </div>

            <main className="flex-1 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 pb-24">

                {/* Progress Steps Indicator */}
                <div className="flex items-end justify-between w-full max-w-4xl mx-auto px-4 sm:px-12 mb-12 sm:mb-20 relative">

                    {/* Step 1: Active */}
                    <div className="flex flex-col items-center w-24 sm:w-40 shrink-0 relative z-10">
                        <span className="text-xs sm:text-lg font-serif text-navy mb-2 sm:mb-4 text-center leading-tight whitespace-normal sm:whitespace-nowrap font-medium tracking-wide">Tu carrito</span>
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-navy text-gold flex items-center justify-center font-serif text-base sm:text-xl shadow-lg border-2 sm:border-[3px] border-terracotta transition-transform hover:scale-105">
                            1
                        </div>
                    </div>

                    {/* Line 1-2 */}
                    <div className="flex-1 flex items-center -ml-2 sm:-ml-4 -mr-2 sm:-mr-4 mb-5 sm:mb-7 relative z-0">
                        <div className="h-[2px] sm:h-[3px] w-full bg-navy/10 rounded-full"></div>
                        {/* Progressing line: partial fill (50%) to indicate moving to step 2 */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1/2 h-[3px] sm:h-[4px] bg-terracotta rounded-full transition-all duration-1000 origin-left"></div>
                    </div>

                    {/* Step 2: Inactive */}
                    <div className="flex flex-col items-center w-24 sm:w-40 shrink-0 relative z-10">
                        <span className="text-xs sm:text-lg font-serif text-navy/40 mb-2 sm:mb-4 text-center leading-tight whitespace-normal sm:whitespace-nowrap tracking-wide">Detalles de pago</span>
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white text-navy/40 flex items-center justify-center font-serif text-base sm:text-xl shadow-sm border-2 border-navy/10 transition-colors">
                            2
                        </div>
                    </div>

                    {/* Line 2-3 */}
                    <div className="flex-1 flex items-center -ml-2 sm:-ml-4 -mr-2 sm:-mr-4 mb-5 sm:mb-7 relative z-0">
                        <div className="h-[2px] sm:h-[3px] w-full bg-navy/10 rounded-full"></div>
                    </div>

                    {/* Step 3: Inactive */}
                    <div className="flex flex-col items-center w-24 sm:w-40 shrink-0 relative z-10">
                        <span className="text-xs sm:text-lg font-serif text-navy/40 mb-2 sm:mb-4 text-center leading-tight whitespace-normal sm:whitespace-nowrap tracking-wide">Pedido completado</span>
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white text-navy/40 flex items-center justify-center font-serif text-base sm:text-xl shadow-sm border-2 border-navy/10 transition-colors">
                            3
                        </div>
                    </div>
                </div>

                {/* Conditional Content based on Cart Size */}
                {cartItems.length === 0 ? (
                    <div className="text-left mt-8">
                        <a
                            href="/tienda"
                            className="inline-block px-8 py-3 bg-navy text-white text-xs tracking-widest font-semibold hover:bg-navy/90 transition-colors cursor-pointer rounded-sm"
                        >
                            VOLVER A LA TIENDA
                        </a>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                        {/* Cart Table Area */}
                        <div className="flex-1 w-full">

                            {/* Desktop Table Header */}
                            <div className="hidden md:grid grid-cols-[3fr_1fr_1fr_1fr] gap-4 py-4 border-b border-navy/10 text-xs text-navy/60 font-medium">
                                <div>Producto</div>
                                <div className="text-center">Precio</div>
                                <div className="text-center">Cantidad</div>
                                <div className="text-right">Subtotal</div>
                            </div>

                            {/* Cart Items List */}
                            <div className="flex flex-col divide-y divide-navy/10">
                                {cartItems.map((item) => (
                                    <div key={item.product.id} className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_1fr] gap-4 py-6 items-center">

                                        {/* Producto */}
                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={() => removeItem(item.product.id)}
                                                className="text-navy/30 hover:text-red-500 transition-colors p-1"
                                                title="Eliminar artículo"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                            <div className="w-16 h-16 bg-white border border-navy/5 shrink-0 flex items-center justify-center">
                                                <img src={item.product.image} alt={item.product.name} className="max-w-full max-h-full object-cover" />
                                            </div>
                                            <h3 className="font-serif text-sm md:text-base font-medium">{item.product.name}</h3>
                                        </div>

                                        {/* Precio (Desktop only styling block) */}
                                        <div className="hidden md:block text-center text-sm md:text-base">
                                            {item.product.price}
                                        </div>

                                        {/* Cantidad */}
                                        <div className="flex justify-between md:justify-center items-center">
                                            <span className="md:hidden text-xs text-navy/50">Cantidad:</span>
                                            <div className="flex items-center border border-navy/20 px-2 py-1 bg-transparent">
                                                <button
                                                    onClick={() => updateQuantity(item.product.id, -1)}
                                                    className="w-6 h-6 flex items-center justify-center text-navy/50 hover:text-navy cursor-pointer"
                                                >
                                                    -
                                                </button>
                                                <span className="w-8 text-center text-sm">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.product.id, 1)}
                                                    className="w-6 h-6 flex items-center justify-center text-navy/50 hover:text-navy cursor-pointer"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        {/* Subtotal */}
                                        <div className="flex justify-between md:justify-end items-center text-sm md:text-base mt-2 md:mt-0">
                                            <span className="md:hidden text-xs text-navy/50">Subtotal:</span>
                                            <span className="font-semibold text-terracotta md:text-navy">
                                                {(item.product.rawPrice * item.quantity).toFixed(2)}€
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Coupons and Update Row */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8 pt-8 border-t border-navy/10">
                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                    <input
                                        id="cupon"
                                        type="text"
                                        placeholder="Código de cupón"
                                        className="border border-navy/20 px-4 py-3 text-sm focus:outline-none focus:border-navy bg-transparent w-full sm:w-48 placeholder-navy/40"
                                    />
                                    <button className="px-6 py-3 bg-navy text-white text-xs tracking-widest font-semibold hover:bg-navy/90 transition-colors w-full sm:w-auto rounded-sm cursor-pointer whitespace-nowrap">
                                        APLICAR CUPÓN
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Totals Sidebar */}
                        <div className="w-full lg:w-[400px] bg-cream/10 border border-navy/5 p-8 self-start">
                            <h2 className="font-serif text-sm tracking-widest text-navy mb-8 uppercase">Totales del carrito</h2>

                            <div className="flex flex-col gap-6 text-sm divide-y divide-navy/10">
                                {/* Subtotal row */}
                                <div className="flex flex-col gap-1 pb-4">
                                    <span className="text-navy/60 mb-1">Subtotal</span>
                                    <span className="font-medium text-navy">{cartTotal.toFixed(2)}€</span>
                                </div>

                                {/* Shipping row */}
                                <div className="flex flex-col gap-2 pt-6 pb-4">
                                    <span className="text-navy/60 mb-1">Envío</span>
                                    <div className="text-navy text-sm">
                                        Penínsular: <span className="font-medium">{shippingCost.toFixed(2)}€</span>
                                    </div>
                                    <div className="text-navy/60 text-sm">
                                        Enviar a Sevilla.
                                    </div>
                                    <button className="text-left text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-navy transition-colors mt-2 text-xs cursor-pointer">
                                        Cambiar dirección
                                    </button>
                                </div>

                                {/* Total row */}
                                <div className="flex flex-col gap-1 pt-6 pb-8">
                                    <span className="text-navy/60 mb-1 leading-tight">Total</span>
                                    <span className="font-serif text-2xl font-semibold text-navy">
                                        {orderTotal.toFixed(2)}€
                                    </span>
                                </div>
                            </div>

                            <a
                                href="/finalizar-comprar"
                                className="block w-full text-center bg-navy text-white py-4 rounded-sm font-semibold tracking-widest text-xs hover:bg-navy/90 transition-colors cursor-pointer"
                            >
                                FINALIZAR COMPRA
                            </a>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
