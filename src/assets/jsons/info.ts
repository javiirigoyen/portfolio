import gmail from "../imgs/gmail.png";
import whatsapp from "../imgs/whatsapp.png";
import github from "../imgs/github.png";
import linkedin from "../imgs/linkedin.png";

export interface InfoObj {
  src: string;
  alt: string;
  title: string;
  href: string;
}

export const info: InfoObj[] = [
  
  {
    src: gmail,
    alt: "gmail",
    title: "javieririgoyen96@gmail.com",
    href: "mailto:javieririgoyen96@gmail.com",
  },
  {
    src: whatsapp,
    alt: "whatsapp",
    title: "+54 3513288386",
    href: "https://api.whatsapp.com/send?phone=543513288386",
  },
  {
    src: github,
    alt: "github",
    title: "github.com/javiirigoyen",
    href: "https://github.com/javiirigoyen/",
  },
  {
    src: linkedin,
    alt: "linkedin",
    title: "linkedin.com/in/javier-irigoyen-terre-dev/",
    href: "https://www.linkedin.com/in/javier-irigoyen-terre-desarrollador-web-full-stack/",
  },
];
