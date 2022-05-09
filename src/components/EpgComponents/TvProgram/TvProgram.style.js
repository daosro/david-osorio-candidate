import { createUseStyles } from "react-jss";

export default createUseStyles(
  {
    root: {
      display: "flex",
      borderRight: "1px solid",
      flexDirection: "column",
      backgroundColor: "#000000",
      borderRightColor: "#393939",
      width: props => `calc(((400px / 60) * ${props.duration}) - 1px)`
    },
    live: {
      backgroundColor: "#393939",
    },
    content: {
      padding: "0.5rem",
    },
    title: {
      fontSize: "13px",
    },
    date: {
      color: "#939393",
      fontSize: "12px",
    },
  },
  { name: "TvProgram" }
);
