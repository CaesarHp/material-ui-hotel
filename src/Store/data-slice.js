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
        view: "City-view",
        price: 189,
        bed: "Full Size",
        img: standard,
        link: "/rooms/standard-room",
        id: "standard-room",
      },
      {
        name: "Premium Room",
        number: 2,
        size: 360,
        view: "City-view",
        price: 229,
        bed: "Full Size",
        img: premium,
        link: "/rooms/premium-room",
        id: "premium-room",
      },
      {
        name: "Deluxe Room",
        number: 3,
        size: 385,
        view: "Landscape",
        price: 259,
        bed: "Queen Size",
        img: deluxe,
        link: "/rooms/deluxe-room",
        id: "deluxe-room",
      },
      {
        name: "Queen Room",
        number: 2,
        size: 400,
        view: "City-view",
        price: 229,
        bed: "Queen Size",
        img: queen,
        link: "/rooms/queen-room",
        id: "queen-room",
      },
      {
        name: "King Room",
        number: 2,
        size: 400,
        view: "City-view",
        price: 229,
        bed: "King Size",
        img: king,
        link: "/rooms/king-room",
        id: "king-room",
      },
      {
        name: "Luxury Suite",
        number: 5,
        size: 525,
        view: "Landscape",
        price: 359,
        bed: "King Size",
        img: suite,
        link: "/rooms/luxury-suite",
        id: "luxury-suite",
      },
    ],

    selectedRoom: [],

    checkInInfo: [],
  },
  reducers: {
    selectRoom(state, action) {
      const room = state.roomsInfo.find((room) => room.id === action.payload);
      if (state.selectedRoom.length === 0) {
        state.selectedRoom.push(room);
      } else {
        state.selectedRoom.splice(0, 1, room);
      }
    },

    backToPrevious(state) {
      state.selectedRoom = [];
    },

    checkIn(state, action) {
      if (state.checkInInfo.length === 0) {
        state.checkInInfo.push(action.payload);
      } else {
        state.checkInInfo.splice(0, 1, action.payload);
      }
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
