import React from "react";

import { Container } from "@material-ui/core";
import Grid from "@mui/material/Grid";

import { makeStyles } from "@material-ui/core/styles";

import RoomDetailContent from "./RoomDetailContent";
import DatePickContainer from "../ui/DatePickContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    padding: "0 3rem",
  },
}));

function RoomDetailContainer({ name, number, size, view, price, bed, img }) {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={8}>
            <RoomDetailContent
              number={number}
              size={size}
              view={view}
              bed={bed}
              img={img}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DatePickContainer
              name={name}
              price={price}
              hasSelectRoom={false}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default RoomDetailContainer;
