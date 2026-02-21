import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

export default function Vista_Pagina_Carrito() {
    const { cartItems, cartTotal, updateQuantity, removeItem } = useCart();

    // Configuración de envío simulada por ahora igual a la foto
    const shippingCost = cartItems.length > 0 ? 8.01 : 0;
    const orderTotal = cartTotal + shippingCost;

    return (
        <div className="min-h-screen bg-warm-white flex flex-col font-sans text-navy">
            <Header />

            {/* Espaciador para el header fijo */}
            <div className="pt-32 pb-12 lg:pt-40 lg:pb-16 text-center px-4">
                <h1 className="font-serif text-3xl md:text-4xl text-navy mb-2">CARRITO</h1>
                <p className="text-navy/50 text-sm tracking-wide">Inicio <span className="mx-1">/</span> Carrito</p>
            </div>

            <main className="flex-1 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 pb-24">

                {/* Progress Steps Indicator */}
                <div className="flex items-center justify-center mb-20 max-w-3xl mx-auto relative px-4">
                    {/* Line behind */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-navy/10 -z-10 translate-y-3"></div>
                    <div className="absolute top-1/2 left-0 w-1/3 h-px bg-navy -z-10 translate-y-3"></div>

                    {/* Step 1: Active */}
                    <div className="flex-1 flex flex-col items-center bg-warm-white px-2">
                        <span className="text-sm font-serif mb-2 text-navy">Tu carrito</span>
                        <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-serif shadow-sm">
                            1
                        </div>
                    </div>
                    {/* Step 2: Inactive */}
                    <div className="flex-1 flex flex-col items-center bg-warm-white px-2">
                        <span className="text-sm font-serif mb-2 text-navy/40">Detalles de pago</span>
                        <div className="w-8 h-8 rounded-full bg-navy/10 text-navy/40 flex items-center justify-center font-serif">
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
                                        type="text"
                                        placeholder="Código de cupón"
                                        className="border border-navy/20 px-4 py-3 text-sm focus:outline-none focus:border-navy bg-transparent w-full sm:w-48 placeholder-navy/40"
                                    />
                                    <button className="px-6 py-3 bg-navy text-white text-xs tracking-widest font-semibold hover:bg-navy/90 transition-colors w-full sm:w-auto rounded-sm cursor-pointer whitespace-nowrap">
                                        APLICAR CUPÓN
                                    </button>
                                </div>
                                <button className="flex items-center gap-2 text-sm text-navy/60 hover:text-navy transition-colors cursor-pointer px-4 py-3 whitespace-nowrap">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                    </svg>
                                    Actualizar carrito
                                </button>
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
