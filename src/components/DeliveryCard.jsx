import { FaTruck } from 'react-icons/fa';

const DeliveryCard = () => {
  return (
    <div className="p-4 shadow-lg rounded-2xl w-full  bg-white">
      <h2 className="text-lg font-semibold mb-2 self-start">Delivery</h2>
      <div className="relative w-full h-40 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093703!2d144.95373631531795!3d-37.816279979751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57760c2f073bdde!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1633044297056!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <FaTruck size={20} />
          <span className="text-sm">Courier Delivery</span>
        </div>
        <span className="text-sm font-medium">$4.99</span>
      </div>
    </div>
  );
};

export default DeliveryCard;
