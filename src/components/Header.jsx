import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const NAV_LINKS = [
    { label: 'INICIO', href: '/' },
    { label: 'CENEFAS', href: '/categoria-producto/cenefas' },
    { label: 'REGALOS', href: '/categoria-producto/regalos' },
    { label: 'MOTIVOS DE 4', href: '/categoria-producto/motivos-de-4' },
    { label: 'RÓTULOS', href: '/categoria-producto/rotulos' },
    { label: 'VER TODO', href: '/tienda' },
    { label: 'CONTACTO', href: '/#contacto' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Usar el contexto global
    const { cartTotal, isCartOpen, setIsCartOpen } = useCart();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (menuOpen || isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [menuOpen, isCartOpen]);

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
            onClick={() => setIsCartOpen(true)}
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

                    {/* Container for Desktop Headers (Absolute positioning for cross-fade) */}
                    <div className="hidden lg:block relative transition-all duration-500 ease-in-out" style={{ height: scrolled ? '72px' : '150px' }}>

                        {/* ===== DEFAULT: Two-row layout (logo centered, nav below) ===== */}
                        <div
                            className={`absolute inset-0 w-full flex flex-col items-center justify-center transition-all duration-500 ease-in-out pt-6
                            ${scrolled ? 'opacity-0 invisible scale-95' : 'opacity-100 visible scale-100'}
                        `}
                        >
                            {/* Centered Logo */}
                            <a href="/" className="flex flex-col items-center leading-tight group mb-6">
                                <span className="font-serif font-bold tracking-[0.2em] text-white group-hover:text-gold transition-all duration-300 text-xl sm:text-2xl">
                                    ANTONIO GONZÁLEZ
                                </span>
                                <span className="tracking-[0.3em] text-gold/80 uppercase font-light text-[10px] sm:text-xs mt-1">
                                    Cerámica Artística Sevillana
                                </span>
                            </a>

                            {/* Nav row centered, cart far right */}
                            <div className="flex items-center justify-center w-full relative">
                                <nav className="flex items-center">
                                    <NavLinks />
                                </nav>
                                <CartButton className="absolute right-0" />
                            </div>
                        </div>

                        {/* ===== SCROLLED: Single-row layout (logo left, nav center, cart right) ===== */}
                        <div
                            className={`absolute inset-0 w-full grid grid-cols-[auto_1fr_auto] items-center transition-all duration-500 ease-in-out
                            ${scrolled ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}
                        `}
                        >
                            {/* Logo — far left */}
                            <a href="/" className="flex flex-col leading-tight group shrink-0">
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
                    </div>

                    {/* ===== MOBILE: always same layout ===== */}
                    <div className="lg:hidden py-4">
                        <div className="flex items-center justify-between">
                            <a href="/" className="flex flex-col leading-tight group">
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
                            setIsCartOpen(true);
                        }}
                        className={`mt-4 flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white hover:text-gold transition-all duration-500 cursor-pointer ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        style={{ transitionDelay: menuOpen ? `${NAV_LINKS.length * 60}ms` : '0ms' }}
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <span className="text-sm tracking-wider font-medium">{cartTotal.toFixed(2)}€</span>
                    </button>
                </div>
            </header>
        </>
    );
}
