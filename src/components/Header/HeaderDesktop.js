import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import LinkMaterial from "@material-ui/core/Link";
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
    marginRight: 60,
    "&:hover": {
      textDecoration: "none"
    }
  },
  icon: {
    paddingRight: 6
  },
  countCart: {
    fontSize: 12,
    background: "#ff0000",
    borderRadius: "50%",
    color: "#fff",
    marginBottom: 15,
    padding: "0px 5px"
  }
});

const Header = ({
  openMenuProfile,
  openShoppingCart,
  productSelected,
  dispatch
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} container className={classes.root} justify="center">
      <Grid item xs={10} container justify="center">
        <Grid item xs container justify="space-between" alignItems="center">
          <Link to="/">
            <img src={Logo} className={classes.image} />
          </Link>
          <Typography>Categoria 01</Typography>
          <Typography>Categoria 02</Typography>
          <Typography>Categoria 03</Typography>
          <Typography>Categoria 04</Typography>
        </Grid>
        <Grid item xs={4} container justify="flex-end" alignItems="center">
          <LinkMaterial
            component="button"
            className={classes.linkCount}
            onClick={() => dispatch(handleMenuProfile(openMenuProfile))}
          >
            <PersonOutlineOutlinedIcon className={classes.icon} />
            <Typography>Minha conta</Typography>
          </LinkMaterial>

          {openMenuProfile && <MenuProfile />}

          <IconButton
            aria-label="add to shopping cart"
            onClick={() => dispatch(handleShoppingCard(openShoppingCart))}
          >
            <ShoppingCartOutlinedIcon />
            <Grid className={classes.countCart}>
              {productSelected && productSelected.length}
            </Grid>
          </IconButton>

          {openShoppingCart && <ShoppingCart />}
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  openMenuProfile: state.store.openMenuProfile,
  openShoppingCart: state.store.openShoppingCart,
  productSelected: state.store.buyItem
});
export default connect(mapStateToProps)(Header);
