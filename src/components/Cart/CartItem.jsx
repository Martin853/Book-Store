import React from 'react';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  removeOneFromCart,
  removeFromCart,
} from '../../redux/shoppingCart';

export const CartItem = (props) => {
  const dispatch = useDispatch();

  function handleAddToCart(id, title, price, quantity) {
    dispatch(addToCart({ id, title, price, quantity }));
  }

  function handleRemoveOneFromCart(id) {
    dispatch(removeOneFromCart(id));
  }

  function handleRemoveFromCart(id) {
    dispatch(removeFromCart(id));
  }

  return (
    <div className="py-2 flex flex-col gap-4 justify-evenly items-center bg-zinc-200">
      <h1 className="font-poppins text-lg font-semibold">{props.title}</h1>
      <h1 className="font-poppins">Price: {props.price}</h1>
      <h1 className="font-poppins">Quantity: {props.quantity}</h1>
      <div className="w-full flex px-4 mx-auto gap-3">
        <button
          onClick={() => handleAddToCart(props.id, props.title, props.price, 1)}
          className="font-poppins font-semibold flex-1 p-1 text-sm bg-transparent hover:bg-hoverGreen
        ] border border-black rounded-md cart-button flex justify-center items-center gap-2  transition-all duration-100 ease-linear"
        >
          +
        </button>
        <button
          onClick={() => handleRemoveOneFromCart(props.id)}
          className="font-poppins font-semibold flex-1 p-1 text-sm bg-transparent hover:bg-red-600
        ] border border-black rounded-md cart-button flex justify-center items-center gap-2  transition-all duration-100 ease-linear"
        >
          -
        </button>
        <button
          onClick={() => handleRemoveFromCart(props.id)}
          className="font-poppins font-semibold flex-1 p-1 text-sm bg-transparent hover:bg-red-600
        ] border border-black rounded-md cart-button flex justify-center items-center gap-2  transition-all duration-100 ease-linear"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
