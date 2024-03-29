import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EPGS_PATH, HOME_PATH, LIVE_PATH, VODP_PATH } from "../../constants/routes";

import Home from "../../routes/Home"; // Lazy-loaded
import EpgScreen from '../../routes/EpgScreen'; // Lazy-loaded
import Live from '../../routes/Live'; // Lazy-loaded
import VideoOnDemand from '../../routes/VideoOnDemand'; // Lazy-loaded

import Footer from "../Footer"; 

import useStyles from "./App.style";

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Routes>
          <Route exact path={HOME_PATH} element={<Home />} />
          <Route exact path={EPGS_PATH} element={<EpgScreen />} />
          <Route exact path={LIVE_PATH} element={<Live />} />
          <Route exact path={VODP_PATH} element={<VideoOnDemand />} />
        </Routes>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
