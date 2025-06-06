import React from "react";

const THREE = () => {
  return (
    <section className="relative z-20">
    <div className="relative bg-white/90 z-20 text-[#fa0d0d] py-10  flex justify-center items-center flex-col h-screen">
      <div  className="h-96 w-96 bg-[#fa0d0d]">
    
      </div>
      {/* <h1 className="text-[3vw] md:text-[1.3vw] font-extrabold leading-none pt-10 pl-10 md:pl-96 -tracking-[0.1px] md:-tracking-[1.5px]">
        <span className="text-[14px] md:text-2xl">aBout;</span><br />
        A detail-oriented Front-End Developer <br />
        focused on creating intuitive, high-performance <br />
        web applications with modern technologies
      </h1> */}

      {/* <div className="flex justify-between w-full flex-col md:flex-row">
      </div> */}
      </div>
      {/* Blurred Skills List */}
      <div className="absolute top-0 -z-10 text-[#561313] font-extrabold overflow-hidden mt-6 h-auto w-screen">
        <h1 className="flex flex-wrap justify-between md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
          <span>HTML</span>
          <span>CSS</span>
        </h1>
        <h1 className="flex flex-wrap justify-between md:space-x-40 lg:space-x-56 -tracking-[1px] md:-tracking-[10px] text-4xl sm:text-6xl md:text-9xl" style={{ filter: "blur(3px)" }}>
          <span>JAVASCRIPT</span>
          <span>REACT</span>
        </h1>
        <h1 className="flex flex-wrap justify-between md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]" style={{ filter: "blur(3px)" }}>
          <span>TYPESCRIPT</span>
          <span>MUI</span>
        </h1>
      </div>

      <hr className="border-t-2 border-[#fa0d0d] my-9" />
  
  </section>
  )
};

export default THREE;

