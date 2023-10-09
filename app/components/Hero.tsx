import React from "react";
import Image from "next/image";
import Button from "./Button";

// type HeroProps = {};

const Hero = () => {
  return (
    <section className="flex items-center justify-end w-full min-h-screen pt-[68px] pr-[70px]">
      <Image
        src="/hero/background-hero.png"
        alt=""
        width={1408}
        height={700}
        className="w-full min-h-screen absolute top-[70px] left-0 right-0 bottom-0 -z-10 bg-[#161E25]"
      />

      <div className="flex flex-col justify-end gap-4 text-white">
        <h1 className="text-[70px] font-light mb-[50px] text-right">
          Lorem ipsum dolor sit
        </h1>
        <p className="text-[20px] leading-7 max-w-[500px] mb-[100px] self-end">
          Lorem ipsum dolor sit amet consectetur. Enim cursus molestie convallis
          ipsum lacus. Cursus lacus dolor in urna faucibus sed. Integer quis
          amet orci ac mi nulla donec lectus lorem. Volutpat.
        </p>

        <div className="flex flex-row self-center">
          <Button className="py-8 px-20 bg-[#FF4F00] text-white drop-shadow-lg text-[18px] leading-7 uppercase rounded-lg">
            Book Now
          </Button>
          <span className="flex flex-col px-[29px] py-8 bg-[#E9ECE0] text-black leading-[18px] rounded-lg gap-2">
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
