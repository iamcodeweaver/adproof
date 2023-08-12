import Image from "next/image";
import React from "react";
import CircleChecked from "../../public/images/circle-checked.jpeg";

const Premium = () => {
  return (
    <div className="text-xs border border-t-0 border-b-0 hover:border-t-4 hover:border-t-pink-400 transition ease-in duration-200 px-4">
      <p className="text-sm font-semibold py-4">Premium</p>
      <p className="opacity-50">
        Enjoy unlimited access with our premium browsing features.
      </p>
      <p className="py-8">
        <span className="font-semibold text-base">$59/</span> Billed annual
      </p>
      <button className="rounded-full p-2 px-4 bg-[#FFB027] font-semibold">
        Start Now
      </button>
      <ul className="py-8 opacity-50">
        <li className="pb-3 flex items-center">
          <Image
            className="pr-2"
            src={CircleChecked.src}
            alt={""}
            width={25}
            height={25}
          />
          Adblocking
        </li>
        <li className="pb-3 flex items-center">
          <Image
            className="pr-2"
            src={CircleChecked.src}
            alt={""}
            width={25}
            height={25}
          />
          Acceptable Pop-ups
        </li>
        <li className="pb-3 flex items-center">
          <Image
            className="pr-2"
            src={CircleChecked.src}
            alt={""}
            width={25}
            height={25}
          />
          Social mmedia filter
        </li>
        <li className="pb-3 flex items-center">
          <Image
            className="pr-2"
            src={CircleChecked.src}
            alt={""}
            width={25}
            height={25}
          />
          Security-Malware
        </li>
        <li className="pb-3 flex items-center">
          <Image
            className="pr-2"
            src={CircleChecked.src}
            alt={""}
            width={25}
            height={25}
          />
          Whitelist
        </li>
        <li className="pb-3 flex items-center">
          <Image
            className="pr-2"
            src={CircleChecked.src}
            alt={""}
            width={25}
            height={25}
          />
          Antivirus
        </li>
        <li className="pb-3 flex items-center">
          <Image
            className="pr-2"
            src={CircleChecked.src}
            alt={""}
            width={25}
            height={25}
          />
          VPN
        </li>
      </ul>
    </div>
  );
};

export default Premium;
