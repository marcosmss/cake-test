import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { handleShoppingCard } from "../../store/actions";

const useStyles = makeStyles({
  root: {
    width: 330,
    height: 500,
    right: 120,
    top: 67,
    backgroundColor: "#fff",
    position: "absolute",
    zIndex: 9999,
    boxShadow: "0px -1px 6px -1px rgba(0,0,0,0.75)"
  },
  icon: {
    color: "#fff"
  },
  headerShopping: {
    height: 80,
    backgroundColor: "#ef7560",
    textTransform: "uppercase",
    color: "#fff"
  },
  titleShoppingCart: {
    fontSize: 18
  },
  countItems: {
    fontSize: 12
  },
  footerShopping: {
    height: 130,
    bottom: 0,
    position: "absolute",
    backgroundColor: "#fff",
    boxShadow: "0px -1px 6px -1px rgba(0,0,0,0.75)"
  },
  buttonBuy: {
    width: "80%",
    backgroundColor: "#ef7560",
    "&:hover": {
      backgroundColor: "#ef7560"
    }
  },
  buyTitle: {
    fontSize: 16,
    color: "#fff"
  },
  cleanCart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#d5d5d5",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  },
  buttonClean: {
    color: "#d5d5d5"
  },
  totalBuy: {
    fontSize: 15,
    fontWeight: "bold",
    margin: "13px 0px"
  }
});

const ShoppingCartMobile = ({ openShoppingCart, dispatch }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          className={classes.headerShopping}
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={10}
            container
            justify="space-between"
            alignItems="center"
          >
            <Typography className={classes.titleShoppingCart}>
              Meu Carrinho
            </Typography>
            <Typography className={classes.countItems}>03 items(s)</Typography>
            <IconButton
              onClick={() => dispatch(handleShoppingCard(openShoppingCart))}
            >
              <CloseIcon className={classes.icon} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          className={classes.footerShopping}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} container justify="center">
            <Typography className={classes.totalBuy}>
              Total: R$ 80,19
            </Typography>
          </Grid>
          <Grid item xs={12} container justify="center">
            <Button variant="contained" className={classes.buttonBuy}>
              <Typography className={classes.buyTitle}>Comprar</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} container justify="center" alignItems="center">
            <Link
              className={classes.cleanCart}
              onClick={() => dispatch(handleShoppingCard(openShoppingCart))}
            >
              <IconButton
                className={classes.buttonClean}
                onClick={() => dispatch(handleShoppingCard(openShoppingCart))}
              >
                <CloseIcon />
              </IconButton>
              <Typography>Limpar carrinho</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  openShoppingCart: state.store.openShoppingCart
});

export default connect(mapStateToProps)(ShoppingCartMobile);
