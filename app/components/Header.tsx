"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

// type HeaderProps = {};

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full flex justify-center h-[70px] lg:h-[100px] bg-white gap-20 z-30 px-10 py-1">
      <div className="relative flex flex-row items-center justify-between w-[1140px] h-full">
        <Image
          src="/nav/logo.svg"
          alt="Red Racoon Logo"
          width={71}
          height={71}
          className="object-cover w-[60px] h-[60px] sm:w-[71px] sm:h-[71px]"
        />

        <div className="flex flex-row items-center justify-center gap-4 md:gap-[100px]">
          <div className="hidden sm:block">
            <nav className="flex flex-row items-center justify-center gap-2 sm:gap-5 list-none	font-light leading-6 text-sm uppercase cursor-pointer">
              <Link href="#home">Home</Link>
              <Link href="#contacts">Contacts</Link>
              <Link href="#products">Products</Link>
              <Link href="#about-us">About Us</Link>
              <button>
                <Image
                  src="/nav/english.svg"
                  width={25}
                  height={25}
                  alt="English"
                />
              </button>
            </nav>
          </div>

          <Button className="px-4 py-4 md:px-10 md:py-5 bg-[#FF4F00] text-white drop-shadow-lg">
            Book Now
          </Button>

          <div className="block sm:hidden" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <Image
                src="/nav/xmark-solid.svg"
                width={30}
                height={30}
                alt="Close Menu"
              />
            ) : (
              <Image
                src="/nav/bars-solid.svg"
                width={30}
                height={30}
                alt="Open Menu"
              />
            )}
          </div>

          <div
            className={`${
              toggle ? "opacity-100" : "opacity-0"
            } sm:hidden absolute pointer-events-none" flex flex-col top-20 -right-6 bg-white px-8 py-4 rounded-xl`}
          >
            <Link href="#home">Home</Link>
            <Link href="#contacts">Contacts</Link>
            <Link href="#products">Products</Link>
            <Link href="#about-us">About Us</Link>
            <button>
              <Image
                src="/nav/english.svg"
                width={25}
                height={25}
                alt="English"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
