import React from "react";

import { Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import HomeBanner from "../Components/HomeBanner";
import HomeDatePick from "../Components/HomeDatePick";
import HomeCard from "../Components/HomeCard";
import HomeAbout from "../Components/HomeAbout";

const useStyles = makeStyles((theme) => ({}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <HomeBanner />
      <HomeDatePick />
      <HomeCard />
      <HomeAbout />
    </>
  );
}

export default Home;
