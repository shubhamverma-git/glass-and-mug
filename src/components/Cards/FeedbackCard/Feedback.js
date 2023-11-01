import React from "react";
import classes from "./Feedback.module.scss";
import Image from "next/image";

function FeedbackCard({ customClass, cardData }) {
  return (
    <div className={`${classes.container} ${customClass}`}>
      {cardData?.data?.map((item, idx) => (
        <div key={idx} className={classes.card}>
          <div className={classes.profile}>
            <div className={classes.left_container}>
              <div className={classes.image_container}>
                <Image
                  src={`https://osmicglass.droot.in${item?.attributes?.image?.data?.attributes?.url}`}
                  alt="card image"
                  width={50}
                  height={50}
                  className={classes.image}
                />
              </div>
              <div className={classes.name}>
                <h1>{item?.attributes?.name}</h1>
                <div className={classes.location_container}>
                  <p>{item?.attributes?.location},</p>
                  <span>{item?.attributes?.country}</span>
                </div>
              </div>
            </div>
            <div className={classes.right_container}>
              <div className={classes.rating}>
                <p>{item?.attributes?.rating}</p>
              </div>
            </div>
          </div>
          <div className={classes.description}>
            <p>{item?.attributes?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedbackCard;
