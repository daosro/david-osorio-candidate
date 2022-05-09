import React, { Fragment, Suspense } from "react";

import { fetchEPGScreenData } from "../../services/epg";

import AppBar from "../../components/AppBar";
import ProgrammingGrid from "../../components/EpgComponents/ProgrammingGrid";
import Spinner from "./../../components/Spinner";

import useStyles from "./EpgScreen.style";

const resource = fetchEPGScreenData();

const EpgScreen = () => {
  const classes = useStyles();
  const { channels } = resource.read();
  return (
    <>
      <AppBar />
      <div className={classes.root}>
        <Suspense fallback={<Spinner />}>
          <ProgrammingGrid channels={channels} />
        </Suspense>
      </div>
    </>
  );
};

export default EpgScreen;
