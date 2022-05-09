import React, { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import {
  DATE_PATTERN_HHMM,
  DATE_PATTERN_YYYY_MM_DD_T,
} from "../../../constants/date";
import {
  formatDateStringToPattern,
  getMinutesBetweenDates,
  isNowBetweenDates,
} from "../../../utils/date";

import useStyles from "./TvProgram.style";

const TvProgram = ({
  title,
  id,
  start,
  end,
  duration = getMinutesBetweenDates(start, end, DATE_PATTERN_YYYY_MM_DD_T),
}) => {
  const classes = useStyles({ duration });
  const [isLiveProgram, setIsLiveProgram] = useState(true);

  /**
   * Check if program is live every minute to update the styles,
   * I know that is not the best way to do it, with more time I would calculate the remaining time to start or end
   * the program and update the styles accordingly to the remaining time not every minute.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLiveProgram(
        isNowBetweenDates(start, end, DATE_PATTERN_YYYY_MM_DD_T)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [start, end]);

  const { startTime, endTime } = useMemo(
    () => ({
      startTime: formatDateStringToPattern(
        start,
        DATE_PATTERN_YYYY_MM_DD_T,
        DATE_PATTERN_HHMM
      ),
      endTime: formatDateStringToPattern(
        end,
        DATE_PATTERN_YYYY_MM_DD_T,
        DATE_PATTERN_HHMM
      ),
    }),
    [start, end]
  );

  return (
    <div className={clsx(classes.root, { [classes.live]: isLiveProgram })}>
      <div className={classes.content}>
        <div className={classes.title}>{title}</div>
        <div className={classes.date}>
          {startTime} - {endTime}
        </div>
      </div>
    </div>
  );
};

export default TvProgram;
