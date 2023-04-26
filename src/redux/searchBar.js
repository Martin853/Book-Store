import { createSlice } from '@reduxjs/toolkit';

export const searchBarQuerySlice = createSlice({
  name: 'searchBarQuery',
  initialState: {
    query: '',
  },
  reducers: {
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { updateQuery } = searchBarQuerySlice.actions;

export default searchBarQuerySlice.reducer;
