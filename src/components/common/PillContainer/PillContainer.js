import React from "react";
import classes from "./PillContainer.module.scss";

function PillContainer({ customClass, onClick, pillDetails, pillClass }) {
  return (
    <div className={`${classes.container} ${customClass}`}>
      {pillDetails?.map((item, index) => (
        <div
          key={index}
          onClick={onClick}
          className={`${classes.pill_title} ${pillClass}`}
        >
          <h1>{item?.attributes?.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default PillContainer;
