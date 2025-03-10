import { Link } from 'react-router-dom';
import PhoneSelector from './PhoneSelector';

function Header({ products, cartItems }) {
  const favoritesProducts = products
    ? products.filter((product) => product.isFavorite)
    : [];

  return (
    <header className="px-2">
      <div className="flex max-w-[1100px] p-[10px] items-center w-full justify-between mx-auto">
        <div className="flex justify-between items-center gap-[75px]">
          <Link to=".">
            <div className="font-bold text-[25px]">QPICK</div>
          </Link>
          <div className="hidden md:block">
            <PhoneSelector />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-[25px]">
            <Link to={'favorites'} className="relative cursor-pointer ">
              <img src="/img/icons/favorite.svg" alt="" />
              <span className=" absolute top-[-10px] right-[-10px] font-medium bg-[#FFA542] text-[15px] text-white rounded-full w-[17px] h-[17px] flex items-center justify-center ">
                {favoritesProducts.length}
              </span>
            </Link>
            <Link to={'cart'} className="relative cursor-pointer ">
              <img src="/img/icons/cart.svg" alt="" />
              <span className=" absolute top-[-10px] right-[-10px] font-medium bg-[#FFA542] text-[15px] text-white rounded-full w-[17px] h-[17px] flex items-center justify-center ">
                {cartItems.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
