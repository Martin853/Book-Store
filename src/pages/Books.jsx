import React, { useEffect } from 'react';
import { BookCard } from '../components/Book/BookCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksData } from '../redux/booksData';
import { ImSpinner8 } from 'react-icons/im';

export const Books = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const booksData = useSelector((state) => state.booksData.data);

  useEffect(() => {
    dispatch(fetchBooksData());
  }, [dispatch]);

  if (state.booksData.isLoading) {
    return (
      <div className="h-full flex justify-center items-center flex-col gap-4">
        <h1 className=" font-poppins text-4xl">Loading...</h1>
        <ImSpinner8 size={24} className="animate-spin" />
      </div>
    );
  }

  if (state.booksData.data !== null) {
    return (
      <div className="px-2 m-auto grid grid-cols-1 pt-10 pb-10 justify-items-center items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-6 md:px-12">
        {booksData.items.map((book) => (
          <BookCard key={book.id} />
        ))}
      </div>
    );
  }
};
