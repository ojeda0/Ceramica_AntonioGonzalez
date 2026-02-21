import catCenefas from '../assets/images/cat-cenefas.png';
import catRotulos from '../assets/images/cat-rotulos.png';
import catMotivos from '../assets/images/cat-motivos.png';
import catRegalos from '../assets/images/cat-regalos.png';
import geoTile from '../assets/images/geo-tile.png';
import mudejarTile from '../assets/images/mudejar-tile.png';
import geoRotulo from '../assets/images/geo-rotulo.png';
import classicVase from '../assets/images/classic-vase.png';

// Scraped images
import img1 from '../assets/images/scraped/img_1.jpg';
import img2 from '../assets/images/scraped/img_2.jpg';
import img3 from '../assets/images/scraped/img_3.jpg';
import img4 from '../assets/images/scraped/img_4.jpg';
import img5 from '../assets/images/scraped/img_5.jpg';
import img6 from '../assets/images/scraped/img_6.jpg';
import img7 from '../assets/images/scraped/img_7.jpg';
import img8 from '../assets/images/scraped/img_8.jpg';
import img9 from '../assets/images/scraped/img_9.jpg';
import img10 from '../assets/images/scraped/img_10.jpg';
import img11 from '../assets/images/scraped/img_11.jpg';
import img12 from '../assets/images/scraped/img_12.jpg';
import img13 from '../assets/images/scraped/img_13.jpg';
import img14 from '../assets/images/scraped/img_14.jpg';
import img15 from '../assets/images/scraped/img_15.jpg';
import img16 from '../assets/images/scraped/img_16.jpg';

export const PRODUCTS = [
    // CENEFAS
    {
        id: 'cenefa-1',
        name: 'Cenefa CE001-02',
        description: 'Cenefa artesana pintada a mano con diseño clásico.',
        price: '12.50€ - 18.00€',
        rawPrice: 12.50,
        category: 'cenefas',
        subCategory: 'floral',
        image: catCenefas
    },
    {
        id: 'cenefa-2',
        name: 'Cenefa CE009-01',
        description: 'Cenefa sevillana con diseño repetitivo.',
        price: '8.00€ - 15.00€',
        rawPrice: 8.00,
        category: 'cenefas',
        subCategory: 'geometrico',
        image: img1
    },
    {
        id: 'cenefa-3',
        name: 'Cenefa CE010-01',
        description: 'Patrón clásico de la tradición andaluza.',
        price: '10.50€',
        rawPrice: 10.50,
        category: 'cenefas',
        subCategory: 'mudejar',
        image: img2
    },
    {
        id: 'cenefa-4',
        name: 'Cenefa CE014-02',
        description: 'Cenefa con tonos cálidos e intrincado floral.',
        price: '14.20€',
        rawPrice: 14.20,
        category: 'cenefas',
        subCategory: 'floral',
        image: img3
    },
    {
        id: 'cenefa-5',
        name: 'Cenefa CE024-4-02',
        description: 'Azulejo de tira geométrica.',
        price: '9.00€',
        rawPrice: 9.00,
        category: 'cenefas',
        subCategory: 'geometrico',
        image: geoTile
    },
    {
        id: 'cenefa-6',
        name: 'Cenefa CE048-01',
        description: 'Cenefa de estilo mudéjar en tonos verde y mostaza.',
        price: '11.00€',
        rawPrice: 11.00,
        category: 'cenefas',
        subCategory: 'mudejar',
        image: mudejarTile
    },

    // ROTULOS
    {
        id: 'rotulo-1',
        name: 'FLAMENCOS ASEOS (7 X 7)',
        description: 'Rótulo personalizado para indicación de aseos.',
        price: '18.50€',
        rawPrice: 18.50,
        category: 'rotulos',
        subCategory: 'personalizados',
        image: catRotulos
    },
    {
        id: 'rotulo-2',
        name: 'Letras relieve 11 cm',
        description: 'Letras individuales en relieve estilo sevillano clásico.',
        price: '14.00€',
        rawPrice: 14.00,
        category: 'rotulos',
        subCategory: 'clasico',
        image: img4
    },
    {
        id: 'rotulo-3',
        name: 'Letras relieve 15 cm',
        description: 'Letras grandes en relieve para entradas principales.',
        price: '19.50€',
        rawPrice: 19.50,
        category: 'rotulos',
        subCategory: 'clasico',
        image: img5
    },
    {
        id: 'rotulo-4',
        name: 'NUMEROS DE 15 X 15',
        description: 'Azulejo cerámico con número para fachada.',
        price: '22.00€',
        rawPrice: 22.00,
        category: 'rotulos',
        subCategory: 'numeros',
        image: geoRotulo
    },
    {
        id: 'rotulo-5',
        name: 'Números de relieve 15 cm',
        description: 'Número individual torneado a mano.',
        price: '16.50€',
        rawPrice: 16.50,
        category: 'rotulos',
        subCategory: 'numeros',
        image: img6
    },
    {
        id: 'rotulo-6',
        name: 'Cartel Personalizado Familia',
        description: 'Rótulo completo de bienvenida a un hogar.',
        price: '65.00€',
        rawPrice: 65.00,
        category: 'rotulos',
        subCategory: 'personalizados',
        image: img7
    },

    // MOTIVOS DE 4
    {
        id: 'motivo-1',
        name: 'Azulejo motivo de 4 Ref. M4-001-02',
        description: 'Composición de 4 azulejos conformando diseño floral infinito.',
        price: '30.00€',
        rawPrice: 30.00,
        category: 'motivos-4',
        subCategory: 'floral',
        image: catMotivos
    },
    {
        id: 'motivo-2',
        name: 'Azulejo motivo de 4 Ref. M4-002-02',
        description: 'Motivo de 4 formando una estrella de 8 puntas central.',
        price: '32.00€',
        rawPrice: 32.00,
        category: 'motivos-4',
        subCategory: 'estrellas',
        image: img8
    },
    {
        id: 'motivo-3',
        name: 'Azulejo motivo de 4 Ref. M4-004-02',
        description: 'Patrón geométrico simétrico repetitivo.',
        price: '28.00€',
        rawPrice: 28.00,
        category: 'motivos-4',
        subCategory: 'geometrico',
        image: img9
    },
    {
        id: 'motivo-4',
        name: 'Azulejo motivo de 4 Ref. M4-005-02',
        description: 'Variante floral con detalles en azul cobalto.',
        price: '31.50€',
        rawPrice: 31.50,
        category: 'motivos-4',
        subCategory: 'floral',
        image: img10
    },
    {
        id: 'motivo-5',
        name: 'Azulejo motivo de 4 Ref. M4-006-02',
        description: 'Motivo de 4 de rombos concéntricos.',
        price: '33.00€',
        rawPrice: 33.00,
        category: 'motivos-4',
        subCategory: 'geometrico',
        image: img11
    },
    {
        id: 'motivo-6',
        name: 'Azulejo motivo de 4 Ref. M4-009-02',
        description: 'Clásico diseño andalusí de estrella compleja.',
        price: '35.00€',
        rawPrice: 35.00,
        category: 'motivos-4',
        subCategory: 'estrellas',
        image: img12
    },

    // REGALOS
    {
        id: 'regalo-1',
        name: 'Jarrón Renacimiento',
        description: 'Jarrón decorativo de cerámica pintado a mano estilo renacentista.',
        price: '45.00€',
        rawPrice: 45.00,
        category: 'regalos',
        subCategory: 'jarrones',
        image: classicVase
    },
    {
        id: 'regalo-2',
        name: 'Plato Decorativo',
        description: 'Plato mural de 30cm con diseño floral tradicional y filo dorado.',
        price: '38.00€',
        rawPrice: 38.00,
        category: 'regalos',
        subCategory: 'platos',
        image: img13
    },
    {
        id: 'regalo-3',
        name: 'Taza Recuerdo Sevilla',
        description: 'Ideal souvenir con el logo de la ciudad pintado a mano.',
        price: '12.00€',
        rawPrice: 12.00,
        category: 'regalos',
        subCategory: 'souvenirs',
        image: img14
    },
    {
        id: 'regalo-4',
        name: 'Jarrón Cobalto Grande',
        description: 'Pieza de colección en azul tradicional.',
        price: '85.00€',
        rawPrice: 85.00,
        category: 'regalos',
        subCategory: 'jarrones',
        image: catRegalos
    },
    {
        id: 'regalo-5',
        name: 'Plato Mural 40cm',
        description: 'Gran plato pintado para ornamentación de pared.',
        price: '65.00€',
        rawPrice: 65.00,
        category: 'regalos',
        subCategory: 'platos',
        image: img15
    },
    {
        id: 'regalo-6',
        name: 'Campanilla Sevillana',
        description: 'Pequeño regalo artesanal en cerámica hueca.',
        price: '9.00€',
        rawPrice: 9.00,
        category: 'regalos',
        subCategory: 'souvenirs',
        image: img16
    }
];

