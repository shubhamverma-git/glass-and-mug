import React from "react";
import classes from "./MaterialCard.module.scss";
import Image from "next/image";

const MaterialCard = ({ cardData }) => {
  return (
    <div className={classes.container}>
      {cardData?.map((item, index) => (
        <div className={classes.card} key={index}>
          <div className={classes.icon_container}>
            <Image
              src={`https://osmicglass.droot.in${item?.attributes?.image?.data?.attributes?.url}`}
              alt="product image"
              width={500}
              height={500}
              className={classes.image}
            />
          </div>
          <div className={classes.card_desc}>
            <h1 className={classes.title}>{item?.attributes?.name}</h1>
            <p className={classes.description}>
              {item?.attributes?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaterialCard;
