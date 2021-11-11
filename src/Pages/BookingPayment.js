import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

import Banner from "../ui/Banner";
import BookingPaymentContainer from "../Components/BookingPaymentContainer";

function BookingPayment() {
  const cardInfo = useSelector((state) => state.data.roomsInfo);
  const selectedDateInfo = useSelector((state) => state.data.checkInInfo);

  return (
    <>
      <Banner bannerText="Booking" />
      {cardInfo.length !== 0 && selectedDateInfo.length !== 0 ? (
        <BookingPaymentContainer />
      ) : (
        <Redirect to="/booking/select-room-and-date" />
      )}
    </>
  );
}

export default BookingPayment;
