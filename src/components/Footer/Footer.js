import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdHome,
  MdLiveTv,
  MdReplay,
  MdViewList,
  MdMenuBook,
} from "react-icons/md";

import { EPGS_PATH, HOME_PATH } from "../../constants/routes";

import BottomTabs from "../BottomTabs";

const Footer = () => {

  return (
    <BottomTabs>
      <NavLink exact={true} strict to={HOME_PATH} >
        <MdHome />
      </NavLink>
      <MdLiveTv />
      <NavLink exact={true} to={EPGS_PATH} >
        <MdViewList />
      </NavLink>
      <MdReplay />
      <MdMenuBook />
    </BottomTabs>
  );
};

export default Footer;
