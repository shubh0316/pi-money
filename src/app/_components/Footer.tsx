import React from "react";
import { Separator } from "@/components/ui/separator";
import Container from "./Container";
import Image from "next/image";
import footer from "@/assets/footer.png";
import { Button } from "@/components/ui/Button";
const Footer = () => {
  return (
    <footer className="bg-[#D4EAFF] font-sans py-8  sticky bottom-0 -z-20">
      <Container>
        <div className="flex md:flex-row flex-col justify-between ">
         <Image src={footer} alt="" width={500} height={10} />
         <div className="flex flex-col space-y-6 items-start md:w-1/2">
         <div className="text-4xl">Empowering your financial journey, one transaction at a time.</div>
         <Button className='border rounded-full px-6 py-3 text-lg bg-[#0171DF] hover:bg-[#0171DF]'>Buy Template</Button>
         </div>
        </div>
 
        <div className="p-6  md:mt-20">
          <Separator className="bg-black" />
        </div>

        <div className="flex flex-col md:flex-row justify-between itemse-start md:items-center underline md:mb-0 mb-20 md:mt-10 space-y-4 md:space-y-0">
          <div>Get this Template</div>
          <div>All rights Reserved</div>
          <div>Get this Template</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
