import React from "react";
import { Link } from "react-router-dom";
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
      <Link to={HOME_PATH}>
        <MdHome />
      </Link>
      <MdLiveTv />
      <Link to={EPGS_PATH}>
        <MdViewList />
      </Link>
      <MdReplay />
      <MdMenuBook />
    </BottomTabs>
  );
};

export default Footer;
