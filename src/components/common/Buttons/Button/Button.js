import React from "react";
import classes from "./Button.module.scss";

function Button({ customClass, name, type, onClick, status }) {
  return (
    <button
      disabled={status}
      onClick={onClick}
      type={type}
      className={`${classes.container} ${customClass}`}
      style={{ backgroundColor: status && "#94a3b8" }}
    >
      {name}
    </button>
  );
}

export default Button;
