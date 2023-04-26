import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooksData = createAsyncThunk('fetchBooksData', async () => {
  const response = await fetch(
    'https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=20&country=US&key=AIzaSyCOdBW17XswV2lIzACKPq0HCsyaXT7QhWI'
  );
  return response.json();
});

export const booksDataSlice = createSlice({
  name: 'booksData',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooksData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooksData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchBooksData.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
  },
});

export default booksDataSlice.reducer;
