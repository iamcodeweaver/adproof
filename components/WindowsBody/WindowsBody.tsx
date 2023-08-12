"use client";
import Link from "next/link";
import WindowsImage from "../../public/images/windows.png";
import Image from "next/image";
import { TfiImport } from "react-icons/tfi";
import YellowCircle from "../../public/images/yellow-circle.png";

const WindowsBody = () => {
  return (
    <div className="bg-white">
      <div className="lg:px-24 lg:flex px-4 lg:py-16 py-4 text-[#05213A] bg-white font-semibold">
        <div className="pr-8 lg:w-2/5">
          <Image src={WindowsImage.src} height={500} width={500} alt={""} />
        </div>
        <div className="lg:w-3/5 text-2xl font-semibold leading-10">
          <p className="pb-8">
            Tired of getting annoying pop-ups that interferes with your browsing
            experience? Adproof for windows is an exceptional software that
            enables users to enjoy their web experience.
          </p>
          <hr className="w-full" />
          <p className="py-4">
            It also provides users with features that helps you enjoy a
            smoother, ad-free web experience while maintaining control over the
            content.
          </p>
          <Link href="#">
            <div className="flex text-sm">
              <div
                className={`text-sm bg-[#FFB027] border-gray-500 px-6 py-2 transition ease-in duration-200 rounded-l-full focus:outline-none justify-center items-center flex`}
              >
                Download for Windows &nbsp; &nbsp;
              </div>
              <div className="rounded-r-3xl text-center bg-[#FFB027] border-l-[0.07rem] border-gray-500 p-4 w-12">
                <TfiImport />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="bg-white lg:px-24 px-4">
        <hr className="w-full" />
        <div className="lg:px-72 px-4 lg:py-16 py-4 text-3xl leading-[45px] font-semibold opacity-80 text-center capitalize">
          Explore Our Ranges of features to experience seamless browsing
        </div>
        <div className="lg:grid lg:grid-cols-2 pb-16">
          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className=" text-1xl w-5/6">
              <p className="font-semibold leading-10">Ad blocking</p>
              <p className="opacity-70 text-base">
                Any type of ad is blocked by the Adproof ad filter. All types of
                adverts, including pop-ups, banners, and video ads, will
                disappear. You will only view clear pages with the content you
                came for due to undetectable background filtering and cosmetic
                processing.
              </p>
            </div>
          </div>

          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className=" text-1xl w-5/6">
              <p className="font-semibold leading-10">Safe web surfing</p>
              <p className="opacity-70 text-base">
                Protection against phishing, dangerous websites, and malicious
                advertising (malicious ads). Every page is checked by Adproof
                against our database for malicious content, and requests from
                potentially risky sites are blocked.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 lg:px-24 px-4 py-16">
        <div className="lg:grid lg:grid-cols-2">
          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className=" text-1xl w-5/6">
              <p className="font-semibold leading-10">Privacy protection</p>
              <p className="opacity-70 text-base">
                Adproof prevents all tracking software and investigative tools
                that snoop on you. The program offers a plethora of other
                capabilities to safeguard your personal data, including the
                ability to disable third-party cookies and mask your IP address.
              </p>
            </div>
          </div>

          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className=" text-1xl w-5/6">
              <p className="font-semibold leading-10">Parental control</p>
              <p className="opacity-70 text-base">
                Adproof guards your kids' internet safety. It restricts access
                to inappropriate websites, filters out pornographic content from
                search results, and gives parents a configurable blocklist so
                they may create the safest possible online environment for their
                children.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-24 px-4 bg-gray-100">
        <hr />
      </div>
      <div className="bg-gray-100 lg:px-24 px-4 py-16">
        <div className="lg:grid lg:grid-cols-2">
          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className=" text-1xl w-5/6">
              <p className="font-semibold leading-10">Block browser API</p>
              <p className="opacity-70 text-base">
                When it comes to protecting your privacy, your browser can
                occasionally monitor you and reveal your IP address. Keep it
                from doing that.
              </p>
            </div>
          </div>

          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className=" text-1xl w-5/6">
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

export default WindowsBody;
