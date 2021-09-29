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
    borderRadius: 0,
  },
  media: {
    height: 0,
    padding: "15rem 3.5rem 0 3.5rem",
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
              <Grid container>
                <Grid item xs={12}>
                  <CardMedia
                    className={classes.media}
                    image={img}
                    title="Hotel Room"
                  />
                </Grid>

                <Grid item xs={12}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Max Occupancy: {number} Guests
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Size: {size} Sqf
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      View: {view}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
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
