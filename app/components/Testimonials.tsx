"use client";

import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { testimonials } from "../utils/constants";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Testimonials = () => {
  const [active, setActive] = useState<number>(0);

  const activeReviews = testimonials.find((el) => el.active === active);

  return (
    <section className="flex justify-center w-full bg-[#1c2329] px-10 py-20">
      <div className="flex flex-col items-center justify-center w-[1140px] gap-20">
        <div className="w-full flex flex-col z-20 max-w-[800px]">
          <div className="flex flex-col item-center justify-center text-center text-white gap-6">
            <h2 className="font-black leading-[130%] text-[44px]">
              User’s Review
            </h2>
            <p className="text-[19px] leading-[188%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              scelerisque tellus interdum venenatis auctor et nibh. Rhoncus a,
              sed lobortis nisi.
            </p>
          </div>
        </div>

        <div
          className={`relative flex flex-row items-center justify-center ${inter.className} gap-[30px]`}
        >
          <Image
            src="/testimonials/decor-quote.svg"
            alt="decor-quote"
            width={22}
            height={18}
            className="absolute -top-10 left-0"
          />

          {activeReviews?.reviews.map((el) => {
            return (
              <div
                className="flex flex-col items-center justify-center bg-white px-10 py-8 gap-6 rounded-xl"
                key={el.author}
              >
                <p className="max-w-[200px] text-center">{el.title}</p>
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={el.imageSrc}
                    width={80}
                    height={80}
                    className="rounded-full"
                    alt="testimonial-1"
                  />

                  <div className="flex flex-col items-center gap-4">
                    <h5 className="text-[20px] leading-[160%]">{el.author}</h5>
                    <h3>{el.role}</h3>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="absolute bottom-[-40px] flex flex-row gap-1.5">
            <button
              className={`${
                active === 0 ? "w-8 bg-orange-600" : ""
              } w-5 h-3 bg-orange-800 rounded-full`}
              onClick={() => setActive(0)}
            />
            <button
              className={`${
                active === 1 ? "w-8 bg-orange-600" : ""
              } w-5 h-3 bg-orange-800 rounded-full`}
              onClick={() => setActive(1)}
            />
            <button
              className={`${
                active === 2 ? "w-8 bg-orange-600" : ""
              } w-5 h-3 bg-orange-800 rounded-full`}
              onClick={() => setActive(2)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
