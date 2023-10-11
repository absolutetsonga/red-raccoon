"use client";

import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { testimonials } from "../utils/constants";
import { useState } from "react";
import Button from "./Button";

const inter = Inter({ subsets: ["latin"] });

const Testimonials = () => {
  const [active, setActive] = useState<number>(0);

  const activeReviews = testimonials.find((el) => el.active === active);

  return (
    <section className="flex justify-center w-full bg-[#1c2329] px-10 py-20">
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
          className={`w-full relative flex flex-col md:flex-row items-center justify-center ${inter.className} gap-[30px]`}
        >
          <Image
            src="/detail.svg"
            alt="item"
            width={362}
            height={362}
            className=""
          />
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
