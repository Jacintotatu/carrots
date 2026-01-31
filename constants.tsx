
import React from 'react';
import { 
  Utensils, 
  Wine, 
  Users, 
  Calendar, 
  MapPin, 
  Star,
  GlassWater
} from 'lucide-react';
import { RestaurantInfo, MenuLink, MenuItem, MenuCategory, GroupMenu, Promotion } from './types';

/**
 * ============================================================================
 * CONFIGURACIÓN DE IMÁGENES (Sustituye las URLs por las tuyas)
 * ============================================================================
 * Puedes usar:
 * 1. Rutas locales: "/images/platos/mi-foto.jpg" (si las subes a la carpeta public)
 * 2. URLs externas: "https://mi-servidor.com/foto.jpg"
 */
export const IMAGE_PATHS = {
  // Imagen principal de la cabecera (Recomendado: 2000x1200px)
  hero: "/images/principal.jpg",
  
  // Platos de la carta principal (Recomendado: 1200x800px)
  platos: {
    croquetas: "/images/platos/croqueta.jpg",
    ensaladilla: "https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&q=80&w=1200",
    carpaccio: "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&q=80&w=1200",
    zanahorias: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=1200",
    alcachofas: "https://images.unsplash.com/photo-1515471209610-dae1c92d8777?auto=format&fit=crop&q=80&w=1200",
    pluma: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&q=80&w=1200",
    lomo: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
    bacalao: "https://images.unsplash.com/photo-1534604973900-c41ab4c20f97?auto=format&fit=crop&q=80&w=1200",
    tataki: "https://images.unsplash.com/photo-1501595091296-3a9f4fe68206?auto=format&fit=crop&q=80&w=1200",
    tartaQueso: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=1200",
    torrija: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=1200",
  },
  
  // Carta de Vinos
  vinos: {
    juanGil: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200",
    muga: "https://images.unsplash.com/photo-1553361371-9bb22f73e7b1?auto=format&fit=crop&q=80&w=1200",
    marDeFrades: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=1200",
    josePariente: "https://images.unsplash.com/photo-1474724911195-45271374b335?auto=format&fit=crop&q=80&w=1200",
    chivite: "https://images.unsplash.com/photo-1558001373-7b93ee48fffb?auto=format&fit=crop&q=80&w=1200",
    gramona: "https://images.unsplash.com/photo-1594498653385-d5172b532c00?auto=format&fit=crop&q=80&w=1200",
  },
  
  // Experiencias de Maridaje
  pairings: {
    ocean: "https://images.unsplash.com/photo-1534080564607-317f65453295?auto=format&fit=crop&q=80&w=1200",
    earth: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&q=80&w=1200",
    sweet: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=1200",
  },
  
  // Menús de Grupos
  grupos: {
    esencia: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200",
    vanguardia: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200",
  },
  
  // Promociones Temporales
  promos: {
    tardeo: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    noche: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=1200",
    brunch: "https://images.unsplash.com/photo-1496044073248-4c3222839b43?auto=format&fit=crop&q=80&w=1200",
    afterwork: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=1200",
  }
};

/**
 * ============================================================================
 * 1. INFORMACIÓN BÁSICA DEL RESTAURANTE
 * ============================================================================
 */
export const RESTAURANT_DATA: RestaurantInfo = {
  name: "Carrots Área Reservada",
  address: "Alameda de San Antón, 26, Cartagena (Murcia)",
  phone: "+34 968 08 55 58",
  email: "carrotsareareservada@gmail.com",
  hours: {
    monday: "Cerrado",
    tueToSat: "8:30 – 00:00",
    sunday: "9:30 – 00:00"
  }
};

/**
 * ============================================================================
 * 2. CATEGORÍAS DE LA CARTA
 * ============================================================================
 */
export const FOOD_CATEGORIES: MenuCategory[] = [
  { id: 'entrantes', name: 'Entrantes' },
  { id: 'huerta', name: 'Nuestra Huerta' },
  { id: 'carnes', name: 'Carnes' },
  { id: 'pescados', name: 'Pescados' },
  { id: 'postres', name: 'Postres' }
];

