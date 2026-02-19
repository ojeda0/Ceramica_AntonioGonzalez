import { useState, useEffect } from 'react';
import heroImg from '../assets/images/hero-bg.png';

export default function Hero() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="inicio" className="relative w-full flex flex-col items-center overflow-hidden">
            {/* Background Image with parallax */}
            <div
                className="absolute inset-0 z-0"
                style={{ transform: `translateY(${offsetY * 0.3}px)` }}
            >
                <img
                    src={heroImg}
                    alt="Taller de cerámica artesanal sevillana"
                    className="w-full h-[120%] object-cover"
                />
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80 z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/40 to-transparent z-10" />

            {/* Content wrapper with fixed top and bottom padding */}
            <div className="relative z-20 flex flex-col items-center w-full gap-16 pt-[14rem] pb-20">
                {/* Top block: Logo + Desde Sevilla (Kept the horizontal tracking compensation) */}
                <div className="text-center px-6 sm:px-8 w-full max-w-4xl mx-auto translate-x-3 sm:translate-x-4">
                    {/* Logo name */}
                    <div className="mb-6">
                        <span className="font-serif font-bold tracking-[0.2em] text-white text-2xl sm:text-3xl md:text-4xl">
                            ANTONIO GONZÁLEZ
                        </span>
                        <br />
                        <span className="tracking-[0.3em] text-gold/80 uppercase font-light text-[10px] sm:text-xs md:text-sm">
                            Cerámica Artística Sevillana
                        </span>
                    </div>

                    {/* Decorative line */}
                    <div className="flex items-center justify-center gap-4">
                        <span className="block w-12 h-px bg-gold/60" />
                        <span className="text-gold text-xs tracking-[0.4em] uppercase font-light">Desde Sevilla</span>
                        <span className="block w-12 h-px bg-gold/60" />
                    </div>
                </div>

                {/* Bottom block: Title + description + buttons */}
                <div className="text-center px-6 sm:px-8 w-full max-w-4xl mx-auto">
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        Cerámica Artística
                        <br />
                        <span className="gradient-text">Pintada a Mano</span>
                    </h1>

                    <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Expertos en la fabricación y venta de cerámica artesanal sevillana.
                        Cada pieza es única, pintada con esmero y dedicación en nuestro taller.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#productos"
                            className="px-8 py-4 bg-gold hover:bg-gold-light text-navy font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1 text-sm sm:text-base"
                        >
                            Explorar Colecciones
                        </a>
                        <a
                            href="#nosotros"
                            className="px-8 py-4 border border-white/30 hover:border-gold text-white hover:text-gold rounded-full transition-all duration-300 font-medium text-sm sm:text-base"
                        >
                            Conócenos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
