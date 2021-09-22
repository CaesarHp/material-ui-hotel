import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    borderRadius: 0,
    padding: "2rem",
    border: "1px solid #eee",
  },
  imgContainer: {
    height: 200,
    marginRight: theme.spacing(4),
  },
  media: {
    height: "100%",
  },
  contentContainer: {
    height: "100%",
  },
  btn: {
    borderRadius: 0,
    marginRight: theme.spacing(2),
  },
}));

export default function CardHorizontalUi({
  name,
  number,
  size,
  view,
  price,
  img,
  link,
}) {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={0} className={classes.root}>
        <Grid container>
          <Grid item className={classes.imgContainer}>
            <img alt="img" src={img} className={classes.media} />
          </Grid>

          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              className={classes.contentContainer}
            >
              <Grid item>
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
                <Typography variant="body2" color="textSecondary" component="p">
                  Start from ${price}/stay
                </Typography>
              </Grid>

              <Grid item>
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  disableElevation
                  className={classes.btn}
                >
                  Select
                </Button>
                <Button
                  size="medium"
                  color="primary"
                  component={Link}
                  to={link}
                >
                  Details
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
