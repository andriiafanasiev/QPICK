import React from 'react';
import ProductItem from './ProductItem';
import products from '../data/products';

function ProductCategory({ categoryName = 'category', children }) {
  return (
    <div className="flex overflow-x-auto flex-col items-start pl-4 pr-4 pb-4 w-full">
      <h2 className="font-semibold mb-5 text-xl text-gray">{categoryName}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
        {products
          .filter((product) => product.category === categoryName)
          .map((product, index) => (
            <ProductItem
              key={index}
              name={product.name}
              image={product.image}
              price={product.price}
              rating={product.rating}
              discount={product.discount}
              addToFavorites={() => {}}
            />
          ))}
        {children}
      </div>
    </div>
  );
}

export default ProductCategory;
