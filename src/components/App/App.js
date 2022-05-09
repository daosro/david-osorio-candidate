import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EPGS_PATH, HOME_PATH } from "../../constants/routes";

import Home from "../../routes/Home"; // Lazy-loaded
import EpgScreen from '../../routes/EpgScreen'; // Lazy-loaded
import Footer from "../Footer"; 

import useStyles from "./App.style";

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Routes>
          <Route exact={true} path={HOME_PATH} element={<Home />} />
          <Route exact={true} path={EPGS_PATH} element={<EpgScreen />} />
        </Routes>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