export const WINE_CATEGORIES: MenuCategory[] = [
  { id: 'tintos', name: 'Vinos Tintos' },
  { id: 'blancos', name: 'Vinos Blancos' },
  { id: 'rosados', name: 'Vinos Rosados' },
  { id: 'espumosos', name: 'Espumosos / Cava' }
];

/**
 * ============================================================================
 * 3. PLATOS DE LA CARTA (COMIDA)
 * ============================================================================
 */
export const FULL_FOOD_ITEMS: MenuItem[] = [
  {
    id: 'f1',
    name: 'Croquetas de Jamón Ibérico',
    description: 'Bechamel de autor infusionada en hueso de jamón de bellota, con un rebozado panko ultrafino.',
    price: '14.50€',
    image: IMAGE_PATHS.platos.croquetas,
    category: 'entrantes',
    tags: ['Especialidad', 'Clásico']
  },
  {
    id: 'f2',
    name: 'Ensaladilla Carrots',
    description: 'Nuestra icónica ensaladilla con ventresca de atún seleccionada y hueva de maruca.',
    price: '9.00€',
    image: IMAGE_PATHS.platos.ensaladilla,
    category: 'entrantes',
    tags: ['Favorito']
  },
  {
    id: 'f3',
    name: 'Carpaccio de Gamba Roja',
    description: 'Finas láminas de gamba roja de la bahía, aceite de sus cabezas y pétalos de sal marina.',
    price: '19.50€',
    image: IMAGE_PATHS.platos.carpaccio,
    category: 'entrantes'
  },
  {
    id: 'f4',
    name: 'Zanahorias en Tres Texturas',
    description: 'Plato insignia: zanahoria orgánica confitada en miel, crema sedosa y tierra de huerta.',
    price: '12.00€',
    image: IMAGE_PATHS.platos.zanahorias,
    category: 'huerta',
    tags: ['Signature', 'Veggie']
  },
  {
    id: 'f5',
    name: 'Alcachofas a la Brasa',
    description: 'Corazones de alcachofas de la huerta sobre parmentier de boletus y lascas de foie.',
    price: '16.50€',
    image: IMAGE_PATHS.platos.alcachofas,
    category: 'huerta',
    tags: ['De Temporada']
  },
  {
    id: 'f6',
    name: 'Pluma Ibérica de Bellota',
    description: 'Pieza noble seleccionada a la brasa de encina con patatas baby al romero.',
    price: '22.00€',
    image: IMAGE_PATHS.platos.pluma,
    category: 'carnes',
    tags: ['Top Ventas']
  },
  {
    id: 'f7',
    name: 'Lomo Alto de Vaca Madurada',
    description: 'Corte premium con 45 días de maduración dry-aged, textura excepcional.',
    price: '28.00€',
    image: IMAGE_PATHS.platos.lomo,
    category: 'carnes'
  },
  {
    id: 'f8',
    name: 'Bacalao al Pil-Pil',
    description: 'Lomo confitado a fuego lento, emulsión de su gelatina y pisto murciano ahumado.',
    price: '21.00€',
    image: IMAGE_PATHS.platos.bacalao,
    category: 'pescados'
  },
  {
    id: 'f9',
    name: 'Tataki de Atún Rojo',
    description: 'Atún rojo del Mediterráneo sellado al momento con sésamo y emulsión de wasabi.',
    price: '24.50€',
    image: IMAGE_PATHS.platos.tataki,
    category: 'pescados'
  },
  {
    id: 'f10',
    name: 'Tarta de Queso Fluida',
    description: 'Mezcla secreta de quesos artesanos que resulta en un corazón fundente inolvidable.',
    price: '7.50€',
    image: IMAGE_PATHS.platos.tartaQueso,
    category: 'postres',
    tags: ['Artesanal']
  },
  {
    id: 'f11',
    name: 'Torrija de Brioche',
    description: 'Pan brioche artesano caramelizado con helado de turrón de Jijona.',
    price: '8.50€',
    image: IMAGE_PATHS.platos.torrija,
    category: 'postres'
  }
];

