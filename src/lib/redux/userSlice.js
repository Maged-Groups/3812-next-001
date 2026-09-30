import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    id: 33,
    firstName: "Mrawan",
    lastName: "Osama",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHxAmnMFLnXew/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722228401183?e=2147483647&v=beta&t=_R2jX8PLop-mGVOiubxiAq3SLt4pF9iznm4uIBEdfB8",
    gender: "male",
    loggedin: true,
  },
  reducers: {
    login: () => {},
    logout: (state) => {
      console.log("Logout in useSlice fired");
      state.id = null;
      state.firstName = "";
      state.lastName = "";
      state.image = "";
      state.gender = "";
      state.loggedin = false;
    },
  },
});

export default userSlice.reducer;
export const { logout, login } = userSlice.actions;
