import { useState } from 'react';
import { PRODUCTS, CATEGORY_LINKS, SUBCATEGORY_LINKS } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ShopGrid({ activeCategorySlug }) {
    const { addItem } = useCart();
    const [sortOrder, setSortOrder] = useState('predeterminado');
    // Local state for clicking pills while in the store
    const [localFilterSlug, setLocalFilterSlug] = useState(activeCategorySlug);

    // Use local filter if in "todos" store, otherwise strict active category
    const effectiveCategorySlug = activeCategorySlug === 'todos' ? localFilterSlug : activeCategorySlug;

    // Filter products
    let filteredProducts = PRODUCTS;
    if (activeCategorySlug === 'todos') {
        if (effectiveCategorySlug !== 'todos') {
            filteredProducts = PRODUCTS.filter(p => p.category === effectiveCategorySlug);
        }
    } else {
        // We are in a specific category page
        filteredProducts = PRODUCTS.filter(p => p.category === activeCategorySlug);
        if (localFilterSlug !== 'todos' && localFilterSlug !== activeCategorySlug) {
            filteredProducts = filteredProducts.filter(p => p.subCategory === localFilterSlug);
        }
    }

    // Sort products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === 'precio-asc') return a.rawPrice - b.rawPrice;
        if (sortOrder === 'precio-desc') return b.rawPrice - a.rawPrice;
        return 0; // Default or mock sorts
    });

    const getCategoryDetails = (slug) => {
        switch (slug) {
            case 'cenefas': return { subtitle: 'Cenefas', title: 'Nuestras Cenefas' };
            case 'rotulos': return { subtitle: 'Rótulos', title: 'Nuestros Rótulos' };
            case 'motivos-4': return { subtitle: 'Motivos de 4', title: 'Nuestros Motivos de 4' };
            case 'regalos': return { subtitle: 'Regalos', title: 'Nuestros Regalos' };
            case 'todos':
            default: return { subtitle: 'Tienda', title: 'Nuestra Tienda' };
        }
    };

    const { subtitle, title } = getCategoryDetails(activeCategorySlug);

    return (
        <div className="w-full">
            {/* Section Title */}
            <div className="mb-10 text-left">
                <span className="block text-terracotta text-sm tracking-[0.2em] uppercase font-bold mb-2">{subtitle}</span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
                    {title}
                </h2>
                <div className="w-16 h-1 bg-linear-to-r from-gold to-gold-light rounded-full" />
            </div>

            {/* Header controls: Filter Pills & Sort Dropdown */}
            <div className={`flex flex-col md:flex-row items-center gap-6 mb-12 ${activeCategorySlug === 'todos' ? 'justify-between' : 'justify-between'}`}>

                {/* Main Store Pills */}
                {activeCategorySlug === 'todos' && (
                    <div className="flex flex-wrap justify-start gap-3">
                        {CATEGORY_LINKS.map(link => {
                            const isActive = link.slug === localFilterSlug;
                            return (
                                <button
                                    key={link.slug}
                                    onClick={() => setLocalFilterSlug(link.slug)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer ${isActive
                                        ? 'bg-terracotta text-white border-terracotta shadow-md shadow-terracotta/20'
                                        : 'bg-transparent text-navy/70 border-navy/20 hover:border-terracotta hover:text-terracotta'
                                        }`}
                                >
                                    {link.label}
                                </button>
                            )
                        })}
                    </div>
                )}

                {/* Subcategory Pills for specific sections */}
                {activeCategorySlug !== 'todos' && SUBCATEGORY_LINKS[activeCategorySlug] && (
                    <div className="flex flex-wrap justify-start gap-3">
                        {SUBCATEGORY_LINKS[activeCategorySlug].map(link => {
                            // If localFilterSlug is the activeCategorySlug, it means "Todos" is active for this subcategory
                            const isActive = localFilterSlug === link.slug || (link.slug === 'todos' && localFilterSlug === activeCategorySlug);
                            return (
                                <button
                                    key={link.slug}
                                    onClick={() => setLocalFilterSlug(link.slug)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer ${isActive
                                        ? 'bg-terracotta text-white border-terracotta shadow-md shadow-terracotta/20'
                                        : 'bg-transparent text-navy/70 border-navy/20 hover:border-terracotta hover:text-terracotta'
                                        }`}
                                >
                                    {link.label}
                                </button>
                            )
                        })}
                    </div>
                )}

                {/* Sort Dropdown */}
                <div className="relative group w-full md:w-auto flex justify-center md:justify-end">
                    <div className="relative inline-block w-full sm:w-64">
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="w-full appearance-none bg-white border border-navy/20 rounded-md py-2.5 pl-4 pr-10 text-navy/80 text-sm focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta/50 cursor-pointer transition-colors shadow-sm"
                        >
                            <option value="predeterminado">Orden predeterminado</option>
                            <option value="popularidad">Ordenar por popularidad</option>
                            <option value="puntuacion">Ordenar por puntuación media</option>
                            <option value="ultimos">Ordenar por los últimos</option>
                            <option value="precio-asc">Ordenar por precio: bajo a alto</option>
                            <option value="precio-desc">Ordenar por precio: alto a bajo</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-navy/50 group-hover:text-terracotta transition-colors">
                            <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {sortedProducts.map(product => (
                    <div key={product.id} className="group flex flex-col bg-white rounded-xl overflow-hidden border border-navy/5 shadow-sm hover:shadow-xl transition-all duration-300">
                        {/* Image Container */}
                        <div className="relative w-full aspect-square overflow-hidden bg-navy/5">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Content Container */}
                        <div className="p-5 flex flex-col grow">
                            <h3 className="font-serif text-lg text-navy font-medium mb-2 group-hover:text-terracotta transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-navy/60 text-xs sm:text-sm mb-4 line-clamp-2 grow">
                                {product.description}
                            </p>

                            {/* Price & Cart row */}
                            <div className="flex justify-between items-end mt-4 pt-4 border-t border-navy/5">
                                <span className="text-terracotta font-semibold text-lg">
                                    {product.price}
                                </span>

                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addItem(product);
                                    }}
                                    className="w-10 h-10 rounded-full bg-warm-white text-terracotta flex items-center justify-center hover:bg-terracotta hover:text-white transition-colors duration-300 border border-terracotta/20 cursor-pointer"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {sortedProducts.length === 0 && (
                <div className="w-full py-20 text-center">
                    <p className="text-navy/50 text-lg font-serif">No se encontraron productos en esta categoría.</p>
                </div>
            )}
        </div>
    );
}