/**
 * ============================================================================
 * 4. CARTA DE VINOS
 * ============================================================================
 */
export const FULL_WINE_ITEMS: MenuItem[] = [
  {
    id: 'w1',
    name: 'Juan Gil Etiqueta Plata',
    description: 'D.O. Jumilla. Monastrell puro. Notas intensas de fruta negra y tostados.',
    price: '24.00€',
    image: IMAGE_PATHS.vinos.juanGil,
    category: 'tintos',
    tags: ['Tierra']
  },
  {
    id: 'w2',
    name: 'Muga Selección Especial',
    description: 'D.O.Ca. Rioja. Tempranillo equilibrado. Aromas de fruta madura y especias.',
    price: '38.00€',
    image: IMAGE_PATHS.vinos.muga,
    category: 'tintos',
    tags: ['Premium']
  },
  {
    id: 'w3',
    name: 'Mar de Frades',
    description: 'D.O. Rías Baixas. Albariño singular, fresco y con una marcada nota salina.',
    price: '26.00€',
    image: IMAGE_PATHS.vinos.marDeFrades,
    category: 'blancos'
  },
  {
    id: 'w4',
    name: 'José Pariente Verdejo',
    description: 'D.O. Rueda. Verdejo varietal de gran intensidad. Frescura y elegancia.',
    price: '21.00€',
    image: IMAGE_PATHS.vinos.josePariente,
    category: 'blancos',
    tags: ['Clásico']
  },
  {
    id: 'w5',
    name: 'Chivite Las Fincas',
    description: 'V.T. 3 Riberas. El rosado más sofisticado, de color pálido y aroma floral.',
    price: '22.50€',
    image: IMAGE_PATHS.vinos.chivite,
    category: 'rosados'
  },
  {
    id: 'w6',
    name: 'Gramona Imperial',
    description: 'Corpinnat. Espumoso de larga crianza con notas de pastelería.',
    price: '34.00€',
    image: IMAGE_PATHS.vinos.gramona,
    category: 'espumosos',
    tags: ['Excelencia']
  }
];

/**
 * ============================================================================
 * 5. MENÚS PARA GRUPOS
 * ============================================================================
 */
export const GROUP_MENUS: GroupMenu[] = [
  {
    id: 'gm1',
    name: 'Menú Esencia',
    price: '48€',
    description: 'Nuestros clásicos atemporales para compartir.',
    image: IMAGE_PATHS.grupos.esencia,
    sections: [
      {
        title: 'Para Compartir',
        items: ['Ensaladilla Carrots', 'Croquetas de Jamón', 'Zanahorias confitadas']
      },
      {
        title: 'Plato Principal',
        items: ['Bacalao al Pil-Pil', 'Pluma Ibérica']
      },
      {
        title: 'Postre',
        items: ['Tarta de Queso Fluida', 'Café']
      }
    ]
  },
  {
    id: 'gm2',
    name: 'Menú Vanguardia',
    price: '62€',
    description: 'Nuevas sensaciones y sabores sorprendentes.',
    image: IMAGE_PATHS.grupos.vanguardia,
    sections: [
      {
        title: 'Entrantes',
        items: ['Carpaccio de Gamba Roja', 'Alcachofa con foie']
      },
      {
        title: 'Segundos',
        items: ['Tataki de Atún Rojo', 'Lomo Alto de Vaca']
      },
      {
        title: 'Postre',
        items: ['Torrija de Brioche', 'Café y mignardises']
      }
    ]
  }
];

/**
 * ============================================================================
 * 6. PROMOCIONES ESPECIALES
 * ============================================================================
 */
