import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import ProductCart from "./ProductCart";
import { handleShoppingCard, handleCleanCart } from "../../store/actions";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%"
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
    fontSize: 20
  },
  countItems: {
    fontSize: 13
  },
  footerShopping: {
    height: 130,
    bottom: 0,
    backgroundColor: "#fff",
    position: "absolute",
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
    fontSize: 17,
    color: "#fff"
  },
  cleanCart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#d5d5d5",
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

const ShoppingCartMobile = ({
  openShoppingCart,
  productSelected,
  dispatch
}) => {
  const classes = useStyles();

  const valuePrice = productSelected && productSelected.map(item => item.price);
  const valueQuantity =
    productSelected && productSelected.map(item => item.quantity);

  const totalValue = valuePrice * valueQuantity;

  return (
    <Drawer
      anchor="right"
      open={openShoppingCart}
      classes={{ paper: classes.root }}
    >
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
            <Typography className={classes.countItems}>
              {productSelected.length} items(s)
            </Typography>
            <IconButton
              onClick={() => dispatch(handleShoppingCard(openShoppingCart))}
            >
              <CloseIcon className={classes.icon} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      {productSelected &&
        productSelected.map(item => (
          <ProductCart
            key={item.productId}
            productSelected={item}
            dispatch={dispatch}
          />
        ))}
      <Grid item xs={12} style={{ position: "relative", bottom: 0 }}>
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
              Total: R$ {totalValue.toFixed(2).replace(/\./, ",")}
            </Typography>
          </Grid>
          <Grid item xs={12} container justify="center">
            <Button variant="contained" className={classes.buttonBuy}>
              <Typography className={classes.buyTitle}>Comprar</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} container justify="center" alignItems="center">
            <Link className={classes.cleanCart}>
              <IconButton
                className={classes.buttonClean}
                onClick={() => dispatch(handleCleanCart(productSelected))}
              >
                <CloseIcon />
              </IconButton>
              <Typography>Limpar carrinho</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  );
};

const mapStateToProps = state => ({
  openShoppingCart: state.store.openShoppingCart,
  productSelected: state.store.buyItem
});

export default connect(mapStateToProps)(ShoppingCartMobile);
