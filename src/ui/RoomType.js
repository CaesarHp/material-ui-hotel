import React from "react";

import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import LandscapeIcon from "@mui/icons-material/Landscape";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PersonIcon from "@mui/icons-material/Person";
import KingBedIcon from "@mui/icons-material/KingBed";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
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

function RoomType({ number, size, view, bed }) {
  const classes = useStyles();
  return (
    <div>
      <Grid container justifyContent="space-between">
        <Grid item>
          <div className={classes.container}>
            <KingBedIcon className={classes.icon} />
            <Typography className={classes.title}>Bed: {bed}</Typography>
          </div>
        </Grid>

        <Grid item>
          <div className={classes.container}>
            <PersonIcon className={classes.icon} />
            <Typography className={classes.title}>
              Occupancy: {number} Guests
            </Typography>
          </div>
        </Grid>

        <Grid item>
          <div className={classes.container}>
            <ApartmentIcon className={classes.icon} />
            <Typography className={classes.title}>Size: {size} Sqf</Typography>
          </div>
        </Grid>

        <Grid item>
          <div className={classes.container}>
            <LandscapeIcon className={classes.icon} />
            <Typography className={classes.title}>View: {view}</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default RoomType;
