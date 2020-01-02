import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Loading from "../../assets/loading.gif";

const useStyles = makeStyles({
  isLoading: {
    height: "60vh"
  }
});

const LoadingProducts = ({ isLoading }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {isLoading && (
        <Grid
          item
          xs={12}
          container
          justify="center"
          alignItems="center"
          className={classes.isLoading}
        >
          <img src={Loading} />
        </Grid>
      )}
    </React.Fragment>
  );
};

export default LoadingProducts;
