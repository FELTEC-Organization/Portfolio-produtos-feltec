export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Portfolios' | 'Sites' | 'Apps' | 'Landing Pages' | 'IA';
  tags: string[];
  inStock: boolean;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Portfolio pessoal',
    description: 'Landing page personalizada com a sua marca, ideal para profissionais autônomos e para currículo',
    price: 499.90,
    category: 'Portfolios',
    tags: ['Portfolio', 'pessoal', 'profissional'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d' // laptop com design portfolio
  },
  {
    id: 'p2',
    name: 'Websites',
    description: 'Website profissional para sua empresa, com catálogo de produtos',
    price: 699.00,
    category: 'Sites',
    tags: ['Websites', 'Profissional', 'produtos'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop' // código rodando em tela de pc
  },
  {
    id: 'p3',
    name: 'Landing Pages',
    description: 'Landing page para comércios, catálogos, etc..',
    price: 2599.00,
    category: 'Landing Pages',
    tags: ['Landing Pages', 'Profissional'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  {
    id: 'p4',
    name: 'Chatbots',
    description: 'Chatbot feito especialmente para seu site',
    price: 149.90,
    category: 'IA',
    tags: ['chatbot', 'automação', 'ia'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1718241905462-56e7b9f722f3?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // ícone de IA/chatbot futurista
  },
];

export const CATEGORIES = ['IA', 'Landing Pages', 'Sites', 'Apps', 'Portfolios' ] as const;