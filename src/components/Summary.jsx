import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Remain = styled.div`
  background-color: #c9f8f7;
  margin: 8px;
  padding: 8px;
  border-radius: 2px;
  font-size: 10px;
  border: solid 0.5px #54b4d3;
`;

const Summary = ({ guest, room }) => {
  const guestArray = useSelector((state) => state.guest.guestArray);
  const currentRoomPeopleArray = guestArray?.map(
    (guest) => guest.adult + guest.child
  );
  const currentTotal =
    currentRoomPeopleArray?.length > 0
      ? currentRoomPeopleArray.reduce((a, b) => a + b)
      : room;

  return (
    <>
      <Title>{`住客人數：${guest} 人 / ${room} 房`}</Title>
      <Remain>{`尚未分配人數：${guest - currentTotal}人`}</Remain>
    </>
  );
};

export default Summary;
