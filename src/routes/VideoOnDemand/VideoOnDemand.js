import React from "react";
import { useParams } from "react-router-dom";

import useStyles from "./VideoOnDemand.style";

const VideoOnDemand = () => {
  const classes = useStyles();
  const { programId } = useParams();
  return <div className={classes.root}>VOD programm {programId}</div>;
};

export default VideoOnDemand;
