"use client";
import React, { useState } from "react";
import MainAccordionItem from "../MainAccordionItem/MainAccordionItem";

function FaqsBody() {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(false);
    }
    setOpen(index);
  };
  const FaqData = [
    {
      id: "01",
      title: "How do I install Adproof?",
      description:
        "We have apps for all popular platforms. Adproof for Windows, Mac, and Android can be downloaded directly from this page. Adproof for iOS is available on the App Store.",
    },
    {
      id: "02",
      title: "What's an adblocker?",
      description:
        "An ad blocker is a program designed to make the Web cleaner and safer and protect your privacy. Adproof blocks pop-up ads, banners, and video ads even on YouTube.",
    },
    {
      id: "03",
      title: "Does Adproof have free versions?",
      description:
        "Our apps for Android and iOS also have free versions. They can be helpful as well: the free version of Adproof for Android can block ads in browsers, and the free version of Adproof for iOS blocks ads and trackers in Safari, but with limited functionality.",
    },
    {
      id: "04",
      title: "Why is Adproof better than other ad blockers?",
      description:
        "Adproof offers apps for Android, iOS, Windows, and Mac. With them, you can block ads in browsers and apps, prevent websites and companies from tracking you, and protect yourself from phishing and malware.",
    },
    {
      id: "05",
      title: "Can I use Adproof on multiple devices?",
      description:
        "Adproof supports all popular platforms: Android, iOS, Windows, and Mac. The best way to use Adproof on multiple devices is to buy a license, download the Adproof app for the needed platform, and log in to it with your license key or Adproof account credentials.",
    },
  ];
  return (
    <div className="lg:px-24 px-4 pb-8 bg-white text-black">
      <div className="pb-8 pt-16 text-base opacity-70 leading-7">
        {/* ==================== */}
        {FaqData.map((data, index) => {
          const { id, description, title } = data;
          return (
            <MainAccordionItem
              key={id}
              open={index === open}
              id={id}
              title={title}
              description={description}
              toggle={() => toggle(index)}
            />
          );
        })}
        {/* ==================== */}
      </div>
    </div>
  );
}

export default FaqsBody;
