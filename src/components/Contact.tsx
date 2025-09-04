import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { motion } from 'framer-motion';

export function Contact() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Feltec.");
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="contato" className="py-16 bg-background flex flex-col items-center">
      <div className="container mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos aqui para ajudar você a encontrar a melhor solução para o seu negócio
          </p>
        </motion.div>

        {/* Card centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-gradient-hero p-8 rounded-3xl shadow-glow text-center w">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-10 w-10 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Fale Conosco no WhatsApp
            </h3>

            <p className="text-white/90 mb-8 leading-relaxed">
              Tire suas dúvidas, solicite orçamentos ou agende uma visita. Nosso atendimento é rápido e personalizado!
            </p>

            <Button
              onClick={handleWhatsApp}
              variant="secondary"
              size="default"
              className="bg-white text-feltec-primary hover:bg-white/90 font-semibold text-lg flex items-center justify-center gap-2 mx-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Chamar no WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


// SECTION VERSÃO ANTIGA:

// import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { siteConfig } from '@/config/site';
// import { motion } from 'framer-motion';

// export function Contact() {
//   const handleWhatsApp = () => {
//     const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Feltec.");
//     window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, '_blank');
//   };

//   return (
//     <section id="contato" className="py-20 bg-background flex flex-col items-center">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
//             Entre em Contato
//           </h2>
//           <p className="text-lg text-muted-foreground">
//             Estamos aqui para ajudar você a encontrar a melhor solução para o seu negócio
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border/50">
//               <h3 className="text-2xl font-semibold text-foreground mb-6">
//                 Informações de Contato
//               </h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <MapPin className="h-5 w-5 text-primary" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-foreground mb-1">Endereço</h4>
//                     <p className="text-muted-foreground">{siteConfig.contact.address}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Phone className="h-5 w-5 text-primary" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-foreground mb-1">Telefone</h4>
//                     <p className="text-muted-foreground">{siteConfig.contact.phone}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Mail className="h-5 w-5 text-primary" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-foreground mb-1">E-mail</h4>
//                     <p className="text-muted-foreground">{siteConfig.contact.email}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Clock className="h-5 w-5 text-primary" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-foreground mb-1">Horário de Funcionamento</h4>
//                     <p className="text-muted-foreground">{siteConfig.contact.hours}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* WhatsApp CTA */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="flex flex-col items-center"
//           >
//             <div className="bg-gradient-hero p-8 rounded-2xl shadow-glow text-center w-full h-full sm:w-1/2 md:w-full flex flex-col items-center">
//               <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                 <MessageCircle className="h-8 w-8 text-white" />
//               </div>
              
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 Fale Conosco no WhatsApp
//               </h3>
              
//               <p className="text-white/90 mb-8 leading-relaxed">
//                 Tire suas dúvidas, solicite orçamentos ou agende uma visita. 
//                 Nosso atendimento é rápido e personalizado!
//               </p>
              
//               <Button
//                 onClick={handleWhatsApp}
//                 variant="secondary"
//                 size="default"
//                 className="bg-white text-primary hover:bg-white/90 font-semibold text-lg"
//               >
//                 <MessageCircle className="mr-2 h-5 w-5" />
//                 Chamar no WhatsApp
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }