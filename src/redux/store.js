import { configureStore } from '@reduxjs/toolkit';
import booksDataReducer from './booksData';
import searchBarReducer from './searchBar';
import shoppingCartReducer from './shoppingCart';

export default configureStore({
  reducer: {
    booksData: booksDataReducer,
    searchBar: searchBarReducer,
    shoppingCart: shoppingCartReducer,
  },
});
