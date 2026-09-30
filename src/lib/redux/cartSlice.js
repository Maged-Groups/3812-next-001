import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: [{}, {}, {}],
  },
  reducers: {
    addToCart: () => {},
    removeFromCart: () => {},
    emptyCart: () => {},
  },
});

export default cartSlice.reducer;
