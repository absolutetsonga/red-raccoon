import Image from "next/image";

type ArrowProps = {
  styles: string;
};

const Arrow = ({ styles }: ArrowProps) => {
  return (
    <div className={styles}>
      <Image
        src="/arrow-body.svg"
        alt="item"
        width={240}
        height={90}
        className="relative z-10 top-0"
      />

      <Image
        src="/arrow-start.svg"
        alt="item"
        width={6}
        height={6}
        className="absolute z-10 top-[60px] right-0"
      />

      <Image
        src="/arrow-end.svg"
        alt="item"
        width={12}
        height={12}
        className="absolute z-10 top-[33px] -left-[0.5px] rotate-90 i"
      />
    </div>
  );
};

export default Arrow;
