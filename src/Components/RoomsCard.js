import React from "react";
import { useSelector } from "react-redux";

import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import CardUi from "../ui/CardUi";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem 5rem",
  },
  grid: {
    margin: "2rem 0",
  },
}));

function RoomsCard() {
  const classes = useStyles();

  const cardInfo = useSelector((state) => state.data.roomsInfo);

  return (
    <>
      <Container className={classes.root}>
        <Grid container>
          {cardInfo.map((item, index) => (
            <Grid item key={index} xs={12} md={4} className={classes.grid}>
              <CardUi
                key={index}
                name={item.name}
                number={item.number}
                size={item.size}
                view={item.view}
                price={item.price}
                img={item.img}
                link={item.link}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default RoomsCard;
