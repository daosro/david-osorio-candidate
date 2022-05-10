import React, { useCallback } from "react";
import clsx from "clsx";
import { useNavigate  } from "react-router-dom";
import { MdKeyboardArrowLeft, MdPerson, MdSearch } from "react-icons/md";

import useStyles from "./AppBar.style";

const AppBar = ({ simple = false }) => {
  const classes = useStyles({ simple });
  const navigate  = useNavigate ();

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate ]);
  return (
    <header className={classes.root}>
      {simple ? (
        <MdKeyboardArrowLeft
          className={clsx(classes.icon, classes.marginLeft)}
          onClick={handleBack}
        />
      ) : (
        <MdPerson className={clsx(classes.icon, classes.marginLeft)} />
      )}
      <img
        className={classes.logo}
        src={process.env.PUBLIC_URL + "/assets/images/norigin-media-logo.png"}
        alt="NoriginMedia"
      />
      <MdSearch className={clsx(classes.icon, classes.marginRight)} />
    </header>
  );
};

export default AppBar;
