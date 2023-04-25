import React, { useState } from 'react';
import { BookCardModal } from './BookCardModal';

export const BookCard = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);

    if (!modal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  return (
    <>
      <div
        onClick={toggleModal}
        className="w-64 h-64 p-1 flex flex-col items-center justify-evenly border-2 border-green-950 rounded-md hover:cursor-pointer"
      >
        <img
          src="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
          className=" w-1/2 h-3/4"
        />
        <h1 className="font-poppins font-bold text-2xl underline">Book Name</h1>
      </div>

      {modal && <BookCardModal toggleModal={toggleModal} />}
    </>
  );
};
