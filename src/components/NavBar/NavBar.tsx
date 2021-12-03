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
  setSelect: any;
}

interface NavProps {
  select: string;
  setSelect: any;
}

function NavItem({ title, select, setSelect }: Item) {
  return (
    <div
      className={s.item}
      onClick={() => {
        setSelect(title);
      }}
    >
      <a
        style={title === select ? { color: "yellow", fontWeight: "bold" } : {}}
        href={`#${title[0].toLocaleLowerCase() + title.substr(1)}`}
      >
        {title}
      </a>
    </div>
  );
}

function NavBar({ select, setSelect }: NavProps) {
  return (
    <div className={s.nav}>
      <div className={s.container}>
        <a
          href="#home"
          onClick={() => {
            setSelect("Home");
          }}
        >
          <img src={logo} alt="logo" />
        </a>
        <div className={s.buttons}>
          {items.map((item, index) => (
            <NavItem
              key={`${item}_${index}`}
              title={item}
              select={select}
              setSelect={setSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
