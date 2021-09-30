import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dataActions } from "../Store/data-slice";

import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@mui/material/Grid";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 0,
    padding: "2rem",
    border: "1px solid #eee",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
  img: {
    height: "100%",
    width: "100%",
  },
  contentContainer: {
    height: "100%",
  },
  btn: {
    borderRadius: 0,
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
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
  id,
  back,
}) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const selectRoomHandler = () => {
    dispatch(dataActions.selectRoom(id));
    scrollToTop();
  };

  const backHandler = () => {
    dispatch(dataActions.backToPrevious());
    scrollToTop();
  };

  return (
    <>
      <Paper elevation={0} className={classes.root}>
        <Grid container spacing={matches ? 1 : 2}>
          <Grid item xs={12} md={5}>
            <img alt="img" src={img} className={classes.img} />
          </Grid>

          <Grid item xs={12} md={7}>
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
                {back ? null : (
                  <Button
                    variant="contained"
                    size="medium"
                    color="primary"
                    disableElevation
                    onClick={selectRoomHandler}
                    className={classes.btn}
                  >
                    Select
                  </Button>
                )}
                <Button
                  size="medium"
                  color="primary"
                  component={Link}
                  to={link}
                  className={classes.btn}
                >
                  Details
                </Button>
                {back ? (
                  <Button
                    size="medium"
                    color="primary"
                    onClick={backHandler}
                    className={classes.btn}
                  >
                    Back
                  </Button>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
