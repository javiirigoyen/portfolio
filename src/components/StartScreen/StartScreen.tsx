import React, { useEffect, useRef, useState } from "react";
import { useOnScreen } from "../../utils";
import profile from "../../assets/imgs/profile.jpg";
import s from "./StartScreen.module.css";

function StartScreen({ setSelect }: any) {
  const [start, setStart] = useState(false);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setStart(true);
      setSelect("Home");
    }
  }, [isVisible, setSelect]);

  return (
    <div
      id="home"
      className={`${s.container} fadeIn ${start && "fadeInVisible"}`}
    >
      <div className={s.info}>
        <h4 ref={ref}>Hi There 👋 I'm</h4>
        <p>Federico{"\n"}Avelin</p>
        <h3>FullStack Web Developer</h3>
        <div>A fullstack developer from Argentina, I ❤️ React and Express.</div>
        <a href="#contact">
          <div className={s.button}>Hire Me</div>
        </a>
      </div>
      <img src={profile} alt="profile" />
    </div>
  );
}

export default StartScreen;
