import webService from "../imgs/web-service.png";
import videoGames from "../imgs/videogames.png";
import gifFinder from "../imgs/gif-finder.png";

export interface Project {
  title: string;
  description: string;
  img: string;
  repo: string;
  prod: string;
}

export const projects: Project[] = [
  {
    title: "Web Service",
    description:
      "E-commerce of sales and acquisition of services. Includes cart, payment methods, user panel, chat and many other features.",
    img: webService,
    repo: "https://github.com/Fedex159/pf-web-service",
    prod: "https://pf-web-service.vercel.app/",
  },
  {
    title: "Videogames",
    description:
      "Video games app. Some of the main functions are: video game search, filtering, creation of new video games, paging.",
    img: videoGames,
    repo: "https://github.com/Fedex159/pi-videogames/",
    prod: "https://pi-videogames-kappa.vercel.app/",
  },
  {
    title: "Gif Finder",
    description:
      "Gifs app. Some of the main functions are: GIF search, color selector, add to favorites, carousel.",
    img: gifFinder,
    repo: "https://github.com/Fedex159/gif-finder",
    prod: "https://gif-finder-mu.vercel.app/",
  },
];
