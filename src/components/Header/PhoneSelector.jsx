import React, { useState } from 'react';

function PhoneSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (phone) => {
    setSelectedPhone(phone);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center gap-[10px]">
      <div>
        <img src="/img/icons/phone.svg" alt="phone icon" />
      </div>
      <div className="relative" onClick={toggleDropdown}>
        <div className="flex items-center gap-[8px] w-full bg-transparent border-none cursor-pointer p-2">
          <span className="block text-start min-w-[150px] max-w-[200px] w-full truncate">
            {selectedPhone || 'Choose a phone model'}
          </span>
          <img src="/img/icons/dropdown.svg" alt="dropdown icon" />
        </div>
        <ul
          className={`absolute left-0 w-full bg-white border border-gray-300 flex flex-col rounded mt-1 ${
            isOpen ? '' : 'hidden'
          }`}
        >
          {[
            'iPhone 12',
            'iPhone 12 Max',
            'iPhone 13',
            'iPhone 13 Max',
            'iPhone 13 Pro Max',
            'iPhone 14',
          ].map((phone) => (
            <li
              key={phone}
              className="p-2 text-start hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(phone)}
            >
              {phone}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PhoneSelector;
