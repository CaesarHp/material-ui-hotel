import React, { useState } from "react";

import { Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "3rem 0",
    display: "flex",
    justifyContent: "center",
  },
  main: {
    width: "80%",
  },
  btn: {
    borderRadius: 0,
  },
}));

const numberOfGuest = [
  {
    value: "1 Guest",
  },
  {
    value: "2 Guests",
  },
  {
    value: "3 Guests",
  },
  {
    value: "4 Guests",
  },
];

function HomeDatePick() {
  const classes = useStyles();

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guest, setGuest] = useState("1 Guest");

  const checkInChangeHandler = (date) => {
    setCheckInDate(date);
  };

  const checkOutChangeHandler = (date) => {
    setCheckOutDate(date);
  };

  const guestChangeHandler = (e) => {
    setGuest(e.target.value);
  };

  return (
    <>
      <div className={classes.root}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            className={classes.main}
          >
            <DatePicker
              label="Check In"
              value={checkInDate}
              onChange={checkInChangeHandler}
              disablePast
              renderInput={(params) => <TextField {...params} />}
            />

            <DatePicker
              label="Check Out"
              value={checkOutDate}
              onChange={checkOutChangeHandler}
              disablePast
              renderInput={(params) => <TextField {...params} />}
            />

            <form>
              <TextField
                id="standard-select-currency"
                select
                label="Select"
                value={guest}
                onChange={guestChangeHandler}
              >
                {numberOfGuest.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </form>
            <Button
              variant="contained"
              size="large"
              color="primary"
              disableElevation
              className={classes.btn}
            >
              Check Availability
            </Button>
          </Grid>
        </LocalizationProvider>
      </div>
    </>
  );
}

export default HomeDatePick;
