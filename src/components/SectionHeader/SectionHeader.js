import React from "react";
import classes from "./SectionHeader.module.scss";

function SectionHeader({ customClass, title, desc_1, desc_2 }) {
  return (
    <div className={`${classes.container} ${customClass}`}>
      <div className={`${classes.title}`}>
        <h1>{title}</h1>
      </div>
      <div className={classes.description}>
        <p>{desc_1}</p>
      </div>
      <div className={classes.description}>
        <p>{desc_2}</p>
      </div>
    </div>
  );
}

export default SectionHeader;
