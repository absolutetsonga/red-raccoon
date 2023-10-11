"use client";

import { useState } from "react";
import Image from "next/image";
import { achievements } from "../utils/constants";
import Button from "./Button";

// type AboutProps = {};

const About = () => {
  const [address, setAddress] = useState<string>("");
  const [number, setNumber] = useState<string>("");

  return (
    <section className="relative flex justify-center w-full bg-about bg-no-repeat bg-cover p-10">
      <div className="flex flex-col items-center md:items-baseline justify-center md:justify-normal sm:py-[130px] max-w-[1140px] min-h-screen text-white gap-10 z-10">
        <div className="flex flex-col gap-1">
          <h4 className="text-[34px] font-extralight leading-[188%]">
            About <span className="font-bold">Us</span>
          </h4>
          <p className="text-[18px] font-light">
            <span className="font-bold">421 people for 2022 year</span> chose
            Pergola Ontario
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {achievements.map((el) => {
            return (
              <div className="flex gap-4 w-[250px]" key={el.title}>
                <Image src={el.imageSrc} alt="" width={46} height={46} />

                <div className="flex flex-col text-[13px]">
                  <h4 className="font-bold text-[15px]">{el.title}</h4>
                  {el.subtitle?.split(".").map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h4 className="text-[18px]">
              Get a <span className="font-bold">free consultation</span> from
              our specialists.
            </h4>
            <p className="text-[13px]">
              Technologist, manager, manager, foreman, logistician, installer,
              designer
            </p>
          </div>

          <div className="flex flex-row text-black gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Name"
              className="max-w-[180px] h-[44px] rounded-lg p-6"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
            <input
              type="text"
              placeholder="+1 (___) ___ - __ - __"
              className="max-w-[180px] h-[44px] rounded-lg p-6"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            />

            <Button className="bg-gradient-to-r from-[#ec4c14] via-[#ec6214] to-[#ec6f35] text-white font-bold rounded-lg px-4 py-3">
              Get a free consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
