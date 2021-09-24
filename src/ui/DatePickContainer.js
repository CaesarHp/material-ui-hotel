import React from "react";

import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import DatePickForm from "./DatePickForm";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
  form: {
    padding: "1rem 2rem 3rem 2rem",
    marginLeft: 50,
    borderRadius: 0,
  },
  formText: {
    width: "100%",
  },
  formTextfeild: {
    width: "100%",
  },
  title: {
    fontFamily: "Cormorant Garamond",
    fontWeight: 400,
    marginBottom: theme.spacing(1),
  },
  body: {
    fontWeight: 300,
    marginBottom: theme.spacing(4),
  },
}));

function RoomDetailContainer({ name, price, hasSelectRoom }) {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={3} className={classes.form}>
        <Grid container direction="column" alignItems="center">
          <Grid item className={classes.formText}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography variant="h6" className={classes.title}>
                  {name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h3" className={classes.body}>
                  ${price}/stay
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.formTextfeild}>
            <DatePickForm hasSelectRoom={hasSelectRoom} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default RoomDetailContainer;
