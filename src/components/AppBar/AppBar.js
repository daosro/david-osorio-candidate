import React from "react";

import { MdPerson, MdSearch } from "react-icons/md";

import useStyles from "./AppBar.style";

const AppBar = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <MdPerson className={classes.userIcon} />
      <img
        className={classes.logo}
        src={process.env.PUBLIC_URL + "/assets/images/norigin-media-logo.png"}
        alt="NoriginMedia"
      />
      <MdSearch className={classes.searchIcon} />
    </header>
  );
};

export default AppBar;
