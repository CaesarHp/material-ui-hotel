import React from "react";
import { Link } from "react-router-dom";

import hotelRoom1 from "../img/hotel-room-1.jpg";

import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "90vh",
    background: `url(${hotelRoom1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  container: {
    height: "90vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "80%",
    },
  },
  title: {
    color: theme.palette.grey[100],
    marginBottom: theme.spacing(3),
    fontFamily: "Cormorant Garamond",
    fontWeight: 500,
    letterSpacing: "1px",
  },
  body: {
    color: theme.palette.grey[200],
    marginBottom: theme.spacing(5),
    fontWeight: 300,
  },
  btn: {
    borderRadius: 0,
    padding: "1rem 2rem",
  },
}));

function HomeBanner() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Container className={classes.container}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" className={classes.title}>
                Luxury Experience
              </Typography>
              <Typography variant="body1" className={classes.body}>
                Discover contemporary accommodations fused with old-world
                European charm at SOHO Hotel. From urban sanctuaries in Vienna
                and Berlin to exotic resorts in Spain and Portugal, experience
                some of the most exclusive destinations across Europe.
              </Typography>
              <Button
                variant="contained"
                size="large"
                color="primary"
                disableElevation
                component={Link}
                to="/rooms"
                className={classes.btn}
              >
                View Rooms
              </Button>
            </Grid>
            <Grid item md={6}></Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default HomeBanner;
