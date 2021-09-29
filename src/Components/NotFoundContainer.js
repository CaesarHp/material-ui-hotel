import React from "react";

import hotelRoom1 from "../img/hotel-room-1.jpg";

import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Grid from "@mui/material/Grid";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
    background: `url(${hotelRoom1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textAlign: "center",
  },
  container: {
    height: "80vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "90%",
    },
  },
  title: {
    color: theme.palette.grey[100],
    marginBottom: theme.spacing(3),
    fontWeight: 500,
    letterSpacing: "1px",
  },
  body: {
    color: theme.palette.grey[200],
    marginBottom: theme.spacing(5),
    fontWeight: 300,
  },
}));

function NotFoundContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h2" className={classes.title}>
              404 Page Not Found
            </Typography>
            <Typography variant="body1" className={classes.body}>
              The link is broken or the page has been moved. Go back home page
              and try other pages.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default NotFoundContainer;
