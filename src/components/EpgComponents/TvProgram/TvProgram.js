import React, { useCallback, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { useNavigate  } from "react-router-dom";
import { generatePath } from "react-router";

import {
  DATE_PATTERN_HHMM,
  DATE_PATTERN_YYYY_MM_DD_T,
} from "../../../constants/date";
import {
  formatDateStringToPattern,
  getMinutesBetweenDates,
  isDateBeforeNow,
  isNowBetweenDates,
} from "../../../utils/date";

import useStyles from "./TvProgram.style";
import { LIVE_PATH, VODP_PATH } from "../../../constants/routes";

const TvProgram = ({
  title,
  id,
  start,
  end,
  duration = getMinutesBetweenDates(start, end, DATE_PATTERN_YYYY_MM_DD_T),
}) => {
  const navigate = useNavigate ();
  const [isLiveProgram, setIsLiveProgram] = useState(false);
  const [isProgramOver, setIsProgramOver] = useState(false);
  const classes = useStyles({ duration, useLink: isLiveProgram || isProgramOver });

  /**
   * Check if program is live every minute to update the styles,
   * I know that is not the best way to do it, with more time I would calculate the remaining time to start or end
   * the program and update the styles accordingly to the remaining time not every minute.
   */
  useEffect(() => {
    let interval;
    const isProgramEnded = isDateBeforeNow(end, DATE_PATTERN_YYYY_MM_DD_T);
    if (!isProgramEnded) {
      interval = setInterval(() => {
        setIsLiveProgram(
          isNowBetweenDates(start, end, DATE_PATTERN_YYYY_MM_DD_T)
        );
        const isProgramEnded = isDateBeforeNow(end, DATE_PATTERN_YYYY_MM_DD_T);
        setIsProgramOver(isProgramEnded);
        if (isProgramEnded) {
          clearInterval(interval);
        }
      }, 1000);
    }
    setIsProgramOver(isProgramEnded);
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

  const handleClick = useCallback(() => {
    if (isLiveProgram || isProgramOver) {
      navigate(
        isProgramOver
          ? generatePath(VODP_PATH, { programId: id })
          : generatePath(LIVE_PATH, { channelId: id })
      );
    }
  }, [id, isLiveProgram, isProgramOver]);

  return (
    <div
      className={clsx(classes.root, { [classes.live]: isLiveProgram })}
      onClick={handleClick}
    >
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
