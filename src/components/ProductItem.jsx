import React from 'react';

function ProductItem({ name, image, price, rating, discount }) {
  return (
    <div className="flex-1 text-[17px] font-semibold min-w-[calc(33.33%-1rem)] shadow-primary-shadow rounded-[30px] p-4  relative bg-white">
      <img
        className="absolute cursor-pointer top-[15px] left-[22px]"
        src="/img/icons/like.svg"
        alt=""
      />
      <div className="h-[240px] flex justify-center items-center">
        <img className="min-w-36" src={image} alt={name} />
      </div>
      <div className="flex flex-row mt-12 justify-between ">
        <h4>{name}</h4>
        <p className=" ">{price}$</p>
      </div>
      <div className="flex flex-row  gap-3 mt-6 ">
        <img src="/img/icons/star.svg" alt="" />
        <p className="text-[#1C1C27] text-[17px] font-semibold  ">{rating}</p>
      </div>
    </div>
  );
}

export default ProductItem;
