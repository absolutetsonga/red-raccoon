import React from "react";
import { IProduct } from "@/app/utils/types";
import Image from "next/image";
import Link from "next/link";

type ModalProductProps = {
  product: IProduct;
};

const ModalProduct = ({ product }: ModalProductProps) => {
  return (
    <section className="absolute w-[709px] h-[509px] flex flex-row gap-10 p-10 z-10 text-[#313337] bg-white">
      <div className="flex flex-col gap-6 w-1/2">
        <Image
          src={product.imageSrc}
          alt=""
          width={270}
          height={300}
          className="w-full h-[300px] object-cover"
        />

        <div className="flex flex-col justify-start">
          <p>
            <span className="font-bold leading-[10px] text-[16px]">
              Warrant
            </span>
            5 years.
          </p>
          <p>
            <span className="font-bold leading-[10px] text-[16px]">
              Free delivery in Canada
            </span>
            in 1-5 days
          </p>
        </div>

        <p className="leading-[13.8px] text-[10px]">
          This model is in a different color and size, as well as other models
          <Link href="/products" className="text-blue-600 underline">
            {" "}
            see in our catalog
          </Link>
        </p>
      </div>

      <div className="flex flex-col w-1/2">
        <h3 className="text-[32.57px] font-extralight">{product.name}</h3>

        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-2">
            <h5 className="font-bold text-[14px]"> Description: </h5>
            <p className="text-[14px] leading-[13.8px]">
              {product.description}
            </p>
          </div>

          <div>
            <h5 className="font-bold text-[14px]"> Specifications: </h5>
            <div className="flex flex-col gap-3">
              <p className="flex items-center">
                <span className="text-[#91959C]">Size</span>
                <span className="flex-grow bg-[#91959C] h-[1px] ml-2"></span>
                <span>{product.size}mm</span>
              </p>
              <p className="flex items-center">
                <span className="text-[#91959C]">Material</span>
                <span className="flex-grow bg-[#91959C] h-[1px] ml-2"></span>
                <span>{product.material}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalProduct;
