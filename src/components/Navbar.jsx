import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuery } from '../redux/searchBar';

export const Navbar = () => {
  const dispatch = useDispatch();

  const handleQueryChange = (event) => {
    dispatch(updateQuery(event.target.value));
  };

  return (
    <div className="flex flex-col justify-center items-center bg-lime-600 h-36 m-auto px-4 gap-3 md:px-12 md:flex-row md:h-24 shadow-xl">
      <h1 className="font-poppins font-bold text-2xl md:flex-1 md:text-4xl">
        Book Store
      </h1>
      <div className="flex items-center w-3/4 bg-white p-2 rounded-2xl gap-2 md:flex-1">
        <FaSearch />
        <input
          type="text"
          className="font-poppins outline-none w-3/4 text-sm"
          onChange={handleQueryChange}
        />
      </div>
      <div className="flex w-3/4 justify-center gap-4 md:flex-1 md:justify-end">
        <Link
          to={'/'}
          className="font-poppins font-semibold w-1/2 p-1 text-sm bg-transparent hover:bg-hoverGreen
        ] border border-black rounded-md cart-button flex justify-center items-center gap-2 md:w-2/5 transition-all duration-100 ease-linear"
        >
          <BsBook size={'20px'} />
          Books
        </Link>
        <Link
          to={'/cart'}
          className="font-poppins font-semibold w-1/2 p-1 text-sm bg-transparent hover:bg-hoverGreen
        ] border border-black rounded-md cart-button flex justify-center items-center gap-2 md:w-2/5 transition-all duration-100 ease-linear"
        >
          <AiOutlineShoppingCart size={'20px'} />
          Cart
        </Link>
      </div>
    </div>
  );
};
