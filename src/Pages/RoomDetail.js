import React from "react";
import { useParams } from "react-router-dom";

import Banner from "../ui/Banner";
import RoomDetailContainer from "../Components/RoomDetailContainer";

function Room() {
  const params = useParams();

  return (
    <>
      <Banner bannerText="Room" />
      {/* <div>{params.roomId}</div> */}
      <RoomDetailContainer />
    </>
  );
}

export default Room;
