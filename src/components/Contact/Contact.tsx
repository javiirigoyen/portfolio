import React, { useEffect, useRef } from "react";
import { useOnScreen } from "../../utils";
import Info from "./Info/Info";
import Form from "./Form/Form";
import Dots from "../Dots/Dots";
import s from "./Contact.module.css";

function Contact({ setSelect }: any) {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setSelect("Contact");
    }
  }, [isVisible, setSelect]);

  return (
    <div id="contact" className={s.contact}>
      <Dots top="35%" left="88.5%" />
      <div ref={ref} className={s.container}>
        <h2>Contact Me</h2>
        <div className={s.group}>
          <Info />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
