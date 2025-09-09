import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  AlarmClock,
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function Footer({ object = { metadata: { contact: null } } }) {
  const buttonUrl = "https://api.whatsapp.com/send?phone=15981223418&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Feltec.";
  const contact = object.metadata.contact;

  return (
    <footer className="bg-zinc-900 text-gray-300 px-6 py-6 text-sm">
      {/* Container principal com grid adaptável */}
      <div className="max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* LOGO + TEXTO */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/LogoFeltec.png"
              alt="Logo Feltec"
              width={80}
              height={80}
              className="object-contain"
            />
            <span
              className={`text-white text-4xl font-audiowide`}
            >
              FELTEC
            </span>
          </a>

          {/* ÍCONES SOCIAIS - ALINHADOS AO CENTRO */}
          <div className="flex gap-4 justify-center text-feltec-primary-light">
            <SocialIcon
              href={buttonUrl}
              icon={<MessageCircle size={30} />}
              label="WhatsApp"
            />
           
            <SocialIcon
              href="https://www.instagram.com/feltec_solutions"
              icon={<Instagram size={30} />}
              label="Instagram"
            />
            <SocialIcon
              href="https://linkedin.com/company/feltec-solutions-it"
              icon={<Linkedin size={30} />}
              label="LinkedIn"
            />
            <SocialIcon
              href="https://github.com/FELTEC-Organization"
              icon={<Github size={30} />}
              label="GitHub"
            />
            
          </div>
        </div>

        {/* CONTATOS */}
        <div className="flex flex-col gap-4">
          <ContactItem
            icon={<MapPin size={16} />}
            title="Endereço"
            text="Av. Itavuvu, 11.777 - Jardim Santa Cecilia, Sorocaba - SP, 18078-005"
          />
          <ContactItem
            icon={<Mail size={16} />}
            title="E-mail"
            text="feltec.solutions@gmail.com"
            isLink
            linkHref="mailto:feltec.solutions@gmail.com"
          />
          <ContactItem
            icon={<Phone size={16} />}
            title="Telefone"
            text="(15) 981223418"
            isLink
            linkHref={`tel:${"(15) 981223418".replace(/\D/g, "")}`}
          />
          <ContactItem
            icon={<AlarmClock size={16} />}
            title="Funcionamento"
            text="Segunda à Sexta 08:00 às 18:00"
          />
        </div>

        {/* MAPA */}
        <div className="rounded-md overflow-hidden border border-zinc-700 lg:max-w-96">
          <iframe
            title="Mapa Feltec"
            src="https://maps.google.com/maps?q=Av.%20Itavuvu,%2011777,%20Sorocaba,%20SP&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          />
        </div>
      </div>

      {/* DIVISOR */}
      <hr className="my-6 border-zinc-700" />

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
        <span>
          © {new Date().getFullYear()} FELTEC. Todos os direitos reservados.
        </span>
        <span>Desenvolvido pela equipe FELTEC - V1.2.0</span>
      </div>
    </footer>
  );
}

function ContactItem({
  icon,
  title,
  text,
  isLink = false,
  linkHref = "",
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  isLink?: boolean;
  linkHref?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 text-feltec-primary-light">{icon}</div>
      <div>
        <h4 className="font-semibold text-white leading-tight">{title}</h4>
        {isLink ? (
          <a href={linkHref} className="hover:underline text-zinc-300">
            {text}
          </a>
        ) : (
          <p className="text-zinc-400">{text}</p>
        )}
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="hover:text-blue-600 transition-colors"
    >
      {icon}
    </a>
  );
}
