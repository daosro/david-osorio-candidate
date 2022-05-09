import React from "react";

import useStyles from "./ChannelImage.style";

const ChannelImage = ({ title, logo }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <object className={classes.imageObject} data={logo} type="image/png">
        <img 
          alt={title}
          // I use this image because the logo in the api is not available
          src="https://thumbs.dreamstime.com/b/tv-channel-program-icon-logo-design-vector-template-tv-channel-program-icon-logo-design-inspiration-vector-template-168201144.jpg" 
          />
      </object>
    </div>
  );
};

export default ChannelImage;
