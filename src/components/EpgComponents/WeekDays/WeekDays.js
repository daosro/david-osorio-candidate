import React from "react";
import moment from "moment";
import clsx from "clsx";

import ChannelImage from "../ChannelImage";
import { MdStarRate } from "react-icons/md";
import { getDaysOfTheWeek } from "../../../utils/date";

import useStyles from "./WeekDays.style";
import { DATE_PATTERN_DDD_DD_MM } from "../../../constants/date";

const LIST_OF_DAYS_IN_A_WEEK = getDaysOfTheWeek();

const currentDay = moment().format(DATE_PATTERN_DDD_DD_MM);

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
          <div
            key={day}
            className={clsx({ [classes.currentDay]: day === currentDay })}
          >
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
