import { createUseStyles } from "react-jss";

export default createUseStyles(
  {
    root: {
      backgroundColor: "#000000",
      display: "flex",
      width: "100%",
      height: "4rem",
      justifyContent: "space-between",
      alignItems: "center",
    },
    userIcon: {
      marginLeft: "1rem",
      height: "2em",
      width: "2em",
    },
    logo: {
      width: "3rem",
      height: "3rem",
    },
    searchIcon: {
      marginRight: "1rem",
      height: "2em",
      width: "2em",
    },
  },
  { name: "AppBar" }
);
