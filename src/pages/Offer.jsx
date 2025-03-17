import DeliveryCard from '../components/DeliveryCard';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Offer() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1100px] mx-auto gap-5   px-[20px]  mt-[22px] mb-[42px]">
      <div className="flex flex-col w-full  md:w-[50%] items-start rounded-3xl shadow-primary-shadow p-4 pb-12 pt-6  relative bg-white">
        <DeliveryCard />
        <div className="border-t-2 border-[#ccc] w-full">
          <div className="flex text-[20px] mt-2 items-center flex-row gap-2 ">
            <FaMapMarkerAlt />
            <h4 className=" font-semibold ">Delivery Adress</h4>
          </div>
          <div className="flex flex-col gap-2 mt-2 ">
            <input
              className="w-full text-[20px] rounded-xl px-2 py-2 bg-[#D6D6D6] "
              type="text"
              placeholder="City"
            />
            <input
              className="w-full text-[20px] rounded-xl px-2 py-2 bg-[#D6D6D6] "
              placeholder="Street"
              type="text"
            />
            <div className="w-full gap-5 flex flex-row">
              <input
                className="w-[50%] text-[20px] rounded-xl px-2 py-2 bg-[#D6D6D6] "
                placeholder="House"
                type="text"
              />
              <input
                className="w-[50%] text-[20px] rounded-xl px-2 py-2 bg-[#D6D6D6] "
                placeholder="Entrance"
                type="text"
              />
            </div>
            <input
              className="w-[48%] text-[20px] rounded-xl px-2 py-2 bg-[#D6D6D6] "
              placeholder="Apartment"
              type="text"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-5  md:w-[50%]    ">
        <div className="shadow-primary-shadow bg-white w-full p-4 pb-6 pt-6 rounded-3xl">
          <h4 className="text-[24px] font-semibold mb-2 text-start">
            Your order
          </h4>
          <div className="w-full">
            <div className="flex flex-row w-full justify-between">
              <p>Headphones</p>
              <p>$299.99</p>
            </div>
            <div className="flex flex-row w-full justify-between">
              <p>Headphones</p>
              <p>$299.99</p>
            </div>
            <div className="flex flex-row w-full justify-between">
              <p>Headphones</p>
              <p>$299.99</p>
            </div>
            <div className="flex flex-row w-full mt-5 justify-between">
              <p className="font-bold">Delivery</p>
              <p>$5.99</p>
            </div>
            <div className="flex flex-row w-full justify-between">
              <p className="font-bold">Total</p>
              <p>$999.99</p>
            </div>
          </div>
        </div>
        <div className="shadow-primary-shadow bg-white w-full p-4 pb-6 pt-6 rounded-3xl">
          <h4 className="text-[24px] font-semibold mb-2 text-start">
            Recipient number
          </h4>
          <input
            className="w-full text-[20px] rounded-xl px-2 py-2 bg-[#D6D6D6] "
            placeholder="+1 ___ ___ ____"
            type="text"
          />
        </div>
        <button className="bg-[#101010] w-full text-white font-medium py-3 px-6 shadow-primary-shadow hover:bg-gray-800 rounded-xl">
          End order
        </button>
      </div>
    </div>
  );
}

export default Offer;
