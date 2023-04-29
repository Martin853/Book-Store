import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

export const Success = () => {
  return (
    <div className="w-full h-full px-2 mx-auto flex flex-col justify-center items-center gap-4">
      <h1 className="font-poppins font-bold text-2xl text-center">
        Your payment was successful
      </h1>
      <AiFillCheckCircle size={85} color="green" />
    </div>
  );
};
