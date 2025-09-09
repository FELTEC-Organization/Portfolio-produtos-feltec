export type Product = {
  id: string;
  name: string;
  description: string;
  category: 'Portfolios' | 'Sites' | 'Apps' | 'Landing Pages' | 'Automatizações' | 'Ecommerce';
  tags: string[];
  inStock: boolean;
  image: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Aprimoramento de Sites',
    description: `Transformamos seu site com redesign moderno, internacionalização, SEO, novas funcionalidades e manutenção contínua.`,
    category: 'Sites',
    tags: ['Sites', 'Aprimoramento', 'SEO', 'Manutenção'],
    inStock: true,
    image: 'https://tse1.mm.bing.net/th/id/OIP.A0yTI4G_SYb69_Uf4boPxgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: 'p2',
    name: 'Chatbots',
    description: `Chatbot inteligente para atendimento 24h, com integração no site ou WhatsApp, fluxos customizados e agendamento de serviços.`,
    category: 'Automatizações',
    tags: ['Chatbot', 'Automação', 'IA', 'Atendimento'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1718241905462-56e7b9f722f3?q=80&w=928&auto=format&fit=crop',
  },
  {
    id: 'p3',
    name: 'Landing Pages Modelos',
    description: `Página única e impactante para captar clientes, com design focado em conversão, integração com formulários e SEO otimizado.`,
    category: 'Landing Pages',
    tags: ['Landing Pages', 'Conversão', 'Marketing'],
    inStock: true,
    image: '/models.png',
  },
  {
    id: 'p4',
    name: 'Portfolio Personalizado',
    description: `Portfolio com sua marca, seções sobre, contato e projetos, design responsivo e ideal para profissionais autônomos.`,
    category: 'Portfolios',
    tags: ['Portfolio', 'Personalizado', 'Pessoal', 'Profissional'],
    inStock: true,
    image: 'https://tse2.mm.bing.net/th/id/OIP.r6Z7x4s1Uj8L7zOYPPOk8gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: 'p5',
    name: 'Portfolio + Produtos ou Serviços',
    description: `Portfolio completo com abas separadas para produtos ou serviços, design responsivo e integrações básicas de contato e orçamento.`,
    category: 'Portfolios',
    tags: ['Portfolio', 'Produtos', 'Serviços', 'Profissional'],
    inStock: true,
    image: '/prodct.png',
  },
  {
    id: 'p6',
    name: 'Portfolio Premium',
    description: `Portfolio aprimorado com tema escuro, internacionalização, carrossel interativo e animações personalizadas.`,
    category: 'Portfolios',
    tags: ['Portfolio', 'Premium', 'Profissional'],
    inStock: true,
    image: '/portfolio-premium.jpg',
  },
  {
    id: 'p7',
    name: 'Website Profissional',
    description: `Website corporativo completo com múltiplas páginas, catálogo de produtos/serviços, formulários, integrações e SEO otimizado.`,
    category: 'Sites',
    tags: ['Website', 'Profissional', 'Corporativo'],
    inStock: true,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
  },
  {
    id: 'p8',
    name: 'E-commerce',
    description: `Loja virtual personalizada com gestão de produtos, categorias, estoque, integração de pagamentos, área do cliente e SEO.`,
    category: 'Ecommerce',
    tags: ['E-commerce', 'Loja virtual', 'Vendas online'],
    inStock: true,
    image: 'ecom.jpg',
  },
];

export const CATEGORIES = ['Automatizações', 'Landing Pages', 'Sites', 'Apps', 'Portfolios', 'Ecommerce'] as const;
