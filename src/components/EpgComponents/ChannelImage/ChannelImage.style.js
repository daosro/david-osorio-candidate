import { createUseStyles } from "react-jss";

export default createUseStyles(
  {
    root: {
      height: "3.5rem",
      width: "4rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#202020",
      borderBottom: "1px solid",
      borderBottomColor: "#393939",
    },
    imageObject: {
      display: "flex",
      width: "50%",
      height: "50%",
      justifyContent: "center",
    },
  },
  { name: "ChannelImage" }
);
