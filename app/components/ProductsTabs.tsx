"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type ProductsTabsElementProps = {
  product: {
    title: string;
    active: boolean;
  };
  onClick: () => void;
};

const ProductsTabsElement = ({
  product,
  onClick,
}: ProductsTabsElementProps) => {
  return (
    <button className="relative flex flex-col items-center" onClick={onClick}>
      <div
        className={`bg-white h-16 text-black rounded-md px-10 py-4 hover:bg-gradient-to-r hover:from-[#ec4c14] hover:via-[#ec6214] hover:to-[#ec6f35] hover:text-white font-bold transition-colors ${
          product.active
            ? "bg-gradient-to-r from-[#ec4c14] via-[#ec6214] to-[#ec6f35] text-white"
            : ""
        }`}
      >
        {product.title}
      </div>

      <Image
        src="/products/decor-focus.svg"
        width={80}
        height={80}
        className={`absolute w-14 h-14 object-cover bottom-[-54px] transition-opacity ${
          product.active ? "opacity-100" : "opacity-0"
        }`}
        alt="product-active"
      />

      <Image
        src="/products/decor-focus.svg"
        width={80}
        height={80}
        className={`absolute w-14 h-14 object-cover bottom-[-80px] transition-opacity ${
          product.active ? "opacity-100" : "opacity-0"
        }`}
        alt="product-active"
      />
    </button>
  );
};

const ProductsTabs = () => {
  const [productTabs, setProductTabs] = useState([
    { title: "PVC Retractble", active: false },
    { title: "Zip Screen", active: false },
    { title: "Pergo Lux", active: false },
    { title: "Prgo Lite", active: false },
    { title: "Pergo Canopy", active: false },
    { title: "Prgo Carpot", active: false },
  ]);

  const handleClick = (clickedProductIndex: number) => {
    const updatedProductTabs = productTabs.map((product, index) => ({
      ...product,
      active: index === clickedProductIndex ? !product.active : false,
    }));

    setProductTabs(updatedProductTabs);
  };

  return (
    <div className="flex flex-row items-center justify-between font-bold w-full">
      {productTabs.map((product, index) => (
        <ProductsTabsElement
          key={index}
          product={product}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default ProductsTabs;
