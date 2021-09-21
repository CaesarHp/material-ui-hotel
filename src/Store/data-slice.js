import { createSlice } from "@reduxjs/toolkit";

import standard from "../img/standard.jpg";
import premium from "../img/premium.jpg";
import queen from "../img/queen.jpg";
import king from "../img/king.jpg";
import deluxe from "../img/deluxe.jpg";
import suite from "../img/suite.jpg";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    roomsInfo: [
      {
        name: "Standard Room",
        number: 2,
        size: 350,
        view: "city",
        price: 189,
        img: standard,
        link: "/booking/standard-room",
      },
      {
        name: "Premium Room",
        number: 2,
        size: 350,
        view: "city",
        price: 229,
        img: premium,
        link: "/booking/premium-room",
      },
      {
        name: "Deluxe Room",
        number: 3,
        size: 375,
        view: "landscape",
        price: 259,
        img: deluxe,
        link: "/booking/deluxe-room",
      },
      {
        name: "Queen Room",
        number: 2,
        size: 400,
        view: "city",
        price: 229,
        img: queen,
        link: "/booking/queen-room",
      },
      {
        name: "King Room",
        number: 2,
        size: 400,
        view: "city",
        price: 229,
        img: king,
        link: "/booking/king-room",
      },
      {
        name: "Luxury Suite",
        number: 5,
        size: 525,
        view: "landscape",
        price: 359,
        img: suite,
        link: "/booking/luxury-suite",
      },
    ],
  },
  reducers: {},
});

export const dataAction = dataSlice.actions;
export default dataSlice;
