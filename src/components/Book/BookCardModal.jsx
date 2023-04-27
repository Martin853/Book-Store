import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/shoppingCart';

export const BookCardModal = (props) => {
  const dispatch = useDispatch();

  function handleAddToCart(id, title, price, quantity) {
    dispatch(addToCart({ id, title, price, quantity }));
  }

  return (
    <div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-10">
      <div
        onClick={props.toggleModal}
        className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed bg-slate-900 bg-opacity-50"
      ></div>
      <div className=" w-9/12 h-4/6 overflow-auto p-4 bg-slate-100 z-20 border-2 border-teal-950 rounded-2xl flex flex-col justify-start gap-4 sm:p-8 md:h-5/6">
        <h1 className="font-poppins text-2xl font-bold sm:text-4xl md:text-5xl">
          {props.title}
        </h1>
        <h2 className="font-poppins text-sm font-light sm:text-lg md:text-xl">
          By {props.author}
        </h2>
        <h2 className="font-poppins text-sm font-light sm:text-lg md:text-xl">
          {props.price !== 'Not Available'
            ? `$${props.price}`
            : 'Not Available'}
        </h2>
        <h2 className="font-poppins text-sm sm:text-lg md:text-xl">
          {props.description}
        </h2>
        <div className="w-full mt-auto flex justify-between gap-4">
          <button
            onClick={props.toggleModal}
            className="font-poppins font-semibold w-1/2 h-10 p-1 text-sm bg-transparent hover:bg-black hover:text-white border border-black rounded-md cart-button flex justify-center items-center gap-2 md:h-10 md:text-xl transition-all duration-100 ease-linear"
          >
            Close
          </button>
          <button
            onClick={() =>
              handleAddToCart(props.id, props.title, props.price, 1)
            }
            disabled={props.price === 'Not Available' ? true : false}
            className={`font-poppins font-semibold w-1/2 h-10 p-1 text-sm bg-transparent hover:bg-black hover:text-white border border-black rounded-md cart-button flex justify-center items-center gap-2 md:h-10 md:text-xl transition-all duration-100 ease-linear ${
              props.price === 'Not Available'
                ? 'cursor-not-allowed opacity-50'
                : 'border'
            }`}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
