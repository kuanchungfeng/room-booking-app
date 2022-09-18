import { configureStore } from "@reduxjs/toolkit";
import guestReducer from "./guest";

const store = configureStore({
  reducer: { guest: guestReducer },
});

export default store;
