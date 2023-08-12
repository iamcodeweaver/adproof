import React from "react";

const AboutHero = () => {
  return (
    <div className="md:px-24 bg-gray-200 text-black text-center">
      <div className="md:text-5xl text-3xl py-12">
        <p className="font-semibold pb-2">Welcome to </p>
        <p className="font-semibold">
          <span className="text-yellow-500">Adproof !</span>
        </p>
        <p className="text-gray-400 md:text-lg text-sm pt-4">
          Your Ultimate Adblocker for a Seamless Web Experience!
        </p>
      </div>
      <div className="">
        <hr className="w-full" />
      </div>
    </div>
  );
};

export default AboutHero;
