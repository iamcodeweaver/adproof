"use client";
import React from "react";
import Image from "next/image";
import PhoneAndroid from "../../public/images/phone-android.png";
import PhoneIOS from "../../public/images/phone-ios.png";
import GooglePlay from "../../public/images/get-it-on-g-play.png";
import AppStore from "../../public/images/app-store.png";
import PointingHand from "../../public/images/pointing-hand.png";
import AdproofChrome from "../../public/images/adproof-chrome.png";
import AdproofSafari from "../../public/images/adproof-safari.png";
import DeviceAccordionBody from "../DeviceAccordionBody/DeviceAccordionBody";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function Clutter() {
  return (
    <div className="bg-gray-100 text-black">
      <div className="lg:px-24 px-4 pt-16 bg-gray-100 text-[#05213A] font-semibold">
        <div className="hidden lg:block lg:px-60 px-4 pb-12 opacity-80 capitalize lg:leading-10 leading-7 text-center items-center lg:text-3xl text-2xl">
          Say goodbye to clutter and hello to cleaner browsing experience
        </div>
        <div className="lg:hidden px-4 opacity-80 capitalize leading-10 text-center items-center text-3xl font-semibold">
          Blocking Intrusive Advertising Will Make Your Browsing Experience
          Cleaner
        </div>
      </div>
      {/* ======================= */}
      <div class="hidden lg:block mx-auto">
        {/* <div class="border-b border-gray-200 dark:border-gray-700 mb-4"> */}
        <div class="border-b border-gray-200 mb-4">
          <ul
            class="lg:flex justify-center lg:gap-28 flex-wrap -mb-px"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                class="inline-block hover:border-yellow-600 rounded-t-lg py-4 px-4 text-sm text-center border-transparent border-b-2 dark:hover:border-yellow-600"
                id="dashboard-tab"
                data-tabs-target="#windows"
                type="button"
                role="tab"
                aria-controls="windows"
                aria-selected="false"
              >
                Adproof for Windows
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                class="inline-block hover:border-yellow-600 rounded-t-lg py-4 px-4 text-sm text-center border-transparent border-b-2 dark:hover:border-yellow-600"
                id="settings-tab"
                data-tabs-target="#mac"
                type="button"
                role="tab"
                aria-controls="mac"
                aria-selected="false"
              >
                Adproof for Mac
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                class="inline-block hover:border-yellow-600 rounded-t-lg py-4 px-4 text-sm text-center border-transparent border-b-2 dark:hover:border-yellow-600"
                id="profile-tab"
                data-tabs-target="#android"
                type="button"
                role="tab"
                aria-controls="android"
                aria-selected="true"
              >
                Adproof for Android
              </button>
            </li>
            <li role="presentation">
              <button
                class="inline-block hover:border-yellow-600 rounded-t-lg py-4 px-4 text-sm text-center border-transparent border-b-2 dark:hover:border-yellow-600"
                id="contacts-tab"
                data-tabs-target="#ios"
                type="button"
                role="tab"
                aria-controls="ios"
                aria-selected="false"
              >
                Adproof for iOS
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            class="hidden"
            id="windows"
            role="tabpanel"
            aria-labelledby="windows-tab"
          >
            {/* Windows */}
            <div className="lg:px-24 px-2 lg:flex pb-8 pt-8 justify-start items-center">
              <div className="lg:w-1/3 flex lg:pb-0 pb-4 justify-center">
                <Image
                  src={AdproofChrome.src}
                  alt={"Windows"}
                  width={300}
                  height={300}
                />
              </div>
              <div className="lg:w-2/3 lg:pl-16">
                <p className="pt-4 text-2xl font-semibold">
                  Adproof for Windows
                </p>
                <p className="pt-4 text-sm pb-4 opacity-70 leading-7">
                  The features of Adproof for Windows go beyond ad blocking. It
                  is a multifunctional application that guards kids from
                  unsuitable content, prevents adverts, restricts access to
                  risky websites, and speeds up page loading.
                </p>
                <hr className="w-full" />
                <div className="pt-4 flex gap-4">
                  <Link href="#">
                    <div className="flex text-sm text-blue-950">
                      <div
                        className={`text-sm bg-[#FFB027] border-gray-500 px-6 py-2 transition ease-in duration-200 rounded-l-full focus:outline-none justify-center items-center flex`}
                      >
                        Download for Windows &nbsp; &nbsp;
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
                        Read More &nbsp; &nbsp;
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* Windows */}
          </div>
          <div
            class="hidden"
            id="mac"
            role="tabpanel"
            aria-labelledby="mac-tab"
          >
            {/* Mac */}
            <div className="lg:px-24 px-2 lg:flex pb-8 pt-8 justify-start items-center">
              <div className="lg:w-1/3 flex lg:pb-0 pb-4 justify-center">
                <Image
                  src={AdproofSafari.src}
                  alt={"Mac"}
                  width={300}
                  height={300}
                />
              </div>
              <div className="lg:w-2/3 lg:pl-16">
                <p className="pt-4 text-2xl font-semibold">Adproof for Mac</p>
                <p className="pt-4 text-sm pb-4 opacity-70 leading-7">
                  A special ad blocker created with macOS in mind is Adproof for
                  Mac. It safeguards you from monitoring, phishing, and fraud in
                  addition to shielding you from obtrusive adverts in apps and
                  websites.
                </p>
                <hr className="w-full" />
                <div className="pt-4 flex gap-4">
                  <Link href="#">
                    <div className="flex text-sm text-blue-950">
                      <div
                        className={`text-sm bg-[#FFB027] border-gray-500 px-6 py-2 transition ease-in duration-200 rounded-l-full focus:outline-none justify-center items-center flex`}
                      >
                        Download for macOS &nbsp; &nbsp;
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
                        Read More &nbsp; &nbsp;
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* Mac */}
          </div>
          <div
            class=""
            id="android"
            role="tabpanel"
            aria-labelledby="android-tab"
          >
            {/* ============================ */}
            {/* Android */}
            <div className="lg:px-24 px-2 lg:flex pb-8 pt-8 justify-start items-center">
              <div className="lg:w-1/3 flex lg:pb-0 pb-4 justify-center">
                <Image
                  src={PhoneAndroid.src}
                  alt={"Android"}
                  width={300}
                  height={300}
                />
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
                <p className="pt-4 text-2xl font-semibold">
                  Get Adproof For Android
                </p>
                <p className="pt-4 text-sm pb-4 opacity-70 leading-7">
                  On your Android device, block obstrusive ads such as pop-ups,
                  videos that automatically play, and audio ads from appearing
                  on Facebook and Youtube.
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
            {/* Android */}
            {/* ============================ */}
          </div>
          <div
            class="hidden"
            id="ios"
            role="tabpanel"
            aria-labelledby="ios-tab"
          >
            {/* ..... */}
            {/* ============================ */}
            {/* iOS */}
            <div className="lg:px-24 px-2 lg:flex pb-8 pt-8 justify-start items-center">
              <div className="lg:w-1/3 flex lg:pb-0 pb-4 justify-center">
                <Image
                  src={PhoneIOS.src}
                  alt={"iOS"}
                  width={300}
                  height={300}
                />
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
                <p className="pt-4 text-2xl font-semibold">
                  Get Adproof For iOS
                </p>
                <p className="pt-4 text-sm pb-4 opacity-70 leading-7">
                  On your iOS device, block obstrusive ads such as pop-ups,
                  videos that automatically play, and audio ads from appearing
                  on Facebook and Youtube.
                </p>
                <hr className="w-full" />
                <p className="pt-4">
                  <Image
                    src={AppStore.src}
                    alt={"Explore App"}
                    width={200}
                    height={70}
                  />
                </p>
              </div>
            </div>
            {/* iOS */}
            {/* ============================ */}
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></script>
      <div className="lg:hidden">
        <DeviceAccordionBody />
      </div>
      {/* ======================= */}{" "}
    </div>
  );
}

export default Clutter;
