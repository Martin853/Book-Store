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
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateCartItem: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.cart.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItem } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
