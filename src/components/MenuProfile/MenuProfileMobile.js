import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { handleMenuProfile } from "../../store/actions";
import MyProduct from "./MyProduct";

const useStyles = makeStyles({
  root: {
    width: "80%",
    height: "50%",
    display: "block"
  },
  icon: {
    color: "#ef7560"
  },
  titleUser: {
    fontSize: 24,
    color: "#ef7560"
  },
  textLight: {
    fontSize: 16,
    color: "#d5d5d5"
  },
  logoutUser: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginTop: 20,
    color: "#ef7560",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  },
  notBuy: {
    fontSize: 15
  }
});

const MenuProfile = ({ openMenuProfile, productSold, dispatch }) => {
  const classes = useStyles();
  return (
    <Drawer
      anchor="right"
      open={openMenuProfile}
      classes={{ paper: classes.root }}
    >
      <Grid item xs={12}>
        <Grid item xs={12} container justify="flex-end">
          <IconButton
            onClick={() => dispatch(handleMenuProfile(openMenuProfile))}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        </Grid>
        <Grid item xs={12} container justify="center">
          <Grid item xs={12} container justify="center">
            <Typography className={classes.titleUser}>Olá, Marcos</Typography>
          </Grid>
          <Grid item xs={12} container justify="center"></Grid>
          <Typography className={classes.textLight}>
            marcosmss1304@gmail.com
          </Typography>
        </Grid>
        <Link className={classes.logoutUser}>
          <Typography>sair</Typography>
        </Link>
      </Grid>

      <Divider variant="middle" style={{ width: "90%", margin: 10 }} />
      <Grid item xs={12} container justify="center">
        <Typography className={classes.textLight}>Última compra</Typography>
      </Grid>
      {productSold && productSold.length ? (
        <MyProduct productSold={productSold} />
      ) : (
        <Grid
          item
          xs={12}
          container
          justify="center"
          style={{ margin: "10px 0px" }}
        >
          <Grid item xs={10}>
            <Typography className={classes.notBuy}>
              Você ainda não efetuou compras
            </Typography>
          </Grid>
        </Grid>
      )}
    </Drawer>
  );
};

const mapStateToProps = state => ({
  openMenuProfile: state.store.openMenuProfile,
  productSold: state.store.productSold
});

export default connect(mapStateToProps)(MenuProfile);
