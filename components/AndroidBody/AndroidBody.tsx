"use client";
import Link from "next/link";
import AndroidImage from "../../public/images/android-image.png";
import Image from "next/image";
import { TfiImport } from "react-icons/tfi";
import YellowCircle from "../../public/images/yellow-circle.png";

const AndroidBody = () => {
  return (
    <div className="bg-white">
      <div className="lg:px-24 lg:flex px-4 py-16 text-[#05213A] bg-white font-semibold">
        <div className="pr-8 lg:w-2/5">
          <Image src={AndroidImage.src} height={500} width={500} alt={""} />
        </div>
        <div className="lg:w-3/5 text-2xl font-semibold leading-10">
          <p className="pb-8">
            Take control of your online world today and embrace the ad-free
            freedom you deserve with Adproof.
          </p>
          <hr className="w-full" />
          <p className="py-8">
            Our Android application provides users with hassle-free solutions
            that improves browsing experience.
          </p>
          <Link href="#">
            <div className="flex text-sm">
              <div
                className={`text-sm bg-[#FFB027] border-gray-500 px-6 py-2 transition ease-in duration-200 rounded-l-full focus:outline-none justify-center items-center flex`}
              >
                Download for Android &nbsp; &nbsp;
              </div>
              <div className="rounded-r-3xl text-center bg-[#FFB027] border-l-[0.07rem] border-gray-500 p-4 w-12">
                <TfiImport />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-white lg:px-24">
        <hr className="w-full" />
        <div className="lg:px-72 px-4 lg:py-16 py-4 text-3xl leading-[45px] font-semibold opacity-80 text-center capitalize">
          Discover our features to enjoy effortless browsing.
        </div>
        <div className="lg:grid lg:grid-cols-2 pb-16">
          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className=" text-1xl w-5/6">
              <p className="font-semibold leading-10">Blocks ads everywhere</p>
              <p className="opacity-70 text-base">
                Everything of the system is blocked. Ads in your preferred apps,
                browsers, games, and any website you can think of are included
                in this, as are video advertising. You have access to dozens of
                ad filters, and they are updated frequently to ensure the
                highest possible filtering performance.
              </p>
            </div>
          </div>

          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className=" text-1xl w-5/6">
              <p className="font-semibold leading-10">
                Takes privacy seriously
              </p>
              <p className="opacity-70 text-base">
                Our first goal is safeguarding your personal information. With
                Adproof, you and your private information will be protected
                against internet trackers and analytics programs that might try
                to steal your information while you browse the web.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 lg:px-24 py-16">
        <div className="lg:grid lg:grid-cols-2">
          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className=" text-1xl w-5/6">
              <p className="font-semibold leading-10">See the content</p>
              <p className="opacity-70 text-base">
                You just cannot allow banner advertisements to take over the
                valuable real estate on mobile device screens, which are already
                quite small.
              </p>
            </div>
          </div>

          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className=" text-1xl w-5/6">
              <p className="font-semibold leading-10">Customize filtering</p>
              <p className="opacity-70 text-base">
                Don't want a certain browser or app to be blocked for whatever
                reason? No issue; just press once to remove it from the
                screening.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-24 bg-gray-100">
        <hr />
      </div>
      <div className="bg-gray-100 lg:px-24 lg:py-16">
        <div className="lg:grid lg:grid-cols-2">
          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className=" text-1xl w-5/6">
              <p className="font-semibold leading-10">Saves your traffic</p>
              <p className="opacity-70 text-base">
                Since more advertising are being filtered, fewer of them load.
                Less loading of advertisements saves more traffic.
              </p>
            </div>
          </div>

          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className=" text-1xl w-5/6">
              <p className="font-semibold leading-10">You stay in control</p>
              <p className="opacity-70 text-base">
                You control what is filtered and what is not since it is your
                device. You can adjust a wide range of settings, from basic to
                "pro," as well as an Apps Management tool, to suit your
                preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidBody;
