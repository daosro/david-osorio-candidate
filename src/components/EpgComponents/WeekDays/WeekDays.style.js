import { createUseStyles } from "react-jss";

export default createUseStyles(
  {
    root: {
      display: "flex",
      flexDirection: "row",
    },
    favIconContainer: {
      position: "sticky",
      left: 0,
      zIndex: 3,
      boxShadow: "7px 0 10px 0 #101010",
    },
    favChannelIcon: {
      cursor: "pointer",
    },
    favIconActive: {
      color: "#e1a21e",
    },
    daysContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      textTransform: "uppercase",
      fontSize: "0.8rem",
      width: "calc(100vw - 4rem)",
    },
  },
  { name: "WeekDays" }
);
