export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-dark pt-16 pb-8">
            <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16 mb-12">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-2 lg:pr-12">
                        <div className="w-fit flex flex-col items-center">
                            <a href="#inicio" className="flex flex-col items-center leading-tight group mb-6">
                                <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-white whitespace-nowrap group-hover:text-gold transition-colors duration-300">
                                    ANTONIO GONZÁLEZ
                                </span>
                                <span className="text-[10px] sm:text-xs tracking-[0.3em] text-gold/80 uppercase font-light mt-1">
                                    Cerámica Artística Sevillana
                                </span>
                            </a>
                            <div className="w-12 h-0.5 bg-white/20 rounded-full mb-10" />
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Expertos en la fabricación y venta de cerámica artesanal, pintada a mano con esmero desde nuestro taller en Sevilla.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-white font-bold text-lg mb-4">Navegación</h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'Inicio', href: '#inicio' },
                                { label: 'Productos', href: '#productos' },
                                { label: 'Nosotros', href: '#nosotros' },
                                { label: 'Galería', href: '#galeria' },
                                { label: 'Contacto', href: '#contacto' },
                            ].map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-white/50 hover:text-gold text-sm transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-gold transition-all duration-300 group-hover:w-3" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="font-serif text-white font-bold text-lg mb-4">Productos</h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'Cenefas', href: 'https://ceramica-agonzalez.com/categoria-producto/cenefas/' },
                                { label: 'Rótulos', href: 'https://ceramica-agonzalez.com/categoria-producto/rotulos/' },
                                { label: 'Motivos de 4', href: 'https://ceramica-agonzalez.com/categoria-producto/motivos-de-4/' },
                                { label: 'Regalos', href: 'https://ceramica-agonzalez.com/categoria-producto/regalos-decoracion-ceramica/' },
                                { label: 'Ver Todo', href: 'https://ceramica-agonzalez.com/tienda/' },
                            ].map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white/50 hover:text-gold text-sm transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-px bg-gold transition-all duration-300 group-hover:w-3" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-serif text-white font-bold text-lg mb-4">Contacto</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:info@ceramica-agonzalez.com"
                                    className="text-white/50 hover:text-gold text-sm transition-colors duration-300"
                                >
                                    info@ceramica-agonzalez.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 pt-2">
                                {/* Email */}
                                <a
                                    href="mailto:info@ceramica-agonzalez.com"
                                    className="w-10 h-10 bg-white/5 hover:bg-gold text-white/50 hover:text-navy rounded-lg flex items-center justify-center transition-all duration-300"
                                    aria-label="Email"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </a>

                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/ceramica.artistica.sevillana/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/5 hover:bg-gold text-white/50 hover:text-navy rounded-lg flex items-center justify-center transition-all duration-300"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>

                                {/* Web */}
                                <a
                                    href="https://ceramica-agonzalez.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white/5 hover:bg-gold text-white/50 hover:text-navy rounded-lg flex items-center justify-center transition-all duration-300"
                                    aria-label="Sitio Web"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-xs">
                        <p>© {currentYear} Cerámica Antonio González. Todos los derechos reservados.</p>
                        <div className="flex items-center gap-4">
                            <a href="https://ceramica-agonzalez.com/aviso-legal" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300">Aviso Legal</a>
                            <span>·</span>
                            <a href="https://ceramica-agonzalez.com/politica-de-privacidad/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300">Privacidad</a>
                            <span>·</span>
                            <a href="https://ceramica-agonzalez.com/politica-de-cookies/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-300">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
