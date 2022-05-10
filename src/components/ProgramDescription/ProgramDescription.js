import React, { useMemo } from "react";

import useStyles from "./ProgramDescription.style";

const ProgramDescription = ({ programInfo }) => {
  const classes = useStyles();

  const { images, channelTitle, title, meta, description } = useMemo(
    () => programInfo || {},
    [programInfo]
  );
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.centerContent}>
          <object className={classes.channelIcon} data={images?.icon} type="image/png">
          <img
            alt={title}
            className={classes.channelIcon}
            // I use this image because the logo in the api is not available
            src={process.env.PUBLIC_URL + "/assets/images/Sky1.png"}
          />
        </object>
        </div>
        <div>
          <div className={classes.channelTitle}>{channelTitle}</div>
          <div className={classes.title}>{title}</div>
          <div>
            <span className={classes.tag} >{meta?.year}</span>
            <span>
              {meta?.genres.map((genre) => (
                <span key={genre} className={classes.tag}>{genre}</span>
              ))}
            </span>
          </div>
        </div>
      </div>
      <div className={classes.description}>{description}</div>

      <div>Cast: {meta?.cast?.map(({ name }) => name).join(", ")}</div>
      <div>Creators: {meta?.creators?.map(({ name }) => name).join(", ")}</div>
    </div>
  );
};

export default ProgramDescription;
