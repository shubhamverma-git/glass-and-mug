import React from "react";
import classes from "./loader.module.scss";

const Card = ({ className }) => {
  return <div className={`${className} ${classes.color} ${classes.card}`} />;
};

export default Card;
