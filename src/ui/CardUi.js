import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    padding: "0 1rem",
  },
  root: {
    maxWidth: 350,
    width: 320,
    borderRadius: 0,
  },
  media: {
    height: 250,
  },
  btnContainer: {
    padding: "1rem",
  },
  btn: {
    borderRadius: 0,
  },
});

export default function CardUi({ name, number, size, view, price, img }) {
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
                size="small"
                color="primary"
                disableElevation
                className={classes.btn}
              >
                From ${price} per stay
              </Button>
              <Button size="small" color="primary">
                Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
