import React from "react";
import classes from "./loader.module.scss";

const Text = (className) => {
  return <div className={`${className} ${classes.color} ${classes.text}`} />;
};

export default Text;
