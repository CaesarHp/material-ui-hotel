import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Skeleton from "@mui/material/Skeleton";
import Divider from "@mui/material/Divider";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    borderRadius: 0,
  },
  title: {
    marginBottom: theme.spacing(4),
    color: theme.palette.grey[800],
  },
  price: {
    marginBottom: theme.spacing(4),
    color: theme.palette.grey[800],
    textAlign: "right",
  },
  body: {
    marginBottom: theme.spacing(1),
    color: theme.palette.grey[700],
  },
  bodyContainer: {
    marginBottom: theme.spacing(4),
  },
  card: {
    maxWidth: "100%",
    borderRadius: 0,
    marginBottom: theme.spacing(4),
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
    padding: "0.5rem 0",
    width: "100%",
  },
}));

function PaymentRoomInfo() {
  const classes = useStyles();

  const selectedRoomInfo = useSelector((state) => state.data.selectedRoom[0]);
  const selectedDateInfo = useSelector((state) => state.data.checkInInfo[0]);

  return (
    <>
      <Paper elevation={3} className={classes.root}>
        <Typography variant="h5" className={classes.title}>
          Room Details
        </Typography>

        <div className={classes.bodyContainer}>
          {selectedRoomInfo ? (
            <Typography variant="body1" className={classes.body}>
              Dates: {selectedDateInfo.checkInDate} –
              {selectedDateInfo.checkOutDate}
            </Typography>
          ) : (
            <Skeleton width="100%" />
          )}
          {selectedRoomInfo ? (
            <Typography variant="body1" className={classes.body}>
              Guest(s): {selectedDateInfo.guest} guest
            </Typography>
          ) : (
            <Skeleton width="100%" />
          )}
        </div>

        <div>
          <Paper elevation={0} className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                {selectedRoomInfo ? (
                  <img
                    alt="img"
                    src={selectedRoomInfo.img}
                    className={classes.img}
                  />
                ) : (
                  <Skeleton
                    variant="rectangular"
                    width={"80%"}
                    height={"100%"}
                  />
                )}
              </Grid>

              <Grid item xs={12} md={6}>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  className={classes.contentContainer}
                >
                  <Grid item>
                    {selectedRoomInfo ? (
                      <Typography gutterBottom variant="h5" component="h2">
                        {selectedRoomInfo.name}
                      </Typography>
                    ) : (
                      <Skeleton width="100%" />
                    )}
                  </Grid>

                  {selectedRoomInfo ? (
                    <Grid item>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        component="p"
                      >
                        Bed: {selectedRoomInfo.bed}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        component="p"
                      >
                        Stay(s): {selectedDateInfo.days} night
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        component="p"
                      >
                        Subtotal: ${selectedRoomInfo.price}
                      </Typography>
                    </Grid>
                  ) : (
                    <Grid item>
                      <Skeleton width="100%" />
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>

        <Divider style={{ marginBottom: 20 }} />

        <Grid container justifyContent="space-between">
          <Grid item xs={6}>
            <Typography variant="h5" className={classes.title}>
              Total
            </Typography>
          </Grid>
          <Grid item xs={6}>
            {selectedRoomInfo ? (
              <Typography variant="h5" className={classes.price}>
                ${selectedRoomInfo.price * selectedDateInfo.days}
              </Typography>
            ) : (
              <Skeleton width="100%" />
            )}
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          component={Link}
          to="/home"
          className={classes.btn}
        >
          Process Payment
        </Button>
      </Paper>
    </>
  );
}

export default PaymentRoomInfo;
