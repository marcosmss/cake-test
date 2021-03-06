import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { postUser } from "../../api";

const useStyles = makeStyles(theme => ({
  root: {
    height: 180,
    bottom: 0,
    marginTop: 100,
    position: "relative",
    backgroundColor: "#ef7560",
    [theme.breakpoints.up("md")]: {
      height: 100
    }
  },
  footerDeveloped: {
    height: 20,
    bottom: 0,
    position: "relative",
    backgroundColor: "#eeeeee"
  },
  titleDeveloped: {
    fontSize: 14,
    color: "#6b6b6b"
  },
  newsletterTitle: {
    fontSize: 22,
    letterSpacing: 6,
    color: "#fff"
  },
  newsletterText: {
    fontSize: 12,
    color: "#fff"
  },
  inputField: {
    width: 150,
    backgroundColor: "#fff",
    marginRight: 30,
    paddingLeft: 10,
    [theme.breakpoints.up("md")]: {
      width: 250
    },
    [theme.breakpoints.only("xs")]: {
      width: 300,
      left: "10%",
      marginTop: 5
    }
  },
  buttonField: {
    width: 100,
    height: 32,
    color: "#ef7560",
    backgroundColor: "#fff",
    [theme.breakpoints.up("md")]: {
      width: 130
    },
    [theme.breakpoints.only("xs")]: {
      width: 300,
      left: "10%",
      marginTop: 5
    }
  },
  mobileNewsletter: {
    [theme.breakpoints.only("xs")]: {
      display: "flex",
      justifyContent: "center"
    }
  }
}));

const Footer = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    notice: "123456",
    phone: "123456"
  });
  const classes = useStyles();

  return (
    <Grid>
      <Grid
        item
        xs={12}
        container
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid
          item
          xs={12}
          sm={11}
          lg={10}
          container
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={3}>
            <Grid item xs={12}>
              <Grid
                item
                xs={12}
                sm={1}
                lg={5}
                className={classes.mobileNewsletter}
              >
                <Typography className={classes.newsletterTitle}>
                  Newsletter
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={11}
                lg={7}
                className={classes.mobileNewsletter}
              >
                <Typography className={classes.newsletterText}>
                  Receba nossas promoções e novidades. Inscreva-se:
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={9}
            container
            justify="flex-end"
            alignItems="center"
          >
            <form>
              <Input
                onChange={event =>
                  setState({ ...state, name: event.target.value })
                }
                className={classes.inputField}
                color="secondary"
                placeholder="Seu nome"
              />
              <Input
                onChange={event =>
                  setState({ ...state, email: event.target.value })
                }
                className={classes.inputField}
                color="secondary"
                placeholder="Seu email"
              />
              <Button
                onClick={() => postUser(state)}
                variant="contained"
                className={classes.buttonField}
              >
                <Typography variant="body2">Enviar</Typography>
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        container
        justify="center"
        alignItems="center"
        className={classes.footerDeveloped}
      >
        <Typography className={classes.titleDeveloped}>
          Developed by Marcos Manoel
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
