import React from "react";
import Image from "next/image";
import stripe from "@/assets/Stripe.png";
import Container from "./_components/Container";
import shopify from "@/assets/shopify.png";
import aws from "@/assets/aws.png";
function CustomStoriesSection() {
  return (
    <div>
      <Container>
        <div className="mt-10 md:mt-20 flex flex-col justify-around items-center space-y-4">
          <div className="text-3xl md:text-5xl text-[#002147] font-semibold text-center">
            Customer <span className="text-[#0171DF]">Stories</span>
          </div>
          <p className="text-[#334D6C] text-center text-[15px] md:text-[20px] md:w-1/2 ">
            Discover why GreenBank is the smart choice for secure banking and
            personalized financial growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mt-10">
            <div className="border bg-[#E4E6F9] mt-10 rounded-3xl flex flex-col  text-start p-6 justify-between space-y-6 md:space-y-20">
              <div className="">
                <Image src={stripe} alt="" width={100} />
              </div>
              <div className="text-md text-start tracking-wider text-[#334D6C]">
                As a leading payment processing platform, integrating with
                GreenBank has been instrumental in enhancing our offerings to
                businesses worldwide. GreenBank's commitment to innovation and
                user-centric design aligns seamlessly with our mission to
                simplify online payments. Highly Recommended
              </div>
              <div className="flex justify-end flex-col space-y-2">
                <div className="text-2xl font-semibold text-[#002147]">MIKE PATEL</div>
                <p>CEO, STRIPE</p>
              </div>
            </div>
            <div className="border bg-[#FFF5C5] mt-10 rounded-3xl flex flex-col  text-start p-6 justify-between space-y-6 md:space-y-20">
              <div className="">
                <Image src={shopify} alt="" width={150} />
              </div>
              <div className="text-md text-start tracking-wider text-[#334D6C]">
                Integrating GreenBank's banking services into our platform has
                significantly enhanced the financial capabilities we offer to
                our merchants. With GreenBank's seamless API integration, our
                merchants can manage their finances directly from their Shopify
                dashboard, their operations & improving their efficiency.
              </div>
              <div className="flex justify-end flex-col space-y-2">
                <div className="text-2xl font-semibold text-[#002147]">JACK DORSEY</div>
                <p>CTO, SHOPIFY</p>
              </div>
            </div>
            <div className="border bg-[#D6E9FF] mt-10 rounded-3xl flex flex-col  text-start p-6 justify-between space-y-6 md:space-y-20">
              <div className="">
                <Image src={aws} alt="" width={100} />
              </div>
              <div className="text-md text-start tracking-wider text-[#334D6C]">
                GreenBank's integration with our AWS platform has revolutionized
                how businesses manage their finances in the cloud. With
                GreenBank's scalable banking solutions and secure API
                integration, our customers can seamlessly manage their banking
                operations directly within their AWS environment.
              </div>
              <div className="flex justify-end flex-col space-y-2">
                <div className="text-2xl font-semibold tracking-wider text-[#002147]">
                  ANDY JASSY
                </div>
                <p>PRODUCT MANAGER, AWS</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CustomStoriesSection;
