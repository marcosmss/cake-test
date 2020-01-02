import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { handleMenuProfile } from "../../store/actions";

const useStyles = makeStyles({
  root: {
    width: 250,
    height: 300,
    right: 180,
    top: 67,
    backgroundColor: "#fff",
    position: "absolute",
    zIndex: 9999,
    boxShadow: "0px -1px 6px -1px rgba(0,0,0,0.75)"
  },
  icon: {
    color: "#ef7560"
  },
  titleUser: {
    fontSize: 24,
    color: "#ef7560"
  },
  emailUser: {
    fontSize: 16,
    color: "#d5d5d5"
  },
  logoutUser: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginTop: 20,
    color: "#ef7560",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  }
});

const MenuProfile = ({ openMenuProfile, dispatch }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid item xs={12}>
        <Grid item xs={12} container justify="flex-end">
          <IconButton
            onClick={() => dispatch(handleMenuProfile(openMenuProfile))}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        </Grid>
        <Grid item xs={12} container justify="center">
          <Grid item xs={12} container justify="center">
            <Typography className={classes.titleUser}>Olá, Marcos</Typography>
          </Grid>
          <Grid item xs={12} container justify="center"></Grid>
          <Typography className={classes.emailUser}>
            marcosmss1304@gmail.com
          </Typography>
        </Grid>
        <Link className={classes.logoutUser}>
          <Typography>sair</Typography>
        </Link>
      </Grid>

      <Divider variant="middle" />
    </Grid>
  );
};

const mapStateToProps = state => ({
  openMenuProfile: state.store.openMenuProfile
});

export default connect(mapStateToProps)(MenuProfile);
