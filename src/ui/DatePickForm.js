import React, { useState } from "react";

import { Grid } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const textFieldWidth = "100%";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "45vh",
    display: "flex",
    justifyContent: "center",
  },
  textField: {
    width: textFieldWidth,
  },
  selection: {
    marginBottom: theme.spacing(5),
  },
  btn: {
    borderRadius: 0,
    width: textFieldWidth,
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

function DatePickForm() {
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
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          className={classes.container}
        >
          <Grid item>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Check In"
                value={checkInDate}
                onChange={checkInChangeHandler}
                className={classes.datePicker}
                renderInput={(params) => (
                  <TextField {...params} className={classes.textField} />
                )}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Check Out"
                value={checkOutDate}
                onChange={checkOutChangeHandler}
                renderInput={(params) => (
                  <TextField {...params} className={classes.textField} />
                )}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item>
            <form>
              <TextField
                id="selection"
                select
                label="Select"
                value={guest}
                onChange={guestChangeHandler}
                fullWidth
              >
                {numberOfGuest.map((option, index) => (
                  <MenuItem key={index} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </form>
          </Grid>

          <Grid item>
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
        </Grid>
      </div>
    </>
  );
}

export default DatePickForm;
