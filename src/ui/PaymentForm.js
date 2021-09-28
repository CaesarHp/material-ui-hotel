import React from "react";

import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      padding: "0 3rem",
    },
  },
  title: {
    marginBottom: theme.spacing(3),
    color: theme.palette.grey[800],
  },
  form: {
    width: "100%",
  },
  input: {
    marginBottom: theme.spacing(3),
    width: "100%",
  },
  btn: {
    borderRadius: 0,
    padding: "0.5rem 0",
    width: "100%",
  },
}));

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#616161",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#616161",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#bdbdbd",
      borderRadius: 0,
    },
    "&:hover fieldset": {
      borderColor: "#757575",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#616161",
    },
  },
});

function PaymentForm() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <form>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h5" className={classes.title}>
                Personal Info
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={3} justifyContent="space-between">
                <Grid item xs={6}>
                  <CssTextField
                    variant="outlined"
                    id="firstname"
                    label="First Name"
                    className={classes.input}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CssTextField
                    variant="outlined"
                    id="lastname"
                    label="Last Name"
                    className={classes.input}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <CssTextField
                variant="outlined"
                id="email"
                label="Email Address"
                className={classes.input}
              />
            </Grid>

            <Grid item>
              <CssTextField
                variant="outlined"
                id="phone"
                label="Phone"
                className={classes.input}
              />
            </Grid>

            <Grid item>
              <Grid container spacing={3} justifyContent="space-between">
                <Grid item xs={8}>
                  <CssTextField
                    variant="outlined"
                    id="address"
                    label="Address"
                    className={classes.input}
                  />
                </Grid>
                <Grid item xs={4}>
                  <CssTextField
                    variant="outlined"
                    id="address"
                    label="Unit/Room (optional)"
                    className={classes.input}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <CssTextField
                variant="outlined"
                id="city"
                label="City"
                className={classes.input}
              />
            </Grid>

            <Grid item>
              <Grid container spacing={3} justifyContent="space-between">
                <Grid item xs={4}>
                  <CssTextField
                    variant="outlined"
                    id="country"
                    label="Country"
                    className={classes.input}
                  />
                </Grid>
                <Grid item xs={4}>
                  <CssTextField
                    variant="outlined"
                    id="province"
                    label="Province"
                    className={classes.input}
                  />
                </Grid>
                <Grid item xs={4}>
                  <CssTextField
                    variant="outlined"
                    id="postalcode"
                    label="Postal Code"
                    className={classes.input}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Typography variant="h5" className={classes.title}>
                Payment Info
              </Typography>
            </Grid>

            <Grid item>
              <CssTextField
                variant="outlined"
                id="cardholdername"
                label="Card Holder Name"
                className={classes.input}
              />
            </Grid>

            <Grid item>
              <CssTextField
                variant="outlined"
                id="cardnumber"
                label="Card Number"
                className={classes.input}
              />
            </Grid>

            <Grid item>
              <Grid container spacing={3} justifyContent="space-between">
                <Grid item xs={6}>
                  <CssTextField
                    variant="outlined"
                    id="expiredate"
                    label="Expire Date (MM/YY)"
                    className={classes.input}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CssTextField
                    variant="outlined"
                    id="securitycode"
                    label="Security Code"
                    className={classes.input}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
}

export default PaymentForm;
