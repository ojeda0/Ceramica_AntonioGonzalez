import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

export default function Vista_Pagina_Pedido_Completado() {
    const { cartItems: globalCartItems, cartTotal: globalCartTotal, clearCart } = useCart();

    // Captura congelada del pedido para poder mostrar el resumen aunque el carrito se vacíe
    const [cartItems] = useState(globalCartItems.length > 0 ? [...globalCartItems] : []);
    const [cartTotal] = useState(globalCartTotal);

    useEffect(() => {
        document.title = "Pedido Completado - Cerámica Antonio González";
        // Vaciar el carrito global de inmediato para resetear el número del Header a 0
        if (globalCartItems.length > 0) {
            clearCart();
        }
    }, [globalCartItems, clearCart]);

    const shippingCost = cartItems.length > 0 ? 8.01 : 0;
    const orderTotal = cartTotal + shippingCost;

    // Generar un número de pedido aleatorio para la demo
    const orderNumber = Math.floor(10000 + Math.random() * 90000);
    const currentDate = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="min-h-screen bg-warm-white flex flex-col font-sans text-navy">
            <Header />

            {/* Hero Section */}
            <div className="relative w-full flex flex-col items-center overflow-hidden mb-12">
                {/* Background Image - Match cart page */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                    style={{ backgroundImage: `url('/assets/cart_tiles_hero_v3.png')` }}
                ></div>
                <div className="absolute inset-0 bg-navy/80 z-0 text-white"></div> {/* Overlay */}

                <div className="relative z-20 flex flex-col items-center w-full pt-56 pb-24 text-center px-6">
                    <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                        Pedido completado
                    </h1>
                    {/* Decorative Divider */}
                    <div className="w-16 h-1 bg-linear-to-r from-gold to-gold-light mx-auto rounded-full mb-8"></div>
                    <p className="text-white/80 text-lg tracking-wide max-w-2xl mx-auto">
                        Gracias por confiar en nosotros
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="pb-16 md:pb-24 flex-1 pt-12 md:pt-16">

                {/* Progress Steps Indicator */}
                <div className="flex items-end justify-between w-full max-w-4xl mx-auto px-4 sm:px-12 mb-12 sm:mb-16 relative">

                    {/* Step 1: Completed */}
                    <div className="flex flex-col items-center w-24 sm:w-40 shrink-0 relative z-10 group">
                        <span className="text-xs sm:text-lg font-serif text-navy/70 mb-2 sm:mb-4 text-center leading-tight whitespace-normal sm:whitespace-nowrap font-medium tracking-wide">Tu carrito</span>
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-navy text-white flex items-center justify-center font-serif text-base sm:text-2xl shadow-sm border-2 sm:border-[3px] border-terracotta transition-colors">
                            ✓
                        </div>
                    </div>

                    {/* Line 1-2 */}
                    <div className="flex-1 flex items-center -ml-2 sm:-ml-4 -mr-2 sm:-mr-4 mb-5 sm:mb-7 relative z-0">
                        <div className="h-[2px] sm:h-[3px] w-full bg-navy/10 rounded-full"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[3px] sm:h-[4px] bg-terracotta rounded-full"></div>
                    </div>

                    {/* Step 2: Completed */}
                    <div className="flex flex-col items-center w-24 sm:w-40 shrink-0 relative z-10">
                        <span className="text-xs sm:text-lg font-serif text-navy/70 mb-2 sm:mb-4 text-center leading-tight whitespace-normal sm:whitespace-nowrap font-medium tracking-wide">Detalles de pago</span>
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-navy text-white flex items-center justify-center font-serif text-base sm:text-2xl shadow-sm border-2 sm:border-[3px] border-terracotta transition-colors">
                            ✓
                        </div>
                    </div>

                    {/* Line 2-3 */}
                    <div className="flex-1 flex items-center -ml-2 sm:-ml-4 -mr-2 sm:-mr-4 mb-5 sm:mb-7 relative z-0">
                        <div className="h-[2px] sm:h-[3px] w-full bg-navy/10 rounded-full"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[3px] sm:h-[4px] bg-terracotta rounded-full transition-all duration-1000 origin-left delay-300"></div>
                    </div>

                    {/* Step 3: Completed */}
                    <div className="flex flex-col items-center w-24 sm:w-40 shrink-0 relative z-10">
                        <span className="text-xs sm:text-lg font-serif text-navy mb-2 sm:mb-4 text-center leading-tight whitespace-normal sm:whitespace-nowrap tracking-wide font-medium">Pedido completado</span>
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-navy text-white flex items-center justify-center font-serif text-base sm:text-2xl shadow-lg border-2 sm:border-[3px] border-terracotta transition-colors">
                            ✓
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-4xl mx-auto mb-10 bg-[#e8f5e9] border-t-[3px] border-[#2e7d32] px-6 py-6 flex flex-col sm:flex-row items-center justify-between shadow-xs">
                    <div className="flex items-center">
                        <span className="text-[#2e7d32] mr-3">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <div>
                            <h2 className="text-[#2e7d32] font-semibold text-lg">Gracias. Tu pedido ha sido recibido.</h2>
                            <p className="text-[#2e7d32]/80 mt-1">Se ha enviado un correo de confirmación de forma automática con todos los detalles de tu compra.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* Order Details text */}
                    <div className="flex-[1.5] w-full">
                        <div className="bg-white p-6 md:p-8 border border-navy/10 rounded-sm shadow-sm mb-8 w-full max-w-full overflow-hidden">
                            <ul className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4 text-sm w-full">
                                <li className="flex flex-col gap-1 w-full md:w-auto md:border-r border-navy/10 md:pr-4">
                                    <span className="text-navy/50 uppercase tracking-wider text-xs">Número del pedido:</span>
                                    <strong className="font-semibold text-navy text-base truncate" title={orderNumber.toString()}>{orderNumber}</strong>
                                </li>
                                <li className="flex flex-col gap-1 w-full md:w-auto md:border-r border-navy/10 md:pr-4">
                                    <span className="text-navy/50 uppercase tracking-wider text-xs">Fecha:</span>
                                    <strong className="font-semibold text-navy text-base whitespace-nowrap">{currentDate}</strong>
                                </li>
                                <li className="flex flex-col gap-1 w-full md:w-auto md:border-r border-navy/10 md:pr-4">
                                    <span className="text-navy/50 uppercase tracking-wider text-xs">Total:</span>
                                    <strong className="font-semibold text-navy text-base whitespace-nowrap">{orderTotal.toFixed(2)}€</strong>
                                </li>
                                <li className="flex flex-col gap-1 w-full md:w-auto">
                                    <span className="text-navy/50 uppercase tracking-wider text-xs">Método de pago:</span>
                                    <strong className="font-semibold text-navy text-base max-w-[150px] sm:max-w-none text-wrap sm:whitespace-nowrap wrap-break-word">Servired/RedSys</strong>
                                </li>
                            </ul>
                        </div>

                        {/* Button for Desktop */}
                        <div className="hidden lg:flex justify-center mt-10">
                            <Link
                                to="/tienda"
                                onClick={() => window.scrollTo(0, 0)}
                                className="px-10 py-4 bg-terracotta text-white font-serif font-bold tracking-wide text-lg hover:bg-navy transition-colors shadow-md hover:shadow-lg rounded-[2px]"
                            >
                                Seguir comprando
                            </Link>
                        </div>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="flex-1 w-full bg-neutral-50/80 p-8 pt-10 border border-navy/5 shadow-sm rounded-sm self-start sticky top-32">
                        <h2 className="font-serif text-sm tracking-widest text-navy mb-6 uppercase">DETALLES DEL PEDIDO</h2>

                        <div className="flex flex-col text-sm divide-y divide-navy/10">

                            {/* Products summary */}
                            <div className="flex flex-col gap-3 pb-6">
                                {cartItems.map((item) => (
                                    <div key={item.product.id} className="flex flex-col border-b border-navy/5 pb-2 last:border-0 last:pb-0">
                                        <div className="flex justify-between items-start gap-4">
                                            <span className="text-navy/80 hover:text-navy transition-colors">{item.product.name} <strong className="font-medium">× {item.quantity}</strong></span>
                                            <span className="font-medium text-navy text-right shrink-0">{(item.product.rawPrice * item.quantity).toFixed(2)}€</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Subtotal */}
                            <div className="flex justify-between items-center py-4 text-sm">
                                <span className="text-navy/70 font-medium">Subtotal:</span>
                                <span className="font-medium text-navy">{cartTotal.toFixed(2)}€</span>
                            </div>

                            {/* Shipping */}
                            <div className="flex justify-between items-center py-4 text-sm">
                                <span className="text-navy/70 font-medium">Envío:</span>
                                <span className="text-navy">Penínsular: {shippingCost.toFixed(2)}€</span>
                            </div>

                            {/* Payment Method */}
                            <div className="flex justify-between items-center py-4 text-sm">
                                <span className="text-navy/70 font-medium">Método de pago:</span>
                                <span className="text-navy">Servired/RedSys</span>
                            </div>

                            {/* Total */}
                            <div className="flex justify-between items-center py-6">
                                <span className="text-navy font-semibold text-base">Total:</span>
                                <span className="font-serif text-2xl font-bold text-terracotta">{orderTotal.toFixed(2)}€</span>
                            </div>

                        </div>
                    </div>

                    {/* Button for Mobile (below Order Summary) */}
                    <div className="flex lg:hidden justify-center w-full mt-2 mb-8 relative z-50">
                        <Link
                            to="/tienda"
                            onClick={() => window.scrollTo(0, 0)}
                            className="w-full text-center py-4 bg-terracotta text-white font-serif font-bold tracking-wide text-lg hover:bg-navy transition-colors shadow-md rounded-[2px]"
                        >
                            Seguir comprando
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
