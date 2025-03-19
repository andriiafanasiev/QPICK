import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import DeliveryCard from '../components/DeliveryCard';

function Cart({ cartItems, handleRemoveFromCart, setCartItems }) {
  const DELIVERY_PRICE = 4.99;
  const hasItems = cartItems.length > 0;

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prev) => {
      const updatedItems = prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return updatedItems;
    });
  };

  const totalPrice = cartItems.reduce(
    (sum, product) => sum + product.price * (product.quantity || 1),
    0
  );

  return (
    <div className="h-full flex items-center justify-center mx-auto max-w-[1100px] mb-2">
      {hasItems ? (
        <div className="w-full">
          <h1 className="text-3xl font-medium text-gray-800">Your cart</h1>
          <div className="w-full flex flex-row flex-wrap">
            <div className="w-full md:w-[60%]">
              <ul className="mt-8 w-full mb-8   md:max-h-[445px] overflow-scroll px-4 gap-2 md:gap-4 flex flex-col ">
                {cartItems.map((product) => (
                  <CartItem
                    key={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    rating={product.rating}
                    discount={product.discount}
                    isFavorite={product.isFavorite}
                    quantity={product.quantity || 1}
                    updateQuantity={(newQuantity) =>
                      updateQuantity(product.id, newQuantity)
                    }
                    handleRemoveFromCart={() => {
                      handleRemoveFromCart(product);
                    }}
                  />
                ))}
              </ul>
              <div className="px-4 ">
                <DeliveryCard className="shadow-lg" />
              </div>
            </div>
            <div className="w-full max-h-fit md:w-[40%] mt-10 md:max-w-80 mx-5  md:mx-auto bg-white rounded-3xl">
              <div className="flex justify-between px-4 py-4">
                <p className="font-semibold">TOTAL</p>{' '}
                <p className="font-semibold">
                  ${(totalPrice + DELIVERY_PRICE).toFixed(2)}
                </p>
              </div>

              <Link
                to={'/offer'}
                className="bg-[#101010] flex text-center items-center justify-center w-full text-white font-medium py-4 px-6 shadow-primary-shadow hover:bg-gray-800 rounded-[20px]"
              >
                Go to offer
              </Link>
            </div>
          </div>
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
