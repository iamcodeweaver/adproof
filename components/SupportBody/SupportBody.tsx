import React from "react";
import Image from "next/image";
import PeoplePc from "../../public/images/people-pc.png";
import GetInTouch from "@/components/GetInTouch/GetInTouch";

const SupportBody = () => {
  return (
    <div className="lg:px-24 px-4 pb-8 bg-white text-[#05213A]">
      <div className="pt-2">
        <hr className="w-full" />
      </div>
      <div className="md:grid md:grid-cols-2 pt-8">
        <div className="">
          <Image
            src={PeoplePc.src}
            width={500}
            height={600}
            alt={"People PC"}
          />
        </div>
        <div className="lg:pl-0 pl-4" id="GetInTouch">
          <p className="text-4xl md:pt-0 pt-8 pb-4">Get In Touch</p>
          <p className="text-gray-400">
            If you have any inquiries regarding our products, feel free to reach
            out to us at &nbsp;
            <span className="text-pink-500 font-semibold">
              support@adproof.com
            </span>
            , and we will be happy to help you. You can expect a response within
            24 to 48 hours.
          </p>
          <GetInTouch />
        </div>
      </div>
    </div>
  );
};

export default SupportBody;
