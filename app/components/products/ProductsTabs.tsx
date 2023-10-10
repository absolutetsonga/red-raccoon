import Image from "next/image";

type Product = {
  title: string;
  active: boolean;
};

type ProductsTabsElementProps = {
  product: Product;
  onClick: () => void;
};

type ProductsTabsProps = {
  productTabs: Product[];
  setProductTabs: React.Dispatch<React.SetStateAction<Product[]>>;
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
        className={`absolute w-10 h-10 object-cover bottom-[-38.5px] transition-opacity ${
          product.active ? "opacity-100" : "opacity-0"
        }`}
        alt="product-active"
      />

      <Image
        src="/products/decor-focus.svg"
        width={80}
        height={80}
        className={`absolute w-10 h-10 object-cover bottom-[-68px] transition-opacity ${
          product.active ? "opacity-100" : "opacity-0"
        }`}
        alt="product-active"
      />
    </button>
  );
};

const ProductsTabs = ({ productTabs, setProductTabs }: ProductsTabsProps) => {
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
