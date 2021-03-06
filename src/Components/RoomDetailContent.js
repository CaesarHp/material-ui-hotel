import React from "react";

import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import RoomType from "../ui/RoomType";
import ServiceTable from "../ui/ServiceTable";
import PolicyAccordion from "../ui/PolicyAccordion";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    color: theme.palette.grey[900],
    marginBottom: theme.spacing(4),
  },
  body: {
    color: theme.palette.grey[800],
    fontWeight: 400,
  },
}));

function RoomDetailContent({ number, size, view, bed, img }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container rowSpacing={6}>
        <Grid item xs={12}>
          <Grid container rowSpacing={6}>
            <Grid item xs={12}>
              <img alt="room" src={img} className={classes.img} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h5" component="h2" className={classes.title}>
                Room Type
              </Typography>
              <RoomType number={number} size={size} view={view} bed={bed} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" component="h2" className={classes.title}>
            Room Description
          </Typography>
          <Typography variant="body2" className={classes.body}>
            This 5-star room, part of the SOHO Hotel family, combines elegance
            with modern amenities. It is located in the centre of the financial
            district and 1.3 km from the CN Tower. It features a full-service
            spa and spacious rooms with stunning Toronto skyline views. A
            flat-screen TV, free Wi-Fi and an iPod dock are standard in each
            luxurious room at SOHO Hotel. The spacious bathroom has stone-topped
            vanities and an in-mirror TV. Free bottled water and tea and
            coffee-making facilities are included. Soaring 31 stories atop
            Toronto???s glittering skyline, Iridium Spa promises a transformative
            journey created to dazzle the senses and celebrate the mind, body
            and soul. The 15,000 square-foot sanctuary in the sky invites guests
            to renew and recharge with ultra-luxurious amenities featuring the
            Iridium Lounge, 11 treatment rooms, including two couples rooms,
            expansive women???s and men???s change rooms with separate steam rooms
            and a full-service nail salon.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" component="h2" className={classes.title}>
            Services
          </Typography>

          <ServiceTable />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" component="h2" className={classes.title}>
            Policy
          </Typography>
          <PolicyAccordion />
        </Grid>
      </Grid>
    </div>
  );
}

export default RoomDetailContent;
