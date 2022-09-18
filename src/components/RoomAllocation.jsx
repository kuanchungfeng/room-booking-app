import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SingleRoomAllocation from "./SingleRoomAllocation";
import Summary from "./Summary";
import { guestActions } from "../store/guest";

const RoomAllocation = ({ guest, room, onChange }) => {
  const dispatch = useDispatch();
  const guestArray = useSelector((state) => state.guest.guestArray);

  useEffect(() => {
    dispatch(guestActions.initialGuest({ room, guest }));
  }, []);

  if (room > guest || guestArray?.length === 0) {
    return <div>元件使用錯誤，房間必須小於等於人數</div>;
  }

  onChange?.();

  const disabled = guest === room;

  return (
    <div>
      <Summary guest={guest} room={room} />
      {guestArray.map((allocation, index) => {
        return (
          <SingleRoomAllocation
            key={index}
            allocation={allocation}
            lastRoom={index === room - 1}
            index={index}
            onChange={onChange}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
};

export default RoomAllocation;
