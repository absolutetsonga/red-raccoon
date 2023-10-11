import React from "react";
import Image from "next/image";
import Link from "next/link";

// type FooterProps = {

// }

const Footer = () => {
  return (
    <section className="flex justify-center w-full bg-footer bg-no-repeat bg-cover px-20 py-10 text-white gap-10">
      <div className="flex flex-col gap-10 w-[1240px]">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <p className="text-[#6B665E] max-w-[560px]">
            * Dear customers, if anyone to contact you as AlunoTec
            representatives, firstly please verify with AlunoTec via
            info@alunotec.com, beware deceived!
          </p>
          <ul className="flex flex-row gap-4 flex-wrap cursor-pointer">
            <li>Home FAQ</li>
            <li> Reviews </li>
            <li> Our Products </li>
            <li> Contact </li>
            <li> FAQ </li>
            <li> Privacy Policy </li>
            <li> Sitemap </li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-row gap-4 flex-wrap">
            <div className="flex flex-row gap-3 items-center justify-between">
              <Image
                src="/footer/phone.svg"
                width={18}
                height={18}
                alt="Phone Number"
              />
              <p className="font-bold"> +86-769-89865511 </p>
            </div>
            <div className="flex flex-row gap-3 items-center justify-between">
              <Image
                src="/footer/message.svg"
                width={18}
                height={18}
                alt="Phone Number"
              />
              <p className="font-bold"> info@alunotec.com </p>
            </div>
            <div className="flex flex-row gap-3 items-center justify-between">
              <Image
                src="/footer/clock.svg"
                width={18}
                height={18}
                alt="Phone Number"
              />
              <p className="font-bold"> 24/7 in Canada </p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-6">
            <Link href="https://www.instagram.com/">
              <Image
                src="/footer/instagram.svg"
                alt="Instagram"
                width={41}
                height={41}
              />
            </Link>

            <Link href="https://twitter.com/">
              <Image
                src="/footer/twitter.svg"
                alt="Twitter"
                width={41}
                height={41}
              />
            </Link>

            <Link href="https://facebook.com/">
              <Image
                src="/footer/facebook.svg"
                alt="Facebook"
                width={26}
                height={26}
              />
            </Link>

            <Link href="https://www.linkedin.com/">
              <Image
                src="/footer/linkedin.svg"
                alt="Linkedin"
                width={41}
                height={41}
              />
            </Link>
          </div>
        </div>

        <p className="text-center text-[#6B665E]">
          Copyright © 2023 Industry Co.,Ltd. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
