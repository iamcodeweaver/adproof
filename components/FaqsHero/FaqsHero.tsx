import Link from "next/link";
import React from "react";

const FaqsHero = () => {
  return (
    <div className="md:px-24 px-4 bg-gray-200 text-black text-center">
      <div className="md:text-5xl text-3xl py-12">
        <p className="font-semibold pb-2">Frequently Asked</p>
        <p className="font-semibold text-yellow-500">Questions</p>
        <p className="text-gray-400 md:text-lg text-sm pt-4">
          Upgrade to Adproof to unlock exclusive features.
        </p>
      </div>
      <div className="">
        <hr className="w-full" />
      </div>
    </div>
  );
};

export default FaqsHero;
