import Link from "next/link";
import React from "react";

const PricingHero = () => {
  return (
    <div className="md:px-24 bg-gray-200 text-black text-center">
      <div className="md:text-5xl text-3xl py-12">
        <p className="font-semibold pb-2">Unlock Adproof</p>
        <p className="font-semibold">
          <span className="text-yellow-500">Go Premium</span> features
        </p>
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

export default PricingHero;
