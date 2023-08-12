"use client";
import Link from "next/link";
import MacImage from "../../public/images/macbook.png";
import Image from "next/image";
import { TfiImport } from "react-icons/tfi";
import YellowCircle from "../../public/images/yellow-circle.png";

const MacBody = () => {
  return (
    <div className="bg-white">
      <div className="lg:px-24 lg:flex px-4 lg:py-16 py-4 text-[#05213A] bg-white font-semibold">
        <div className="lg:pr-8 lg:w-2/5">
          <Image src={MacImage.src} height={500} width={500} alt={""} />
        </div>
        <div className="lg:w-3/5 text-2xl font-semibold leading-10">
          <p className="pb-8">
            Stop annoying ads from ruining your browsing experience and
            safeguard your privacy with our cutting-edge ad-blocking software!
          </p>
          <hr className="w-full" />
          <p className="py-4">
            Adproof offers ad-blocking experience for Mac users that provides
            comprehensive ad-blocking capabilities and even, ensuring enhanced
            privacy protection throughout the process.
          </p>
          <Link href="#">
            <div className="flex text-sm">
              <div
                className={`text-sm bg-[#FFB027] border-gray-500 px-6 py-2 transition ease-in duration-200 rounded-l-full focus:outline-none justify-center items-center flex`}
              >
                Download for Mac &nbsp; &nbsp;
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
            <div className="p-2 pr-4 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className="text-1xl w-5/6">
              <p className="font-semibold leading-10">Efficient ad blocking </p>
              <p className="opacity-70 text-base">
                <span className="font-semibold">
                  How can I remove advertising from my Mac?
                </span>
                <br />
                The solution is an adblocker like Adproof. Pop-up windows, video
                ads, banners, and other advertising will all disappear. You will
                only view clear pages with the material you requested due to
                indiscernible background filtering and aesthetic processing.
              </p>
            </div>
          </div>

          <div className=" flex">
            <div className="p-2 pr-4 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className="text-1xl w-5/6">
              <p className="font-semibold leading-10">Safe web surfing</p>
              <p className="opacity-70 text-base">
                Malware is significantly less likely to affect Mac computers,
                but it would be foolish to disregard potential risks. Adproof
                will shield you from the numerous phishing and fraudulent
                websites that are still available online.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 lg:px-24 lg:py-16 py-4">
        <div className="lg:grid lg:grid-cols-2">
          <div className=" flex">
            <div className="p-2 pr-4 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className="text-1xl w-5/6">
              <p className="font-semibold leading-10">Privacy protection</p>
              <p className="opacity-70 text-base">
                Thanks to a unique filter called Tracking Protection, created by
                the Adproof team, Adproof fights against all trackers and
                analytical systems that monitor your online activity.{" "}
              </p>
            </div>
          </div>

          <div className=" flex">
            <div className="p-2 pr-4 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className="text-1xl w-5/6">
              <p className="font-semibold leading-10">Filtering inside apps </p>
              <p className="opacity-70 text-base">
                There are many outstanding apps out there that just can't help
                but keep displaying adverts to you. By providing a choice to
                filter traffic from any app installed on your Mac, Adproof
                enables you to enjoy the best of both worlds.
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
            <div className="p-2 pr-4 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className="text-1xl w-5/6">
              <p className="font-semibold leading-10">Don't waste your time</p>
              <p className="opacity-70 text-base">
                Not only are video advertisements annoying, but they also take
                up time. You can discover a better way to spend it with AdGuard.{" "}
              </p>
            </div>
          </div>

          <div className=" flex">
            <div className="p-2 pr-4 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className="text-1xl w-5/6">
              <p className="font-semibold leading-10">No ads on YouTube</p>
              <p className="opacity-70 text-base">
                You probably enjoy viewing YouTube, but you probably detest
                commercials. similarly for us! Thankfully, the ad blocker for
                PCs Adproof does not create an exception for video ads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBody;
