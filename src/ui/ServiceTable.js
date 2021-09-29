import React from "react";

import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import WifiIcon from "@mui/icons-material/Wifi";
import FlightIcon from "@mui/icons-material/Flight";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import LocalBarIcon from "@mui/icons-material/LocalBar";

const useStyles = makeStyles((theme) => ({
  container: {
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
    <>
      <Grid container rowSpacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.container}>
            <WifiIcon className={classes.icon} />
            <Typography className={classes.title}>High Speed Wifi</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.container}>
            <FlightIcon className={classes.icon} />
            <Typography className={classes.title}>Airport Pickup</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.container}>
            <RoomServiceIcon className={classes.icon} />
            <Typography className={classes.title}>Room Service</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.container}>
            <PhoneIcon className={classes.icon} />
            <Typography className={classes.title}>World Wide Call</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.container}>
            <CoffeeMakerIcon className={classes.icon} />
            <Typography className={classes.title}>Coffee Maker</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.container}>
            <LocalBarIcon className={classes.icon} />
            <Typography className={classes.title}>Mini Bar</Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ServiceTable;
