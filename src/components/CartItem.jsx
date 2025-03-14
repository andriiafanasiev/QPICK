import React from 'react';

import { MdDeleteForever } from 'react-icons/md';

function CartItem({
  name,
  image,
  price,
  quantity,
  updateQuantity,
  handleRemoveFromCart,
}) {
  return (
    <div className="flex-1 text-[17px] font-semibold w-full shadow-primary-shadow rounded-[30px] p-4 py-6  relative bg-white">
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
            onClick={() => {
              if (quantity - 1 < 1) {
                handleRemoveFromCart();
                return;
              }
              updateQuantity(Math.max(1, quantity - 1));
            }}
          >
            −
          </button>
          <p className="w-8">{quantity}</p>
          <button
            className="w-8 h-8 text-white bg-yellow-300  rounded-full flex items-center justify-center text-2xl font-bold"
            onClick={() => updateQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <p>{(price * quantity).toFixed(2)}$</p>
      </div>
      <button
        onClick={handleRemoveFromCart}
        className="absolute top-5 right-5 transition duration-200 ease-in-out hover:text-red-600"
      >
        <MdDeleteForever className="w-6 h-6 " />
      </button>
    </div>
  );
}

export default CartItem;
