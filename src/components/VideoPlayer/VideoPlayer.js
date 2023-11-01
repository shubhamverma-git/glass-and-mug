"use client";

import React from "react";
import ReactPlayer from "react-player";
import classes from "./VideoPlayer.module.scss";

const VideoPlayer = ({ videoData }) => {
  return (
    <div className={classes.player_container}>
      <ReactPlayer
        height={100}
        width={100}
        url={videoData}
        muted={true}
        loop={true}
        playing={true}
        className={classes.video_player}
      />
    </div>
  );
};

export default VideoPlayer;
