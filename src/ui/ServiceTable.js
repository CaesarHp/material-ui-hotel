import React from "react";

import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import WifiIcon from "@mui/icons-material/Wifi";
import FlightIcon from "@mui/icons-material/Flight";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import LocalBarIcon from "@mui/icons-material/LocalBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  container1: {
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  container2: {
    display: "flex",
  },
  icon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
  },
  title: {
    color: theme.palette.grey[800],
  },
}));

function ServiceTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid item>
          <div className={classes.container1}>
            <WifiIcon className={classes.icon} />
            <Typography className={classes.title}>High Speed Wifi</Typography>
          </div>
        </Grid>
        <Grid item>
          <div className={classes.container2}>
            <RoomServiceIcon className={classes.icon} />
            <Typography className={classes.title}>Room Service</Typography>
          </div>
        </Grid>
      </Grid>

      <Grid container direction="column">
        <Grid item>
          <div className={classes.container1}>
            <FlightIcon className={classes.icon} />
            <Typography className={classes.title}>Airport Pickup</Typography>
          </div>
        </Grid>
        <Grid item>
          <div className={classes.container2}>
            <CoffeeMakerIcon className={classes.icon} />
            <Typography className={classes.title}>Coffee Maker</Typography>
          </div>
        </Grid>
      </Grid>

      <Grid container direction="column">
        <Grid item>
          <div className={classes.container1}>
            <PhoneIcon className={classes.icon} />
            <Typography className={classes.title}>World Wide Call</Typography>
          </div>
        </Grid>
        <Grid item>
          <div className={classes.container2}>
            <LocalBarIcon className={classes.icon} />
            <Typography className={classes.title}>Mini Bar</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ServiceTable;
