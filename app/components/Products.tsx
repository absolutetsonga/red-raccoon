import Image from "next/image";
import ProductsTabs from "./ProductsTabs";

// type ProductsProps = {};

const Products = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen">
      <Image
        src="/background-general.svg"
        alt=""
        width={1408}
        height={700}
        className="w-full min-h-screen absolute top-[90vh] left-0 right-0 bottom-0 -z-10 object-cover"
      />

      <div className="w-full flex flex-col">
        <div className="flex flex-col item-center justify-center text-center text-white">
          <h2 className="font-extralight text-[44px] leading-[188%]">
            Our <span className="font-black">Products</span>
          </h2>
          <p className="text-[19px] leading-[188%]">in stock for 30.09.2023</p>
        </div>

        <ProductsTabs />
      </div>
    </section>
  );
};

export default Products;
