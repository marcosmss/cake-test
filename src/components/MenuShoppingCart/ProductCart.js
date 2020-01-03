import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";

const ProductCart = ({ productSelected }) => {
  const classes = "mudar para userStyles";

  return (
    <Grid item xs={12} container justify="center">
      <Grid item xs={5}>
        <img
          src={productSelected.imageUrl}
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid item xs={7}>
        {productSelected.productName}
        <Grid item xs={12} container justify="space-between">
          <Grid
            container
            justify="space-around"
            alignItems="center"
            className={classes.countCart}
            style={{ width: 100 }}
          >
            <RemoveOutlinedIcon
              //   onClick={() => setCount(count > 1 ? count - 1 : 1)}
              fontSize="small"
              style={{ cursor: "pointer" }}
            />
            <Typography color="textPrimary">{1}</Typography>
            <AddOutlinedIcon
              //   onClick={() => setCount(count + 1)}
              fontSize="small"
              style={{ cursor: "pointer" }}
            />
          </Grid>
          <Typography>{productSelected.price}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductCart;
