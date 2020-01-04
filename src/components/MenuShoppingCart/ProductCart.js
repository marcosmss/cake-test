import React from "react";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import CloseIcon from "@material-ui/icons/Close";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";

import { removeProductCart } from "../../store/actions";

const useStyles = makeStyles({
  imageProduct: {
    width: "100%",
    height: "100%"
  },
  titleProduct: {
    color: "#4c4a49",
    fontSize: 13,
    letterSpacing: 1
  },
  countCart: {
    width: 80,
    height: 36,
    marginRight: 10,
    color: "#ef7560",
    border: "1px solid #eeeeee"
  },
  icon: {
    fontSize: 15
  },
  priceProduct: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4c4a49",
    marginRight: 18
  }
});

const ProductCart = ({ productSelected, dispatch }) => {
  const classes = useStyles();
  const totalValue = productSelected.price * productSelected.quantity;

  return (
    <Grid item xs={12} container justify="center" alignItems="center">
      <IconButton
        onClick={() => dispatch(removeProductCart(productSelected.productId))}
      >
        <CloseIcon className={classes.icon} />
      </IconButton>
      <Grid item xs={4}>
        <img src={productSelected.imageUrl} className={classes.imageProduct} />
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.titleProduct}>
          {productSelected.productName}
        </Typography>
        <Grid
          item
          xs={12}
          container
          justify="space-between"
          alignItems="center"
        >
          <Grid
            container
            justify="space-around"
            alignItems="center"
            className={classes.countCart}
          >
            <RemoveOutlinedIcon
              //   onClick={() => setCount(count > 1 ? count - 1 : 1)}
              fontSize="small"
              style={{ cursor: "pointer" }}
            />
            <Typography color="textPrimary">
              {productSelected.quantity}
            </Typography>
            <AddOutlinedIcon
              //   onClick={() => setCount(count + 1)}
              fontSize="small"
              style={{ cursor: "pointer" }}
            />
          </Grid>
          <Typography className={classes.priceProduct}>
            R$: {totalValue.toFixed(2).replace(/\./, ",")}
          </Typography>
        </Grid>
      </Grid>

      <Divider variant="middle" style={{ width: "90%", marginTop: 12 }} />
    </Grid>
  );
};

export default ProductCart;
