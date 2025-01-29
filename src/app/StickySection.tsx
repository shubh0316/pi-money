"use client";
import React, { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import signup from "@/assets/signup.svg";
import Image from "next/image";
import Container from "./_components/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function StickySection() {
  useEffect(() => {
    if (window.innerWidth >= 768) {
      // GSAP animation only for tablets and larger screens
      gsap.fromTo(
        ".background",
        { height: "0%" },
        {
          height: "100%",
          scrollTrigger: {
            trigger: ".background",
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="relative bg-custom-blue min-h-screen w-full">
      {/* Background Section (GSAP animated on md+ screens) */}
      <div className="background absolute top-0 left-0 w-full md:block hidden" style={{ backgroundColor: "#002147", height: "0%" }}></div>

      <div className="flex justify-center py-40 relative z-10">
        <Container>
          {/* Responsive layout: md+ -> Flex row, Mobile -> Column */}
          <div className="flex flex-col md:flex-row h-full gap-20">
            {/* Left Section (Sticky on md+, normal on mobile) */}
            <div className="text-white max-w-md md:sticky md:top-20 self-start flex-shrink-0 z-10">
              <h2 className="text-4xl text-center md:text-left">
                Get Started In Just <span className="text-[#00A3FF]">5 Minutes</span>
              </h2>
              <p className="text-[#E0E0E0] text-md mt-4 text-center md:text-left">
                Create an account and start exploring our features.
              </p>
            </div>

            {/* Right Section (Scrollable on md+, stacked on mobile) */}
            <div className="flex flex-col space-y-6 flex-grow">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex flex-col items-center p-6 bg-[#D2E7FA] rounded-3xl shadow-lg md:w-[700px] md:h-[400px] w-full"
                >
                  <Badge className="self-start bg-blue-500 rounded-full" variant="outline">
                    Step {item}
                  </Badge>
                  <p className="text-[#002147] font-semibold mt-2 text-center md:text-start">Get Started</p>
                  <Image src={signup} alt="signup" width={250} height={250} className="mt-4" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default StickySection;
