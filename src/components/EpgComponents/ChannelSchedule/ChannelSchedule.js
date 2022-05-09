import React from 'react';
import TvProgram from '../TvProgram';

import useStyles from "./ChannelSchedule.style";

const ChannelSchedule = ({ channel }) => {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {channel.schedules.map((program, index) => (
        <TvProgram 
          key={`${program.title}-${program.start}`} 
          {...program}
        />
      ))}
    </div>
  );
};

export default ChannelSchedule;