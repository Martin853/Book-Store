import { configureStore } from '@reduxjs/toolkit';
import booksDataReducer from './booksData';
import searchBarReducer from './searchBar';

export default configureStore({
  reducer: {
    booksData: booksDataReducer,
    searchBar: searchBarReducer,
  },
});
