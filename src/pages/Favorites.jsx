import React from 'react';
import ProductItem from '../components/ProductItem';

function Favorites({ products, handleToogleToFavorites }) {
  return (
    <div className="flex flex-col max-w-[1100px] mx-auto pl-[5px] pr-[5px] mt-[22px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
        {products
          .filter((product) => product.isFavorite)
          .map((product, index) => (
            <ProductItem
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              rating={product.rating}
              discount={product.discount}
              toogleToFavorites={() => {
                handleToogleToFavorites(product.id);
              }}
              isFavorite={product.isFavorite}
            />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
