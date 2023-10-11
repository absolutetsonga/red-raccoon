import React from "react";
import Image from "next/image";
import Button from "./Button";

// type HeroProps = {};

const Hero = () => {
  return (
    <section className="flex items-center justify-center md:justify-end w-full min-h-screen md:pt-[68px] md:pr-[70px] p-4 text-center">
      <Image
        src="/hero/background-hero.svg"
        alt=""
        width={1408}
        height={700}
        className="w-full min-h-screen absolute object-cover top-[70px] left-0 right-0 bottom-0 -z-10 bg-[#161E25]"
      />

      <div className="flex flex-col md:justify-end gap-4 text-white">
        <h1 className="text-[42px] md:text-[70px] font-light mb-6 md:mb-[50px] text-left md:text-right">
          Lorem ipsum dolor sit
        </h1>
        <p className="text-[20px] leading-7 max-w-[500px] mb-4 md:mb-[100px] md:self-end">
          Lorem ipsum dolor sit amet consectetur. Enim cursus molestie convallis
          ipsum lacus. Cursus lacus dolor in urna faucibus sed. Integer quis
          amet orci ac mi nulla donec lectus lorem. Volutpat.
        </p>

        <div className="flex flex-row sm:self-center">
          <Button className="px-10 sm:py-8 sm:px-20 bg-[#FF4F00] text-white drop-shadow-lg text-[18px] leading-7 uppercase rounded-lg">
            Book Now
          </Button>
          <span className="flex flex-col px-3 py-4 sm:px-[29px] sm:py-8 bg-[#E9ECE0] text-black leading-[18px] rounded-lg gap-2">
            <p className="self-start text-[18px]">from</p>
            <p className="self-center text-[28px]">€3.200</p>
            <p className="self-end text-[18px]">per pergola</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
