"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import AccordionItem from "../AccordionItem/AccordionItem";

const PricingFaq = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(false);
    }
    setOpen(index);
  };
  const FaqData = [
    {
      title: "What is included in my trial plans?",
      description:
        "It will take 2 weeks (14 working days) after design is approved by client. This timeline applies to basic plan. However, Standard custom plan may take longer time. In this case, the timeline will be communicated with the client.",
    },
    {
      title: "Does Adproof have free versions?",
      description:
        "Our apps for Android and iOS also have free versions. They can be helpful as well: the free version of Adproof for Android can block ads in browsers, and the free version of Adproof for iOS blocks ads and trackers in Safari, but with limited functionality.",
    },
    {
      title: "Why is Adproof better than other ad blockers?",
      description:
        "Adproof offers apps for Android, iOS, Windows, and Mac. With them, you can block ads in browsers and apps, prevent websites and companies from tracking you, and protect yourself from phishing and malware.",
    },
  ];
  return (
    <div className="lg:grid lg:grid-cols-2 lg:px-24 px-4 pb-8 bg-white text-black">
      <div className="lg:w-2/3">
        <p className="pb-8 pt-16 text-4xl font-bold lg:text-left text-center">
          Frequently Asked Questions
        </p>
        <p className="pb-8 opacity-70">
          When Adproof comes on, ads go off. Enjoy fast internet and apps
          without pop-ups and banners!
        </p>
        <div>
          <Link href="#">
            <div className="flex text-sm text-blue-950">
              <div
                className={`text-sm bg-[#FFB027] border-gray-500 px-6 py-2 transition ease-in duration-200 rounded-l-full focus:outline-none justify-center items-center flex`}
              >
                More FAQs &nbsp; &nbsp;
              </div>
              <div className="rounded-r-3xl text-center bg-[#FFB027] border-l-[0.07rem] border-gray-500 p-4 w-12">
                <FaArrowRight />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="pb-8 pt-16 text-base opacity-70 leading-7">
        {/* ==================== */}
        {FaqData.map((data, index) => {
          return (
            <AccordionItem
              key={index}
              open={index === open}
              title={data.title}
              description={data.description}
              toggle={() => toggle(index)}
            />
          );
        })}
        {/* ==================== */}
      </div>
    </div>
  );
};

export default PricingFaq;
