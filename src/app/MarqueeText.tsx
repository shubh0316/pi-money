import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeText() {
  return (
    <div className="bg-white rounded-bl-[100px] rounded-br-[100px]  p-6 mt-40">
      <Marquee speed={50} gradient={false} className="flex items-center space-x-8">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex items-center space-x-4 mb-20">
            <div className="w-4 h-4 bg-[#0171DF] rounded-full"></div>
            <span className="text-8xl font-bold text-[#0171DF]">Download Our App</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeText;
