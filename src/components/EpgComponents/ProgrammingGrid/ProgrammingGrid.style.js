import { createUseStyles } from "react-jss";

export default createUseStyles(
  {
    root: {},
    grid: {
      display: "flex",
      flexDirection: "row",
      overflow: "hidden",
    },
    gridProgramRow: {
      overflowX: "auto",
      overflowY: "hidden",
      position: "relative",
    },
    hoursRow: {
      display: "flex",
      flexDirection: "row",
      marginLeft: "4rem",
      width: "calc((400px * 24))",
      borderTop: '1px solid #575757',
    },
    hourRoot: {
      width: "400px",
      height: "2rem",
      position: "relative",
    },
    hour: {
      position: "absolute",
      top: 0,
      left: "-1.2rem",
    },
    hourMarker: {
      position: "absolute",
      bottom: 0,
      left: "-1px",
      height: "0.8rem",
      borderLeft: "1px solid #393939",
    },
    channelRoot: {
      display: "flex",
      flexDirection: "row",
      width: "calc((400px * 24))",
    },
    channelList: {
      position: "sticky",
      left: 0,
      zIndex: 3,
      boxShadow: "7px 0 10px 0 #101010",
    },
    nowButton: {
      position: "fixed",
      height: "30px",
      bottom: "65px",
      right: "20px",
      backgroundColor: "#e1a21e",
      color: "#FFF",
      borderRadius: "5px",
      textAlign: "center",
      boxShadow: "1px 1px 0px #939393",
      zIndex: "4",
      fontSize: "12px",
      border: "1px solid #393939",
      cursor: "pointer",
    },

  },
  { name: "ProgrammingGrid" }
);
