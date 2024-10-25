import React from 'react';

function ProductItem({ name, image, price, discount, rating }) {
  return (
    <div className="flex text-[#1C1C27] text-[17px] font-semibold  flex-col relative shadow-primary-shadow text-center items-center justify-center gap-5 pl-24 pr-24 rounded-[20px] max-w-[350px] max-h-[410px] pt-6 pb-12 bg-white">
      <img
        className="absolute cursor-pointer top-[15px] left-[22px]"
        src="/img/icons/like.svg"
        alt=""
      />
      <div className="h-[240px] flex justify-center items-center">
        <img className="min-w-36" src={image} alt={name} />
      </div>
      <div className="flex flex-row w-full justify-between ">
        <h4>{name}</h4>
        <p className=" ">{price}</p>
      </div>
      <p className="text-[#1C1C27] text-[17px] font-semibold  ">{rating}</p>
    </div>
  );
}

export default ProductItem;