export const CATEGORY_LINKS = [
    { label: 'Todos', slug: 'todos', href: '/tienda' },
    { label: 'Cenefas', slug: 'cenefas', href: '/categoria-producto/cenefas' },
    { label: 'Rótulos', slug: 'rotulos', href: '/categoria-producto/rotulos' },
    { label: 'Motivos de 4', slug: 'motivos-4', href: '/categoria-producto/motivos-de-4' },
    { label: 'Regalos', slug: 'regalos', href: '/categoria-producto/regalos' },
];

export const SUBCATEGORY_LINKS = {
    'cenefas': [
        { label: 'Todos', slug: 'todos' },
        { label: 'Estilo Floral', slug: 'floral' },
        { label: 'Geométrico', slug: 'geometrico' },
        { label: 'Mudéjar', slug: 'mudejar' },
    ],
    'rotulos': [
        { label: 'Todos', slug: 'todos' },
        { label: 'Números Viales', slug: 'numeros' },
        { label: 'Clásicos Sevillanos', slug: 'clasico' },
        { label: 'Personalizados', slug: 'personalizados' },
    ],
    'motivos-4': [
        { label: 'Todos', slug: 'todos' },
        { label: 'Florales', slug: 'floral' },
        { label: 'Geométricos', slug: 'geometrico' },
        { label: 'Estrellas', slug: 'estrellas' },
    ],
    'regalos': [
        { label: 'Todos', slug: 'todos' },
        { label: 'Jarrones', slug: 'jarrones' },
        { label: 'Platos', slug: 'platos' },
        { label: 'Souvenirs', slug: 'souvenirs' },
    ]
};
