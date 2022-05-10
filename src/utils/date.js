import moment from "moment";
import { DATE_PATTERN_DDD_DD_MM } from "../constants/date";

/**
 * Format date to string
 * @param {String} date, date to format
 * @param {String} pattern, pattern to format
 * @returns
 */
export const formatDateStringToPattern = (date, patternFrom, patternTo) => {
  return moment(date, patternFrom).format(patternTo);
};

/**
 * Check if current date is between two dates
 * @param {String} start,
 * @param {String} end,
 * @param {String} pattern,
 * @returns true if date is between start and end, false otherwise
 */
export const isNowBetweenDates = (start, end, pattern) => {
  const now = moment();
  const startDate = moment(start, pattern);
  const endDate = moment(end, pattern);
  return now.isBetween(startDate, endDate);
};

export const getMinutesBetweenDates = (start, end, pattern) => {
  const startDate = moment(start, pattern);
  const endDate = moment(end, pattern);
  return Math.abs(endDate.diff(startDate, "minutes"));
};

export const getMinutesOfTheDay = () => {
  const now = moment();
  const mmtMidnight = moment().startOf("day");
  return Math.abs(now.diff(mmtMidnight, "minutes"));
};

export const isDateBeforeNow = (date, pattern) => {
  const now = moment();
  const dateToCompare = moment(date, pattern);
  return dateToCompare.isBefore(now);
}

/**
 * Get the list of ahours in a day
 * @returns {Array} of hours in a day
 */
export const getListOfHoursInADay = () =>
  Array(24)
    .fill(null)
    .map((_, index) => `${String(index).padStart(2, "0")}:00`);

/**
 * Return the list of days in a week
 * @returns {Array} of days in a week in ddd DD.MM. format
 */
export const getDaysOfTheWeek = () =>
  Array(7)
    .fill(null)
    .map((_, index) =>
      moment().startOf("week").add(index, "days").format(DATE_PATTERN_DDD_DD_MM)
    );
