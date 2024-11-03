import React from 'react';

const ProductCategoryItem = ({ name, image }) => (
  <div className="flex-1  justify-center items-center text-[17px] font-semibold min-w-[calc(33.33%-1rem)] shadow-primary-shadow rounded-[30px] p-4 pb-12 pt-6  relative bg-white">
    <div>
      <img className="min-w-36 mx-auto" src={image} alt={name} />
    </div>
    <div className="text-[#1C1C27] mt-5 text-[17px] font-semibold  ">
      {name}
    </div>
    
  </div>
);

export default ProductCategoryItem;
