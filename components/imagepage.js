import React from "react";

const THREE = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-100">

      <div className="relative w-80 h-40 bg-blue-500 text-white flex items-center justify-center text-xl font-semibold z-10 p-4 rounded-lg shadow-lg">
        I am the lower div with content!
      </div>

      <div className="absolute w-96 h-52 bg-black opacity-50 top-0 rounded-lg z-0"></div>
    </div>
  );
};

export default THREE;

