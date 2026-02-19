export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-dark pt-16 pb-8">
            <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <a href="#inicio" className="flex flex-col leading-tight group inline-block mb-4">
                            <span className="font-serif text-xl font-bold tracking-[0.15em] text-white group-hover:text-gold transition-colors duration-300">
                                ANTONIO GONZÁLEZ
                            </span>
                            <span className="text-[10px] tracking-[0.25em] text-gold/80 uppercase font-light">
                                Cerámica Artística Sevillana
                            </span>
                        </a>
                        <p className="text-white/50 text-sm leading-relaxed mt-3">
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
