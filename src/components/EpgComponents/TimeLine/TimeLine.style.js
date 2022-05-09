import { createUseStyles } from "react-jss";

export default createUseStyles(
  {
    root: {
      position: "absolute",
      top: '3px',
      left: "150px",
      width: "2px",
      height: props => `calc((${props.numberOfChannels} * 3.5rem) + 2rem)`,
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        height: '100%',
        width: "2px",
        zIndex: 2,
        backgroundColor: "#e1a21e",
      },
    },
    content:{
      '&::after': {
        top: 0,
        left: '1px',
        width: '3px',
        height: "1.6rem",
        content: '""',
        zIndex: 2,
        position: "absolute",
        borderRadius: '25px',
        backgroundColor: "#e1a21e",
      },
      '&::before': {
        top: 0,
        left: '-2px',
        width: '3px',
        height: "1.6rem",
        content: '""',
        zIndex: 2,
        position: "absolute",
        borderRadius: '25px',
        backgroundColor: "#e1a21e",
      },
    }
  },
  { name: "TimeLine" }
);
