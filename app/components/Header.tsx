import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

// type HeaderProps = {};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full flex justify-center h-[70px] lg:h-[100px] bg-white gap-20">
      <div className="flex flex-row items-center justify-between w-[900px] h-full">
        <Image
          src="/nav/logo.svg"
          alt="Red Racoon Logo"
          width={71}
          height={71}
        />

        <div className="flex flex-row items-center justify-center gap-[100px]">
          <nav className="flex flex-row items-center justify-center gap-5 list-none	font-light leading-6 text-sm uppercase cursor-pointer">
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

          <Button className="px-10 py-5 bg-[#FF4F00] text-white drop-shadow-lg">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
