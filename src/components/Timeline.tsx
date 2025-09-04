import { motion } from 'framer-motion';

const timelineItems = [
  {
    title: "Início da jornada",
    description:
      "A Feltec nasceu da paixão por tecnologia, buscando oferecer soluções inovadoras para empresas e clientes em todo o Brasil."
  },
  {
    title: "Expansão de serviços",
    description:
      "Ampliamos nosso portfólio, incluindo desenvolvimento de sistemas, consultoria em TI e integração de soluções SaaS, sempre com foco em qualidade."
  },
  {
    title: "Projetos de destaque",
    description:
      "Consolidamos nossa experiência em projetos desafiadores, modernizando sistemas, implementando automações e otimizando processos de nossos clientes."
  },
  {
    title: "Foco no cliente",
    description:
      "Nossa prioridade é entender cada necessidade, entregar valor real e construir parcerias duradouras com todos que confiam na Feltec."
  },
];

export function Timeline() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Nossa história
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Descubra como a Feltec evoluiu, transformando ideias em soluções digitais e construindo um legado de inovação.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-soft z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-card p-6 rounded-2xl shadow-card border border-border/50">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
