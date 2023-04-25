import React from 'react';

export const BookCardModal = (props) => {
  return (
    <div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed flex justify-center items-center z-10">
      <div
        onClick={props.toggleModal}
        className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed bg-slate-900 bg-opacity-50"
      ></div>
      <div className=" w-9/12 h-4/6 p-4 bg-slate-100 z-20 border-2 border-teal-950 rounded-2xl flex flex-col justify-start gap-2 sm:p-8">
        <h1 className="font-poppins text-2xl font-bold sm:text-4xl md:text-5xl">
          Title
        </h1>
        <h2 className="font-poppins text-sm font-light sm:text-lg md:text-xl">
          By Author
        </h2>
        <h2 className="font-poppins text-sm sm:text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          expedita dicta harum, voluptates non nihil optio. Ea impedit iure
          nobis deserunt iste a exercitationem quis assumenda tempore. Iste,
          dolorum dicta?
        </h2>
        <div className="w-full mt-auto flex justify-between gap-4">
          <button
            onClick={props.toggleModal}
            className="font-poppins font-semibold w-1/2 p-1 text-sm bg-transparent hover:bg-black hover:text-white border border-black rounded-md cart-button flex justify-center items-center gap-2 md:h-10 md:text-xl transition-all duration-100 ease-linear"
          >
            Close
          </button>
          <button className="font-poppins font-semibold w-1/2 p-1 text-sm bg-transparent hover:bg-black hover:text-white border border-black rounded-md cart-button flex justify-center items-center gap-2 md:h-10 md:text-xl transition-all duration-100 ease-linear">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};