import { createUseStyles } from 'react-jss';

export default createUseStyles({
  root: {

  },
  image:{
    width: "calc(67vw + 80px)",
  },
  info: {
    paddingTop: "4.2rem",
    width: "67vw",
    display: "flex",
    flexDirection: 'column',
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
    transform: "translateX(-50%)",
  },
}, { name: 'VideoOnDemand' });