import React from "react";
import classes from "./DescriptionCard.module.scss";
import Image from "next/image";

const DescriptionCard = ({ customClass, cardData }) => {
  return (
    <div className={`${classes.container} ${customClass}`}>
      {cardData?.map((item, index) => (
        <div className={classes.card} key={index}>
          <div className={classes.icon_container}>
            <Image
              src={`https://osmicglass.droot.in${item?.image?.data?.attributes?.url}`}
              alt="product image"
              width={50}
              height={50}
              className={classes.card_img}
            />
          </div>
          <div className={`${classes.card_desc}`}>
            {item.title && (
              <h1 className={classes.title}>
                {index + 1}. {item?.title}
              </h1>
            )}
            <h1 className={classes.title}>{item?.name}</h1>
            <p className={classes.description}>{item?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DescriptionCard;
