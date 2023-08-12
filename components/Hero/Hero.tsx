import React from "react";
import Image from "next/image";
import CyberCuates from "../../public/images/cyber-cuate.png";
import Safari from "../../public/images/safari.png";
import Firefox from "../../public/images/firefox.png";
import Chrome from "../../public/images/chrome.png";
import ChromeBlack from "../../public/images/chrome-black.png";
import Edge from "../../public/images/edge.png";
import Link from "next/link";

function Hero() {
  return (
    <div className="lg:px-24 px-2 bg-white text-black">
      <div className="lg:grid lg:grid-cols-2">
        <div>
          <p className="text-[#140033] lg:text-5xl text-7xl font-semibold  lg:pt-16 py-4 lg:leading-[4.375rem] lg:pr-16">
            Ad-free and secure web browsing. Up your guards!
          </p>
          <p className="opacity-70 lg:text-base text-sm lg:leading-8 leading-6 lg:pt-8 pt-6 lg:pb-4 pb-2">
            Tired of being swamped with countless spammy pop-up messages
            everyday? Save your sanity with our hassle-free solution.
          </p>
          <hr className="hidden lg:block w-full" />
          <div className="pt-8 lg:flex w-full">
            <div className="hidden lg:block">
              <Link href="#">
                <div className="flex text-sm text-blue-950 justify-end">
                  <div
                    className={`text-sm bg-[#FFB027] border-gray-500 px-6 py-2 transition ease-in duration-200 rounded-l-full focus:outline-none justify-center items-center flex`}
                  >
                    Remove All Ads Now &nbsp; &nbsp;
                  </div>
                  <div className="rounded-r-3xl text-center bg-[#FFB027] border-l-[0.07rem] border-gray-500 p-4 w-12">
                    <Image
                      src={ChromeBlack.src}
                      height={40}
                      width={40}
                      alt={""}
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="hidden lg:flex gap-2 text-sm justify-end items-center">
              <p className="pl-4 opacity-60">Avalaible</p>
              <Image src={Chrome.src} alt={"Chrome"} height={40} width={40} />
              <Image src={Firefox.src} alt={""} height={40} width={40} />
              <Image src={Safari.src} alt={""} height={40} width={40} />
              <Image src={Edge.src} alt={""} height={40} width={40} />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src={CyberCuates.src} alt={""} height={594} width={594} />
        </div>
      </div>
      <div className="bottom-0 -mt-4">
        <hr className="w-full" />
      </div>
    </div>
  );
}

export default Hero;
