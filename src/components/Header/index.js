import React from "react";

import Grid from "@material-ui/core/Grid";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

const Header = ({ width }) => {
  const isMobile = isWidthDown("sm", width);

  return <Grid>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</Grid>;
};

export default withWidth()(Header);
