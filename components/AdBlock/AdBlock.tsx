"use client";

import Link from "next/link";
import React from "react";
import { TfiImport } from "react-icons/tfi";

function AdBlock() {
  return (
    <div className="w-full lg:flex gap-2 items-center text-black bg-[#FFB027] lg:pl-24 pl-4 py-16 lg:pr-24 pr-2 top-0">
      <div className="lg:w-3/5">
        <p className="text-2xl font-semibold pb-4 capitalize leading-10">
          If you demand the absolute best from your apps, choose Adproof adblock
          for Mac, as it will surely go beyond your expectations!
        </p>
      </div>
      <Link href="#">
        <div className="flex justify-end">
          <div
            className={`text-sm text-white bg-[#140033] border-r-2 border-r-gray-500 px-6 py-2 transition ease-in duration-200 rounded-l-full focus:outline-none justify-center items-center flex`}
          >
            Download for Mac &nbsp; &nbsp;
          </div>
          <div className="text-white rounded-r-full text-center bg-[#140033] p-4 w-12">
            <TfiImport />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AdBlock;
