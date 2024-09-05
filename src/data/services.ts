import {config} from "../config/config.ts";
import {es} from "../langs/es.ts";

export const services = {
  hero: {
    title: es.menu[2].name,
    subtitle:
      "Conoce nuestros servicios,  y todo lo que tenemos para ofrecerte.",
    backgroundImage:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664", // Imagen de fondo para el Hero
  },
};

export const testimonials = [
  {
    name: "Jenny Wilson",
    role: "Co-founder, Appson",
    quote:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save. No need to think twice before making it.",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-1.jpg",
    ringColor: "ring-fuchsia-600",
  },
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    quote:
      "Amazing experience. The team was highly professional, and the project was completed ahead of schedule. Highly recommended.",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-2.jpg",
    ringColor: "ring-blue-500",
  },
  {
    name: "Sara Smith",
    role: "CTO, InnovateX",
    quote:
      "A seamless process from start to finish. I’m very satisfied with the end result and would gladly work with them again.",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-3.jpg",
    ringColor: "ring-yellow-500",
  },
];
