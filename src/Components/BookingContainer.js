import React from "react";
import { useSelector } from "react-redux";

import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import DatePickContainer from "../ui/DatePickContainer";
import CardHorizontalUi from "../ui/CardHorizontalUi";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "3rem",
  },
}));

function BookingContainer() {
  const classes = useStyles();

  const allRoomsInfo = useSelector((state) => state.data.roomsInfo);

  const selectedRoomInfo = useSelector((state) => state.data.selectedRoom);

  let cardInfo;

  if (selectedRoomInfo.length === 0) {
    cardInfo = allRoomsInfo;
  } else {
    cardInfo = selectedRoomInfo;
  }

  return (
    <>
      <Container className={classes.root}>
        <Grid container spacing={5}>
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
                link={item.link}
                id={item.id}
                back={selectedRoomInfo.length === 0 ? false : true}
              />
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <DatePickContainer
              name={
                selectedRoomInfo.length === 0
                  ? "Please select your room"
                  : selectedRoomInfo[0].name
              }
              price={
                selectedRoomInfo.length === 0 ? 0 : selectedRoomInfo[0].price
              }
              hasSelectRoom={selectedRoomInfo.length === 0 ? true : false}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BookingContainer;
