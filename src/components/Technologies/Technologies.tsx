import React, { useEffect, useRef } from "react";
import { technologies } from "../../assets/jsons/technologies";
import { useOnScreen } from "../../utils";
import Dots from "../Dots/Dots";
import s from "./Technologies.module.css";

function Technologies({ setSelect }: any) {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setSelect("Technologies");
    }
  }, [isVisible, setSelect]);

  return (
    <div id="technologies" className={s.technologies}>
      <Dots top="50%" left="88.5%" />
      <div className={s.container}>
        <h2 ref={ref}>Technologies</h2>
        <div className={s.items}>
          {technologies.map((t, i) => (
            <div key={`${t.title}_${i}`} className={s.item}>
              <img src={t.img} alt={t.title} />
              <h4>{t.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
