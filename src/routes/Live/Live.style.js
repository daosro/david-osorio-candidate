import { createUseStyles } from "react-jss";

export default createUseStyles(
  {
    root: {},
    player: {
      width: "67vw",
      height: "0",
      top: "4.1rem",
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  { name: "Live" }
);
