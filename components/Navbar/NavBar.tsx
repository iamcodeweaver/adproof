"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import DownArrow from "../../public/images/down-arrow.png";
import { TfiImport } from "react-icons/tfi";

import AdProofLogo from "../../public/images/adproof-logo.png";

const products = [
  {
    name: "Adproof For Windows",
    url: "/adproof-for-windows",
  },
  {
    name: "Adproof For Mac",
    url: "/adproof-for-mac",
  },
  {
    name: "Adproof For Android",
    url: "/adproof-for-android",
  },
  {
    name: "Adproof For iOS",
    url: "/adproof-for-ios",
  },
];

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="bottom-0">
      <nav className="lg:px-24 px-2 w-full bg-white text-black top-0 left-0 right-0 z-10 border-b-[0.025rem] border-gray-500">
        <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:py-2">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src={AdProofLogo.src}
                  alt={"Adproof"}
                  width={125}
                  height={32}
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
              </div>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-4 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex">
              <li className="p-4">
                <div className="peer text-h6 flex items-center gap-1">
                  Product
                  <Image src={DownArrow.src} height={15} width={15} alt={""} />
                </div>
                <div className="absolute rounded-b-xl bg-white hidden peer-hover:block hover:block">
                  <ul className=" space-y-2">
                    <li
                      key="x"
                      className="block text-white py-1 pl-6 pr-3 text-sm leading-7 border-b-2 border-y-pink-500"
                    >
                      .
                    </li>
                    {[...products].map((item) => (
                      <li
                        key={item.name}
                        className="block py-2 pl-6 pr-3 text-sm leading-7 border-b-[0.025rem] opacity-60"
                      >
                        <div className="flex group">
                          <div className="hidden group-hover:block hover:block text-pink-700">
                            &#10132; &nbsp;&nbsp;
                          </div>
                          <div className="">
                            <Link href={item.url}>{item.name}</Link>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="px-4 hover:border-b-pink-700 hover:border-b-2">
                <Link href="/pricing" onClick={() => setNavbar(!navbar)}>
                  Pricing
                </Link>
              </li>
              <li className="px-4 hover:border-b-pink-700 hover:border-b-2">
                <Link href="/faqs" onClick={() => setNavbar(!navbar)}>
                  FAQs
                </Link>
              </li>
              <li className="px-4 hover:border-b-pink-700 hover:border-b-2">
                <Link href="/support" onClick={() => setNavbar(!navbar)}>
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <Link href="#">
            <div className="hidden lg:flex justify-end">
              <div
                className={`text-sm text-white bg-[#140033] border-gray-500 px-6 py-2 transition ease-in duration-200 rounded-l-full border focus:outline-none justify-center items-center flex`}
              >
                Install Extension &nbsp; &nbsp;
              </div>
              <div className="text-white rounded-r-full border text-center bg-[#140033] border-gray-500 p-4 w-12">
                <TfiImport />
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
