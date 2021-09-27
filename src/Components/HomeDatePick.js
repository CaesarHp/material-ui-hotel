import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../Store/data-slice";

import moment from "moment";

import { Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "3rem",
    [theme.breakpoints.down("sm")]: {
      padding: "3rem 5rem",
    },
  },
  container: {
    width: "100%",
  },
  textField: {},
  btn: {
    borderRadius: 0,
    padding: "0.8rem",
  },
}));

const numberOfGuest = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
];

function HomeDatePick() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guest, setGuest] = useState(1);
  const [valid, setValid] = useState(false);

  const checkInChangeHandler = (date) => {
    setCheckInDate(date);

    setValid(false);
  };

  const checkOutChangeHandler = (date) => {
    setCheckOutDate(date);

    setValid(false);
  };

  const guestChangeHandler = (e) => {
    setGuest(e.target.value);

    setValid(false);
  };

  const submitHandler = () => {
    if (checkInDate && checkOutDate && guest) {
      const info = {
        checkInDate: moment(checkInDate).format("L"),
        checkOutDate: moment(checkOutDate).format("L"),
        days: Math.round(
          (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
        ),
        guest: guest,
      };

      dispatch(dataActions.checkIn(info));
    } else {
      setValid(true);
    }
  };

  return (
    <>
      <Container className={classes.root}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={5}
          >
            <Grid item xs={12} md={3} className={classes.container}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Check In"
                  value={checkInDate}
                  onChange={checkInChangeHandler}
                  disablePast
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      className={classes.textField}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} md={3} className={classes.container}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Check Out"
                  value={checkOutDate}
                  onChange={checkOutChangeHandler}
                  disablePast
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      className={classes.textField}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} md={3} className={classes.container}>
              <form>
                <TextField
                  id="guest"
                  select
                  label="Guest(s)"
                  fullWidth
                  value={guest}
                  onChange={guestChangeHandler}
                  className={classes.textField}
                >
                  {numberOfGuest.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </form>
            </Grid>

            <Grid item xs={12} md={3} className={classes.container}>
              <Grid container justifyContent="center">
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  disableElevation
                  onClick={submitHandler}
                  className={classes.btn}
                >
                  Check Availability
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {valid ? (
            <Grid item>
              <Typography
                variant="h6"
                style={{
                  fontSize: "1rem",
                  fontWeight: 300,
                  textAlign: "center",
                }}
              >
                Please select date and guest.
              </Typography>
            </Grid>
          ) : null}
        </Grid>
      </Container>
    </>
  );
}

export default HomeDatePick;
