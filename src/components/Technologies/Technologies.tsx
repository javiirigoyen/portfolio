import React from "react";
import { technologies } from "../../assets/jsons/technologies";
import s from "./Technologies.module.css";

function Technologies() {
  return (
    <div className={s.technologies}>
      <div className={s.container}>
        <h2>Technologies</h2>
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
