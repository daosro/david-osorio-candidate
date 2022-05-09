import React from "react";
import clsx from "clsx";

import useStyles from "./ChannelImage.style";

const ChannelImage = ({
  title,
  logo,
  icon: IconComponent,
  className,
  onClick,
}) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} onClick={onClick}>
      {logo ? (
        <object className={classes.imageObject} data={logo} type="image/png">
          <img
            alt={title}
            // I use this image because the logo in the api is not available
            src="https://thumbs.dreamstime.com/b/tv-channel-program-icon-logo-design-vector-template-tv-channel-program-icon-logo-design-inspiration-vector-template-168201144.jpg"
          />
        </object>
      ) : (
        <IconComponent className={classes.icon} />
      )}
    </div>
  );
};

export default ChannelImage;
