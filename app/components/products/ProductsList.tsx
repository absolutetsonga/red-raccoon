import Image from "next/image";
import Button from "../Button";

type ProductListElement = {
  product: {
    imageSrc: string;
    size: string;
    weight: string;
    price: string;
  };
};

const ProductListElement = ({ product }: ProductListElement) => {
  return (
    <div className="flex flex-col justify-center gap-5 bg-white p-6 rounded-md">
      <Image
        src={product.imageSrc}
        width={295}
        height={220}
        alt={"Product Image"}
        className="object-cover"
      />

      <div className="flex flex-col gap-3">
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

      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex flex-col">
          <p className="text-[#91959C]">Cost:</p>
          <p className="font-extrabold text-[26px]">
            {product.price}{" "}
            <span className="text-[11px] font-normal underline">$</span>
          </p>
        </div>

        <Button className="px-[23px] py-[13px] bg-[#E2E8ED] hover:bg-[#FF4F00] hover:text-white transition-all text-[11px] rounded-md">
          More about
        </Button>
      </div>
    </div>
  );
};

const ProductsList = () => {
  const listElements = [
    {
      imageSrc: "/products/product-1.jpg",
      size: "1000×400×230",
      weight: "22",
      price: "39900",
    },
    {
      imageSrc: "/products/product-2.jpg",
      size: "1000×400×230",
      weight: "22",
      price: "39900",
    },
    {
      imageSrc: "/products/product-3.jpg",
      size: "1000×400×230",
      weight: "22",
      price: "39900",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-10">
      {listElements.map((product, index) => (
        <ProductListElement product={product} key={index} />
      ))}
    </section>
  );
};

export default ProductsList;
