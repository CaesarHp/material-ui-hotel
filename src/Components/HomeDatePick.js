import React, { useState } from "react";

import "date-fns";

import DateFnsUtils from "@date-io/date-fns";
import { Grid } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { TextField } from "@material-ui/core";
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
  guest: {},
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

const today = new Date();

function HomeDatePick() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState(today);
  const [guest, setGuest] = useState("1 Guest");

  const dateChangeHandler = (date) => {
    setSelectedDate(date);
  };

  const guestChangeHandler = (e) => {
    setGuest(e.target.value);
  };

  return (
    <>
      <div className={classes.root}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            className={classes.main}
          >
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Check In"
              value={selectedDate}
              onChange={dateChangeHandler}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />

            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Check Out"
              value={selectedDate}
              onChange={dateChangeHandler}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
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
        </MuiPickersUtilsProvider>
      </div>
    </>
  );
}

export default HomeDatePick;
