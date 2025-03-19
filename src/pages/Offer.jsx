import DeliveryCard from '../components/DeliveryCard';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Offer({ cartItems, setCartItems }) {
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const endOrder = () => {
    setCartItems([]);
    setOrderConfirmed(true);
  };

  return (
    <div className="flex w-full max-w-[1100px] mx-auto mt-[22px] mb-[42px]">
      {!orderConfirmed ? (
        <div className="flex flex-col md:flex-row w-full px-[20px] max-w-[1100px] mx-auto gap-5">
          <div className="flex flex-col w-full md:w-[50%] items-start rounded-3xl shadow-primary-shadow p-4 pb-12 pt-6 relative bg-white">
            <DeliveryCard />
            <div className="border-t-2 border-[#ccc] w-full">
              <div className="flex text-[20px] mt-2 items-center flex-row gap-2">
                <FaMapMarkerAlt />
                <h4 className="font-semibold">Delivery Address</h4>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <input
                  className="w-full text-[20px] rounded-xl px-2 py-2 bg-[#D6D6D6]"
                  type="text"
                  placeholder="City"
                />
                <input
                  className="w-full text-[20px] rounded-xl px-2 py-2 bg-[#D6D6D6]"
                  placeholder="Street"
                  type="text"
                />
                <div className="w-full gap-5 flex flex-row">
                  <input
                    className="w-[50%] text-[20px] rounded-xl px-2 py-2 bg-[#D6D6D6]"
                    placeholder="House"
                    type="text"
                  />
                  <input
                    className="w-[50%] text-[20px] rounded-xl px-2 py-2 bg-[#D6D6D6]"
                    placeholder="Entrance"
                    type="text"
                  />
                </div>
                <input
                  className="w-[48%] text-[20px] rounded-xl px-2 py-2 bg-[#D6D6D6]"
                  placeholder="Apartment"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-5 md:w-[50%]">
            <div className="shadow-primary-shadow bg-white w-full p-4 pb-6 pt-6 rounded-3xl">
              <h4 className="text-[24px] font-semibold mb-2 text-start">
                Your order
              </h4>
              <div className="w-full">
                {cartItems &&
                  cartItems.map((product) => (
                    <div
                      key={product.id}
                      className="flex flex-row w-full justify-between"
                    >
                      <p>{product.name}</p>
                      <p>{product.price * (product.quantity || 1)}$</p>
                    </div>
                  ))}
                <div className="flex flex-row w-full mt-5 justify-between">
                  <p className="font-bold">Delivery</p>
                  <p>$4.99</p>
                </div>
                <div className="flex flex-row w-full mt-5 justify-between">
                  <p className="font-bold">Total</p>
                  <p className="font-bold">
                    {cartItems
                      .reduce(
                        (sum, product) =>
                          sum + product.price * (product.quantity || 1),
                        4.99
                      )
                      .toFixed(2)}{' '}
                    $
                  </p>
                </div>
              </div>
            </div>

            <div className="shadow-primary-shadow bg-white w-full p-4 pb-6 pt-6 rounded-3xl">
              <h4 className="text-[24px] font-semibold mb-2 text-start">
                Recipient number
              </h4>
              <input
                className="w-full text-[20px] rounded-xl px-2 py-2 bg-[#D6D6D6]"
                placeholder="+1 ___ ___ ____"
                type="text"
              />
            </div>

            <button
              className="bg-[#101010] w-full text-white font-medium py-3 px-6 shadow-primary-shadow hover:bg-gray-800 rounded-xl"
              onClick={endOrder}
            >
              End order
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          className="flex flex-col gap-5 w-full items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h4 className="text-2xl font-semibold">Thanks for your order!</h4>
          <p className="text-lg">Our manager will contact you later.</p>
        </motion.div>
      )}
    </div>
  );
}

export default Offer;
