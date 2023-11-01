"use client";

import React from "react";
import classes from "./ArrowButton.module.scss";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

function ArrowButton({ name, customClass, type, onClick }) {
  return (
    <div
      onClick={onClick}
      type={type}
      className={`${classes.container} ${customClass}`}
    >
      <div>{name}</div>
      <BiChevronRight className={classes.arrow_icon} />
    </div>
  );
}

export default ArrowButton;
