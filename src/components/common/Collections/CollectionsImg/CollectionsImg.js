import React from "react";
import classes from "./CollectionsImg.module.scss";
import Image from "next/image";

function CollectionsImg({ source, customClass }) {
  return (
    <div className={`${classes.container} ${customClass}`}>
      <Image
        src={source}
        height={1000}
        width={1000}
        alt="collections image"
        className={classes.image}
      />
    </div>
  );
}

export default CollectionsImg;
