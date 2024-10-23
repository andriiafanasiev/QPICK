import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Main() {
  return (
    <>
      <Header />
      <main className="flex-1 basis-auto ">
        <div className="flex max-w-[1100px] mx-auto pl-[5px] pr-[5px] mt-[22px]">
          <div className=" flex flex-row justify-center h-[197px] items-center gap-[180px] rounded-[30px] w-full bg-[#101010]">
            <h1 className="font-semibold text-3xl text-white">
              Accessories for <br />
              iPhone 13 Pro Max
            </h1>
            <div>
              <img src="/img/hero.png" class="h-auto mt-3" alt="hero img" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Main;
