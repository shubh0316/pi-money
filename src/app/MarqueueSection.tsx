import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import m1 from "../assets/logo01.png";
import m2 from "../assets/logo02.png";
import m3 from "../assets/logo03.png";
import m4 from "../assets/logo04.png";
import m5 from "../assets/logo05.png";

function MarqueueSection() {
  return (
    <div className="flex flex-col justify-center lg:flex-row items-center w-[90%] gap-6 lg:max-w-7xl mx-auto mt-20 lg:mt-26 mb-10">
      <div className="mr-5 lg:w-1/2 text-lg text-[#576A8A]">
        WE ARE PARTNERED WITH MORE THAN <span className="font-bold">50+</span>{" "}
        COMPANIES AROUND THE GLOBE.
      </div>

      <div className="relative lg:w-[70%] overflow-hidden">
  <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
  <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
  <Marquee speed={100}>
    <div className="mr-10 flex items-center">
      <Image
        src={m1}
        width={148}
        height={184}
        className="object-contain"
        alt="Logo 1"
      />
    </div>
    <div className="mr-10 flex items-center">
      <Image
        src={m2}
        width={80}
        height={55}
        className="object-contain"
        alt="Logo 2"
      />
    </div>
    <div className="mr-10 flex items-center">
      <Image
        src={m3}
        width={128}
        height={104}
        className="object-contain"
        alt="Logo 3"
      />
    </div>
    <div className="mr-10 flex items-center">
      <Image
        src={m4}
        width={80}
        height={55}
        className="object-contain"
        alt="Logo 4"
      />
    </div>
    <div className="mr-10 flex items-center">
      <Image
        src={m5}
        width={128}
        height={104}
        className="object-contain"
        alt="Logo 5"
      />
    </div>
  </Marquee>
</div>
    </div>
  );
}

export default MarqueueSection;