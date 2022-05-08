import React from 'react';

import AppBar from '../../components/AppBar';

import useStyles from './EpgScreen.style';

const EpgScreen = () => {
  const classes = useStyles();
  return (
    <>
    <AppBar />
    <div className={classes.root}>
      EPG Screen
    </div>
    </>
  );
};

export default EpgScreen;