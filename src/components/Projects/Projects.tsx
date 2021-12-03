import React, { useEffect, useRef, useState } from "react";
import { projects } from "../../assets/jsons/projects";
import { useOnScreen } from "../../utils";
import Card from "./Card/Card";
import Dots from "../Dots/Dots";
import s from "./Projects.module.css";

function Projects({ setSelect }: any) {
  const [start, setStart] = useState(false);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setStart(true);
      setSelect("Projects");
    }
  }, [isVisible, setSelect]);

  return (
    <div id="projects" className={s.projects}>
      <Dots top="50%" left="0px" />
      <div className={`${s.container} fadeIn ${start && "fadeInVisible"}`}>
        <h2 ref={ref}>Projects</h2>
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
