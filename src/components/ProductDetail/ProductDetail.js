import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import { handleBuyItemProducts } from "../../store/actions";

const useStyles = makeStyles(theme => ({
  imageProduct: {
    width: "100%",
    height: "100%"
  },
  cardProduct: {
    margin: "30px 0px",
    border: "1px solid #eeeeee"
  },
  miniCard: {
    width: 100,
    height: 100,
    border: "1px solid #eeeeee",
    marginTop: 10
  },
  titleProduct: {
    color: "#4c4a49",
    fontSize: 23,
    letterSpacing: 2,
    marginTop: 100
  },
  saleProduct: {
    fontSize: 17,
    marginTop: 6,
    color: "#ef7560"
  },
  priceProduct: {
    fontSize: 23,
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
    margin: "30px 0px",
    [theme.breakpoints.down("sm")]: {
      margin: 0
    }
  },
  buttonSpacing: {
    marginBottom: 100,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 50
    }
  },
  countCart: {
    width: 100,
    height: 36,
    marginRight: 10,
    color: "#ef7560",
    border: "1px solid #eeeeee"
  },
  paddingRight: {
    paddingRight: 10
  }
}));

const ProductDetail = ({ productDetail, dispatch }) => {
  const [count, setCount] = React.useState(1);

  const classes = useStyles();
  const product = productDetail[0];

  const selectedBuy = () => {
    const productSelected = productDetail && productDetail[0];

    if (productSelected) {
      return dispatch(
        handleBuyItemProducts({ ...productSelected, quantity: count })
      );
    }
  };

  return (
    <Grid item xs={12} container justify="center">
      <Grid item xs={11} md={10} container justify="space-between">
        <Grid item xs={12} lg={5} className={classes.cardProduct}>
          <img src={product.imageUrl} className={classes.imageProduct} />
          <Grid item xs={5} className={classes.miniCard}>
            <img src={product.imageUrl} className={classes.imageProduct} />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
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

            <Grid item xs={12} container>
              <Typography className={classes.saleProduct}>R$</Typography>
              <Typography className={classes.priceProduct}>
                {product.price.toFixed(2).replace(/\./, ",")}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justify="flex-start"
            alignItems="center"
            className={classes.buttonSpacing}
          >
            <Grid
              container
              justify="space-around"
              alignItems="center"
              className={classes.countCart}
            >
              <RemoveOutlinedIcon
                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                fontSize="small"
                style={{ cursor: "pointer" }}
              />
              <Typography color="textPrimary">{count}</Typography>
              <AddOutlinedIcon
                onClick={() => setCount(count + 1)}
                fontSize="small"
                style={{ cursor: "pointer" }}
              />
            </Grid>
            <Button
              variant="contained"
              className={classes.buttonBuy}
              onClick={() => selectedBuy()}
            >
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
