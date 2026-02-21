import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
    const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section id="contacto" className="pt-16 pb-16 sm:pt-20 sm:pb-20 bg-navy relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-terracotta rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
                {/* Section Header */}
                <ScrollReveal className="text-center mb-16">
                    <span className="block text-gold text-xl sm:text-2xl tracking-[0.2em] uppercase font-bold mb-2">Contacto</span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        ¿Tienes Alguna Consulta o
                        <br />
                        <span className="text-gold">Quieres un Encargo a Medida?</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto rounded-full mb-8" />
                    <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                        Escríbenos y nos pondremos en contacto contigo lo antes posible.
                        Estaremos encantados de ayudarte con tu proyecto de cerámica personalizada.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Left - Info */}
                    <ScrollReveal className="flex flex-col justify-between h-full py-2">
                        {/* Contact info cards */}
                        <div className="mb-8">
                            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                                ¿Tienes Alguna Duda?
                            </h3>
                            <p className="text-gold font-medium text-lg mb-6">Contáctanos de Forma Directa</p>
                            <div className="w-12 h-0.5 bg-white/20 rounded-full mb-6" />
                            <p className="text-white/60 text-base leading-relaxed max-w-md">
                                Puedes encontrarnos en los siguientes canales para
                                consultas directas, información sobre nuestras piezas o
                                cualquier pregunta que no requiera un proyecto a medida.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <a
                                href="mailto:info@ceramica-agonzalez.com"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-gold/20 text-gold rounded-xl flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-white/40 text-xs uppercase tracking-wider">Email</span>
                                    <span className="block text-white font-medium">info@ceramica-agonzalez.com</span>
                                </div>
                            </a>

                            <a
                                href="https://www.facebook.com/ceramica.artistica.sevillana/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-gold/20 text-gold rounded-xl flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-white/40 text-xs uppercase tracking-wider">Facebook</span>
                                    <span className="block text-white font-medium">Cerámica Artística Sevillana</span>
                                </div>
                            </a>

                            <a
                                href="https://ceramica-agonzalez.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-gold/20 text-gold rounded-xl flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="block text-white/40 text-xs uppercase tracking-wider">Web</span>
                                    <span className="block text-white font-medium">ceramica-agonzalez.com</span>
                                </div>
                            </a>
                        </div>
                    </ScrollReveal>

                    {/* Right - Form */}
                    <ScrollReveal delay={2}>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                                    <div className="w-16 h-16 bg-gold/20 text-gold rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                                    <p className="text-white/60">Nos pondremos en contacto contigo lo antes posible.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h3 className="font-serif text-xl font-bold text-white mb-2">Envíanos un Mensaje</h3>
                                    <p className="text-white/50 text-sm mb-6">Todos los campos marcados con * son obligatorios</p>

                                    <div>
                                        <label htmlFor="nombre" className="block text-white/70 text-sm font-medium mb-2">Nombre *</label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            required
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-300"
                                            placeholder="Tu nombre completo"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-300"
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="telefono" className="block text-white/70 text-sm font-medium mb-2">Teléfono</label>
                                            <input
                                                type="tel"
                                                id="telefono"
                                                name="telefono"
                                                value={formData.telefono}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-300"
                                                placeholder="+34 600 000 000"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="mensaje" className="block text-white/70 text-sm font-medium mb-2">Mensaje *</label>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            required
                                            rows={4}
                                            value={formData.mensaje}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all duration-300 resize-none"
                                            placeholder="Cuéntanos tu proyecto..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-gold hover:bg-gold-light text-navy font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gold/25 active:scale-[0.98]"
                                    >
                                        Enviar Mensaje
                                    </button>
                                </form>
                            )}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
