import s from "./Button.module.scss";
import React from "react";

function Button({ children, variant, type }) {
  const classNames = `${s.btn} ${s[variant]}`;
  return (
    <button className={classNames} type={type}>
      {children}
    </button>
  );
}

export default Button;
