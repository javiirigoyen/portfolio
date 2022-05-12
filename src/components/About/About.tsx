import React, { useRef, useEffect, useState } from "react";
import about from "../../assets/imgs/about3.jpg";
import Dots from "../Dots/Dots";
import { useOnScreen } from "../../utils";
import s from "./About.module.css";
interface AboutProps {
  setSelect: any;
  lang: string;
}

interface Description {
  en: string;
  es: string;
}

const description: Description = {
  en: `I'm Javier Irigoyen Terre, FullStack developer. I am a person passionate about development, eager to learn and be able to contribute all my knowledge to a team. I am very responsible when it comes to doing a job, always offering my best productivity. I am open to receiving both criticism and help when I think I need it. I like to work as a team because I think it allows us to divide the work and multiply the results. With great ability to constantly update knowledge since for the world of technology it is necessary to be learning something new all the time.`,
  es: `Soy Javier Irigoyen Terre, desarrollador FullStack. Soy una persona apasionada por el desarrollo, con ganas de aprender y poder aportar todos mis conocimientos a un equipo. Soy muy responsable a la hora de realizar un trabajo, siempre ofreciendo mi mayor productividad.Estoy abierto a recibir tanto criticas como ayuda cuando considero que la necesito, me gusta trabajar en equipo ya que considero que permite dividir el trabajo y multiplicar los resultados.Cuento con gran capacidad de actualizar los conocimientos constantemente ya que para el mundo de la tecnología es necesario estar aprendiendo algo nuevo todo el tiempo..`,
};

const link: string =
  "https://drive.google.com/file/d/1dqGjn4SmvVOrZZtzzrrheTV3bjGjhcfM/view?usp=sharing";

const linkEs: string =
  "https://drive.google.com/file/d/1dqGjn4SmvVOrZZtzzrrheTV3bjGjhcfM/view?usp=sharing";

function About({ setSelect, lang }: AboutProps) {
  const [start, setStart] = useState(false);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setStart(true);
      setSelect("About");
    }
  }, [isVisible, setSelect]);

  return (
    <div id="about" className={s.about}>
      <Dots top="30%" left="0px" />
      <div className={`${s.container} fadeIn ${start && "fadeInVisible"}`}>
        <div className={s.img}>
          <div className={s.border}></div>
          <img src={about} alt="about" />
        </div>
        <div className={s.info}>
          <h2 ref={ref}>{lang === "es" ? "Sobre mi" : "About Me"}</h2>
          <p>{lang === "es" ? description.es : description.en}</p>
          <a
            href={lang === "es" ? linkEs : link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={s.button}>
              {lang === "es" ? "Descargar CV" : "Download CV"}
            </div>
          </a>
        </div>
      </div>
      ;
    </div>
  );
}

export default About;
