import React from "react";
import classes from "./CollectionsTitle.module.scss";

function CollectionsTitle({ title, description, customClass }) {
  return (
    <div className={`${classes.container} ${customClass}`}>
      <div className={title_container}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CollectionsTitle;
