import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Total = () => {
  const { cart } = useSelector((state) => state.shoppingCart);

  const totalCalculator = () => {
    let sum = 0;

    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price * cart[i].quantity;
    }

    return sum;
  };

  return (
    <div className="w-full rounded-t-2xl py-4 bg-zinc-400 flex justify-end items-center mt-auto gap-4 px-4 mx-auto">
      <h1 className="font-poppins font-bold text-2xl">
        Total {totalCalculator()}
      </h1>
      <Link
        to={'/checkout'}
        className="font-poppins font-semibold p-1 text-base bg-transparent hover:text-white hover:bg-black
        ] border border-black rounded-lg cart-button flex justify-center items-center gap-2  transition-all duration-100 ease-linear"
      >
        Checkout
      </Link>
    </div>
  );
};
