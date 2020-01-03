import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import { handleBuyItemProducts } from "../../store/actions";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  highlight: {
    height: 150,
    marginTop: 20,
    [theme.breakpoints.only("xs")]: {
      height: 100
    }
  },
  titleHighlight: {
    color: "#4c4a49",
    letterSpacing: 4,
    fontSize: 24
  },
  cardProduct: {
    height: 360,
    margin: "30px 0px",
    border: "1px solid #eeeeee"
  },
  imgProducts: {
    height: 250,
    cursor: "pointer"
  },
  imgProduct: {
    width: "100%",
    height: "100%"
  },
  titleProduct: {
    color: "#4c4a49",
    fontSize: 11,
    letterSpacing: 2
  },
  saleProduct: {
    fontSize: 14,
    marginTop: 2,
    color: "#ef7560"
  },
  priceProduct: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ef7560"
  },
  spacing: {
    height: 25
  },
  hoverExpand: {
    position: "relative",
    "&:hover": {
      height: 400,
      top: -5,
      boxShadow: "0px -1px 40px -8px rgba(0,0,0,0.75)"
    }
  },
  buttonBuy: {
    color: "#fff",
    margin: "10px 0px",
    backgroundColor: "#ef7560",
    "&:hover": {
      backgroundColor: "#ef7560"
    }
  },
  paddingRight: {
    paddingRight: 10
  }
}));

const ProductsItems = ({ products, dispatch }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({ buy: false, value: null });

  const showBuy = event => {
    setState({ buy: true, value: event.target && event.target.id });
  };

  const selectedBuy = event => {
    const index = event.target && event.target.id;
    const productSelected = products && products[index];

    if (productSelected) {
      return dispatch(
        handleBuyItemProducts({ ...productSelected, quantity: 1 })
      );
    }
  };

  return (
    <Grid item xs={12} container justify="center">
      <Grid
        item
        xs={12}
        container
        justify="center"
        alignItems="center"
        className={classes.highlight}
      >
        <Typography className={classes.titleHighlight}>
          Produtos em destaque
        </Typography>
      </Grid>
      <Grid item xs={10} container justify="space-between">
        {products &&
          products.length &&
          products.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={5}
              lg={2}
              container
              justify="center"
              key={item.productId}
              className={[classes.cardProduct, classes.hoverExpand].join(" ")}
              id={item.productId}
              onMouseEnter={event => showBuy(event)}
              onMouseLeave={() => setState({ buy: false, value: null })}
            >
              <Link to={`/product/${item.productId}`}>
                <Grid
                  item
                  xs={12}
                  container
                  justify="center"
                  alignItems="center"
                  className={classes.imgProducts}
                >
                  <img
                    id={item.productId}
                    src={`${item.imageUrl}`}
                    alt={item.productName}
                    className={classes.imgProduct}
                    onMouseEnter={event => showBuy(event)}
                  />
                </Grid>
              </Link>
              <Grid item xs={10}>
                <Grid
                  item
                  xs={12}
                  container
                  justify="flex-start"
                  className={classes.spacing}
                >
                  <Typography className={classes.titleProduct}>
                    {item.productName}
                  </Typography>
                </Grid>
                <Grid item xs={12} container>
                  <Typography className={classes.saleProduct}>R$</Typography>
                  <Typography className={classes.priceProduct}>
                    {item.price.toFixed(2).replace(/\./, ",")}
                  </Typography>
                </Grid>

                {state.buy && state.value === item.productId && (
                  <Grid item xs={12} id={index} container justify="center">
                    <Button
                      fullWidth
                      variant="contained"
                      className={classes.buttonBuy}
                      id={index}
                      onClick={event => selectedBuy(event)}
                    >
                      <Typography id={index} className={classes.paddingRight}>
                        COMPRAR
                      </Typography>
                      <ShoppingCartOutlinedIcon id={index} />
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default ProductsItems;
