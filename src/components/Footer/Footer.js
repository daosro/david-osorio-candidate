import React from "react";
import { generatePath } from "react-router";
import { NavLink } from "react-router-dom";
import {
  MdHome,
  MdLiveTv,
  MdReplay,
  MdViewList,
  MdMenuBook,
} from "react-icons/md";

import { EPGS_PATH, HOME_PATH, LIVE_PATH, VODP_PATH } from "../../constants/routes";

import BottomTabs from "../BottomTabs";

const Footer = () => {
  return (
    <BottomTabs>
      <NavLink to={HOME_PATH}>
        <MdHome />
      </NavLink>
      <NavLink to={generatePath(LIVE_PATH, { channelId: 'dummy_program_id' })}>
        <MdLiveTv />
      </NavLink>
      <NavLink to={EPGS_PATH}>
        <MdViewList />
      </NavLink>
      <NavLink to={generatePath(VODP_PATH, { programId: 'dummy_program_id' })}>
      <MdReplay />
      </NavLink>
      <MdMenuBook />
    </BottomTabs>
  );
};

export default Footer;
