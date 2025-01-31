"use client";
import React, { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Container from "./_components/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import signup from "@/assets/signup.png";
import deco from "@/assets/Deco.png";
import netflix from "@/assets/netflix.png";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Sign Up With GreenBank",
    description: "Create your GreenBank account and unlock a world of financial possibilities.",
    image: signup,
  },
  {
    title: "Connect Your Accounts",
    description: "Link all your financial accounts effortlessly to GreenBank for comprehensive management.",
    image: deco,
  },
  {
    title: "Start Banking",
    description: "Take control of your finances with GreenBank's intuitive features and personalized tools.",
    image: netflix,
  },
];
function StickySection() {
  useEffect(() => {
    if (window.innerWidth >= 768) {
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
      <div className="background absolute top-0 left-0 w-full md:block hidden" style={{ backgroundColor: "#002147", height: "0%" }}></div>
      <div className="flex justify-center py-10  md:py-40 relative z-10">
        <Container>
          <div className="flex flex-col md:flex-row h-full gap-8 md:gap-40">
            <div className="text-white max-w-md md:sticky md:top-20 self-start flex-shrink-0 z-10">
              <h2 className="text-3xl md:text-5xl md:whitespace-nowrap md:leading-[4rem] tracking-wider font-semibold text-left">
                Get Started In Just<br /> <span className="text-[#0171DF] whitespace-nowrap">3 Simple Steps</span>
              </h2>
              <p className="text-[#FFFFF] text-[15px] mt-4 text-left">
                Three simple steps to unlock the power of GreenBank and revolutionize your banking experience.
              </p>
            </div>
            <div className="flex flex-col space-y-6 flex-grow md:p-0 ">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 space-y-[20px] bg-[#D2E7FA] rounded-3xl shadow-lg  md:w-[600px] md:h-[480px] w-full"
                >
                  <Badge className="self-start bg-[#0171DF] text-white font-light px-4 py-1 rounded-full" variant="outline">
                    Step {index + 1}
                  </Badge>
                  <h2 className="text-[#002147] font-semibold mt-2 text-[20px] md:text-[32px] text-start self-start">{step.title}</h2>
                  <p className="text-[#334D6C] text-[15px] md:text-[20px] font-light ">{step.description}</p>
                  <Image src={step.image} alt={step.title} width={550} height={250} className="mt-4" />
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
