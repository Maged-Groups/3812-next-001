import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";
import accountSlice from "./accountSlice";

const store = configureStore({
  reducer: {
    userSlice,
    cartSlice,
    accountSlice,
  },
});

export default store;
