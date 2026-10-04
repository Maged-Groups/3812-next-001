import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    id: null,
    firstName: null,
    lastName: null,
    image: null,
    gender: null,
    accessToken: null,
    loggedin: false,
  },
  reducers: {
    login: (state, { payload }) => {
      state.id = payload.id;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.image = payload.image;
      state.gender = payload.gender;
      state.accessToken = payload.accessToken;
      state.loggedin = true;
    },
    logout: (state) => {
      console.log("Logout in useSlice fired");
      state.id = null;
      state.firstName = null;
      state.lastName = null;
      state.image = null;
      state.gender = null;
      state.accessToken = null;
      state.loggedin = false;
    },
  },
});

export default userSlice.reducer;
export const { logout, login } = userSlice.actions;
