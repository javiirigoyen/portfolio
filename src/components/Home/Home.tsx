import React from "react";
import NavBar from "../NavBar/NavBar";
import StartScreen from "../StartScreen/StartScreen";
import About from "../About/About";
import Technologies from "../Technologies/Technologies";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import s from "./Home.module.css";

function Home() {
  return (
    <div className={s.container}>
      <NavBar />
      <StartScreen />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
