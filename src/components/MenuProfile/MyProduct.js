import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  titleProduct: {
    fontSize: 11,
    color: "#4c4a49"
  },
  priceProduct: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#4c4a49"
  },
  imageProduct: {
    width: "100%",
    height: "100%"
  }
});

const MyProduct = ({ productSold }) => {
  const classes = useStyles();
  const product = productSold && productSold[productSold.length - 1];
  const totalValue = product.price * product.quantity;

  return (
    <Grid item xs={12} container justify="space-between" alignItems="center">
      <Grid item xs={4}>
        <img src={product.imageUrl} className={classes.imageProduct} />
      </Grid>
      <Grid item xs={4}>
        <Typography className={classes.titleProduct}>
          {product.productName}
        </Typography>
      </Grid>
      <Grid item xs={4} container justify="center">
        <Typography className={classes.priceProduct}>
          R$: {totalValue.toFixed(2).replace(/\./, ",")}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MyProduct;
