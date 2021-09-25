import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

import Banner from "../ui/Banner";
import RoomDetailContainer from "../Components/RoomDetailContainer";

function Room() {
  const params = useParams();

  const rooms = useSelector((state) => state.data.roomsInfo);

  const roomInfo = rooms.find((room) => room.id === params.roomId);

  const history = useHistory();

  if (!roomInfo) {
    history.push("/notfound");
    return null;
  }

  return (
    <>
      <Banner bannerText={roomInfo.name} />
      <RoomDetailContainer
        name={roomInfo.name}
        number={roomInfo.number}
        size={roomInfo.size}
        view={roomInfo.view}
        price={roomInfo.price}
        bed={roomInfo.bed}
        img={roomInfo.img}
      />
    </>
  );
}

export default Room;
