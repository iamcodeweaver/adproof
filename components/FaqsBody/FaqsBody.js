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
        "We provide versatile app options to cater to various platforms. To get Adproof on your Windows, Mac, or Android device, you can conveniently download it directly from this page. For iOS and Android users, Adproof is readily accessible through the App Store and Play Store respectively",
    },
    {
      id: "02",
      title: "What is an adblocker?",
      description:
        "An Adblocker is a software tool that blocks unwanted ads, creating a cleaner and faster browsing experience. It filters out ads like pop-ups, banners, and videos, saving your time and reducing data usage",
    },
    {
      id: "03",
      title: "Does Adproof have free versions?",
      description:
        "Adproof provides a free version for users on Android, iOS, Windows and Mac. These free versions effectively blocks ads in browsers, though with some feature limitations.",
    },
    {
      id: "04",
      title: "Why is Adproof better than other ad blockers?",
      description:
        "Adproof offers a seamless and ad-free browsing experience, enriched with a diverse range of features. Our unique VPN and Anti-virus services are also available to enhance your online journey.",
    },
    {
      id: "05",
      title: "Is Adproof applicable on multiple devices?",
      description:
        "Adproof is compatible with major platforms such as Android, iOS, Windows, and Mac. For a seamless multi-device experience, simply purchase a license, download the Adproof app tailored to your platform, and sign in using your license key or Adproof account details.",
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
