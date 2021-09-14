import React from "react";

import Card from "../ui/Card";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[900],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "4rem 0",
  },
  titleContainer: {
    textAlign: "center",
    width: "50%",
    marginBottom: theme.spacing(5),
  },
  title: {
    color: "white",
    marginBottom: theme.spacing(3),
    fontFamily: "Cormorant Garamond",
    fontWeight: 500,
  },
  body: {
    color: "white",
    fontWeight: 300,
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function HomeCard() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.titleContainer}>
          <Typography variant="h3" component="h2" className={classes.title}>
            Our Rooms
          </Typography>
          <Typography variant="body1" className={classes.body}>
            Discover contemporary accommodations fused with old-world European
            charm at SOHO Hotel. From urban sanctuaries in Vienna and Berlin to
            exotic resorts in Spain and Portugal, experience some of the most
            exclusive destinations across Europe.
          </Typography>
        </div>
        <Container className={classes.cardContainer}>
          <Card />
          <Card />
          <Card />
        </Container>
      </div>
    </>
  );
}
