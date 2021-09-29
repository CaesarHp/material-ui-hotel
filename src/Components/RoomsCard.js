import React from "react";
import { useSelector } from "react-redux";

import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CardUi from "../ui/CardUi";
import Sort from "../ui/Sort";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem 0",
    [theme.breakpoints.down("md")]: {
      padding: "2rem",
    },
  },
  grid: {
    margin: "2rem 0",
  },
  card: {
    marginBottom: "2rem",
  },
}));

function RoomsCard() {
  const classes = useStyles();

  const cardInfo = useSelector((state) => state.data.roomsInfo);

  return (
    <>
      <Container className={classes.root}>
        <Sort />
        <Grid container className={classes.card}>
          {cardInfo.map((item, index) => (
            <Grid
              item
              key={index}
              xs={12}
              md={6}
              lg={4}
              className={classes.grid}
            >
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
        <Grid container justifyContent="center">
          <Grid item>
            <Stack spacing={4}>
              <Pagination count={5} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default RoomsCard;
