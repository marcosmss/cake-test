import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import Logo from "../../assets/logo.png";
import MenuProfile from "../MenuProfile/MenuProfile";
import ShoppingCart from "../MenuShoppingCart/ShoppingCart";
import { handleMenuProfile, handleShoppingCard } from "../../store/actions";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 65,
    color: "#6b6b6b",
    borderBottom: "1px solid #eeeeee"
  },
  image: {
    height: 50
  },
  linkCount: {
    display: "flex",
    color: "#6b6b6b",
    textDecoration: "none",
    paddingRight: 60,
    "&:hover": {
      textDecoration: "none"
    }
  },
  icon: {
    paddingRight: 6
  }
});

const Header = ({ openMenuProfile, openShoppingCart, dispatch }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} container className={classes.root} justify="center">
      <Grid item xs={10} container justify="center">
        <Grid item xs container justify="space-between" alignItems="center">
          <img src={Logo} className={classes.image} />
          <Typography>Categoria 01</Typography>
          <Typography>Categoria 02</Typography>
          <Typography>Categoria 03</Typography>
          <Typography>Categoria 04</Typography>
        </Grid>
        <Grid item xs={4} container justify="flex-end" alignItems="center">
          <Link
            component="button"
            className={classes.linkCount}
            onClick={() => dispatch(handleMenuProfile(openMenuProfile))}
          >
            <PersonOutlineOutlinedIcon className={classes.icon} />
            <Typography>Minha conta</Typography>
          </Link>

          {openMenuProfile && <MenuProfile />}

          <IconButton
            aria-label="add to shopping cart"
            onClick={() => dispatch(handleShoppingCard(openShoppingCart))}
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>

          {openShoppingCart && <ShoppingCart />}
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  openMenuProfile: state.store.openMenuProfile,
  openShoppingCart: state.store.openShoppingCart
});
export default connect(mapStateToProps)(Header);
