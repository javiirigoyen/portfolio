import webService from "../imgs/web-service.png";
import videoGames from "../imgs/videogames.png";
import gifFinder from "../imgs/gif-finder.png";

export interface Project {
  title: string;
  description?: string;
  descriptionEs?: string;
  img: string;
  repo: string;
  prod: string;
}

export const projects: Project[] = [
  {
    title: "Web Service",
    description:
      "E-commerce of sales and acquisition of services. Includes cart, payment methods, user panel, chat and many other features.",
    descriptionEs:
      "E-commerce de ventas y adquisición de servicios. Incluye carrito, métodos de pago, panel de usuario, chat y muchas otras funciones.",
    img: webService,
    repo: "https://github.com/Fedex159/pf-web-service",
    prod: "https://pf-web-service.vercel.app/",
  },
  {
    title: "Videogames",
    description:
      "Video games app. Some of the main functions are: video game search, filtering, creation of new video games, paging.",
    descriptionEs:
      "App de videojuegos. Algunas de las funciones principales son: búsqueda de videojuegos, filtrado, creación de nuevos videojuegos, paginación. ",
    img: videoGames,
    repo: "https://github.com/Fedex159/pi-videogames/",
    prod: "https://pi-videogames-kappa.vercel.app/",
  },
  {
    title: "Gif Finder",
    description:
      "Gifs app. Some of the main functions are: GIF search, color selector, add to favorites, carousel.",
    descriptionEs:
      "App de Gifs. Algunas de las funciones principales son: búsqueda de GIF, selector de color, agregar a favoritos, carrusel.",
    img: gifFinder,
    repo: "https://github.com/Fedex159/gif-finder",
    prod: "https://gif-finder-mu.vercel.app/",
  },
];
