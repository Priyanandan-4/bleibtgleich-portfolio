import React from "react";

const ColorGrid = () => {
  return (
    <section className="relative z-20 w-full overflow-hidden">
      {/* Foreground color blocks */}
      <div className="relative bg-white/85 z-20 text-[#fa0d0d] py-10 px-4 flex justify-end">
        {/* Color Boxes Container */}
        <div className="w-full flex flex-col md:block relative h-auto">
          {/* Mobile flex-col layout */}
          <div className="flex flex-col md:hidden gap-6 items-center">
            <div className="w-[90%] h-[200px] bg-[#fa0d0d]" />
            <div className="w-[90%] h-[300px] bg-green-500" />
            <div className="w-[90%] h-[200px] bg-blue-500 flex items-center justify-center">
              <span className="text-black font-bold">threads</span>
            </div>
            <div className="w-[90%] h-[250px] bg-yellow-500" />
            <div className="w-[90%] h-[200px] bg-fuchsia-900" />
            <span className="text-[#fa0d0d] font-bold text-xl">pickme</span>
          </div>

          {/* Desktop absolute layout (original) */}
          <div className="hidden md:flex h-[125vw] w-screen relative p-10">
            <div className="absolute w-[450px] h-[280px] bg-[#fa0d0d]"></div>
            <div className="absolute top-[320px] left-[490px] w-[750px] h-[450px] bg-green-500"></div>
            <div className="absolute top-[770px] left-[106px] w-[384px] h-[300px] bg-blue-500 flex items-center">
              <span className="text-black font-bold ml-1">threads</span>
            </div>
            <div className="absolute bottom-[500px] left-[490.6px] w-[420px] h-[350px] bg-yellow-500"></div>
            <div className="absolute bottom-[250px] left-[910px] w-[350px] h-[250px] bg-fuchsia-900"></div>
            <span className="absolute top-1/4 left-1/4 font-bold">pickme</span>
          </div>
        </div>
      </div>

      {/* Blurry background text */}
      <div className="absolute top-0 -z-10 text-[#561313] font-extrabold overflow-hidden mt-6 w-screen px-4">
        <h1
          className="flex flex-wrap justify-between md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]"
          style={{ filter: "blur(3px)" }}
        >
          <span>PETFOOD</span>
          <span className="pr-10">ᗡOMN</span>
        </h1>
        <h1
          className="flex flex-wrap justify-between md:space-x-40 lg:space-x-56 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]"
          style={{ filter: "blur(3px)" }}
        >
          <span>PICKME</span>
        </h1>
        <h1
          className="flex flex-wrap justify-between md:space-x-72 text-4xl sm:text-6xl md:text-9xl -tracking-[1px] md:-tracking-[10px]"
          style={{ filter: "blur(3px)" }}
        >
          <span>THREADS</span>
        </h1>
      </div>
    </section>
  );
};

export default ColorGrid;
