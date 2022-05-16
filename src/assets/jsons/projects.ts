import webService from "../imgs/web-service.png";
import videoGames from "../imgs/videogame.png";
import foods from "../imgs/videogame.png";
import portfolio from "../imgs/portafolio.png";

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
    title: "Videogames",
    description:
      "Video games app. Some of the main functions are: video game search, filtering, creation of new video games, paging.",
    descriptionEs:
      "App de videojuegos. Algunas de las funciones principales son: búsqueda de videojuegos, filtrado, creación de nuevos videojuegos, paginación. ",
    img: videoGames,
    repo: "https://github.com/javiirigoyen/PROYECTO-INDIVIDUAL-VG",
    prod: "https://deploy-client-vg.herokuapp.com/",
  },
  {
    title: "Foods",
    description:
      "Foods app. Some of the main functions are: foods search, filtering, creation of new recipes, paging.",
    descriptionEs:
      "App de Comidas. Algunas de las funciones principales son: búsqueda de comidas, filtrado, creación de nuevas recetas, paginación. ",
    img: foods,
    repo: "https://github.com/javiirigoyen/PI-FOODS",
    prod: "https://deploy-client-foods.herokuapp.com/",
  },
  {
    title: "Portfolio",
    description: `
      My personal portfolio. Made with React and Typescript. 
      You will find my personal information, projects and technologies.
      `,
    descriptionEs: `
      Mi portfolio personal. Hecho con React y Typescript. 
      Encontraran mi información personal, proyectos y tecnologías.
      `,
    img: portfolio,
    repo: "https://github.com/javiirigoyen/portfolio",
    prod: "https://portfolio-vert-psi-10.vercel.app/",
  },
 
];
