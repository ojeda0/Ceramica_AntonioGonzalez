import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useEffect } from 'react';

export default function Vista_Pagina_Finalizar_Compra() {
    const { cartItems, cartTotal } = useCart();
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

            {/* Header spacer */}
            <div className="pt-32 pb-12 lg:pt-40 lg:pb-16 text-center px-4">
                <h1 className="font-serif text-3xl md:text-4xl text-navy mb-2 uppercase">FINALIZAR COMPRA</h1>
                <p className="text-navy/50 text-sm tracking-wide">Inicio <span className="mx-1">/</span> Finalizar compra</p>
            </div>

            <main className="flex-1 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 pb-24">

                {/* Progress Steps Indicator */}
                <div className="flex items-center justify-center mb-16 max-w-3xl mx-auto relative px-4">
                    {/* Line behind */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-navy/10 -z-10 translate-y-3"></div>
                    <div className="absolute top-1/2 left-0 w-2/3 h-px bg-navy -z-10 translate-y-3"></div>

                    {/* Step 1: Completed */}
                    <div className="flex-1 flex flex-col items-center bg-warm-white px-2">
                        <span className="text-sm font-serif mb-2 text-navy">Tu carrito</span>
                        <a href="/carrito" className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-serif shadow-sm hover:scale-110 transition-transform">
                            1
                        </a>
                    </div>
                    {/* Step 2: Active */}
                    <div className="flex-1 flex flex-col items-center bg-warm-white px-2">
                        <span className="text-sm font-serif mb-2 text-navy">Detalles de pago</span>
                        <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-serif shadow-sm">
                            2
                        </div>
                    </div>
                    {/* Step 3: Inactive */}
                    <div className="flex-1 flex flex-col items-center bg-warm-white px-2 text-center">
                        <span className="text-sm font-serif mb-2 text-navy/40">Pedido completado</span>
                        <div className="w-8 h-8 rounded-full bg-navy/10 text-navy/40 flex items-center justify-center font-serif">
                            3
                        </div>
                    </div>
                </div>

                <div className="mb-10 text-sm text-navy/70 border-t border-navy/10 pt-4">
                    ¿Tienes un cupón? <button className="text-navy font-medium underline cursor-pointer hover:text-terracotta transition-colors">Haz clic aquí para introducir tu código</button>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* Billing Form Section */}
                    <div className="flex-[1.5] w-full">
                        <h2 className="text-sm font-serif font-semibold tracking-wider mb-8 text-navy uppercase hidden">Detalles de Facturación</h2>

                        <form className="flex flex-col gap-6 text-sm">
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
                                    <input type="checkbox" className="w-4 h-4 accent-navy rounded-sm" />
                                    <span className="text-navy text-base font-serif">¿Enviar a una dirección diferente?</span>
                                </label>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-navy/70">Notas del pedido (opcional)</label>
                                <textarea rows="4" placeholder="Notas sobre tu pedido, por ejemplo, notas especiales para la entrega." className="border-b border-navy/30 bg-transparent py-2 focus:outline-none focus:border-navy transition-colors resize-none placeholder-navy/30"></textarea>
                            </div>

                        </form>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="flex-1 w-full bg-cream/20 border border-navy/5 p-8 self-start sticky top-32">
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
                            className="w-full bg-navy text-white py-4 rounded-sm font-semibold tracking-widest text-xs hover:bg-navy/90 transition-colors shadow-lg cursor-pointer"
                            onClick={() => alert("¡Pedido realizado con éxito!")}
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
