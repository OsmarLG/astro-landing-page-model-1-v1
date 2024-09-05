import {config} from "../config/config.ts";
import {es} from "../langs/es.ts";

export const about = {
  hero: {
    title: es.menu[1].name + " " + config.companyName,
    subtitle: "Conoce más sobre nuestra misión, visión y valores",
    backgroundImage:
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664", // Imagen de fondo para el Hero
  },
  section1: {
    title: `Hey 👋 We are ${config.companyName}`,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos illo ex veritatis provident consectetur, quos eius sequi obcaecati corporis assumenda placeat perspiciatis saepe facilis molestias modi harum? Ducimus ipsum debitis eum vero amet? Nulla numquam dicta autem ex sunt quia earum totam doloribus aspernatur placeat! Autem facere pariatur odit ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos illo ex veritatis provident consectetur, quos eius sequi obcaecati corporis assumenda placeat perspiciatis saepe facilis molestias modi harum? Ducimus ipsum debitis eum vero amet? Nulla numquam dicta autem ex sunt quia earum totam doloribus aspernatur placeat! Autem facere pariatur odit ratione!",
    question: "¿Tienes alguna pregunta?",
    socialLink: {
      type: "WhatsApp",
      text: `Contáctanos por WhatsApp`,
      url: `https://wa.me/${config.companyNumber}?text=Hola%20${config.companyName}`,
    },
    imageUrl:
      "https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png",
    blobShapeUrl:
      "https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg",
  },
  sectionValues: {
    title: "Nuestros Valores",
    description:
      "Los principios que guían nuestro trabajo y definen quiénes somos.",
    values: [
      {
        title: "Compromiso",
        description:
          "Nos comprometemos a ofrecer lo mejor en cada proyecto, trabajando para superar las expectativas.",
        icon: "/favicon.svg",
      },
      {
        title: "Innovación",
        description:
          "Creemos en la innovación constante y en la búsqueda de nuevas soluciones creativas.",
        icon: "/favicon.svg",
      },
      {
        title: "Calidad",
        description:
          "La calidad es la base de todo lo que hacemos, desde el primer contacto hasta la entrega final.",
        icon: "/favicon.svg",
      },
    ],
  },
  missionVision: {
    missionTitle: "Nuestra Misión",
    missionDescription:
      "Proveer soluciones innovadoras y sostenibles que impacten positivamente en nuestros clientes y en la sociedad, mejorando continuamente nuestros procesos y brindando un servicio que prioriza la satisfacción del cliente. Queremos ser una empresa que marque la diferencia, aportando valor y generando un impacto positivo en cada proyecto que emprendemos.",
    visionTitle: "Nuestra Visión",
    visionDescription:
      "Convertirnos en líderes del sector tecnológico a nivel global, reconocidos por nuestra capacidad de innovar, adaptarnos al cambio y ofrecer soluciones que transformen el futuro. Buscamos ser una referencia en la industria, conocida por nuestra excelencia y nuestro compromiso con la sostenibilidad, el desarrollo tecnológico y el bienestar social.",
    backgroundImage: "/images/mission-vision-bg.jpg", // Cambia a la imagen que prefieras
  },
};
