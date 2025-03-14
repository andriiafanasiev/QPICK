import React from 'react';
import ProductCategory from '../components/ProductCategory';
import ProductCategoryItem from '../components/ProductCategoryItem';

function Main({ products, handleToogleToFavorites, handleAddToCart }) {
  return (
    <>
      <div className="flex flex-col max-w-[1100px] mx-auto pl-[5px] pr-[5px] mt-[22px]">
        <div className=" flex flex-row justify-center mb-10 h-[197px] items-center sm:gap-[130px]  md:gap-[180px] rounded-[30px] w-full bg-[#101010]">
          <h1 className="font-semibold  md:text-2xl lg:text-3xl sm:text-start md:text-center text-white">
            Accessories for <br />
            iPhone 13 Pro Max
          </h1>
          <div>
            <img src="/img/hero.png" className="h-auto mt-3" alt="hero img" />
          </div>
        </div>
        <ProductCategory
          products={products}
          handleToogleToFavorites={handleToogleToFavorites}
          categoryName="Cases"
        >
          <ProductCategoryItem
            name="Glass"
            image="/img/products/cases/glass.png"
          />
          <ProductCategoryItem
            name="Silicone"
            image="/img/products/cases/silicone.png"
          />
          <ProductCategoryItem
            name="Leather"
            image="/img/products/cases/leather.png"
          />
        </ProductCategory>
        <ProductCategory
          products={products}
          handleToogleToFavorites={handleToogleToFavorites}
          handleAddToCart={handleAddToCart}
          categoryName="Headphones"
        />
        <ProductCategory
          products={products}
          handleToogleToFavorites={handleToogleToFavorites}
          handleAddToCart={handleAddToCart}
          categoryName="Wireless Headphones"
        />
      </div>
    </>
  );
}

export default Main;
