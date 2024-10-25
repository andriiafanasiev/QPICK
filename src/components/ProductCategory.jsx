import React from 'react';

function ProductCategory({ categoryName = 'category', children }) {
  return (
    <div className="flex flex-col items-start p-4 w-full  ">
      <h2 className="font-semibold text-xl text-gray mb-6">{categoryName}</h2>

      <div className="grid  grid-cols-3 gap-[30px] mx-auto ">{children}</div>
    </div>
  );
}

export default ProductCategory;
