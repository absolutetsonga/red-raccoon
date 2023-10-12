"use client";

import Image from "next/image";
import React from "react";

import Map from "./Map";

const Contacts = () => {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY);

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  return (
    <section className="flex flex-col items-center justify-center gap-10 max-w-[1140px] p-10" id="contacts">
      <div className="flex flex-col gap-6 text-center">
        <h3 className="text-4xl">Contacts</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic alias
          temporibus ad fuga consequatur eveniet suscipit et perspiciatis quo.
          Magni possimus at perspiciatis sapiente doloribus eaque ullam
          repellendus, ipsum quisquam.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 bg-gray-900 px-10 py-6 md:px-[62px] md:py-12">
        <div className=" text-white flex flex-col font-bold gap-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-[34px] font-bold">How to reach us</h2>

            <div className="flex flex-row items-center gap-4">
              <Image src="/contacts/call.svg" width={30} height={30} alt="" />
              <p> my telephone number </p>
            </div>

            <div className="flex flex-row items-center gap-4">
              <Image
                src="/contacts/message.svg"
                width={30}
                height={30}
                alt=""
              />
              <p> my email </p>
            </div>

            <div className="flex flex-row items-center gap-4">
              <Image
                src="/contacts/address.svg"
                width={30}
                height={30}
                alt=""
              />
              <p> address </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-[34px] font-bold">Work Time</h2>

            <div className="flex flex-row items-center gap-4">
              <Image src="/contacts/clock.svg" width={30} height={30} alt="" />
              <p> work time </p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <Map containerStyle={{ width: "400px", height: "400px" }} />
        </div>
        <div className="flex items-center justify-center md:hidden">
          <Map containerStyle={{ width: "200px", height: "200px" }} />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
