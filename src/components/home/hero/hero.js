"use client";

import Image from "next/image";
import classes from "./hero.module.scss";
import React from "react";
import { usePathname } from "next/navigation";
import CountUp from "react-countup";

export default function HeroContainer({
  customClass,
  bannerImageData,
  matrixData,
  description,
}) {
  const path = usePathname();
  return (
    <>
      <div className={`${classes.container} ${customClass}`}>
        {/* {path === "/" && ( */}
        <Image
          alt="hero image"
          className={classes.heroImage}
          src={`https://osmicglass.droot.in${bannerImageData}`}
          width={1440}
          height={1440}
        />
        {/* )} */}

        {path === "/about" && description && (
          <div className={classes.headline}>
            <h1>{description}</h1>
          </div>
        )}
        {(path === "/" || path === "/about") && (
          <div className={classes.statsContainer}>
            {matrixData?.map((item, idx) => (
              <div key={idx} className={classes.statsBlock}>
                <h2>
                  <CountUp start={0} end={item?.attributes?.number} />
                </h2>
                <h3>{item?.attributes?.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={classes.mob_container}>
        {(path === "/" || path === "/about") && (
          <div className={classes.statsContainer}>
            {matrixData?.map((item, idx) => {
              return (
                <div key={idx} className={classes.statsBlock}>
                  <h2>
                    <CountUp start={0} end={item?.attributes?.number} />
                  </h2>
                  <h3>{item?.attributes?.title}</h3>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
