import React from "react";

import hotelRoom2 from "../img/hotel-room-2.jpg";

import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "30vh",
    background: `url(${hotelRoom2})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top",
  },
  container: {
    height: "30vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  content: {
    width: "50%",
  },
  title: {
    color: "white",
    fontFamily: "Cormorant Garamond",
    fontWeight: 500,
    letterSpacing: "1px",
  },
}));

function BookingBanner() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Container className={classes.container}>
          <div className={classes.content}>
            <Typography variant="h2" className={classes.title}>
              Our Luxury Rooms
            </Typography>
          </div>
        </Container>
      </div>
    </>
  );
}

export default BookingBanner;
