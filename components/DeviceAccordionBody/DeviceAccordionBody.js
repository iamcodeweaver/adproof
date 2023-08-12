"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PhoneAndroid from "../../public/images/phone-android.png";
import PhoneIOS from "../../public/images/phone-ios.png";
import GooglePlay from "../../public/images/get-it-on-g-play.png";
import AppStore from "../../public/images/app-store.png";
import PointingHand from "../../public/images/pointing-hand.png";
import AdproofChrome from "../../public/images/adproof-chrome.png";
import AdproofSafari from "../../public/images/adproof-safari.png";
import DeviceAccordionItem from "../DeviceAccordionItem/DeviceAccordionItem";
import { FaArrowRight } from "react-icons/fa";

const WindowsJSX = (
  <div className="lg:px-24 px-2 pt-12 pb-8 justify-start items-center">
    <div className="lg:w-1/3 flex lg:pb-0 pb-4 justify-center">
      <Image src={AdproofChrome.src} alt={"Windows"} width={300} height={300} />
    </div>
    <div className="lg:w-2/3 lg:pl-16">
      <p className="pt-4 text-2xl font-semibold">Adproof for Windows</p>
      <p className="pt-4 text-sm pb-4 opacity-70 leading-7">
        The features of Adproof for Windows go beyond ad blocking. It is a
        multifunctional application that guards kids from unsuitable content,
        prevents adverts, restricts access to risky websites, and speeds up page
        loading.
      </p>
      <hr className="w-full" />
      <div className="pt-4 flex gap-2">
        <Link href="#">
          <div className="flex text-sm text-blue-950">
            <div
              className={`text-xs bg-[#FFB027] border-gray-500 px-6 py-2 transition ease-in duration-200 rounded-l-full focus:outline-none justify-center items-center flex`}
            >
              Download for Windows
            </div>
            <div className="rounded-r-3xl text-center bg-[#FFB027] border-l-[0.07rem] border-gray-500 p-4 w-12">
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <Link href="/adproof-for-windows">
          <div className="flex text-sm text-white">
            <div
              className={`text-sm bg-[#140033] border-gray-500 px-6 py-3 transition ease-in duration-200 rounded-full focus:outline-none justify-center items-center flex`}
            >
              Read More
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

const MacJSX = (
  <div className="lg:px-24 px-2 pt-12 pb-8 justify-start items-center">
    <div className="lg:w-1/3 flex lg:pb-0 pb-4 justify-center">
      <Image src={AdproofSafari.src} alt={"Mac"} width={300} height={300} />
    </div>
    <div className="lg:w-2/3 lg:pl-16">
      <p className="pt-4 text-2xl font-semibold">Adproof for Mac</p>
      <p className="pt-4 text-sm pb-4 opacity-70 leading-7">
        A special ad blocker created with macOS in mind is Adproof for Mac. It
        safeguards you from monitoring, phishing, and fraud in addition to
        shielding you from obtrusive adverts in apps and websites.
      </p>
      <hr className="w-full" />
      <div className="pt-4 flex gap-4">
        <Link href="#">
          <div className="flex text-sm text-blue-950">
            <div
              className={`text-xs bg-[#FFB027] border-gray-500 px-6 py-2 transition ease-in duration-200 rounded-l-full focus:outline-none justify-center items-center flex`}
            >
              Download for macOS
            </div>
            <div className="rounded-r-3xl text-center bg-[#FFB027] border-l-[0.07rem] border-gray-500 p-4 w-12">
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <Link href="/adproof-for-mac">
          <div className="flex text-sm text-white">
            <div
              className={`text-sm bg-[#140033] border-gray-500 px-6 py-3 transition ease-in duration-200 rounded-full focus:outline-none justify-center items-center flex`}
            >
              Read More
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

const androidJSX = (
  <div className="lg:px-24 px-2 lg:flex pb-8 pt-8 justify-start items-center">
    <div className="lg:w-1/3 flex lg:pb-0 pb-4 justify-center">
      <Image src={PhoneAndroid.src} alt={"Android"} width={300} height={300} />
    </div>
    <div className="lg:w-2/3 lg:pl-16">
      <div className="text-sm font-semibold flex opacity-70">
        <Image
          src={PointingHand.src}
          alt={"Explore App"}
          width={20}
          height={20}
        />
        <p>&nbsp; &nbsp; &nbsp;E X P L O R E &nbsp; &nbsp; A P P</p>
      </div>
      <p className="pt-4 text-2xl font-semibold">Get Adproof For Android</p>
      <p className="pt-4 text-sm pb-4 opacity-70 leading-7">
        On your Android device, block obstrusive ads such as pop-ups, videos
        that automatically play, and audio ads from appearing on Facebook and
        Youtube.
      </p>
      <hr className="w-full" />
      <p className="pt-4">
        <Image
          src={GooglePlay.src}
          alt={"Explore App"}
          width={200}
          height={70}
        />
      </p>
    </div>
  </div>
);

const iosJSX = (
  <div className="lg:px-24 px-2 lg:flex pb-8 pt-8 justify-start items-center">
    <div className="lg:w-1/3 flex lg:pb-0 pb-4 justify-center">
      <Image src={PhoneIOS.src} alt={"iOS"} width={300} height={300} />
    </div>
    <div className="lg:w-2/3 lg:pl-16">
      <div className="text-sm font-semibold flex opacity-70">
        <Image
          src={PointingHand.src}
          alt={"Explore App"}
          width={20}
          height={20}
        />
        <p>&nbsp; &nbsp; &nbsp;E X P L O R E &nbsp; &nbsp; A P P</p>
      </div>
      <p className="pt-4 text-2xl font-semibold">Get Adproof For iOS</p>
      <p className="pt-4 text-sm pb-4 opacity-70 leading-7">
        On your iOS device, block obstrusive ads such as pop-ups, videos that
        automatically play, and audio ads from appearing on Facebook and
        Youtube.
      </p>
      <hr className="w-full" />
      <p className="pt-4">
        <Image src={AppStore.src} alt={"Explore App"} width={200} height={70} />
      </p>
    </div>
  </div>
);

function DeviceAccordionBody() {
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
      title: "Adproof for Windows",
      description: WindowsJSX,
    },
    {
      id: "02",
      title: "Adproof for Mac",
      description: MacJSX,
    },
    {
      id: "03",
      title: "Adproof for Android",
      description: androidJSX,
    },
    {
      id: "04",
      title: "Adproof for iOS",
      description: iosJSX,
    },
  ];
  return (
    <div className="lg:px-24 px-4 pb-8 hover:border-yellow-600 bg-gray-100 text-black">
      <div className="pb-8 pt-16 text-base leading-7">
        {/* ==================== */}
        {FaqData.map((data, index) => {
          const { id, description, title } = data;
          return (
            <DeviceAccordionItem
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

export default DeviceAccordionBody;
