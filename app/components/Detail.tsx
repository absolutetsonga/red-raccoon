"use client";

import React from "react";
import Image from "next/image";

import { Inter } from "next/font/google";

import Button from "./Button";

const inter = Inter({ subsets: ["latin"] });

const Testimonials = () => {
  return (
    <section className="flex justify-center w-full bg-[#1c2329] px-10 py-20" id="products">
      <div className="flex flex-col items-center justify-center w-[1140px] gap-20">
        <div className="w-full flex flex-col z-20 max-w-[800px]">
          <div className="flex flex-col item-center justify-center text-center text-white gap-6">
            <h2 className="font-black leading-[130%] text-[46px]">
              Alumnuim{" "}
              <span className="font-bold">pergolas from Red Racoon</span> last
              longer!{" "}
            </h2>
            <p className="text-[19px] leading-[188%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              scelerisque tellus interdum venenatis auctor et nibh. Rhoncus a,
              sed lobortis nisi.
            </p>
          </div>
        </div>

        <div
          className={`w-full relative flex flex-col md:flex-row items-center justify-center ${inter.className} gap-[50px]`}
        >
          <div className="flex flex-col sm:flex-row md:flex-col px-10 py-4 sm:px-0 sm:py-0 rounded-lg text-center sm:text-right sm:bg-transparent sm:text-white gap-5 sm:gap-20 text-[16px] bg-white text-black">
            <h3>Radio frequency control</h3>
            <h3>Win resistance</h3>
            <h3>Easy to install</h3>
          </div>

          <div className="relative">
            <Image
              src="/detail.svg"
              alt="item"
              width={362}
              height={362}
              layout="responsive"
              className="flex max-w-[362px] max-h-[362px]"
            />

            <div className="hidden sm:block">
              <Image
                src="/arrow-1.svg"
                alt="item"
                width={92}
                height={23}
                className="absolute -top-6 md:-left-10 md:top-0 rotate-45 md:rotate-0"
              />

              <Image
                src="/arrow-2.svg"
                alt="item"
                width={50}
                height={20}
                className="absolute left-40 -top-8 rotate-90 md:rotate-0 md:-left-10 md:top-[120px]"
              />

              <Image
                src="/arrow-3.svg"
                alt="item"
                width={118}
                height={40}
                className="absolute -left-10 -bottom-10 md:-bottom-4 rotate-[340deg] "
              />

              <Image
                src="/arrow-1.svg"
                alt="item"
                width={92}
                height={23}
                className="absolute rotate-180 -right-10 bottom-0"
              />

              <Image
                src="/arrow-2.svg"
                alt="item"
                width={50}
                height={20}
                className="absolute rotate-[270deg] right-40 md:rotate-180 md:-right-10 md:top-[120px]"
              />

              <Image
                src="/arrow-3.svg"
                alt="item"
                width={118}
                height={40}
                className="absolute rotate-180 -right-12 top-0"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col px-10 py-4 sm:px-0 rounded-lg sm:py-0 text-center sm:text-right sm:bg-transparent sm:text-white gap-5 sm:gap-20 text-[16px] bg-white text-black">
            <h3>100% Rainproof System</h3>
            <h3>Hurricane Force Resistant</h3>
            <h3>Low-Maintenance</h3>
          </div>
        </div>

        <p className="text-[18px] text-white">
          The alumnuim pergolas can be made according to your size or its design
          can be modeled to solve your problem!
        </p>

        <Button className="px-20 py-4 bg-gradient-to-r from-[#ec4c14] via-[#ec6214] to-[#ec6f35] text-white font-bold">
          Get the details or order a pergola
        </Button>
      </div>
    </section>
  );
};

export default Testimonials;
