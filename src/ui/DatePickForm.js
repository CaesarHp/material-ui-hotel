import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../Store/data-slice";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import moment from "moment";

import { Grid, Typography } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "45vh",
    display: "flex",
    justifyContent: "center",
  },
  textField: {
    width: "100%",
  },
  selection: {
    marginBottom: theme.spacing(5),
  },
  btn: {
    borderRadius: 0,
    width: "100%",
  },
}));

const NUMBER_OF_GUEST = [
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

function DatePickForm({ hasSelectRoom }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const history = useHistory();

  const params = useParams();

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
    if (params.roomId && checkInDate && checkOutDate && guest) {
      const info = {
        checkInDate: moment(checkInDate).format("L"),
        checkOutDate: moment(checkOutDate).format("L"),
        days: Math.round(
          (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
        ),
        guest: guest,
      };

      dispatch(dataActions.checkIn(info));

      dispatch(dataActions.selectRoom(params.roomId));

      history.push("/booking/payment");
    } else if (checkInDate && checkOutDate && guest) {
      const info = {
        checkInDate: moment(checkInDate).format("L"),
        checkOutDate: moment(checkOutDate).format("L"),
        days: Math.round(
          (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
        ),
        guest: guest,
      };

      dispatch(dataActions.checkIn(info));

      history.push("/booking/payment");
    } else {
      setValid(true);
    }
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
                value={
                  // dateInfo.length === 0
                  //   ? checkInDate
                  //   : new Date(
                  //       dateInfo[0].checkInDate.replaceAll("/", "-").toString()
                  //     )
                  checkInDate
                }
                onChange={checkInChangeHandler}
                disablePast
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
                value={
                  // dateInfo.length === 0
                  //   ? checkOutDate
                  //   : new Date(
                  //       dateInfo[0].checkOutDate.replaceAll("/", "-").toString()
                  //     )
                  checkOutDate
                }
                onChange={checkOutChangeHandler}
                disablePast
                renderInput={(params) => (
                  <TextField {...params} className={classes.textField} />
                )}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item>
            <form>
              <TextField
                id="guest"
                select
                label="Guest(s)"
                value={guest}
                onChange={guestChangeHandler}
                fullWidth
              >
                {NUMBER_OF_GUEST.map((option, index) => (
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
              disabled={hasSelectRoom}
              onClick={submitHandler}
              className={classes.btn}
            >
              Check Availability
            </Button>
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
      </div>
    </>
  );
}

export default DatePickForm;
