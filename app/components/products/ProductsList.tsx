"use client";

import Image from "next/image";
import Button from "../Button";
import { useState } from "react";
import { categories } from "@/app/utils/constants";
import ModalProduct from "./ModalProduct";
import { IProduct } from "@/app/utils/types";

type ProductListElementProps = {
  product: IProduct;
};

type ProductsProps = {
  activeTab: string;
};

const ProductListElement = ({ product }: ProductListElementProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="relative w-[80%] md:w-auto flex flex-col md:flex-row lg:flex-col justify-between lg:justify-center gap-5 bg-white p-6 rounded-md ">
      <Image
        src={product.imageSrc}
        width={295}
        height={220}
        alt={"Product Image"}
        className="object-cover w-full md:max-w-[295px] max-h-[220px]"
      />

      <div className="flex flex-col gap-6">
        <div className="flex flex-1 flex-col gap-3">
          <p className="flex items-center">
            <span className="text-[#91959C]">Size</span>
            <span className="flex-grow bg-[#91959C] h-[1px] ml-2"></span>
            <span>{product.size}mm</span>
          </p>
          <p className="flex items-center">
            <span className="text-[#91959C]">Weight</span>
            <span className="flex-grow bg-[#91959C] h-[1px] ml-2"></span>
            <span>{product.size}kg</span>
          </p>
        </div>

        <div className="flex flex-row md:flex-col lg:flex-row items-center md:items-start lg:items-center justify-between md:justify-between lg:justify-between gap-4">
          <div className="flex flex-col md:flex-row lg:flex-col items-start md:items-center lg:items-start gap-3">
            <p className="text-[#91959C]">Cost:</p>
            <p className="font-extrabold text-[26px]">
              {product.price}{" "}
              <span className="text-[11px] font-normal underline">$</span>
            </p>
          </div>

          <Button
            className="px-[23px] py-[13px] bg-[#E2E8ED] hover:bg-[#FF4F00] hover:text-white transition-all text-[11px] rounded-md"
            onClick={() => setToggle(true)}
          >
            More about
          </Button>
        </div>
      </div>

      {toggle && <ModalProduct product={product} setToggle={setToggle} />}
    </div>
  );
};

const ProductsList = ({ activeTab }: ProductsProps) => {
  const selectedCategory = categories.find((el) => el.category === activeTab);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-10">
      {selectedCategory?.products.map((product, index) => (
        <ProductListElement product={product} key={index} />
      ))}
    </section>
  );
};

export default ProductsList;
