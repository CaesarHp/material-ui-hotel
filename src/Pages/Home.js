import React from "react";

import HomeBanner from "../Components/HomeBanner";
import HomeDatePick from "../Components/HomeDatePick";
import HomeCard from "../Components/HomeCard";
import HomeAbout from "../Components/HomeAbout";

function Home() {
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
