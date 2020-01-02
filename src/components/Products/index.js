import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Products = ({ products }) => {
  const classes = "trocar por useStyle() makeStyles";
  console.warn(products, "products");

  return (
    <Grid>
      {products &&
        products.length &&
        products.map(item => (
          <Typography key={item.productId}>{item.productName}</Typography>
        ))}
    </Grid>
  );
};

const mapStateToProps = state => ({
  products: state.store.data
});

export default connect(mapStateToProps)(Products);
