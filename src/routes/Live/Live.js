import React from "react";
import { useParams } from "react-router-dom";
import AppBar from "../../components/AppBar";
import VideoJS from "../../core/VideoJS/VideoJS";

import useStyles from "./Live.style";

const Live = () => {
  const classes = useStyles();
  // const { channelId } = useParams();
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: false,
    fluid: true,
    sources: [
      {
        src: "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      player.log("player is waiting");
    });

    player.on("dispose", () => {
      player.log("player will dispose");
    });
  };

  return (
    <>
      <AppBar simple />
      <div className={classes.player}>
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
    </>
  );
};

export default Live;
