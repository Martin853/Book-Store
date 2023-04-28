import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from '../components/Cart/CartItem';
import { Link } from 'react-router-dom';
import { Total } from '../components/Cart/Total';

export const Cart = () => {
  const { cart } = useSelector((state) => state.shoppingCart);

  if (cart.length === 0) {
    return (
      <div className="w-full h-full flex flex-col gap-4 justify-center items-center p-4 mx-auto">
        <h1 className="font-poppins text-center text-2xl font-bold">
          You don't have anything in your cart
        </h1>
        <Link
          className="font-poppins font-semibold p-2 text-base bg-transparent hover:bg-lime-600
          ] border border-black rounded-lg cart-button flex justify-center items-center gap-2  transition-all duration-100 ease-linear"
          to={'/'}
        >
          Go back shopping
        </Link>
      </div>
    );
  }
  return (
    <div className="mt-2 px-2 pt-4 mx-auto h-full flex flex-col gap-4 ">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
      <Total />
    </div>
  );
};
