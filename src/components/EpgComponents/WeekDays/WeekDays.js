import React from "react";
import clsx from "clsx";

import ChannelImage from "../ChannelImage";
import { MdStarRate } from "react-icons/md";
import { getDaysOfTheWeek } from "../../../utils/date";

import useStyles from "./WeekDays.style";

const LIST_OF_DAYS_IN_A_WEEK = getDaysOfTheWeek();

const WeekDays = ({ filterFavorites, onFavIconClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.favIconContainer}>
        <ChannelImage
          title="Favorite channels"
          icon={MdStarRate}
          onClick={onFavIconClick}
          className={clsx(classes.favChannelIcon, {
            [classes.favIconActive]: filterFavorites,
          })}
        />
      </div>
      <div className={classes.daysContainer}>
        {LIST_OF_DAYS_IN_A_WEEK.map((day, index) => (
          <div key={day}>
            {day.substr(0, 3)}
            <br />
            {day.substr(4)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekDays;
