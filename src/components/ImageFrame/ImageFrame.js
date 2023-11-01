"use client";

import React from "react";
import classes from "./ImageFrame.module.scss";
import Image from "next/image";
import Mouse from "./Mouse";
import ArrowDown from "./ArrowDown";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function ImageFrame({ customClass, title, imgData, videoData }) {
  console.log(videoData);

  return (
    <div className={`${classes.container} ${customClass}`}>
      <h1>{title}</h1>
      <div className={classes.image_container}>
        <div className={classes.left_container}>
          <VideoPlayer videoData={videoData} />
        </div>
        <div className={classes.right_container}>
          <div className={classes.upper_container}>
            {imgData?.map((item, index) => (
              <div key={index} className={classes.img_container}>
                <Image
                  src={`https://osmicglass.droot.in${item.image.data[0].attributes.url}`}
                  alt={item.desc}
                  height={500}
                  width={500}
                  className={classes.right_img}
                />
              </div>
            ))}
          </div>
          <div className={classes.scroll}>
            <div className={classes.icons}>
              <Mouse />
              <ArrowDown />
            </div>
            <div className={classes.text}>
              <p>Scroll for more manufacturing Images</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.mobview_container}>
        <div className={classes.scroll}>
          <div className={classes.icons}>
            <Mouse />
            <ArrowDown />
          </div>
          <div className={classes.text}>
            <p>Scroll for more manufacturing Images</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageFrame;
