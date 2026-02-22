import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

export default function Vista_Pagina_Finalizar_Compra() {
    const { cartItems, cartTotal } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Finalizar Compra - Cerámica Antonio González";
    }, []);
    const [showOptionalAddress, setShowOptionalAddress] = useState(false);

    // Simulate shipping cost identical to Cart
    const shippingCost = cartItems.length > 0 ? 8.01 : 0;
    const orderTotal = cartTotal + shippingCost;

    useEffect(() => {
        // En un caso real se redirigiría con react-router useNavigate
        if (cartItems.length === 0) {
            window.location.href = '/tienda';
        }
    }, [cartItems]);

    return (
        <div className="min-h-screen bg-warm-white flex flex-col font-sans text-navy">
            <Header />

            <div className="relative w-full flex flex-col items-center overflow-hidden mb-12">
                {/* Background Image - Match cart page */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                    style={{ backgroundImage: `url('/assets/cart_tiles_hero_v3.png')` }}
                ></div>
                <div className="absolute inset-0 bg-navy/80 z-0 text-white"></div> {/* Overlay */}

                <div className="relative z-20 flex flex-col items-center w-full pt-56 pb-24 text-center px-6">
                    <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                        Finalizar compra
                    </h1>
                    {/* Decorative Divider */}
                    <div className="w-16 h-1 bg-linear-to-r from-gold to-gold-light mx-auto rounded-full mb-8"></div>
                    <p className="text-white/80 text-lg tracking-wide max-w-2xl mx-auto">
                        Introduzca sus datos para finalizar el pedido
                    </p>
                </div>
            </div>

            <main className="flex-1 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 pb-24">

                {/* Progress Steps Indicator */}
                <div className="flex items-end justify-between w-full max-w-4xl mx-auto px-4 sm:px-12 mb-12 sm:mb-16 relative">

                    {/* Step 1: Completed */}
                    <div className="flex flex-col items-center w-24 sm:w-40 shrink-0 relative z-10 group">
                        <span className="text-xs sm:text-lg font-serif text-navy/70 mb-2 sm:mb-4 text-center leading-tight whitespace-normal sm:whitespace-nowrap font-medium tracking-wide">Tu carrito</span>
                        <a href="/carrito" className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-navy text-white flex items-center justify-center font-serif text-base sm:text-2xl shadow-sm border-2 sm:border-[3px] border-terracotta transition-colors hover:bg-navy/90 hover:text-gold">
                            ✓
                        </a>
                    </div>

                    {/* Line 1-2 */}
                    <div className="flex-1 flex items-center -ml-2 sm:-ml-4 -mr-2 sm:-mr-4 mb-5 sm:mb-7 relative z-0">
                        <div className="h-[2px] sm:h-[3px] w-full bg-navy/10 rounded-full"></div>
                        {/* Progressing line: fully filled meaning step 1 is done */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[3px] sm:h-[4px] bg-terracotta rounded-full transition-all duration-1000 origin-left"></div>
                    </div>

                    {/* Step 2: Active */}
                    <div className="flex flex-col items-center w-24 sm:w-40 shrink-0 relative z-10">
                        <span className="text-xs sm:text-lg font-serif text-navy mb-2 sm:mb-4 text-center leading-tight whitespace-normal sm:whitespace-nowrap font-medium tracking-wide">Detalles de pago</span>
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-navy text-gold flex items-center justify-center font-serif text-base sm:text-xl shadow-lg border-2 sm:border-[3px] border-terracotta transition-transform hover:scale-105">
                            2
                        </div>
                    </div>

                    {/* Line 2-3 */}
                    <div className="flex-1 flex items-center -ml-2 sm:-ml-4 -mr-2 sm:-mr-4 mb-5 sm:mb-7 relative z-0">
                        <div className="h-[2px] sm:h-[3px] w-full bg-navy/10 rounded-full"></div>
                        {/* Progressing line: partial fill indicating activity inside step 2 */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[40%] h-[3px] sm:h-[4px] bg-terracotta rounded-full transition-all duration-1000 origin-left delay-500"></div>
                    </div>

                    {/* Step 3: Inactive */}
                    <div className="flex flex-col items-center w-24 sm:w-40 shrink-0 relative z-10">
                        <span className="text-xs sm:text-lg font-serif text-navy/40 mb-2 sm:mb-4 text-center leading-tight whitespace-normal sm:whitespace-nowrap tracking-wide">Pedido completado</span>
                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white text-navy/40 flex items-center justify-center font-serif text-base sm:text-xl shadow-sm border-2 border-navy/10 transition-colors">
                            3
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-6xl mx-auto mb-10 bg-white border-t-[3px] border-navy px-6 py-10 flex items-center shadow-xs">
                    <span className="text-navy mr-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                        </svg>
                    </span>
                    ¿Tienes un cupón? <a href="/carrito#cupon" className="ml-1 text-navy font-medium underline hover:text-terracotta transition-colors">Haz clic aquí para introducir tu código</a>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* Billing Form Section */}
                    <div className="flex-[1.5] w-full">
                        <h2 className="text-sm font-serif font-semibold tracking-wider mb-8 text-navy uppercase hidden">Detalles de Facturación</h2>

                        <form className="flex flex-col gap-6 text-sm bg-neutral-50/80 p-8 pt-10 border border-navy/5 shadow-sm rounded-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-navy/70">Nombre <span className="text-red-500">*</span></label>
                                    <input type="text" className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors placeholder-navy/20" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-navy/70">Apellidos <span className="text-red-500">*</span></label>
                                    <input type="text" className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors placeholder-navy/20" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-navy/70">Nombre de la empresa (opcional)</label>
                                <input type="text" className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-navy/70">NIF/CIF/NIE <span className="text-red-500">*</span></label>
                                <input type="text" placeholder="Número NIF/CIF/NIE" className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors placeholder-navy/30" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-navy/70">País / Región <span className="text-red-500">*</span></label>
                                <select className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors cursor-pointer text-navy font-medium appearance-none">
                                    <option>España</option>
                                    <option>Francia</option>
                                    <option>Portugal</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-navy/70">Dirección de la calle <span className="text-red-500">*</span></label>
                                <input type="text" placeholder="Nombre de la calle y número de la casa" className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors mb-2 placeholder-navy/30" />
                                <input type="text" placeholder="Apartamento, habitación, etc. (opcional)" className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors placeholder-navy/30" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-navy/70">Código postal / ZIP <span className="text-red-500">*</span></label>
                                <input type="text" className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-navy/70">Población <span className="text-red-500">*</span></label>
                                <input type="text" className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-navy/70">Provincia <span className="text-red-500">*</span></label>
                                <select className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors cursor-pointer text-navy font-medium appearance-none">
                                    <option>Sevilla</option>
                                    <option>Madrid</option>
                                    <option>Barcelona</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-navy/70">Teléfono <span className="text-red-500">*</span></label>
                                <input type="tel" className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-navy/70">Dirección de correo electrónico <span className="text-red-500">*</span></label>
                                <input type="email" className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors" />
                            </div>

                            <div className="mt-8 mb-4">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 accent-navy rounded-sm"
                                        checked={showOptionalAddress}
                                        onChange={(e) => setShowOptionalAddress(e.target.checked)}
                                    />
                                    <span className="text-navy text-base font-serif">¿Añadir una dirección opcional?</span>
                                </label>
                            </div>

                            {/* Renderizado condicional de la nueva dirección */}
                            {showOptionalAddress && (
                                <div className="flex flex-col gap-4 p-6 bg-white border border-navy/10 rounded-sm mb-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <h3 className="text-navy font-semibold text-sm uppercase tracking-wider mb-2">Dirección opcional</h3>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-navy/70">País / Región <span className="text-red-500">*</span></label>
                                        <select className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors cursor-pointer text-navy font-medium appearance-none">
                                            <option>España</option>
                                            <option>Francia</option>
                                            <option>Portugal</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="text-navy/70">Dirección de la calle <span className="text-red-500">*</span></label>
                                        <input type="text" placeholder="Nombre de la calle y número de la casa" className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors mb-2 placeholder-navy/30" />
                                        <input type="text" placeholder="Apartamento, habitación, etc. (opcional)" className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors placeholder-navy/30" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-navy/70">Código postal <span className="text-red-500">*</span></label>
                                            <input type="text" className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-navy/70">Población <span className="text-red-500">*</span></label>
                                            <input type="text" className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col gap-2">
                                <label className="text-navy/70">Notas del pedido (opcional)</label>
                                <textarea rows="4" placeholder="Notas sobre tu pedido, por ejemplo, notas especiales para la entrega." className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors resize-none placeholder-navy/30"></textarea>
                            </div>

                        </form>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="flex-1 w-full bg-neutral-50/80 p-8 pt-10 border border-navy/5 shadow-sm rounded-sm self-start sticky top-32">
                        <h2 className="font-serif text-sm tracking-widest text-navy mb-6 uppercase">TU PEDIDO</h2>

                        <div className="flex flex-col text-sm divide-y divide-navy/10">

                            {/* Products summary */}
                            <div className="flex flex-col gap-3 pb-6">
                                {cartItems.map((item) => (
                                    <div key={item.product.id} className="flex flex-col">
                                        <div className="flex justify-between items-start gap-4">
                                            <span className="text-navy/70">{item.product.name} × {item.quantity}</span>
                                        </div>
                                        <span className="font-medium text-navy text-right shrink-0 mt-1">{(item.product.rawPrice * item.quantity).toFixed(2)}€</span>
                                    </div>
                                ))}
                            </div>

                            {/* Subtotal */}
                            <div className="flex flex-col gap-1 py-4 text-xs">
                                <span className="text-navy/60">Subtotal</span>
                                <span className="font-medium text-navy text-sm">{cartTotal.toFixed(2)}€</span>
                            </div>

                            {/* Shipping */}
                            <div className="flex flex-col gap-1 py-4 text-xs">
                                <span className="text-navy/60">Envío</span>
                                <span className="text-navy">Penínsular: {shippingCost.toFixed(2)}€</span>
                            </div>

                            {/* Total */}
                            <div className="flex flex-col gap-1 py-6">
                                <span className="text-navy/60 text-xs">Total</span>
                                <span className="font-serif text-2xl font-semibold text-navy">{orderTotal.toFixed(2)}€</span>
                            </div>

                            {/* Payment Options */}
                            <div className="py-6 flex flex-col gap-4">
                                <div className="flex items-center gap-3 bg-white p-4 border border-navy/10 rounded-sm">
                                    <input type="radio" checked readOnly className="accent-navy mt-0.5" />
                                    <div className="flex flex-col gap-2 w-full">
                                        <div className="flex items-center gap-3 text-sm font-medium">
                                            <span>Servired/RedSys</span>
                                            {/* Mock Redsys badge */}
                                            <div className="px-2 py-0.5 bg-[#f3bc01] text-white text-[10px] rounded-[3px] font-bold">Redsys</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-navy/60 text-xs leading-relaxed px-1">
                                    Pagar con tarjeta de crédito a través de Servired/RedSys.
                                </div>
                            </div>
                        </div>

                        {/* Terms checkbox */}
                        <div className="mb-6 mt-2">
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 accent-navy rounded-sm mt-0.5 shrink-0" required />
                                <span className="text-navy/70 text-xs leading-tight">
                                    He leído y estoy de acuerdo con los <a href="#" className="underline font-medium hover:text-navy transition-colors">Términos y condiciones</a> de la web <span className="text-red-500">*</span>
                                </span>
                            </label>
                        </div>

                        <button
                            type="button"
                            className="w-full bg-navy text-white py-4 rounded-sm font-semibold tracking-widest text-xs hover:bg-navy/90 transition-colors shadow-lg cursor-pointer"
                            onClick={() => window.location.href = '/pedido-completado'}
                        >
                            REALIZAR EL PEDIDO
                        </button>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
