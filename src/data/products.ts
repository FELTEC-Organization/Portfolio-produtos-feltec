export type Product = {
  id: string;
  name: string;
  description: string;
  category: 'Portfolios' | 'Sites' | 'Apps' | 'Landing Pages' | 'IA' | 'Ecommerce';
  tags: string[];
  inStock: boolean;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Portfolio',
    description: 'Landing page personalizada com a sua marca, ideal para profissionais autônomos e para currículo',
    category: 'Portfolios',
    tags: ['Portfolio', 'pessoal', 'profissional'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d' // laptop com design portfolio
  },
  {
    id: 'p2',
    name: 'Websites',
    description: 'Website profissional para sua empresa, com catálogo de produtos',
    category: 'Sites',
    tags: ['Websites', 'Profissional', 'produtos'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop' // código rodando em tela de pc
  },
  {
    id: 'p3',
    name: 'Landing Pages',
    description: 'Landing page para comércios, catálogos, etc..',
    category: 'Landing Pages',
    tags: ['Landing Pages', 'Profissional'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  {
    id: 'p4',
    name: 'Chatbots',
    description: 'Chatbot feito especialmente para seu site',
    category: 'IA',
    tags: ['chatbot', 'automação', 'ia'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1718241905462-56e7b9f722f3?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // ícone de IA/chatbot futurista
  },
    {
    id: 'p5',
    name: 'E-commerce',
    description: 'E-commerce pensado para seu negócio',
    category: 'Ecommerce',
    tags: ['Ecommerce', 'profissional', 'produto'],
    inStock: true,
    image: ''
  },
    {
    id: 'p6',
    name: 'Portfolio premium',
    description: 'Portfolio aprimorado, com adicionais como: tema escuro, intenacionalização e carrousel de serviços',
    category: 'IA',
    tags: ['profissional', 'pessoal', 'Portfolio'],
    inStock: true,
    image: '' 
  },
    {
    id: 'p7',
    name: 'Portfolio com aba produtos',
    description: 'Portfolio completo + aba separada para produtos ou serviços',
    category: 'IA',
    tags: ['profissional', 'Portfolio', 'Produtos'],
    inStock: true,
    image: ''
  },
    {
    id: 'p8',
    name: 'Aprimoramentos de site',
    description: 'Mudanças no design, internacionalização, adição de funcionalidades, etc...',
    category: 'Sites',
    tags: ['Sites', 'suporte', 'aprimoramento'],
    inStock: true,
    image: '' 
  },
];

export const CATEGORIES = ['IA', 'Landing Pages', 'Sites', 'Apps', 'Portfolios', 'Ecommerce' ] as const;