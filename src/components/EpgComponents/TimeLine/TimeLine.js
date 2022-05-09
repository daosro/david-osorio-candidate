import React, { useEffect } from "react";
import { getMinutesOfTheDay } from "../../../utils/date";

import useStyles from "./TimeLine.style";

const TimeLine = ({ numberOfChannels }) => {
  const classes = useStyles();
  const [minutes, setMinutes] = React.useState(getMinutesOfTheDay());

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes(() => getMinutesOfTheDay());
    }, 1000);
    return () => clearInterval(interval);
  }, []); 

  return (
    <div
      className={classes.root}
      style={{ 
        height: `calc((${numberOfChannels} * 3.5rem) + 2rem)`, 
        left: `calc(((400px / 60) * ${minutes}) + 4rem)` 
    }}
    >
      <span className={classes.content} />
    </div>
  );
};

export default TimeLine;
