import React, { Fragment, useEffect } from "react";

import { getEPGScreenData } from "../../services/epg";

import AppBar from "../../components/AppBar";
import ProgrammingGrid from "../../components/EpgComponents/ProgrammingGrid";
import Spinner from "./../../components/Spinner";

import useStyles from "./EpgScreen.style";
import { getFavoriteChannels } from "../../services/user";

const EpgScreen = () => {
  const classes = useStyles();
  const [channels, setChannels] = React.useState([]);
  const [favChannelIds, setFavChannelIds] = React.useState([]);

  useEffect(() => {
    getEPGScreenData()
      .then(({ data: { channels } }) => {
        setChannels(channels);
      })
      .catch((error) => {
        console.error(error);
      });
      // The following api call should be stored in redux to allow reuse 
      // of the data in the all the app. But for now I'm just use a state.
    getFavoriteChannels()
      .then(({ data: { channels = [] } }) => {
        setFavChannelIds(channels?.map((channel) => channel.id));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <AppBar />
      <div className={classes.root}>
        {channels.length > 0 ? (
          <ProgrammingGrid channels={channels} favChannelIds={favChannelIds} />
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default EpgScreen;
