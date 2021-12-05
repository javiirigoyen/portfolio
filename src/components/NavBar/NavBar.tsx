import React from "react";
import logo from "../../assets/imgs/logo.png";
import Sidebar from "./Sidebar/Sidebar";
import Flags from "./Flags/Flags";
import s from "./NavBar.module.css";

export const items: string[] = [
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
  setLang: any;
}

export function NavItem({ title, select }: Item) {
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

function NavBar({ select, setLang }: NavProps) {
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
          <Flags setLang={setLang} />
        </div>
        <Sidebar select={select} setLang={setLang} />
      </div>
    </div>
  );
}

export default NavBar;
