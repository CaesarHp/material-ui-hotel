import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    width: 320,
    borderRadius: 0,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
    // [theme.breakpoints.down("xs")]: {
    //   height: 100,
    // },
  },
  btnContainer: {
    padding: "1rem",
  },
  btn: {
    borderRadius: 0,
  },
}));

export default function CardUi({ name, number, size, view, price, img, link }) {
  const classes = useStyles();

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={img}
                title="Hotel Room"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Max Occupancy: {number} Guests
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Size: {size} Sqf
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  View: {view}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.btnContainer}>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                disableElevation
                component={Link}
                to={link}
                className={classes.btn}
              >
                From ${price}
              </Button>
              <Button size="medium" color="primary" component={Link} to={link}>
                Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
