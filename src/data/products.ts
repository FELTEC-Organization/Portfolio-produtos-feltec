export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Cadeiras' | 'Mesas' | 'Sofás' | 'Decoração' | 'Eletrônicos';
  tags: string[];
  inStock: boolean;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Cadeira Ergo Pro',
    description: 'Cadeira ergonômica premium para longas jornadas de trabalho. Conforto garantido.',
    price: 499.90,
    category: 'Cadeiras',
    tags: ['ergonômica', 'home office', 'premium'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80'
  },
  {
    id: 'p2',
    name: 'Mesa Compact Oak',
    description: 'Mesa compacta em carvalho maciço, perfeita para espaços menores sem abrir mão do estilo.',
    price: 699.00,
    category: 'Mesas',
    tags: ['compacta', 'madeira', 'carvalho'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=800&q=80'
  },
  {
    id: 'p3',
    name: 'Sofá Cloud 3 Lugares',
    description: 'Sofá de design minimalista com maciez incomparável. Tecido premium importado.',
    price: 2599.00,
    category: 'Sofás',
    tags: ['minimalista', '3 lugares', 'premium'],
    inStock: false,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80'
  },
  {
    id: 'p4',
    name: 'Vaso Cerâmico Terra',
    description: 'Vaso artesanal em cerâmica com acabamento rústico. Peça única feita à mão.',
    price: 149.90,
    category: 'Decoração',
    tags: ['cerâmica', 'rústico', 'artesanal'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80'
  },
  {
    id: 'p5',
    name: 'Luminária Desk LED',
    description: 'Luminária de mesa com tecnologia LED e carregamento USB. Design moderno e funcional.',
    price: 229.00,
    category: 'Eletrônicos',
    tags: ['LED', 'USB', 'moderno'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'
  },
  {
    id: 'p6',
    name: 'Cadeira Barcelona Réplica',
    description: 'Réplica fiel da icônica Barcelona Chair. Couro legítimo e estrutura cromada.',
    price: 1299.00,
    category: 'Cadeiras',
    tags: ['clássico', 'couro', 'designer'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80'
  },
  {
    id: 'p7',
    name: 'Mesa Jantar Extensível',
    description: 'Mesa de jantar em madeira nobre com sistema extensível. Comporta até 8 pessoas.',
    price: 1899.00,
    category: 'Mesas',
    tags: ['extensível', 'jantar', 'madeira nobre'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80'
  },
  {
    id: 'p8',
    name: 'Sofá Chesterfield 2L',
    description: 'Sofá clássico Chesterfield em couro envelhecido. Elegância atemporal.',
    price: 3299.00,
    category: 'Sofás',
    tags: ['chesterfield', 'couro', 'clássico'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80'
  },
  {
    id: 'p9',
    name: 'Espelho Veneziano Grande',
    description: 'Espelho decorativo estilo veneziano com moldura trabalhada em detalhes.',
    price: 899.00,
    category: 'Decoração',
    tags: ['espelho', 'veneziano', 'decorativo'],
    inStock: false,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80'
  },
  {
    id: 'p10',
    name: 'Smart TV 55" 4K',
    description: 'Smart TV 4K HDR com tecnologia OLED. Experiência cinematográfica em casa.',
    price: 2799.00,
    category: 'Eletrônicos',
    tags: ['smart tv', '4K', 'OLED'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80'
  },
  {
    id: 'p11',
    name: 'Poltrona Egg Amarela',
    description: 'Poltrona icônica Egg em tecido amarelo vibrante. Conforto e design em perfeita harmonia.',
    price: 1599.00,
    category: 'Cadeiras',
    tags: ['poltrona', 'design', 'colorido'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80'
  },
  {
    id: 'p12',
    name: 'Mesa Centro Vidro',
    description: 'Mesa de centro em vidro temperado com base em aço inox. Leveza e sofisticação.',
    price: 799.00,
    category: 'Mesas',
    tags: ['vidro', 'centro', 'moderno'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=800&q=80'
  }
];

export const CATEGORIES = ['Cadeiras', 'Mesas', 'Sofás', 'Decoração', 'Eletrônicos'] as const;