import ScrollReveal from './ScrollReveal';
import catCenefas from '../assets/images/cat-cenefas.png';
import catRotulos from '../assets/images/cat-rotulos.png';
import catMotivos from '../assets/images/cat-motivos.png';
import catRegalos from '../assets/images/cat-regalos.png';
import aboutImg from '../assets/images/about-workshop.png';
import heroImg from '../assets/images/hero-bg.png';

const GALLERY_ITEMS = [
    { src: catCenefas, alt: 'Cenefa artesanal pintada a mano', title: 'Cenefa Artesanal', span: 'col-span-1 row-span-1' },
    { src: heroImg, alt: 'Taller cerámico sevillano', title: 'Nuestro Taller', span: 'col-span-1 row-span-2 sm:row-span-2' },
    { src: catMotivos, alt: 'Motivo de 4 azulejos decorativos', title: 'Motivo de 4', span: 'col-span-1 row-span-1' },
    { src: aboutImg, alt: 'Artesanía cerámica', title: 'Artesanía Viva', span: 'col-span-1 sm:col-span-2 row-span-1' },
    { src: catRotulos, alt: 'Rótulos cerámicos personalizados', title: 'Rótulos Personalizados', span: 'col-span-1 row-span-1' },
    { src: catRegalos, alt: 'Regalos de cerámica artesanal', title: 'Regalos Únicos', span: 'col-span-1 row-span-1' },
];

export default function Gallery() {
    return (
        <section id="galeria" className="py-28 sm:py-36 bg-warm-white overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
                {/* Section Header */}
                <ScrollReveal className="text-center mb-16">
                    <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Nuestro Trabajo</span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 mb-5">
                        Galería de Obras
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto rounded-full" />
                </ScrollReveal>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-4">
                    {GALLERY_ITEMS.map((item, i) => (
                        <ScrollReveal key={i} delay={(i % 4) + 1} className={item.span}>
                            <div className="group relative w-full h-full rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <h4 className="font-serif text-lg font-bold text-white">{item.title}</h4>
                                    <p className="text-white/70 text-sm mt-1">{item.alt}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* CTA */}
                <ScrollReveal className="text-center mt-12">
                    <a
                        href="https://ceramica-agonzalez.com/tienda/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-navy hover:bg-navy-light text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base"
                    >
                        Ver Todo el Catálogo
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </a>
                </ScrollReveal>
            </div>
        </section>
    );
}
