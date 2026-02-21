import ScrollReveal from './ScrollReveal';
import aboutImg from '../assets/images/about-workshop.png';

const FEATURES = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.764m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
        ),
        title: 'Pintadas a Mano',
        description: 'Cada pieza sale de nuestro taller con el toque personal de nuestros artesanos, siguiendo técnicas tradicionales sevillanas.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        title: 'Alta Calidad y Duración',
        description: 'Materiales de primera calidad y procesos de cocción que garantizan la máxima resistencia y durabilidad.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        ),
        title: 'Diseños Personalizados',
        description: 'Creamos piezas a medida según tus necesidades. Tu idea, nuestra artesanía — el resultado, una obra única.',
    },
];

export default function About() {
    return (
        <section id="nosotros" className="pt-16 pb-16 sm:pt-20 sm:pb-20 bg-cream overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
                {/* Section Header */}
                <ScrollReveal className="text-center mb-12">
                    <span className="block text-gold text-xl sm:text-2xl tracking-[0.2em] uppercase font-bold mb-2">Sobre Nosotros</span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
                        ¿Por Qué Nuestra
                        <br />
                        <span className="text-terracotta">Cerámica es Especial?</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto rounded-full" />
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Side */}
                    <ScrollReveal>
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={aboutImg}
                                    alt="Taller de cerámica Antonio González"
                                    className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 bg-gold text-navy p-5 rounded-2xl shadow-xl hidden sm:block">
                                <div className="text-center">
                                    <span className="block font-serif text-3xl font-bold">+30</span>
                                    <span className="block text-xs font-semibold tracking-wider uppercase mt-1">Años de<br />experiencia</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Text Side */}
                    <div>
                        <ScrollReveal>
                            <p className="text-navy/70 text-base sm:text-lg leading-relaxed mb-10">
                                En Cerámicas Antonio González somos expertos en la fabricación y venta de cerámica artesanal,
                                pintada a mano con esmero. Nos enorgullece ofrecer a nuestros clientes la posibilidad de
                                personalizar sus pedidos, garantizando la máxima calidad y durabilidad en cada pieza.
                                Embellecemos una amplia gama de espacios, desde cocinas y baños hasta hoteles y bares.
                            </p>
                        </ScrollReveal>

                        {/* Feature Cards */}
                        <div className="space-y-5">
                            {FEATURES.map((feature, i) => (
                                <ScrollReveal key={feature.title} delay={i + 1}>
                                    <div className="flex items-start gap-5 p-5 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-gold/20">
                                        <div className="flex-shrink-0 w-14 h-14 bg-gold/10 text-gold rounded-xl flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-serif text-lg font-bold text-navy mb-1">{feature.title}</h3>
                                            <p className="text-navy/60 text-sm leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
