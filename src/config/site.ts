export const siteConfig = {
  name: "Elegance Store",
  description: "Móveis e decoração com design sofisticado para transformar seu ambiente",
  slogan: "Transforme seu espaço com elegância",
  
  contact: {
    address: "Rua das Flores, 123 - Centro, São Paulo - SP",
    phone: "+55 11 99999-9999",
    whatsapp: "5511999999999",
    email: "contato@elegancestore.com.br",
    hours: "Segunda a Sábado: 9h às 18h"
  },
  
  social: {
    instagram: "https://instagram.com/elegancestore",
    whatsapp: "https://wa.me/5511999999999",
    facebook: "https://facebook.com/elegancestore", 
    tiktok: "https://tiktok.com/@elegancestore"
  },
  
  about: {
    title: "Sobre Nós",
    description: "Com mais de 15 anos de experiência no mercado de móveis e decoração, a Elegance Store se destaca pela qualidade excepcional de seus produtos e pelo atendimento personalizado. Nossa missão é transformar ambientes através de peças únicas que combinam funcionalidade, conforto e design sofisticado."
  },
  
  features: [
    {
      title: "Qualidade Premium",
      description: "Produtos selecionados com os melhores materiais e acabamento impecável",
      icon: "award"
    },
    {
      title: "Design Exclusivo", 
      description: "Peças únicas que refletem personalidade e sofisticação",
      icon: "palette"
    },
    {
      title: "Atendimento Personalizado",
      description: "Consultoria especializada para criar o ambiente dos seus sonhos",
      icon: "users"
    },
    {
      title: "Entrega Garantida",
      description: "Entregamos em todo Brasil com segurança e pontualidade",
      icon: "truck"
    },
    {
      title: "Pós-venda Excepcional", 
      description: "Suporte completo mesmo após a compra",
      icon: "headphones"
    },
    {
      title: "Projetos Sob Medida",
      description: "Desenvolvemos soluções personalizadas para seu espaço",
      icon: "ruler"
    }
  ],
  
  timeline: [
    {
      year: "2008",
      title: "Fundação",
      description: "Início da jornada com foco em móveis de qualidade e design diferenciado"
    },
    {
      year: "2012", 
      title: "Expansão Digital",
      description: "Lançamento da loja online, ampliando nosso alcance nacional"
    },
    {
      year: "2016",
      title: "Parcerias Internacionais",
      description: "Estabelecemos parcerias com designers renomados da Europa"
    },
    {
      year: "2020",
      title: "Sustentabilidade",
      description: "Implementação de práticas sustentáveis em toda nossa cadeia produtiva"
    },
    {
      year: "2023",
      title: "Inovação Contínua", 
      description: "Liderança em tendências com catálogo sempre atualizado"
    }
  ],
  
  testimonials: [
    {
      name: "Maria Silva",
      role: "Arquiteta",
      content: "A Elegance Store transformou completamente minha sala. A qualidade dos móveis superou minhas expectativas!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Designer de Interiores", 
      content: "Trabalho com eles há 3 anos. Sempre encontro peças incríveis e o atendimento é excepcional.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Cliente",
      content: "Meu apartamento ficou um sonho! O atendimento personalizado fez toda diferença na escolha das peças.",
      rating: 5
    }
  ]
};

export type SiteConfig = typeof siteConfig;