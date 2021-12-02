import React from "react";
import logo from "../../assets/imgs/logo.png";
import s from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={s.nav}>
      <div className={s.container}>
        <img src={logo} alt="logo" />
        <div className={s.buttons}>
          <div>Home</div>
          <div>About</div>
          <div>Tecnologies</div>
          <div>Projects</div>
          <div>Contact Me</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
