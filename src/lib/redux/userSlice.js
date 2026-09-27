import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    id: "",
    firstName: "",
    lastName: "",
    image: "",
    gender: "",
    loggedin: false,
  },
  reducers: {
    login: () => {},
    logout: () => {},
  },
});

export default userSlice.reducer;
