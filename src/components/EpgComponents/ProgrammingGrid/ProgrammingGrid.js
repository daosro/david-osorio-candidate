import React, { useCallback, useRef } from "react";
import { getListOfHoursInADay, getMinutesOfTheDay } from "../../../utils/date";
import ChannelImage from "../ChannelImage";
import ChannelSchedule from "../ChannelSchedule/ChannelSchedule";
import TimeLine from "../TimeLine";

import useStyles from "./ProgrammingGrid.style";

const LIST_OF_HOURS_IN_A_DAY = getListOfHoursInADay();

const ProgrammingGrid = ({ channels }) => {
  const classes = useStyles();

  const epgContainerRef = useRef(null);

  const handleNowButtonClick = useCallback(() => {
    const minutes = getMinutesOfTheDay();
    const scrollToX =
      (400 / 60) * minutes - (document.body.clientWidth / 2 - 50);
    epgContainerRef.current.scrollTo(scrollToX, 0);
  }, [epgContainerRef]);

  return (
    <>
      <button className={classes.nowButton} onClick={handleNowButtonClick}>
        NOW
      </button>
      <div className={classes.grid}>
        <div ref={epgContainerRef} className={classes.gridProgramRow}>
          <TimeLine numberOfChannels={channels.length} />
          <div className={classes.hoursRow}>
            {LIST_OF_HOURS_IN_A_DAY.map((hour) => (
              <div key={hour} className={classes.hourRoot}>
                <div className={classes.hour}>{hour} </div>
                <div className={classes.hourMarker} />
              </div>
            ))}
          </div>
          {channels.map((channel, index) => (
            <div key={channel.title} className={classes.channelRoot}>
              <div className={classes.channelList}>
                <ChannelImage
                  key={channel.title}
                  title={channel.title}
                  logo={channel.images.logo}
                />
              </div>
              <ChannelSchedule key={channel.title} channel={channel} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProgrammingGrid;
