import Image from "next/image";
import React from "react";
import BRAND from "../public/brand.svg"

const FOUR = () => {
  return (
    <section className="relative z-20">
    <div className="relative bg-white/85 z-20 text-[#fa0d0d] py-10  flex justify-end  flex-col h-screen">
    <div className="w-full flex flex-col md:flex-row justify-between h-auto  items-end p-4">
    <h1 className="text-[#fa0d0d] text-[7vw] md:text-[8vw] leading-none font-bold -tracking-[1px] md:-tracking-[14px] md:self-end ">
    Or at least,<br /> tried to.
  </h1>
  <Image src={BRAND} width={220} height={220} alt="icoooooo" className="self-start md:self-end pr-4" />
 
</div>
      </div>
      <div className="absolute top-0 -z-10 text-[#561313] font-extrabold overflow-hidden mt-6 h-auto w-screen">
        <h1 className="flex flex-wrap justify-between md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
          <span>A FEW</span>
          <span className="pr-10">ᗡOMN</span>
        </h1>
        <h1 className="flex flex-wrap justify-between md:space-x-40 lg:space-x-56 -tracking-[1px] md:-tracking-[10px] text-4xl sm:text-6xl md:text-9xl" style={{ filter: "blur(3px)" }}>
          <span>THINGS</span>
        </h1>
        <h1 className="flex flex-wrap justify-between md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
          <span>I'VE CREATED.</span>
        </h1>
      </div>
  </section>
  )
};

export default FOUR;

  