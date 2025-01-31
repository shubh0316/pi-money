import React from "react";
import { Separator } from "@/components/ui/separator";
import Container from "./Container";
import Image from "next/image";
import footer from "@/assets/footer.png";
import { Button } from "@/components/ui/Button";
const Footer = () => {
  return (
    <footer className="bg-[#D4EAFF]  py-8  sticky bottom-0 -z-20">
      <Container>
        <div className="flex md:flex-row flex-col justify-between ">
         <Image src={footer} alt="" width={100}  />
         <div className="flex flex-col space-y-10 items-start md:w-1/2">
         <div className="text-3xl font-semibold  text-[#002147]">Empowering your financial journey,<br />one transaction at a time.</div>
         <Button className='rounded-full px-6 py-4 text-white text-md bg-[#0171DF] hover:bg-[#0171DF]'>Buy Template</Button>
         </div>
        </div>
        <div className="p-6">
          <Separator className="bg-[#AAC2DA]" />
        </div>
        <div className="flex flex-col md:flex-row justify-between text-[#002147CC] tracking-wider items-start md:items-center  md:mb-0 mb-20 md:mt-10 space-y-4 md:space-y-0">
          <div className="underline">Designed By Breeje Anadkat</div>
          <div>© 2024 GreenBank. All Rights Reserved.</div>
          <div className="space-x-4 flex underline">
            <p>Built in Next.js</p>
            <p>Get This Template</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
