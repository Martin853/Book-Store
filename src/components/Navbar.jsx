import React from 'react';
import { FaSearch } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-lime-600 h-36 m-auto px-4 gap-3 md:px-12 md:flex-row md:h-24 shadow-xl">
      <h1 className="font-poppins font-bold text-2xl md:flex-1 md:text-4xl">
        Book Store
      </h1>
      <div className="flex items-center w-3/4 bg-white p-2 rounded-2xl gap-2 md:flex-1">
        <FaSearch />
        <input
          type="text"
          className="font-poppins outline-none w-3/4 text-sm "
        />
      </div>
      <div className="flex w-3/4 justify-center gap-4 md:flex-1 md:justify-end">
        <button
          className="font-poppins font-semibold w-2/5 p-1 text-sm bg-transparent hover:bg-hoverGreen
        ] border border-black rounded-md cart-button "
        >
          Books
        </button>
        <button
          className="font-poppins font-semibold w-2/5 p-1 text-sm bg-transparent hover:bg-hoverGreen
        ] border border-black rounded-md cart-button "
        >
          Cart
        </button>
      </div>
    </div>
  );
};
