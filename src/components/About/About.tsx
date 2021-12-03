import React from "react";
import about from "../../assets/imgs/about2.jpg";
import s from "./About.module.css";

function About() {
  return (
    <div id="about" className={s.about}>
      <div className={s.container}>
        <div className={s.img}>
          <div className={s.border}></div>
          <img src={about} alt="about" />
        </div>
        <div className={s.info}>
          <h2>About Me</h2>
          <p>{`I'm Federico Avelin, FullStack developer. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create enjoyable experiences. I perfect my skills every day, to keep up to date and continue advancing in my career as a developer.\n\nI develop websites with HTML, CSS and JavaScript. For the front, I love to use React alongside Redux, and for the back Express along with PostgresSQL and Sequelize.\n\nI always work to achieve the best result in each project that I have in my hands, with me you will find someone who will not give up easily`}</p>
          <div className={s.button}>Download CV</div>
        </div>
      </div>
      ;
    </div>
  );
}

export default About;
