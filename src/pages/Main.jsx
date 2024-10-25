import React from 'react';
import ProductCategory from '../components/ProductCategory';
import ProductCategoryItem from '../components/ProductCategoryItem';

function Main() {
  return (
    <>
      <div className="flex flex-col max-w-[1100px] mx-auto pl-[5px] pr-[5px] mt-[22px]">
        <div className=" flex flex-row justify-center h-[197px] items-center gap-[180px] rounded-[30px] w-full bg-[#101010]">
          <h1 className="font-semibold text-3xl text-white">
            Accessories for <br />
            iPhone 13 Pro Max
          </h1>
          <div>
            <img src="/img/hero.png" class="h-auto mt-3" alt="hero img" />
          </div>
        </div>
        <ProductCategory categoryName="Cases">
          <ProductCategoryItem name="Glass" image="/img/cases/glass.png" />
          <ProductCategoryItem
            name="Silicone"
            image="/img/cases/silicone.png"
          />
          <ProductCategoryItem name="Leather" image="/img/cases/leather.png" />
        </ProductCategory>
      </div>
    </>
  );
}

export default Main;