export const PROMOTIONS: Promotion[] = [
  {
    id: 'p1',
    title: 'Tardeo en la Huerta',
    description: '3 tapas vegetales artesanas y 2 copas de vino blanco.',
    price: '25€ / pareja',
    image: IMAGE_PATHS.promos.tardeo,
    tag: 'Tardeo Exclusive',
    isVegetarian: true,
    validity: 'Martes a Jueves, 18:30 - 20:30'
  },
  {
    id: 'p2',
    title: 'Noche de Estrellas',
    description: 'Menú degustación nocturno de 5 pases con maridaje.',
    price: '75€ / persona',
    image: IMAGE_PATHS.promos.noche,
    tag: 'Gourmet Night',
    isVegetarian: false,
    validity: 'Viernes y Sábados'
  },
  {
    id: 'p3',
    title: 'Brunch del Domingo',
    description: 'Selección premium de la huerta, zumos y huevos ecológicos.',
    price: '22€ / persona',
    image: IMAGE_PATHS.promos.brunch,
    tag: 'Sunday Relax',
    isVegetarian: true,
    validity: 'Domingos de 10:00 a 12:30'
  },
  {
    id: 'p4',
    title: 'Afterwork Premium',
    description: 'Tabla de ibéricos y 2 cócteles de autor.',
    price: '30€ / pareja',
    image: IMAGE_PATHS.promos.afterwork,
    tag: 'Afterwork Lujo',
    isVegetarian: false,
    validity: 'Martes a Viernes desde las 19:00'
  }
];

/**
 * ============================================================================
 * 7. MENÚ DE MARIDAJE
 * ============================================================================
 */
export const PAIRING_ITEMS: MenuItem[] = [
  {
    id: 'pair1',
    name: 'Amanecer en la Bahía',
    description: 'Carpaccio de Gamba Roja de Denia armonizado con Mar de Frades Albariño. La salinidad del mar en perfecta simbiosis con la frescura atlántica.',
    price: '35€',
    image: IMAGE_PATHS.pairings.ocean,
    category: 'pairing',
    tags: ['Recomendado', 'Mar']
  },
  {
    id: 'pair2',
    name: 'Secretos de la Dehesa',
    description: 'Pluma Ibérica de bellota a la brasa maridada con Juan Gil Etiqueta Plata. La potencia de la Monastrell realza los matices ahumados y grasos de la carne noble.',
    price: '42€',
    image: IMAGE_PATHS.pairings.earth,
    category: 'pairing',
    tags: ['Favorito Sumiller', 'Tierra']
  },
  {
    id: 'pair3',
    name: 'Brindis de Autor',
    description: 'Tarta de Queso Fluida artesana acompañada de una copa de Gramona Imperial. El contraste entre la cremosidad del queso y la burbuja fina del Corpinnat es una experiencia sublime.',
    price: '22€',
    image: IMAGE_PATHS.pairings.sweet,
    category: 'pairing',
    tags: ['Postre', 'Celebración']
  }
];

/**
 * ============================================================================
 * 8. ENLACES DEL MENÚ DE NAVEGACIÓN
 * ============================================================================
 */
export const MENU_LINKS: MenuLink[] = [
  {
    label: "Carta de Comida",
    url: "food",
    type: 'primary',
    internal: true,
    icon: <Utensils className="w-5 h-5" />
  },
  {
    label: "Carta de Vinos",
    url: "wine",
    type: 'secondary',
    internal: true,
    icon: <Wine className="w-5 h-5" />
  },
  {
    label: "Menú Maridaje",
    url: "pairing",
    type: 'primary',
    internal: true,
    icon: <GlassWater className="w-5 h-5" />
  },
  {
    label: "Menús para Grupos",
    url: "groups",
    type: 'secondary',
    internal: true,
    icon: <Users className="w-5 h-5" />
  },
  {
    label: "Reservar Mesa",
    url: `tel:${RESTAURANT_DATA.phone.replace(/\s/g, '')}`,
    type: 'accent',
    icon: <Calendar className="w-5 h-5" />
  },
  {
    label: "Cómo Llegar",
    url: "https://www.google.com/maps/dir/?api=1&destination=Carrots+Area+Reservada+Cartagena",
    type: 'secondary',
    icon: <MapPin className="w-5 h-5" />
  },
  {
    label: "Promociones",
    url: "promotions",
    type: 'secondary',
    internal: true,
    icon: <Star className="w-5 h-5" />
  }
];