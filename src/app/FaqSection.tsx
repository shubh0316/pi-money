//@ts-nocheck
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "./_components/Container";
import { Button } from "@/components/ui/Button";

function FAQs() {
  const faqsData = [
    {
      question: "What is Green Bank?",
      answer:
        "Green Bank is an advanced software solution designed to transform fleet management processes, emphasizing safety and compliance. This comprehensive platform integrates collision reports, inspection reports, and conviction reports, enabling fleet owners and managers to proactively mitigate risks, streamline operations, and uphold Canadian safety regulations.",
    },
    {
      question: "How does the Green Bank dashboard benefit fleet managers?",
      answer:
        "The Green Bank dashboard serves as a centralized hub of information, providing real-time visibility and actionable insights to fleet managers. This feature-rich dashboard offers a comprehensive overview of fleet operations, including safety ratings and violation rates. It empowers managers to make informed decisions, engage in proactive management, and maintain compliance with regulatory requirements.",
    },
    {
      question: "What sets Green Bank apart from traditional fleet management systems?",
      answer:
        "Green Bank goes beyond conventional fleet management by offering specialized features to efficiently handle collision conviction and inspection data. This powerful capability enables fleet managers to monitor, analyze, and mitigate risks associated with collisions and inspections. The system ensures enhanced safety, regulatory compliance, and operational excellence through data-driven insights.",
    },
    {
      question: "How does Green Bank help in managing drivers and vehicles?",
      answer:
        "Green Bank offers a dedicated mechanic's dashboard that allows for flexible scheduling adjustments and real-time pre-trip inspections monitoring. Drivers can promptly request repairs, with immediate access to mechanics and emergency backup support. The system simplifies safety renewals, compliance tracking, work order management, and inventory tracking, contributing to smoother operations and regulatory adherence.",
    },
    {
      question: "What is GreenBank?",
      answer:
        "GreenBank is a comprehensive financial platform that simplifies transactions for businesses and individuals. It offers seamless payment integrations, financial management tools, and secure banking solutions.",
    },
    {
      question: "How secure is GreenBank?",
      answer:
        "GreenBank uses industry-leading encryption and security protocols to protect user data and transactions. It complies with major financial regulations to ensure safe and reliable services.",
    },
    {
      question: "Does GreenBank support international transactions?",
      answer:
        "Yes, GreenBank supports international transactions with multiple currency options and secure cross-border payments.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 mt-10 md:mt-20 rounded-bl-[100px] rounded-br-[100px]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left Section */}
          <div className="flex flex-col space-y-6">
            <div className="text-3xl md:text-5xl text-[#002147] tracking-wider md:leading-[4rem] font-semibold">
              Answers to your <span className="text-[#0171DF]">Questions</span>
            </div>
            <p className="text-[#334D6C] text-[15px] md:text-[20px]">
              Get answers to commonly asked questions about GreenBank and its features.
            </p>
            <Button className="rounded-3xl text-lg text-white bg-[#0171DF] self-start w-40">
              Contact Us
            </Button>
          </div>

          {/* Right Section - FAQ List */}
          <motion.div>
            <div className="space-y-4">
              {faqsData.map((faq, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  key={index}
                  className={`rounded-xl px-6 py-4 border cursor-pointer transition-all duration-300 ${
                    openIndex === index ? "bg-blue-100" : "bg-white"
                  }`}
                  onClick={() => handleToggle(index)}
                >
                  <div className="flex space-x-4 items-center">
                  <motion.span
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      className="text-3xl"
                    >
                      +
                    </motion.span>
                    <span className="font-medium text-[20px] text-[#002147]">{faq.question}</span>
                   
                  </div>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="text-[#334D6C] mt-2 text-[20px]"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default FAQs;
