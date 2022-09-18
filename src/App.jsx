import "./App.css";

import React from "react";
import RoomAllocation from "./components/RoomAllocation";
import { useSelector } from "react-redux";

const App = () => {
  const guestArray = useSelector((state) => state.guest.guestArray);

  const onChangeHandler = () => {
    console.log(guestArray);
  };

  return (
    <div>
      <section id="app-form">
        <RoomAllocation guest={10} room={3} onChange={onChangeHandler} />
      </section>
    </div>
  );
};

export default App;
