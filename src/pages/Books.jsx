import React from 'react';
import { BookCard } from '../components/Book/BookCard';

export const Books = () => {
  return (
    <div className="px-2 m-auto grid grid-cols-1 pt-10 pb-10 justify-items-center items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-6 md:px-12">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
};
