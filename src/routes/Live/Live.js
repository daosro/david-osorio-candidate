import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AppBar from "../../components/AppBar";
import ProgramDescription from "../../components/ProgramDescription";
import VideoJS from "../../core/VideoJS/VideoJS";

import { getChannelsLiveSource } from "../../services/channel";
import { getLiveProgramInfo } from "../../services/program";

import useStyles from "./Live.style";

const BIG_BUCK_BUNNY_M3U8 =
  "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8";

const getPlayerOptions = (uri) => ({
  autoplay: false,
  controls: true,
  responsive: false,
  fluid: true,
  poster: 'https://wallpaperaccess.com/full/2950659.jpg',
  sources: uri
    ? [
        {
          src: uri,
          type: "application/x-mpegURL",
        },
      ]
    : [],
});

const Live = () => {
  const classes = useStyles();
  const { channelId } = useParams();
  const playerRef = React.useRef(null);
  const [videoJsOptions, setVideoJsOptions] = useState(getPlayerOptions());
  const [programInfo, setProgramInfo] = useState({});

  useEffect(() => {
    getChannelsLiveSource(channelId).then(({ data: { uri } }) => {
      console.log(uri);
      // The source provided by the API is not working so for now I'm using a hardcoded one.
      setVideoJsOptions(getPlayerOptions(BIG_BUCK_BUNNY_M3U8));
    });
    getLiveProgramInfo().then(({ data }) => {
      setProgramInfo(data);
    });
  }, [channelId]);

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
      <div>
        <div className={classes.player}>
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className={classes.info}>
          <ProgramDescription programInfo={programInfo} />
        </div>
      </div>
    </>
  );
};

export default Live;
