import React from "react";

import AppBar from "./../../components/AppBar";

import useStyles from "./Home.style";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar />
      <div className={classes.root}>
        <h1> David Osorio Rodríguez </h1>
        <p>
          This Repo is intended to instruct new Frontend developer (Native &
          Web) candidates on the steps to follow for completing the Norigin
          Media testing task.
        </p>
        <h2>Please go to the epg section for a interactive experience</h2>
        <img
          className={classes.arrow}
          src={process.env.PUBLIC_URL + "/assets/images/arrow.png"}
          alt="NoriginMedia"
        />
      </div>
    </>
  );
};

export default Home;
