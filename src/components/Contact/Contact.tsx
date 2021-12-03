import React from "react";
import Info from "./Info/Info";
import Form from "./Form/Form";
import s from "./Contact.module.css";

function Contact() {
  return (
    <div className={s.contact}>
      <div className={s.container}>
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
