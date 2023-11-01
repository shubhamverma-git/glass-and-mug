"use client";
import React from "react";
import classes from "./Culture.module.scss";
import Image from "next/image";
import SocialMedia from "../common/SocialMedia/SocialMedia";
import Game from "@/assets/images/Culture/Game.png";
import Book from "@/assets/images/Culture/Book.png";
import Building from "@/assets/images/Culture/Building.png";

function Culture({ customClass, title, desc_1, moreImage }) {
  return (
    <div className={`${classes.container} ${customClass}`}>
      <div className={classes.left_container}>
        <div className={classes.description}>
          <h1>{title}</h1>
          <p>{desc_1}</p>
        </div>
        <div className={classes.social_media}>
          <SocialMedia customClass={classes.social_media_icon} />
        </div>
      </div>

      <div className={classes.right_container}>
        {moreImage?.map((i, idx) => (
          <div key={idx} className={classes.image_container}>
            <Image
              src={`https://osmicglass.droot.in${i?.attributes?.url}`}
              alt="culture product"
              width={100}
              height={100}
              className={classes.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Culture;
