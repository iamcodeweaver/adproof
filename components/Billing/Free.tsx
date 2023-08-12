import Image from "next/image";
import React from "react";
import CircleChecked from "../../public/images/circle-checked.jpeg";

const Free = () => {
  return (
    <div className="text-xs border border-t-0 border-b-0 hover:border-t-4 hover:border-t-pink-400 transition ease-in duration-200 px-4">
      <p className="text-sm font-semibold py-4">Free</p>
      <p className="opacity-50">
        Enjoy unlimited access with our free browsing features.
      </p>
      <p className="py-8">
        <span className="font-semibold text-base">$0/</span> Billed annual
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
          Adblocking
        </li>{" "}
        <li className="pb-3 flex items-center">
          <Image
            className="pr-2"
            src={CircleChecked.src}
            alt={""}
            width={25}
            height={25}
          />
          Pop-Up blocker
        </li>{" "}
        <li className="pb-3 flex items-center">
          <Image
            className="pr-2"
            src={CircleChecked.src}
            alt={""}
            width={25}
            height={25}
          />
          Language
        </li>{" "}
      </ul>
    </div>
  );
};

export default Free;
