import React from "react";

import { Container } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { makeStyles } from "@material-ui/core/styles";

import PaymentForm from "../ui/PaymentForm";
import PaymentRoomInfo from "../ui/PaymentRoomInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
}));

function BookingPaymentContainer() {
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Container className={classes.root}>
        <Grid container spacing={matches ? 0 : 10} rowSpacing={matches ? 3 : 0}>
          <Grid item xs={12} md={7}>
            <PaymentForm />
          </Grid>
          <Grid item xs={12} md={5}>
            <PaymentRoomInfo />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BookingPaymentContainer;
