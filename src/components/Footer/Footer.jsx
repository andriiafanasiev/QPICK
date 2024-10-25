import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="flex max-w-[1100px] mx-auto p-[30px] radius-[10px] bg-white items-start w-full justify-between  rounded-tl-[30px] rounded-tr-[30px] shadow-primary-shadow ">
      <Link to=".">
        <div className="font-bold text-[25px]">QPICK</div>
      </Link>
      <nav>
        <ul className="text-start">
          <li>
            <Link to={'favorites'} className="hover:underline" href="/">
              Favorites
            </Link>
          </li>
          <li>
            <Link to={'cart'} className="hover:underline" href="/">
              Cart
            </Link>
          </li>
          <li>
            <Link to={'contacts'} className="hover:underline" href="/">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      <ul>
        <li>
          {' '}
          <Link to={'privacy'} className="hover:underline" href="/">
            Privacy Policy
          </Link>
        </li>
      </ul>
      <ul className="flex gap-4">
        <li className="hover:scale-110 transition duration-150 ease-in-out">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/icons/social/instagram.svg" alt="instagram icon" />
          </a>
        </li>
        <li className="hover:scale-110 transition duration-150 ease-in-out">
          <a
            href="https://web.telegram.org/a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/icons/social/telegram.svg" alt="telegram icon" />
          </a>
        </li>
        <li className="hover:scale-110 transition duration-150 ease-in-out">
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/icons/social/whatsapp.svg" alt="whatsapp icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
