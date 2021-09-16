import React from "react";

import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { styled } from "@material-ui/styles";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: theme.spacing(3),
  },
  btn: {
    borderRadius: 0,
  },
}));

const CssTextField = styled(TextField)({
  // "& .MuiInputBase-input": {
  //   backgroundColor: "plum",
  //   borderRadius: 4,
  // },
  "& label.Mui-focused": {
    color: "#616161",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#616161",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#bdbdbd",
    },
    "&:hover fieldset": {
      borderColor: "#757575",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#616161",
    },
  },
});

function FormUi() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <form className={classes.form}>
          <CssTextField
            variant="outlined"
            id="name"
            label="Full Name"
            required
            className={classes.input}
          />

          <CssTextField
            variant="outlined"
            id="email"
            label="Email Address"
            required
            className={classes.input}
          />
          <CssTextField
            variant="outlined"
            id="phone"
            label="Phone"
            className={classes.input}
          />
          <CssTextField
            variant="outlined"
            id="subject"
            label="Subject"
            className={classes.input}
          />
          <CssTextField
            id="message"
            label="Message"
            multiline
            rows={5}
            placeholder="Enter your message..."
            variant="outlined"
            required
            className={classes.input}
          />
          <div>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              className={classes.btn}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormUi;
