import React from "react";

const FIVE = () => {
  return (
    <section className="relative z-20">
      <div className="relative bg-white/85 z-20 text-[#fa0d0d] py-10  flex  justify-center flex-col h-[60vw]">
        <div className="w-full flex flex-col md:flex-row justify-between h-auto  items-end p-4">
          <div>
            <h1 className="text-[#fa0d0d] text-[7vw] md:text-[5vw] leading-none font-bold -tracking-[1px] md:-tracking-[5px] md:self-end pl-96">
              let’s build
              <br />
              something
              <br />
              that matters.
              <br />
            </h1>
            <h1 className="text-[#fa0d0d] text-[7vw] md:text-[3vw] leading-none font-bold -tracking-[1px] md:-tracking-[5px] md:self-end pl-96 pt-10 font-mono">
                [name is empty]
            </h1>
          </div>

          <h1 className="text-[#fa0d0d] text-[7vw] md:text-[5vw] leading-none font-bold -tracking-[1px] md:-tracking-[5px] md:self-end">
          M411
          </h1>
          {/* <Image src={BRAND} width={220} height={220} alt="icoooooo" className="self-start md:self-end pr-4" /> */}
        </div>
      </div>
      <div className="absolute top-0 -z-10 text-[#561313] font-extrabold overflow-hidden mt-6 h-auto w-screen ">
        <h1
          className="flex flex-wrap justify-between md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]"
          style={{ filter: "blur(3px)" }}
        >
          <span>DROP ME</span>
          <span className="pr-10"></span>
        </h1>
        <h1
          className="flex flex-wrap justify-between md:space-x-40 lg:space-x-56 -tracking-[1px] md:-tracking-[10px] text-4xl sm:text-6xl md:text-9xl"
          style={{ filter: "blur(3px)" }}
        >
          <span>'HELLO'</span>
        </h1>
        {/* <h1 className="flex flex-wrap justify-between md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
           <span>I'VE CREATED.</span>
         </h1> */}
      </div>
    </section>
  );
};

export default FIVE;
