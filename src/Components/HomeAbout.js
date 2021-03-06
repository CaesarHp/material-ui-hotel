import React from "react";
import { Link } from "react-router-dom";

import hotelImg from "../img/suite.jpg";

import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "4rem 3rem",
    [theme.breakpoints.down("md")]: {
      padding: "4rem 2rem",
    },
  },
  textContainer: {
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      textAlign: "center",
      margin: "0 auto",
    },
  },
  title: {
    marginBottom: theme.spacing(5),
    fontFamily: "Cormorant Garamond",
    fontWeight: 500,
    letterSpacing: "1px",
  },
  body: {
    marginBottom: theme.spacing(5),
    fontWeight: 300,
  },
  imgContainer: {
    height: 350,
    [theme.breakpoints.down("xs")]: {
      height: 300,
    },
  },
  img: {
    height: "100%",
    width: "100%",
  },

  btn: {
    borderRadius: 0,
    padding: "1rem 2rem",
  },
}));

function HomeAbout() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} lg={6}>
            <Grid container className={classes.textContainer}>
              <Grid item>
                <Typography
                  variant="h4"
                  component="h2"
                  className={classes.title}
                >
                  About SOHO Hotel
                </Typography>
                <Typography variant="body2" className={classes.body}>
                  Bringing people together is what we’ve done since opening our
                  first SOHO Hotel in 1950. Now we’re deeply rooted in over 400
                  communities across the globe. We are proud to act as a point
                  of connection for millions of travelers, many just like you.
                  Find us at the heart of hundreds of communities in 70+
                  countries worldwide. SOHO Hotels offer unparalleled
                  experiences, superior service, iconic dining and sophisticated
                  design in premier destinations.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  component={Link}
                  to="/rooms"
                  className={classes.btn}
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            {/* <Grid container justifyContent="center">
              <Grid item className={classes.imgContainer}>
                <img alt="hotel-img" src={hotelImg} className={classes.img} />
              </Grid>
            </Grid> */}
            <img alt="hotel-img" src={hotelImg} className={classes.img} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomeAbout;
