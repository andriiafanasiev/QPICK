import React from 'react';
import ProductItem from '../components/ProductItem';

function Favorites({ products, handleToogleToFavorites }) {
  const favoritesProducts = products.filter((product) => product.isFavorite);

  return (
    <div className="flex flex-col max-w-[1100px] mx-auto pl-[5px] pr-[5px] mt-[22px]">
      {favoritesProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-8 mt-14 mb-14">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-gray-800">
              Your have no favorites products yet :(
            </h2>
            <p className="text-[#838383]">
              But it's never too late to fix it :)
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
          {favoritesProducts.map((product) => (
            <ProductItem
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              rating={product.rating}
              discount={product.discount}
              isFavorite={product.isFavorite}
              toogleToFavorites={() => handleToogleToFavorites(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
