import React from "react";
import profile from "../../assets/imgs/profile.jpg";
import s from "./StartScreen.module.css";

function StartScreen() {
  return (
    <div id="home" className={s.container}>
      <div className={s.info}>
        <h4>Hi There 👋 I'm</h4>
        <p>Federico{"\n"}Avelin</p>
        <h3>FullStack Web Developer</h3>
        <div>A fullstack developer from Argentina, I ❤️ React and Express.</div>
        <div className={s.button}>Hire Me</div>
      </div>
      <img src={profile} alt="profile" />
    </div>
  );
}

export default StartScreen;
