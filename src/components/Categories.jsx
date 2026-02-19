import ScrollReveal from './ScrollReveal';
import catCenefas from '../assets/images/cat-cenefas.png';
import catRotulos from '../assets/images/cat-rotulos.png';
import catMotivos from '../assets/images/cat-motivos.png';
import catRegalos from '../assets/images/cat-regalos.png';

const CATEGORIES = [
    {
        title: 'Cenefas',
        subtitle: 'Artesanas',
        description: 'Cenefas artesanas pintadas a mano',
        image: catCenefas,
        link: 'https://ceramica-agonzalez.com/categoria-producto/cenefas/',
    },
    {
        title: 'Rótulos',
        subtitle: 'De Cerámica',
        description: 'Rótulos cerámicos personalizados',
        image: catRotulos,
        link: 'https://ceramica-agonzalez.com/categoria-producto/rotulos/',
    },
    {
        title: 'Motivos de 4',
        subtitle: 'Patrones Clásicos',
        description: 'Composiciones de azulejos',
        image: catMotivos,
        link: 'https://ceramica-agonzalez.com/categoria-producto/motivos-de-4/',
    },
    {
        title: 'Regalos',
        subtitle: 'De Cerámica',
        description: 'Piezas decorativas únicas',
        image: catRegalos,
        link: 'https://ceramica-agonzalez.com/categoria-producto/regalos-decoracion-ceramica/',
    },
];

export default function Categories() {
    return (
        <section id="productos" className="pt-16 pb-28 sm:pt-20 sm:pb-36 bg-warm-white overflow-hidden">
            <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
                {/* Section Header */}
                <ScrollReveal className="text-center mb-12">
                    <span className="text-gold text-xl sm:text-2xl tracking-[0.2em] uppercase font-bold">COLECCIONES</span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-2">
                        Nuestras Categorías
                    </h2>
                </ScrollReveal>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
                    {CATEGORIES.map((cat, i) => (
                        <ScrollReveal key={cat.title} delay={i + 1}>
                            <a
                                href={cat.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block relative rounded-md overflow-hidden aspect-[4/5] shadow-md hover:shadow-xl transition-all duration-500"
                            >
                                {/* Image */}
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="relative h-full flex flex-col justify-end p-5">
                                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                                        {cat.title}
                                    </h3>
                                    <p className="text-white/80 text-xs sm:text-sm font-light">
                                        {cat.description}
                                    </p>
                                </div>
                            </a>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
