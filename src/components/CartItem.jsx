import React from 'react';
import { useState } from 'react';

function CartItem({ name, image, price }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex-1 text-[17px] font-semibold  w-full md:w-[50%] shadow-primary-shadow rounded-[30px] p-4 py-6  relative bg-white">
      <div className="flex flex-row justify-between items-center">
        <div className="h-[120px] flex justify-center items-center">
          <img className="w-auto h-full" src={image} alt={name} />
        </div>
        <div className="flex flex-col  items-start relative ">
          <h4>{name}</h4>

          <p>{price}$</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default CartItem;
