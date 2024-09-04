import {config} from "../config/config";

export const es = {
  menu: [
    {name: "Inicio", href: "/"},
    {name: "Acerca de", href: "/about"},
    {name: "Servicios", href: "/services"},
    {name: "Contacto", href: "/contact"},
  ],
  serviciosMenu: [
    {name: "Consultoría", href: "/services#consulting"},
    {name: "Desarrollo Web", href: "/services#web-development"},
    {name: "SEO", href: "/services#seo"},
  ],
  enlacesMenu: [
    {name: "Blog", href: "/blog"},
    {name: "Carreras", href: "/careers"},
    {name: "Soporte", href: "/support"},
  ],
  socialLinks: [
    {
      name: "Facebook",
      href: "https://facebook.com" + config.social.facebook,
      icon: "fab fa-facebook-f",
    },
    {
      name: "Twitter",
      href: "https://twitter.com" + config.social.twitter,
      icon: "fab fa-twitter",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com" + config.social.linkedin,
      icon: "fab fa-linkedin-in",
    },
    {
      name: "Instagram",
      href: "https://instagram.com" + config.social.instagram,
      icon: "fab fa-instagram",
    },
  ],
  footer: {
    text: "Todos los derechos reservados.",
  },
  main: "Principal",
  services: "Servicios",
  links: "Enlaces",
};
