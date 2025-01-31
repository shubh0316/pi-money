import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeText() {
  return (
    <div className="relative bg-white rounded-bl-[20px] rounded-br-[20px] md:rounded-bl-[100px] md:rounded-br-[100px] p-6 mt-20 md:mt-40 overflow-hidden">
      {/* Left shadow */}
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      
      {/* Right shadow */}
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <Marquee speed={50} gradient={false} className="flex items-center space-x-8">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex items-center space-x-4 mb-20">
            <div className="w-4 h-4 bg-[#0171DF] rounded-full"></div>
            <span className="text-6xl md:text-8xl font-bold text-[#0171DF]">Download Our App</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeText;
