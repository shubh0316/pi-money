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
    <div className="bg-custom-blue mt-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section - Text Content */}
        <div className="flex flex-col space-y-6 text-white mt-10 p-10 md:p-20">
          <div className="text-5xl font-semibold">Seamless Payment<span className="text-[#0171DF]"> Integration </span></div>
          <p className="text-[20px]">
            GreenBank seamlessly integrates with leading payment providers,
            offering you a wide range of options for convenient and secure
            transactions.
          </p>
        </div>

        {/* Right Section - Marquee */}
        <div className="relative overflow-hidden flex space-x-4">
          {/* Desktop & Tablet: Vertical Marquee */}
          <div className="hidden md:flex flex-col w-full">
            {/* Fade effect at the top */}
            <div className="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-custom-blue to-transparent z-10"></div>

<div className="flex  space-y-2"> 
            <Marquee direction="up" speed={100} className="h-[500px] flex flex-col space-y-6">
              {[m1, m2, m3, m4, m5].map((imgSrc, i) => (
                <div key={i} className="flex items-center justify-center">
                  <Image src={imgSrc} width={100} height={100} className="object-contain" alt={`Logo ${i + 1}`} />
                </div>
              ))}
            </Marquee>
            <Marquee direction="up" speed={100} className="h-[500px] flex flex-col space-y-6">
              {[m1, m2, m3, m4, m5].map((imgSrc, i) => (
                <div key={i} className="flex items-center justify-center">
                  <Image src={imgSrc} width={100} height={100} className="object-contain" alt={`Logo ${i + 1}`} />
                </div>
              ))}
            </Marquee>
            <Marquee direction="up" speed={100} className="h-[500px] flex flex-col space-y-6">
              {[m1, m2, m3, m4, m5].map((imgSrc, i) => (
                <div key={i} className="flex items-center justify-center">
                  <Image src={imgSrc} width={100} height={100} className="object-contain" alt={`Logo ${i + 1}`} />
                </div>
              ))}
            </Marquee>
            </div>
            {/* Fade effect at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-custom-blue to-transparent z-10"></div>
          </div>

          {/* Mobile: Horizontal Marquee */}
          <div className="md:hidden w-full space-y-6 pr-10 pl-10 mb-10">
            <Marquee direction="left" speed={100} className="flex space-x-4 ">
              {[m1, m2, m3, m4, m5].map((imgSrc, i) => (
                <div key={i} className="flex items-center justify-center">
                  <Image src={imgSrc} width={70} height={70} className="object-contain" alt={`Logo ${i + 1}`} />
                </div>
              ))}
            </Marquee>
            <Marquee direction="left" speed={100} className="flex space-x-4">
              {[m1, m2, m3, m4, m5].map((imgSrc, i) => (
                <div key={i} className="flex items-center justify-center">
                  <Image src={imgSrc} width={70} height={70} className="object-contain" alt={`Logo ${i + 1}`} />
                </div>
              ))}
            </Marquee>
            <Marquee direction="left" speed={100} className="flex space-x-4">
              {[m1, m2, m3, m4, m5].map((imgSrc, i) => (
                <div key={i} className="flex items-center justify-center">
                  <Image src={imgSrc} width={70} height={70} className="object-contain" alt={`Logo ${i + 1}`} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeamlessSection;
