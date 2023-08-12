"use client";

import Link from "next/link";
import React from "react";
import { TfiImport } from "react-icons/tfi";

function AdTab() {
  return (
    <div className="w-full flex gap-2 items-center text-black bg-[#FFB027] lg:pl-24 pl-4 py-16 lg:pr-24 pr-2 top-0">
      <div className="w-3/5">
        <p className="text-2xl font-semibold pb-4 capitalize leading-10">
          Once you go with our app on your tablet or mobile phone, you'll never
          want to go back.
        </p>
      </div>
      <Link href="#">
        <div className="flex justify-end">
          <div
            className={`text-sm text-white bg-[#140033] border-r-2 border-r-gray-500 px-6 py-2 transition ease-in duration-200 rounded-l-full focus:outline-none justify-center items-center flex`}
          >
            Download for iOS &nbsp; &nbsp;
          </div>
          <div className="text-white rounded-r-full text-center bg-[#140033] p-4 w-12">
            <TfiImport />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AdTab;
