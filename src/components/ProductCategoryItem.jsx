import React from 'react';

const ProductCategoryItem = ({ name, image }) => (
  <div className="flex flex-col text-center items-center justify-center gap-5 pl-24 pr-24 rounded-[20px] max-w-[350px] max-h-[410px] pt-6 pb-12 bg-white">
    <div>
      <img src={image} alt={name} />
    </div>
    <div className="text-[#1C1C27] text-[17px] font-semibold  ">{name}</div>
  </div>
);

export default ProductCategoryItem;
