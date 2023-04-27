import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push({ id, title, price, quantity });
      }
    },
    removeOneFromCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload
      );

      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      } else {
        existingItem.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeOneFromCart, removeFromCart } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
