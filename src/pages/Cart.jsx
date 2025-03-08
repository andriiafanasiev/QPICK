import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

function Cart({ cartItems }) {
  const hasItems = cartItems.length > 0;

  return (
    <div className="h-full flex items-center justify-center mx-auto max-w-[1100px] mb-2">
      {hasItems ? (
        <div className="w-full">
          <h1 className="text-3xl font-medium text-gray-800">Your cart</h1>

          <ul className="mt-8 w-full px-4 gap-2 md:gap-4 flex flex-col ">
            {cartItems.map((product) => (
              <CartItem
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                rating={product.rating}
                discount={product.discount}
                isFavorite={product.isFavorite}
                isInCart={true}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-8 mt-14 mb-14">
          <img
            src="/img/empty-cart.png"
            alt="cart-empty"
            className="max-w-[250px]"
          />
          <div className="text-center">
            <h2 className="text-3xl font-medium text-gray-800">
              Your cart is empty
            </h2>
            <p className="text-[#838383]">
              But it's never too late to fix it :)
            </p>
          </div>
          <Link
            className="bg-[#101010] w-full text-white font-medium py-3 px-6 shadow-primary-shadow hover:bg-gray-800 rounded-[20px]"
            to="/"
          >
            Go shopping
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
