"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "./_components/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import phone from "@/assets/phone.png";
import avatar from "@/assets/Avatars.png";
gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    
    gsap.to(hero, {
      scale: 0.95,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={heroRef}
      className="w-full bg-gradient-to-b from-[#FEFFFD] h-[720px] via-[#FFFFFF] to-[#6DB6FF] rounded-bl-[100px] rounded-br-[100px] relative overflow-hidden md:mt-0 mt-10"
    >
      <Container>
        <div className="flex flex-col md:flex-row items-start justify-between relative z-10">
          {/* Text section stays at the top */}
          <div className="text-center md:text-left md:mt-40">
            <div className="flex flex-col space-y-8">
              <h1 className="text-4xl text-[#002147] md:text-6xl font-semibold md:leading-[5rem] md:tracking-wider">
                Empower Your <span className="text-[#0171DF]">Finances </span> For A Brighter Future.
              </h1>
              <p className="text-[#334D6C] text-lg font-normal md:text-start text-center md:w-3/4">
                Streamline your payments with GreenBank. Instant bank transfers,
                hassle-free bill payments, and more – all at your fingertips.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button className="rounded-full px-8 py-6 text-white text-lg bg-[#0171DF] hover:bg-[#0171DF] font-semibold">
                  Download app
                </Button>
              </div>
              <div className="flex space-x-2 ">
               <Image src={avatar} alt=' ' /> <div className="text-center p-2 text-lg"> 200K+ Downloads</div>
              </div>
            </div>
          </div>

          {/* Move only the image down */}
          <div className="flex justify-center md:justify-end">
            <Image src={phone} alt="phone" width={650} className="relative z-0 mt-6 md:mt-32" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
