import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AppBar from "../../components/AppBar";
import ProgramDescription from "../../components/ProgramDescription";
import { getProgramInfo } from "../../services/program";

import useStyles from "./VideoOnDemand.style";

const VideoOnDemand = () => {
  const classes = useStyles();
  const { programId } = useParams();
  const [programInfo, setProgramInfo] = useState({});

  useEffect(() => {
    getProgramInfo().then(({ data }) => {
      setProgramInfo({
        ...data,
        // API channel icon is not a valid image, so I'm using a hardcoded one.
        images: {
          icon: "https://static.wikia.nocookie.net/logopedia/images/8/8a/Sky1.svg/revision/latest/scale-to-width-down/225?cb=20200923201308&path-prefix=es",
        },
      });
    });
  }, [programId]);

  return (
    <>
      <AppBar simple />
      <div className={classes.info}>
        <img
            alt="Poster"
            className={classes.image}
            // I use this image because the logo in the api is not available
            src="https://wallpaperaccess.com/full/2950659.jpg"
          />
        <ProgramDescription programInfo={programInfo} />
      </div>
    </>
  );
};

export default VideoOnDemand;
