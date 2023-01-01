import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { carts: [] },

  reducers: {
    replaceCart(state, action) {
      state.carts = action.payload.carts;
    },

    add(state, action) {
      const existed = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existed >= 0) state.carts[existed].piece += action.payload.piece;
      else state.carts = [...state.carts, action.payload];
    },

    decrease(state, action) {
      const existed = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.carts[existed].piece >= 2) state.carts[existed].piece -= 1;
      else
        state.carts = state.carts.filter(
          (item) => item.id !== action.payload.id
        );
    },
  },
});

export default cartSlice;

export const cartMapActions = cartSlice.actions;
