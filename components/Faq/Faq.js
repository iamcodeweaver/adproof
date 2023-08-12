"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import AccordionItem from "../AccordionItem/AccordionItem";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(false);
    }
    setOpen(index);
  };
  const FaqData = [
    {
      title: "Does Adproof have a free version?",
      description:
        "We offer free versions of our Android and iOS apps. While the free version of Adproof for Android can block ads in browsers, and the free version of Adproof for iOS blocks ads and trackers in Safari, their functionality is limited. ",
    },
    {
      title: "Why is Adproof better than other ad blockers?",
      description:
        "Adproof offers apps for Android, iOS, Windows, and Mac. With them, you can block ads in browsers and apps, prevent websites and companies from tracking you, and protect yourself from phishing and malware.",
    },
    {
      title: "How do I install Adproof?",
      description:
        "We have apps for all popular platforms. Adproof for Windows, Mac, and Android can be downloaded directly from this page. Adproof for iOS is available on the App Store.",
    },
  ];
  return (
    <div className="lg:grid lg:grid-cols-2 lg:px-24 px-4 pb-8 bg-white text-[#05213A]">
      <div className="lg:w-2/3">
        <p className="pb-8 pt-16 text-4xl font-bold lg:text-left text-center">
          Frequently Asked Questions
        </p>
        <p className="pb-8 opacity-70 lg:text-left text-center">
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

export default Faq;
