import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles(theme => ({
  imageProduct: {
    width: "100%",
    height: "100%"
  },
  cardProduct: {
    height: 360,
    margin: "30px 0px",
    boxShadow: "0px -1px 9px -4px rgba(0,0,0,0.75)"
  },
  titleProduct: {
    color: "#4c4a49",
    fontSize: 21,
    letterSpacing: 2
  },
  saleProduct: {
    fontSize: 17,
    marginTop: 6,
    color: "#ef7560"
  },
  priceProduct: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ef7560"
  },
  oldPrice: {
    color: "#6b6b6b",
    textDecoration: "line-through"
  },
  buttonBuy: {
    width: 200,
    color: "#fff",
    margin: "10px 0px",
    backgroundColor: "#ef7560",
    "&:hover": {
      backgroundColor: "#ef7560"
    }
  },
  productDetail: {
    height: 360,
    margin: "30px 0px"
  }
}));

const ProductDetail = ({ productDetail }) => {
  const classes = useStyles();
  console.warn(productDetail);
  const product = productDetail[0];

  return (
    <Grid item xs={12} container justify="center">
      <Grid item xs={10} container justify="space-between">
        <Grid item xs={5} className={classes.cardProduct}>
          <img src={product.imageUrl} className={classes.imageProduct} />
        </Grid>
        <Grid
          item
          xs={6}
          container
          alignItems="center"
          className={classes.productDetail}
        >
          <Typography className={classes.titleProduct}>
            {product.productName}
          </Typography>
          <Grid item xs={12}>
            <Typography className={classes.oldPrice}>
              R${" "}
              {parseFloat(1 + product.price)
                .toFixed(2)
                .replace(/\./, ",")}
            </Typography>
          </Grid>
          <Grid item xs={12} container>
            <Typography className={classes.saleProduct}>R$</Typography>
            <Typography className={classes.priceProduct}>
              {product.price.toFixed(2).replace(/\./, ",")}
            </Typography>
          </Grid>
          <Grid item xs={12} container justify="flex-start">
            <Button variant="contained" className={classes.buttonBuy}>
              <Typography className={classes.paddingRight}>COMPRAR</Typography>
              <ShoppingCartOutlinedIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
