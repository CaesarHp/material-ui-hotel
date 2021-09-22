import React from "react";
import { useSelector } from "react-redux";

import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import DatePickContainer from "../ui/DatePickContainer";
import CardHorizontalUi from "../ui/CardHorizontalUi";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem 0",
  },
}));

function BookingContainer() {
  const classes = useStyles();

  const cardInfo = useSelector((state) => state.data.roomsInfo);

  return (
    <>
      <Container className={classes.root}>
        <Grid container>
          <Grid item xs={12} md={8}>
            {cardInfo.map((item, index) => (
              <CardHorizontalUi
                key={index}
                name={item.name}
                number={item.number}
                size={item.size}
                view={item.view}
                price={item.price}
                img={item.img}
              />
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <DatePickContainer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BookingContainer;
