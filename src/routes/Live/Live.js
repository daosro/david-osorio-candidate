import React from "react";
import { useParams } from "react-router-dom";

import useStyles from "./Live.style";

const Live = () => {
  const classes = useStyles();
  const { channelId } = useParams();
  return <div className={classes.root}>Live channel {channelId}</div>;
};

export default Live;
