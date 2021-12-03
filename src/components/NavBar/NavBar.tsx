import React from "react";
import logo from "../../assets/imgs/logo.png";
import s from "./NavBar.module.css";

const items: string[] = [
  "Home",
  "About",
  "Technologies",
  "Projects",
  "Contact",
];

interface Item {
  title: string;
  select: string;
}

interface NavProps {
  select: string;
}

function NavItem({ title, select }: Item) {
  return (
    <div className={s.item}>
      <a
        style={title === select ? { color: "yellow", fontWeight: "bold" } : {}}
        href={`#${title[0].toLocaleLowerCase() + title.substr(1)}`}
      >
        {title}
      </a>
    </div>
  );
}

function NavBar({ select }: NavProps) {
  return (
    <div className={s.nav}>
      <div className={s.container}>
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
        <div className={s.buttons}>
          {items.map((item, index) => (
            <NavItem key={`${item}_${index}`} title={item} select={select} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
