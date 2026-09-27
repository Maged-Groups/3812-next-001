import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: [],
    cartPcs: 0,
    cartTotal: 0,
  },
  reducers: {
    addToCart: () => {},
    removeFromCart: () => {},
    emptyCart: () => {},
  },
});

export default cartSlice.reducer;
