"use client";

import Image from "next/image";
import ProductsTabs from "./products/ProductsTabs";
import ProductsList from "./products/ProductsList";

import { useState } from "react";
import Button from "./Button";
import Link from "next/link";

// type ProductsProps = {};

const Products = () => {
  const [productTabs, setProductTabs] = useState([
    { title: "PVC Retractble", active: false },
    { title: "Zip Screen", active: false },
    { title: "Pergo Lux", active: false },
    { title: "Prgo Lite", active: false },
    { title: "Pergo Canopy", active: false },
    { title: "Prgo Carpot", active: false },
  ]);

  const activeTab = productTabs.find((tab) => tab.active === true);

  return (
    <section className="flex flex-col w-full items-center justify-start min-h-screen">
      <Image
        src="/background-general.svg"
        alt=""
        width={1408}
        height={700}
        className="w-full min-h-screen absolute top-[90vh] left-0 right-0 bottom-0 -z-10 object-cover"
      />

      <div className="w-full flex flex-col gap-5 pt-4">
        <div className="flex flex-col item-center justify-center text-center text-white">
          <h2 className="font-extralight text-[44px] leading-[188%]">
            Our <span className="font-black">Products</span>
          </h2>
          <p className="text-[19px] leading-[188%]">in stock for 30.09.2023</p>
        </div>

        <ProductsTabs
          productTabs={productTabs}
          setProductTabs={setProductTabs}
        />
        <ProductsList
          activeTab={activeTab ? activeTab.title : "PVC Retractble"}
        />

        <div className="inline-flex justify-center pt-10">
          <Link href="/products">
            <Button className="px-20 py-4 bg-gradient-to-r from-[#ec4c14] via-[#ec6214] to-[#ec6f35] text-white font-bold shadow-lg shadow-[#a14f29]">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
