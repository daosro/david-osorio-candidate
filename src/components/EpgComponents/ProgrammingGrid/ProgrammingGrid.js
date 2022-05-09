import React, { useCallback, useEffect, useRef } from "react";
import { getListOfHoursInADay, getMinutesOfTheDay } from "../../../utils/date";
import WeekDays from "../WeekDays";
import TimeLine from "../TimeLine";
import ChannelImage from "../ChannelImage";
import ChannelSchedule from "../ChannelSchedule";

import useStyles from "./ProgrammingGrid.style";

const LIST_OF_HOURS_IN_A_DAY = getListOfHoursInADay();

const ProgrammingGrid = ({ channels, favChannelIds }) => {
  const classes = useStyles();
  const epgContainerRef = useRef(null);
  const [filterFavorites, setFilterFavorites] = React.useState(false);
  const [channelsToRender, setChannelsToRender] = React.useState(channels);

  // Filter the channels to render
  useEffect(() => {
    if (filterFavorites) {
      setChannelsToRender(
        channels.filter((channel) => favChannelIds.includes(channel.id))
      );
    } else {
      setChannelsToRender(channels);
    }
  }, [channels, favChannelIds, filterFavorites]);

  // Scroll to the current time in the grid
  const handleNowButtonClick = useCallback(() => {
    const minutes = getMinutesOfTheDay();
    const scrollToX =
      (400 / 60) * minutes - (document.body.clientWidth / 2 - 50);
    epgContainerRef.current.scrollTo({ left: scrollToX, behavior: "smooth" });
  }, [epgContainerRef]);

  const handleFilterFavoritesClick = useCallback(() => {
    // TODO: To use this functionality, the user should be logged in.
    setFilterFavorites((prevState) => !prevState);
  }, []);

  return (
    <>
      <button className={classes.nowButton} onClick={handleNowButtonClick}>
        NOW
      </button>

      <WeekDays
        filterFavorites={filterFavorites}
        onFavIconClick={handleFilterFavoritesClick}
      />

      <div className={classes.grid}>
        <div ref={epgContainerRef} className={classes.gridProgramRow}>
          <TimeLine numberOfChannels={channelsToRender.length} />
          <div className={classes.hoursRow}>
            {LIST_OF_HOURS_IN_A_DAY.map((hour) => (
              <div key={hour} className={classes.hourRoot}>
                <div className={classes.hour}>{hour} </div>
                <div className={classes.hourMarker} />
              </div>
            ))}
          </div>
          {channelsToRender.map((channel, index) => (
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
