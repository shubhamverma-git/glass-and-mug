"use client";
import React from "react";
import classes from "./Explore.module.scss";
import ArrowButton from "../common/Buttons/ArrowButton/ArrowButton";
import { useRouter } from "next/navigation";

function Explore({ customClass, data }) {
  const router = useRouter();
  return (
    <div className={`${classes.container} ${customClass}`}>
      <div className={classes.title}>
        <h1>{data?.title}</h1>
      </div>
      <div className={classes.desc}>
        <p>{data?.description_1}</p>
      </div>
      <div className={classes.btn_container}>
        <ArrowButton
          onClick={() => router.push("/products")}
          name={data?.button_name}
          customClass={classes.btn}
        />
      </div>
    </div>
  );
}

export default Explore;
