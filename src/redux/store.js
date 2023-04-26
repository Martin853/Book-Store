import { configureStore } from '@reduxjs/toolkit';
import booksDataReducer from './booksData';

export default configureStore({
  reducer: {
    booksData: booksDataReducer,
  },
});
