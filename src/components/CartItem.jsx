import React from 'react';
import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

function CartItem({ name, image, price }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex-1 text-[17px] font-semibold w-full md:w-[50%] shadow-primary-shadow rounded-[30px] p-4 py-6  relative bg-white">
      <div className="flex flex-row gap-3  items-center">
        <div className="h-[120px] flex justify-center items-center">
          <img className="w-auto h-full" src={image} alt={name} />
        </div>
        <div className="flex flex-col  items-start relative ">
          <h4>{name}</h4>

          <p className="text-gray font-light">{price}$</p>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-3  items-center">
        <div className="flex flex-row gap-2 items-center">
          <button
            className="w-8 h-8 text-white bg-yellow-300  rounded-full flex items-center justify-center text-2xl font-bold"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          >
            −
          </button>
          <p className="w-8">{quantity}</p>
          <button
            className="w-8 h-8 text-white bg-yellow-300  rounded-full flex items-center justify-center text-2xl font-bold"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <p>{Math.round(price * quantity * 100) / 100}$</p>
      </div>
      <button className="absolute top-5 right-5">
        <MdDeleteForever className="w-6 h-6" />
      </button>
    </div>
  );
}

export default CartItem;
