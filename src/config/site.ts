export const siteConfig = {
  name: "Feltec Solutions IT",
  description: "Soluções de TI para o seu negócio",
  slogan: "Transformando sua empresa com soluções digitais",
  
  contact: {
    address: "Sorocaba - SP",
    phone: "+55 15 98122-3418",
    whatsapp: "5515981223418",
    email: "contato@sualoja.com",
    hours: "Segunda a Sexta: 9h às 18h"
  },
  
  social: {
    instagram: "https://www.instagram.com/feltec_solutions?igsh=MTUzd2FqaWY0NTMxYQ==",
    whatsapp: "https://wa.me/+5515981223418",
  },
  
  about: {
    title: "Sobre Nós",
    description: "A Feltec Solutions IT é uma empresa especializada em soluções tecnológicas sob medida, atuando com foco em desenvolvimento web, mobile e prototipação de sistemas. Unimos inovação, performance e experiência do usuário para entregar projetos eficientes, seguros e de alto impacto. Com uma equipe dedicada e apaixonada por tecnologia, ajudamos empresas a evoluírem digitalmente, oferecendo serviços personalizados que acompanham as tendências e necessidades do mercado atual."
  },
  
  features: [
    {
      title: "Desenvolvimento de Sites",
      description: "Desenvolvemos sites personalizados, responsivos e modernos, com foco na melhor experiência do usuário, otimização para mecanismos de busca e alta performance para o seu negócio.",
      icon: "layout-dashboard"
    },
    {
      title: "Manutenção de sistemas", 
      description: "Oferecemos suporte técnico especializado, atualizações, correções e melhorias contínuas para garantir a estabilidade, segurança e evolução dos seus sistemas",
      icon: "wrench"
    },
    {
      title: "Prototipação",
      description: "Transformamos suas ideias em protótipos interativos e funcionais, facilitando a validação e o aprimoramento das funcionalidades antes do desenvolvimento final.",
      icon: "pen-tool"
    },
    {
      title: "Desenvolvimento de apps",
      description: "Criamos aplicativos móveis sob medida, com interfaces intuitivas, alta performance, segurança e compatibilidade com diferentes plataformas e dispositivos.",
      icon: "smartphone"
    },
  ],
  
  timeline: [
    {
      year: "2010",
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod"
    },
    {
      year: "2015", 
      title: "Dolor Sit Amet",
      description: "Consectetur adipiscing elit sed do eiusmod tempor incididunt"
    },
    {
      year: "2018",
      title: "Consectetur Adipiscing",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna"
    },
    {
      year: "2021",
      title: "Tempor Incididunt",
      description: "Ut labore et dolore magna aliqua ut enim ad minim veniam"
    },
    {
      year: "2024",
      title: "Magna Aliqua", 
      description: "Ut enim ad minim veniam quis nostrud exercitation ullamco"
    }
  ],
  
  testimonials: [
    {
      name: "Lorem Ipsum",
      role: "Lorem Ipsum",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5
    },
    {
      name: "Dolor Sit",
      role: "Consectetur Adipiscing", 
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.",
      rating: 5
    },
    {
      name: "Magna Aliqua",
      role: "Tempor Incididunt",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rating: 5
    }
  ]
};

export type SiteConfig = typeof siteConfig;