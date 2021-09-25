import React from "react";

import Banner from "../ui/Banner";
import BookingPaymentContainer from "../Components/BookingPaymentContainer";

function BookingPayment() {
  return (
    <>
      <Banner bannerText="Booking" />
      <BookingPaymentContainer />
    </>
  );
}

export default BookingPayment;
