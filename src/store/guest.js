import { createSlice } from "@reduxjs/toolkit";

const initialGuestState = { guestArray: [], totalGuest: 0 };

const guestSlice = createSlice({
  name: "guest",
  initialState: initialGuestState,
  reducers: {
    initialGuest(state, action) {
      const defaultGuest = { adult: 1, child: 0 };
      state.guestArray = Array(action.payload.room).fill(defaultGuest);
      state.totalGuest = action.payload.guest;
    },
    addAdultByRoom(state, action) {
      const { index, amount } = action.payload;
      state.guestArray[index].adult = state.guestArray[index].adult + amount;
    },
    minusAdultByRoom(state, action) {
      const { index, amount } = action.payload;
      state.guestArray[index].adult = state.guestArray[index].adult - amount;
    },
    addChildByRoom(state, action) {
      const { index, amount } = action.payload;
      state.guestArray[index].child = state.guestArray[index].child + amount;
    },
    minusChildByRoom(state, action) {
      const { index, amount } = action.payload;
      state.guestArray[index].child = state.guestArray[index].child - amount;
    },
  },
});

export const guestActions = guestSlice.actions;

export default guestSlice.reducer;
