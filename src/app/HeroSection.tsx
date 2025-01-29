import React from "react";
import Container from "./_components/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import phone from "@/assets/phone.png";

function HeroSection() {
  return (
    <div className="w-full bg-gradient-to-b from-[#FEFFFD] via-[#FFFFFF] to-[#6DB6FF] rounded-bl-[100px] rounded-br-[100px] relative overflow-hidden md:mt-0 mt-10">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:mt-[110px] justify-between relative z-10">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <div className="flex flex-col space-y-4">
              <h1 className="text-4xl md:text-6xl font-semibold">
                Empower Your <span className="text-[#0171DF]">Finances </span> For A Brighter Future.
              </h1>
              <p className="text-slate-500 text-lg">
                Streamline your payments with GreenBank. Instant bank transfers,
                hassle-free bill payments, and more – all at your fingertips.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button className="border rounded-full px-8 py-6 text-white text-lg bg-[#0171DF] hover:bg-[#0171DF] font-semibold">
                  Download app
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image (Desktop) | Centered (Mobile) */}
          <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
            <Image src={phone} alt="phone" width={400} className="relative z-0" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
