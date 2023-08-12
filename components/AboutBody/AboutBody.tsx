import React from "react";
import Image from "next/image";

import YellowCircle from "../../public/images/yellow-circle.png";

function AboutBody() {
  return (
    <div className="lg:px-16 pb-24 px-2 bg-white text-[#2B3056]">
      <br />
      <br />
      <div className="lg:px-24 py-16 custom-img h-[430px] bg-no-repeat justify-between items-center" />

      <div className="lg:px-32 text-3xl text-center font-semibold lg:pt-20 pt-8 pb-4 leading-10">
        Revolutionize your online journey with Adproof! Bid farewell to annoying
        pop-ups, banners, and intrusive ads. Enjoy a faster, smoother, and more
        secure web with us.
        <br />
        <br />
        <hr />
      </div>
      <div className="lg:px-24 text-4xl font-semibold py-16 text-center justify-between items-center">
        What sets Adproof apart?
      </div>
      <div className="lg:grid lg:grid-cols-3 pb-8">
        <div className=" flex">
          <div className="p-2 w-1/5">
            <Image src={YellowCircle.src} height={25} width={25} alt={""} />
          </div>
          <div className=" text-1xl w-4/5">
            <p className="font-semibold leading-10">Ad-Free Browsing: </p>
            <p className="opacity-70 text-base">
              Say goodbye to pesky ads and focus on what matters.
            </p>
          </div>
        </div>

        <div className=" flex">
          <div className="p-2 w-1/5">
            <Image src={YellowCircle.src} height={25} width={25} alt={""} />
          </div>
          <div className=" text-1xl w-4/5">
            <p className="font-semibold leading-10">Enhanced Security:</p>
            <p className="opacity-70 text-base">
              Stay protected from malware and phishing attempts.
            </p>
          </div>
        </div>

        <div className=" flex">
          <div className="p-2 w-1/5">
            <Image src={YellowCircle.src} height={25} width={25} alt={""} />
          </div>
          <div className=" text-1xl w-4/5">
            <p className="font-semibold leading-10">Easy to Use: </p>
            <p className="opacity-70 text-base">
              Hassle-free setup for effortless browsing.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="lg:grid lg:grid-cols-3 pt-8">
        <div className=" flex">
          <div className="p-2 w-1/5">
            <Image src={YellowCircle.src} height={25} width={25} alt={""} />
          </div>
          <div className=" text-1xl w-4/5">
            <p className="font-semibold leading-10">Block Intrusive Ads: </p>
            <p className="opacity-70 text-base">
              Preserve your privacy and enjoy a clean browsing experience.
            </p>
          </div>
        </div>

        <div className=" flex">
          <div className="p-2 w-1/5">
            <Image src={YellowCircle.src} height={25} width={25} alt={""} />
          </div>
          <div className=" text-1xl w-4/5">
            <p className="font-semibold leading-10">Antivirus Protection: </p>
            <p className="opacity-70 text-base">
              Safeguard your device from malicious software.
            </p>
          </div>
        </div>

        <div className=" flex">
          <div className="p-2 w-1/5">
            <Image src={YellowCircle.src} height={25} width={25} alt={""} />
          </div>
          <div className=" text-1xl w-4/5">
            <p className="font-semibold leading-10">VPN Services: </p>
            <p className="opacity-70 text-base">
              Browse the internet anonymously and securely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBody;
