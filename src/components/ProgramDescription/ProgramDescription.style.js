import { createUseStyles } from "react-jss";

export default createUseStyles(
  {
    root: {
      display: "flex",
      width: "100%",
      marginTop: "5px",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: "40px",
      backgroundColor: "#000000",
      boxShadow: '0px -6px 3px #000000',
    },
    centerContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      marginBottom: "1rem",
    },
    channelIcon: {
      maxWidth: "5rem",
      maxHeight: "4rem",
      marginRight: "1.5rem",
    },
    channelTitle: {
      fontSize: "1.5rem",
    },
    title: {
      fontSize: "2.5rem",
    },
    tag: {
      fontSize: "0.8rem",
      fontWeight: "bold",
      marginRight: "0.5rem",
    },
    description: {
      fontSize: "1rem",
      marginBottom: "1rem",
    }
  },
  { name: "ProgramDescription" }
);
