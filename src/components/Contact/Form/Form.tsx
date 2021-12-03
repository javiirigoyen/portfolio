import React from "react";
import s from "./Form.module.css";

function Form() {
  return (
    <div className={s.container}>
      <form>
        <input placeholder="Full Name*" required />
        <input placeholder="Email*" required />
        <input placeholder="Subject*" required />
        <textarea rows={5} placeholder="Message*" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
