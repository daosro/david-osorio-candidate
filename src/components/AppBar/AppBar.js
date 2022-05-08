import React from 'react';

import useStyles from './AppBar.style';

const AppBar = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      AppBar
    </header>
  );
};

export default AppBar;