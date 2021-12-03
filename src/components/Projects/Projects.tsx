import React from "react";
import { projects } from "../../assets/jsons/projects";
import Card from "./Card/Card";
import Dots from "../Dots/Dots";
import s from "./Projects.module.css";

function Projects() {
  return (
    <div id="projects" className={s.projects}>
      <Dots top="50%" left="10px" />
      <div className={s.container}>
        <h2>Projects</h2>
        <div className={s.items}>
          {projects.map((p, i) => (
            <Card
              key={`${p.title}_${i}`}
              title={p.title}
              img={p.img}
              description={p.description}
              prod={p.prod}
              repo={p.repo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
