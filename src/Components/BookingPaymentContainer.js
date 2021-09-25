import React from "react";

import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

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
  return (
    <>
      <Container className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <PaymentForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <PaymentRoomInfo />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BookingPaymentContainer;
