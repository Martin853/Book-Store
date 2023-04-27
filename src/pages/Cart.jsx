import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from '../components/Cart/CartItem';

export const Cart = () => {
  const { cart } = useSelector((state) => state.shoppingCart);
  console.log(cart);
  return (
    <div className=" mt-2 p-2 mx-auto h-full flex flex-col gap-4 ">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};
