import { createUseStyles } from "react-jss";

export default createUseStyles(
  {
    root: {
      backgroundColor: (props) => (props.simple ? "transparent" : "#000000"),
      display: "flex",
      width: "100%",
      height: "4rem",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 4,
      position: "fixed",
      color: '#ffffff', 
    },
    icon: {
      height: "2em",
      width: "2em",
      cursor: "pointer",
    },
    marginLeft: {
      marginLeft: "1rem",
    },
    marginRight: {
      marginRight: "1rem",
    },
    logo: {
      width: "3rem",
      height: "3rem",
    },
  },
  { name: "AppBar" }
);
