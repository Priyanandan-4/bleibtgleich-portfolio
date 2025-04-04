import Image from "next/image";
import React from "react";
import BRAND from "../public/brand.svg";

const FOUR = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Blurred background text */}
      <div className="absolute inset-0 z-10 mt-6 text-[#561313] font-extrabold">
        <h1
          className="flex flex-wrap justify-between text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]"
          style={{ filter: "blur(3px)" }}
        >
          <span className="mb-2">A FEW</span>
          <span className="mb-2 pr-4 md:pr-10">ᗡOMN</span>
        </h1>
        <h1
          className="flex flex-wrap justify-between text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]"
          style={{ filter: "blur(3px)" }}
        >
          <span className="mb-2">THINGS</span>
        </h1>
        <h1
          className="flex flex-wrap justify-between text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]"
          style={{ filter: "blur(3px)" }}
        >
          <span className="mb-2">I'VE CREATED.</span>
        </h1>
      </div>

      {/* Foreground content */}
      <div className="relative z-20 flex h-full w-full flex-col justify-end bg-white/85 py-10 px-6 md:px-12">
        <div className="flex flex-col gap-6 items-start md:items-end w-full">
          <h1 className="text-[#fa0d0d] text-[10vw] sm:text-[8vw] md:text-[6vw] leading-none font-bold -tracking-[1px] md:-tracking-[14px]">
            Or at least,<br /> tried to.
          </h1>
          <Image
            src={BRAND}
            width={180}
            height={180}
            alt="brand logo"
            className="mt-2 md:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default FOUR;
