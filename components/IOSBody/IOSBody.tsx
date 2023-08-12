"use client";
import Link from "next/link";
import IOSImage from "../../public/images/ios-phone.png";
import Image from "next/image";
import { TfiImport } from "react-icons/tfi";
import YellowCircle from "../../public/images/yellow-circle.png";

const IOSBody = () => {
  return (
    <div className="bg-white">
      <div className="lg:px-24 lg:flex px-4 lg:py-16 py-4 text-[#05213A] bg-white font-semibold">
        <div className="pr-8 lg:w-2/5">
          <Image src={IOSImage.src} height={500} width={500} alt={""} />
        </div>
        <div className="lg:w-3/5 text-2xl font-semibold leading-10">
          <p className="pb-8">
            Surf Smoother with Adproof: The Ultimate iOS Safari Adblocker! Enjoy
            seamless and hassle-free browisng on Safari with our cutting-edge
            Ad-blocker solution.
          </p>
          <hr className="w-full" />
          <p className="py-8">
            On your IOS device, block obtrusive ads such as pop-ups, videos that
            automatically play, and audio ads from appearing on Facebook and
            YouTube.
          </p>
          <Link href="#">
            <div className="flex text-sm">
              <div
                className={`text-sm bg-[#FFB027] border-gray-500 px-6 py-2 transition ease-in duration-200 rounded-l-full focus:outline-none justify-center items-center flex`}
              >
                Download for iOS &nbsp; &nbsp;
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
        <div className="lg:px-72 lg:py-16 py-4 text-3xl leading-[45px] font-semibold opacity-80 text-center capitalize">
          Discover our features to enjoy effortless browsing.
        </div>
        <div className="lg:grid lg:grid-cols-2 pb-16">
          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className="text-1xl w-5/6">
              <p className="font-semibold leading-10">Block ads in Safari</p>
              <p className="opacity-70 text-base">
                Filters in the Adproof app are tuned particularly for Safari to
                provide the best possible filtration. There are more than 50
                filters available, including Adproof's own filters and those on
                other well-liked lists.
              </p>
            </div>
          </div>

          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className="text-1xl w-5/6">
              <p className="font-semibold leading-10">Privacy protection</p>
              <p className="opacity-70 text-base">
                Adproof fights against all trackers and analytical systems that
                monitor your online activity. It compiles regulations against
                every known internet analytics attempt to steal your personal
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 lg:px-24 px-4 lg:py-16 py-4">
        <div className="lg:grid lg:grid-cols-2">
          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className="text-1xl w-5/6">
              <p className="font-semibold leading-10">
                Block anything on the page
              </p>
              <p className="opacity-70 text-base">
                You can manually block any element you don't like right from
                Safari using the built-in action extension. It provides quick
                access to additional options like reporting a missed
                advertisement or adding a page to the allowlist.
              </p>
            </div>
          </div>

          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className="text-1xl w-5/6">
              <p className="font-semibold leading-10">Flexible customization</p>
              <p className="opacity-70 text-base">
                In addition to having a variety of filters to pick from, you can
                use the User rules module to define your own rules. These rules
                can be as simple as allowing a website to be listed or as
                extensive and sophisticated as you like.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-24 px-4 bg-gray-100">
        <hr />
      </div>
      <div className="bg-gray-100 lg:px-24 px-4 lg:py-16 py-4">
        <div className="lg:grid lg:grid-cols-2">
          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className="text-1xl w-5/6">
              <p className="font-semibold leading-10">Family protection</p>
              <p className="opacity-70 text-base">
                Many DNS service providers have unique profiles that will
                protect your children from offensive online stuff.
              </p>
            </div>
          </div>

          <div className=" flex">
            <div className="p-2 w-1/6">
              <Image src={YellowCircle.src} height={25} width={25} alt={""} />
            </div>
            <div className="text-1xl w-5/6">
              <p className="font-semibold leading-10">Custom DNS settings </p>
              <p className="opacity-70 text-base">
                Unsatisfied with the pre-set options? You can add as many of
                your personal DNS settings as you like.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IOSBody;
