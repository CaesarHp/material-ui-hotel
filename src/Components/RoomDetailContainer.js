import React from "react";

import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import RoomDetailContent from "./RoomDetailContent";
import DatePickContainer from "../ui/DatePickContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
  form: {
    padding: "1rem 2rem 3rem 2rem",
    marginLeft: 50,
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

function RoomDetailContainer() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <RoomDetailContent />
          </Grid>
          <Grid item xs={12} md={4}>
            <DatePickContainer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default RoomDetailContainer;
