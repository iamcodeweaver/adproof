import React from "react";
import Rocket from "../../public/images/rocket.png";
import Shield from "../../public/images/shield.png";
import Block from "../../public/images/block.png";
import Blocker from "../../public/images/blocker.png";
import BenefitCard from "../../public/images/benefit-card.png";
import Image from "next/image";

import Safari from "../../public/images/safari.png";
import Firefox from "../../public/images/firefox.png";
import Chrome from "../../public/images/chrome.png";
import ChromeBlack from "../../public/images/chrome-black.png";
import Edge from "../../public/images/edge.png";
import Link from "next/link";

function Benefits() {
  return (
    <div className="lg:px-16 pb-24 px-2 bg-white text-[#2B3056]">
      <div className="lg:px-24 text-center justify-between items-center">
        <p className="text-3xl font-semibold lg:pt-20 pt-8 pb-4 capitalize opacity-90">
          Benefits of Adproof
        </p>
        <p className="text-base lg:px-60 px-4 pb-4 opacity-70">
          When Adproof comes on, ads go off. Enjoy fast internet and apps
          without pop-ups and banners!
        </p>
        {/* ############################# */}
        <div className="lg:hidden">
          <hr className="w-full" />
          <div className="pt-8 w-full">
            <div className="px-8">
              <Link href="#">
                <div className="flex text-sm text-blue-950">
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
            <div className="flex gap-2 text-sm items-center pt-4 px-4 pb-8">
              <p className="pl-4 opacity-60">Avalaible</p>
              <Image src={Chrome.src} alt={"Chrome"} height={40} width={40} />
              <Image src={Firefox.src} alt={""} height={40} width={40} />
              <Image src={Safari.src} alt={""} height={40} width={40} />
              <Image src={Edge.src} alt={""} height={40} width={40} />
            </div>{" "}
            <hr className="w-full" />
          </div>
        </div>
        {/* ############################# */}
      </div>
      <div className="lg:px-1 px-8 pt-8 lg:grid lg:grid-cols-4">
        <div className="flex items-center pt-20">
          <div className="pb-4 z-10">
            <div>
              <Image src={Blocker.src} alt={""} width={70} height={70} />
            </div>
            <div className="pt-2 pb-4 text-1xl font-semibold capitalize w-4/5">
              Block intrusive and annoying ads
            </div>
            <p className="text-sm opacity-70 w-3/5">
              No more interruptions from unwanted ads
            </p>
          </div>
          <div className="absolute pb-8 pl-36">
            <Image src={BenefitCard.src} alt={""} width={140} height={125} />
          </div>
        </div>

        <div className="flex items-center pt-20">
          <div className="pb-4 z-10">
            <div>
              <Image src={Shield.src} alt={""} width={70} height={70} />
            </div>
            <div className="font-semibold pt-2 pb-2 text-base capitalize w-3/5">
              Enhanced online privacy protection
            </div>
            <p className="text-sm opacity-70 w-3/5">
              Keep your online activity safe and secure{" "}
            </p>
          </div>
          <div className="absolute pb-8 pl-36">
            <Image src={BenefitCard.src} alt={""} width={140} height={125} />
          </div>
        </div>

        <div className="flex items-center pt-20">
          <div className="pb-4 z-10">
            <div>
              <Image src={Block.src} alt={""} width={70} height={70} />
            </div>
            <div className="font-semibold pt-2 pb-2 text-base capitalize w-1/2">
              Block malware and phishing
            </div>
            <p className="text-sm opacity-70 w-3/5">
              Stay protected from harmful software and phishing attempts{" "}
            </p>
          </div>
          <div className="absolute pb-8 pl-36">
            <Image src={BenefitCard.src} alt={""} width={140} height={125} />
          </div>
        </div>

        <div className="flex items-center pt-20">
          <div className="pb-4 z-10">
            <div>
              <Image src={Rocket.src} alt={""} width={70} height={70} />
            </div>
            <div className="font-semibold pt-2 pb-2 text-base capitalize lg:w-4/5 w-3/5">
              Improve browsing performance{" "}
            </div>
            <p className="text-sm opacity-70 w-3/5">
              Speed up your browsing experience and reduce page loading times{" "}
            </p>
          </div>
          <div className="absolute pb-8 pl-36">
            <Image src={BenefitCard.src} alt={""} width={140} height={125} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
