import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";

import Logo from "../../assets/logo.png";
import MenuProfile from "../MenuProfile/MenuProfileMobile";
import ShoppingCartMobile from "../MenuShoppingCart/ShoppingCartMobile";
import { handleMenuProfile, handleShoppingCard } from "../../store/actions";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 70,
    color: "#6b6b6b",
    borderBottom: "1px solid #eeeeee"
  },
  image: {
    height: 50
  },
  icon: {
    fontSize: 30
  },
  paper: {
    width: "80%"
  },
  categories: {
    margin: 10,
    color: "#6b6b6b"
  }
});

const HeaderMobile = ({ openMenuProfile, openShoppingCart, dispatch }) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    openCategories: false,
    openMenuProfile: false
  });

  const categories = [
    { id: 1, name: "Categoria 01" },
    { id: 2, name: "Categoria 02" },
    { id: 3, name: "Categoria 03" },
    { id: 4, name: "Categoria 04" }
  ];

  return (
    <Grid
      item
      xs={12}
      container
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={2} sm={1}>
        <IconButton
          onClick={() => setState({ ...state, openCategories: true })}
          aria-label="add to shopping cart"
        >
          <MenuOutlinedIcon className={classes.icon} />
        </IconButton>

        <Drawer
          anchor="left"
          open={state.openCategories}
          classes={{ paper: classes.paper }}
        >
          <Grid item xs={12}>
            <Grid item xs={12} container justify="flex-end">
              <IconButton
                onClick={() => setState({ ...state, openCategories: false })}
                aria-label="add to shopping cart"
              >
                <CloseIcon className={classes.icon} />
              </IconButton>
            </Grid>
            <Grid item xs={12} container justify="center">
              {categories.map(item => (
                <Grid
                  item
                  xs={10}
                  container
                  key={item.id}
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item xs={3}>
                    <LocalShippingOutlinedIcon />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography className={classes.categories}>
                      {item.name}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Drawer>
      </Grid>

      <Grid item xs={6} sm={9}>
        <img src={Logo} className={classes.image} />
      </Grid>

      <Grid item xs={4} sm={2} container justify="space-between">
        <IconButton
          onClick={() => dispatch(handleMenuProfile(openMenuProfile))}
        >
          <PersonOutlineOutlinedIcon className={classes.icon} />
        </IconButton>
        <IconButton
          onClick={() => dispatch(handleShoppingCard(openShoppingCart))}
          aria-label="add to shopping cart"
        >
          <ShoppingCartOutlinedIcon className={classes.icon} />
        </IconButton>
      </Grid>
      <MenuProfile />
      <ShoppingCartMobile />
    </Grid>
  );
};

const mapStateToProps = state => ({
  openMenuProfile: state.store.openMenuProfile,
  openShoppingCart: state.store.openShoppingCart
});

export default connect(mapStateToProps)(HeaderMobile);
