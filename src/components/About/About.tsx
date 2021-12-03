import React, { useRef, useEffect, useState } from "react";
import about from "../../assets/imgs/about2.jpg";
import Dots from "../Dots/Dots";
import { useOnScreen } from "../../utils";
import s from "./About.module.css";

const link: string =
  "https://drive.google.com/file/d/1SbpEuBhXu_17X85YFGg7HFuSl8UqvuGB/view?usp=sharing";

function About({ setSelect }: any) {
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
          <h2 ref={ref}>About Me</h2>
          <p>{`I'm Federico Avelin, FullStack developer. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create enjoyable experiences. I perfect my skills every day, to keep up to date and continue advancing in my career as a developer.\n\nI develop websites with HTML, CSS and JavaScript. For the front, I love to use React alongside Redux, and for the back Express along with PostgresSQL and Sequelize.\n\nI always work to achieve the best result in each project that I have in my hands, with me you will find someone who will not give up easily`}</p>
          <a href={link} rel="noopener noreferrer" target="_blank">
            <div className={s.button}>Download CV</div>
          </a>
        </div>
      </div>
      ;
    </div>
  );
}

export default About;
