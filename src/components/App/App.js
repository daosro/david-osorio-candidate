import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EPGS_PATH, HOME_PATH } from "../../constants/routes";

import Home from "../../routes/Home";
import EpgScreen from './../../routes/EpgScreen';
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
        </Routes>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
