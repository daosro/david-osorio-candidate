import React from 'react';

import useStyles from './BottomTabs.style';

const BottomTabs = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default BottomTabs;