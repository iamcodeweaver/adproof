import React from "react";
import Free from "./Free";
import Standard from "./Standard";
import Premium from "./Premium";

const Billing = () => {
  return (
    <div className="md:px-24 px-4 bg-white text-black">
      <div className="text-xs flex py-12 items-center justify-center">
        <div className="grid grid-cols- ">
          <div className="row-span-full col-start-1 col-span-5 py-3 px-12 self-center border border-black rounded-full border-r-0 ">
            Monthly Billing
          </div>
          <div className="row-span-full col-span-6 col-end-11 self-center py-3 border border-l-0 px-12 rounded-full text-white bg-pink-500 ">
            Annual Billing
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-3">
        <div className="pb-8">
          <Free />
        </div>
        <div className="pb-8">
          <Standard />
        </div>
        <div className="pb-8">
          <Premium />
        </div>
      </div>
    </div>
  );
};

export default Billing;
