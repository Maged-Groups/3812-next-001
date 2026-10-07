import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "accountSlice",
  initialState: {
    loginVisible: false,
    registerVisible: false,
  },
  reducers: {
    showLogin: (state) => {
      state.loginVisible = true;
    },
    hideLogin: (state) => {
      state.loginVisible = false;
    },
    showRegister: (state) => {
      state.registerVisible = true;
    },
    hideRegister: (state) => {
      state.registerVisible = false;
    },
  },
});

export default accountSlice.reducer;
export const { showLogin, hideLogin, showRegister, hideRegister } =
  accountSlice.actions;
