import React from 'react';

function Footer() {
  return (
    <footer className="flex max-w-[1100px] mx-auto p-[30px] radius-[10px] bg-white items-start w-full justify-between  rounded-tl-[30px] rounded-tr-[30px] shadow-primary-shadow ">
      <div className="font-bold text-[25px]">QPICK</div>
      <nav>
        <ul className="text-start">
          <li>Favorites</li>
          <li>Cart</li>
          <li>Contacts</li>
        </ul>
      </nav>
      <ul>
        <li>Privacy Policy</li>
      </ul>
      <ul className="flex gap-4">
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/icons/social/instagram.svg" alt="facebook icon" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/icons/social/telegram.svg" alt="twitter icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/icons/social/whatsapp.svg" alt="instagram icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
