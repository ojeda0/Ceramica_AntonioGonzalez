import { useState, useEffect } from 'react';

const NAV_LINKS = [
    { label: 'INICIO', href: '#inicio' },
    { label: 'CENEFAS', href: 'https://ceramica-agonzalez.com/categoria-producto/cenefas/' },
    { label: 'REGALOS', href: 'https://ceramica-agonzalez.com/categoria-producto/regalos-decoracion-ceramica/' },
    { label: 'MOTIVOS DE 4', href: 'https://ceramica-agonzalez.com/categoria-producto/motivos-de-4/' },
    { label: 'RÓTULOS', href: 'https://ceramica-agonzalez.com/categoria-producto/rotulos/' },
    { label: 'VER TODO', href: 'https://ceramica-agonzalez.com/tienda/' },
    { label: 'CONTACTO', href: '#contacto' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartTotal, setCartTotal] = useState(0.00);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (menuOpen || cartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [menuOpen, cartOpen]);

    const isExternal = (href) => href.startsWith('http');

    const NavLinks = () => (
        <>
            {NAV_LINKS.map((link, i) => (
                <div key={link.label} className="flex items-center">
                    {i > 0 && (
                        <span className="text-white/30 mx-4 select-none">|</span>
                    )}
                    <a
                        href={link.href}
                        target={isExternal(link.href) ? '_blank' : undefined}
                        rel={isExternal(link.href) ? 'noopener noreferrer' : undefined}
                        className={`px-2 py-1 text-xs tracking-[0.15em] font-medium transition-colors duration-300 text-white/70 hover:text-gold`}
                    >
                        {link.label}
                    </a>
                </div>
            ))}
        </>
    );

    const CartButton = ({ className = '' }) => (
        <button
            onClick={() => setCartOpen(true)}
            className={`flex items-center gap-2.5 px-5 py-2 border border-gold/50 rounded text-gold hover:bg-gold hover:text-navy cursor-pointer transition-all duration-300 ${className}`}
        >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span className="text-xs tracking-wider font-semibold">{cartTotal.toFixed(2)}€</span>
        </button>
    );

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 bg-navy/80 backdrop-blur-sm transition-all duration-500">
                <div className={`w-full mx-auto px-6 sm:px-8 lg:px-10 transition-all duration-500 ${scrolled ? 'max-w-full lg:px-16' : 'max-w-7xl'}`}>

                    {/* ===== DEFAULT: Two-row layout (logo centered, nav below) ===== */}
                    <div className={`hidden lg:block transition-all duration-500 ${scrolled ? 'max-h-0 opacity-0 overflow-hidden py-0' : 'max-h-60 opacity-100 pt-8 pb-8'}`}>
                        {/* Centered Logo */}
                        <div className="flex items-center justify-center">
                            <a href="#inicio" className="flex flex-col items-center leading-tight group">
                                <span className="font-serif font-bold tracking-[0.2em] text-white group-hover:text-gold transition-all duration-300 text-xl sm:text-2xl">
                                    ANTONIO GONZÁLEZ
                                </span>
                                <span className="tracking-[0.3em] text-gold/80 uppercase font-light text-[10px] sm:text-xs">
                                    Cerámica Artística Sevillana
                                </span>
                            </a>
                        </div>

                        {/* Nav row centered, cart far right */}
                        <div className="flex items-center justify-center relative mt-7">
                            <nav className="flex items-center">
                                <NavLinks />
                            </nav>
                            <CartButton className="absolute -right-16" />
                        </div>
                    </div>

                    {/* ===== SCROLLED: Single-row layout (logo left, nav center, cart right) ===== */}
                    <div className={`hidden transition-all duration-500 ${scrolled ? 'lg:grid grid-cols-[auto_1fr_auto] items-center max-h-60 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden py-0'}`}>
                        {/* Logo — far left */}
                        <a href="#inicio" className="flex flex-col leading-tight group shrink-0">
                            <span className="font-serif font-bold tracking-[0.2em] text-white group-hover:text-gold transition-all duration-300 text-base sm:text-lg">
                                ANTONIO GONZÁLEZ
                            </span>
                            <span className="tracking-[0.3em] text-gold/80 uppercase font-light text-[9px] sm:text-[10px]">
                                Cerámica Artística Sevillana
                            </span>
                        </a>

                        {/* Nav links — centered in remaining space */}
                        <nav className="flex items-center justify-center whitespace-nowrap">
                            <NavLinks />
                        </nav>

                        {/* Cart — far right */}
                        <CartButton className="justify-self-end" />
                    </div>

                    {/* ===== MOBILE: always same layout ===== */}
                    <div className="lg:hidden py-4">
                        <div className="flex items-center justify-between">
                            <a href="#inicio" className="flex flex-col leading-tight group">
                                <span className="font-serif font-bold tracking-[0.2em] text-white group-hover:text-gold text-lg">
                                    ANTONIO GONZÁLEZ
                                </span>
                                <span className="tracking-[0.3em] text-gold/80 uppercase font-light text-[9px]">
                                    Cerámica Artística Sevillana
                                </span>
                            </a>
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="w-10 h-10 flex items-center justify-center text-white"
                                aria-label="Menú"
                            >
                                <div className="flex flex-col items-end gap-1.5">
                                    <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                                    <span className={`block h-0.5 bg-gold rounded-full transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
                                    <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`fixed inset-0 bg-navy/98 backdrop-blur-xl lg:hidden transition-all duration-500 flex flex-col items-center justify-center gap-5 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    style={{ top: 0, zIndex: -1 }}
                >
                    {NAV_LINKS.map((link, i) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={isExternal(link.href) ? '_blank' : undefined}
                            rel={isExternal(link.href) ? 'noopener noreferrer' : undefined}
                            onClick={() => setMenuOpen(false)}
                            className={`text-xl font-serif text-white hover:text-gold transition-all duration-500 tracking-wider ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        onClick={() => {
                            setMenuOpen(false);
                            setCartOpen(true);
                        }}
                        className={`mt-4 flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white hover:text-gold transition-all duration-500 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        style={{ transitionDelay: menuOpen ? `${NAV_LINKS.length * 60}ms` : '0ms' }}
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <span className="text-sm tracking-wider font-medium">{cartTotal.toFixed(2)}€</span>
                    </button>
                </div>
            </header>

            {/* Backdrop para Carrito Lateral */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-[60] ${cartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setCartOpen(false)}
            />

            {/* Sidebar Carrito Lateral */}
            <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-warm-white z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out ${cartOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>

                {/* Header del carrito */}
                <div className="flex items-center justify-between p-6 border-b border-navy/10">
                    <div className="flex items-center gap-3 text-navy">
                        <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <h2 className="font-serif text-lg font-medium">Carrito - {cartTotal.toFixed(2)}€</h2>
                    </div>
                    <button
                        onClick={() => setCartOpen(false)}
                        className="text-navy/50 hover:text-navy transition-colors"
                        aria-label="Cerrar carrito"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Contenido del carrito (vacío por ahora) */}
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-cream/30">
                    <svg className="w-16 h-16 text-navy/10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <p className="font-serif text-lg text-navy mb-6">Tu carrito está vacío</p>
                    <a
                        href="https://ceramica-agonzalez.com/tienda/"
                        onClick={() => setCartOpen(false)}
                        className="px-6 py-2.5 bg-transparent border border-navy/20 text-navy hover:border-gold hover:text-gold transition-colors text-sm uppercase tracking-wider font-medium"
                    >
                        Ver productos
                    </a>
                </div>

            </div>
        </>
    );
}
