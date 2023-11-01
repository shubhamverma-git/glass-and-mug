"use client";
import React from "react";
import classes from "./CollectionsProduct.module.scss";
import Image from "next/image";
import ArrowButton from "../../Buttons/ArrowButton/ArrowButton";
import Link from "next/link";

function CollectionsProduct({
  customClass,
  title,
  desc1,
  desc2,
  source,
  btnName,
  link,
  onClick,
  data,
}) {
  return (
    <div className={`${classes.container} ${customClass}`}>
      <div className={`${classes.left_container}`}>
        <div className={`${classes.title}`}>
          <h1>{title}</h1>
        </div>
        <div className={classes.description}>
          <p>{desc1}</p>
          <p>{desc2}</p>
        </div>
        <Link href={onClick} className={`${classes.btn_container}`}>
          <ArrowButton name={btnName} customClass={classes.btn} />
        </Link>
      </div>
      <div className={classes.right_container}>
        <Image
          className={classes.img}
          src={`https://osmicglass.droot.in${source}`}
          alt="collections image"
          width={"600"}
          height={"500"}
        />
      </div>
    </div>
  );
}

export default CollectionsProduct;
