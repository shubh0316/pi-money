import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Card from "../CardSection/Card";

const Cards = () => {
  const { scrollY } = useViewportScroll();
  const translateY = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity1 = useTransform(scrollY, [800, 1200, 1500, 2000], [1, 0.85, 0.5, 0]);
  const opacity2 = useTransform(scrollY, [800, 3000], [1, 0.5]);
  const scale1 = useTransform(scrollY, [800, 1300], [1, 0.98]);
  const scale2 = useTransform(scrollY, [800, 1300], [1, 0.98]);
  return (
    <section className="w-full bg-white flex flex-wrap justify-center mt-8 px-4">
      {/* Desktop & Tablet View */}
      <div className="hidden md:flex flex-wrap justify-center gap-12">
        <motion.div
          className="sticky top-40"
          style={{ translateY, opacity: opacity1, scale: scale1 }}
        >
          <Card
            heading={"Manage All Your Credit Cards in One Place."}
            description={
              "Keep track of multiple credit cards effortlessly within the GreenBank app. Monitor balances, track transactions, and stay on top of payments without switching between different accounts."
            }
            imgUrl={"/image_15.png"}
            bgColor={"bg-[#D4EAFF]"}
            imgWidth={600}
            marginLeft={"left-12"}
          />
        </motion.div>

        <motion.div
          className="sticky top-44"
          style={{ translateY, opacity: opacity2, scale: scale2 }}
        >
          <Card
            heading={"Goal-Oriented Financial Planning."}
            description={
              "Set and track your financial goals with GreenBank's tailored planning tools. Whether it's saving for a vacation, a new home, or retirement, we'll help you stay on target and achieve your dreams."
            }
            imgUrl={"/image_18.png"}
            bgColor={"bg-[#FFF5C5]"}
            imgWidth={250}
            marginLeft={"left-12"}
          />
        </motion.div>

        <motion.div style={{ translateY }}>
          <Card
            heading={"Smart Spending Insights."}
            description={
              "Gain valuable insights into your spending habits with GreenBank's intelligent analysis tools. Understand where your money is going, receive personalized recommendations for saving, and make informed financial decisions to achieve your goals faster."
            }
            imgUrl={"/image_21.png"}
            bgColor={"bg-[#E4E6F9]"}
            imgWidth={250}
            marginLeft={"left-12"}
          />
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col space-y-8 ">
        <div className="p-6 bg-[#D4EAFF] rounded-xl">
          <h2 className="text-[25px]  font-semibold mb-2">Manage All Your Credit Cards in One Place.</h2>
          <p className="text-[#334D6C] text-[15px]">
            Keep track of multiple credit cards effortlessly within the GreenBank app. Monitor balances, track transactions, and stay on top of payments without switching between different accounts.
          </p>
          <div className="mt-4 flex justify-center">
            <img src="/image_15.png" alt="Credit Cards" className="w-full max-w-xs" />
          </div>
        </div>
        <div className="p-6 bg-[#FFF5C5] rounded-xl">
          <h2 className="text-[25px] font-semibold mb-2">Goal-Oriented Financial Planning.</h2>
          <p className="text-[#334D6C] text-[15px]">
            Set and track your financial goals with GreenBank's tailored planning tools. Whether it's saving for a vacation, a new home, or retirement, we'll help you stay on target and achieve your dreams.
          </p>
          <div className="mt-4 flex justify-center">
            <img src="/image_18.png" alt="Financial Planning" className="w-full max-w-xs" />
          </div>
        </div>
        <div className="p-6 bg-[#E4E6F9] rounded-xl">
          <h2 className="text-[25px] font-semibold mb-2">Smart Spending Insights.</h2>
          <p className="text-[#334D6C] text-[15px]">
            Gain valuable insights into your spending habits with GreenBank's intelligent analysis tools. Understand where your money is going, receive personalized recommendations for saving, and make informed financial decisions to achieve your goals faster.
          </p>
          <div className="mt-4 flex justify-center">
            <img src="/image_21.png" alt="Spending Insights" className="w-full max-w-xs" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
