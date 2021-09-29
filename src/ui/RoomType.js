import React from "react";

import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import LandscapeIcon from "@mui/icons-material/Landscape";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PersonIcon from "@mui/icons-material/Person";
import KingBedIcon from "@mui/icons-material/KingBed";

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

function RoomType({ number, size, view, bed }) {
  const classes = useStyles();
  return (
    <div>
      <Grid container rowSpacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.container}>
            <KingBedIcon className={classes.icon} />
            <Typography className={classes.title}>{bed}</Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.container}>
            <PersonIcon className={classes.icon} />
            <Typography className={classes.title}>{number} People</Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.container}>
            <ApartmentIcon className={classes.icon} />
            <Typography className={classes.title}>{size} Sqf</Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div className={classes.container}>
            <LandscapeIcon className={classes.icon} />
            <Typography className={classes.title}>{view}</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default RoomType;
