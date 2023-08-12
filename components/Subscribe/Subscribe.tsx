"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Subscribe() {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 gap-2 items-center text-black bg-[#FFB027] lg:pl-24 pl-4 pt-8 pb-8 lg:pr-24 pr-2 top-0">
      <div className="">
        <p className="lg:text-3xl text-2xl font-semibold pb-4 capitalize">
          Subscribe to Adproof news
        </p>
        <p className="opacity-60 text-sm leading-8 pr-16">
          Be the first to get the latest news about online privacy and ad
          blocking, Adproof product releases, upcoming sales, giveaways, and
          more.
        </p>
      </div>
      <div className="ml-auto">
        <div className="flex text-center text-white">
          <input
            className="focus:outline-none rounded-l-full border w-[250px] bg-[#140033] border-gray-700 bg-black-500 text-sm px-4 py-3 "
            type="text"
            placeholder="Enter your email address"
            name="email"
          />
          <div className="text-white rounded-r-full border font-bold h-full text-center bg-[#140033] border-gray-700 p-4 w-12">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
