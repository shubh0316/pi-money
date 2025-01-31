import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import m1 from "../assets/logo01.png";
import m2 from "../assets/logo02.png";
import m3 from "../assets/logo03.png";
import m4 from "../assets/logo04.png";
import m5 from "../assets/logo05.png";

function SeamlessSection() {
  return (
    <div className="bg-custom-blue mt-10 md:mt-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
        {/* Left Section - Text Content */}
        <div className="flex flex-col space-y-6 text-white mt-10 p-10 md:p-20">
          <div className="text-3xl md:text-5xl font-semibold">
            Seamless Payment<span className="text-[#0171DF]"> Integration </span>
          </div>
          <p className="text-[15px] md:text-[20px]">
            GreenBank seamlessly integrates with leading payment providers,
            offering you a wide range of options for convenient and secure
            transactions.
          </p>
        </div>

        {/* Right Section - Marquee */}
        <div className="relative overflow-hidden flex space-x-4">
          {/* Desktop & Tablet: Vertical Marquee */}
          <div className="hidden md:flex flex-col w-full">
            {/* Top Fade */}
            <div className="absolute top-[140px] left-0 right-0 h-20 bg-gradient-to-b from-custom-blue to-transparent z-10 pointer-events-none"></div>
            {/* Bottom Fade */}
            <div className="absolute bottom-[140px] left-0 right-0 h-20 bg-gradient-to-t from-custom-blue to-transparent z-10 pointer-events-none"></div>

            <div className="flex space-x-8">
              {[1, 2, 3].map((col) => (
                <Marquee
                  key={col}
                  direction="up"
                  speed={100}
                  className="h-[500px] flex-1 flex flex-col space-y-6"
                >
                  {[m1, m2, m3, m4, m5].map((imgSrc, i) => (
                    <div key={i} className="flex items-center justify-center p-2">
                      <Image
                        src={imgSrc}
                        width={100}
                        height={100}
                        className="object-contain"
                        alt={`Logo ${i + 1}`}
                      />
                    </div>
                  ))}
                </Marquee>
              ))}
            </div>
          </div>

          {/* Mobile: Horizontal Marquee */}
          <div className="md:hidden w-full py-10 px-4 relative">
            {/* Left Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-custom-blue to-transparent z-10 pointer-events-none"></div>
            
            {/* Right Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-custom-blue to-transparent z-10 pointer-events-none"></div>

            <div className="space-y-6">
              {[1, 2, 3].map((row) => (
                <Marquee
                  key={row}
                  direction="left"
                  speed={100}
                  className="flex space-x-8 py-4"
                >
                  {[m1, m2, m3, m4, m5].map((imgSrc, i) => (
                    <div key={i} className="flex items-center justify-center">
                      <Image
                        src={imgSrc}
                        width={70}
                        height={70}
                        className="object-contain"
                        alt={`Logo ${i + 1}`}
                      />
                    </div>
                  ))}
                </Marquee>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeamlessSection;