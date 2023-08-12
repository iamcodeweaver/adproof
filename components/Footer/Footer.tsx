import React from "react";
import Image from "next/image";
import Link from "next/link";
import AdProofLogo from "../../public/images/adproof-logo.png";
import Facebook from "../../public/images/facebook.png";
import Instagram from "../../public/images/instagram.png";
import Twitter from "../../public/images/twitter-0.png";

function Footer() {
  return (
    <div className="bg-white text-[#140033]">
      <div className="w-full lg:grid lg:grid-cols-2 gap-4 items-center lg:pl-24 pl-4 pt-8 pb-8 lg:pr-24 pr-4 top-0">
        <div className="">
          <p className="text-3xl font-semibold pb-8 capitalize">
            {" "}
            <Link href="/">
              <Image
                src={AdProofLogo.src}
                alt={"Adproof"}
                width={125}
                height={32}
              />
            </Link>
          </p>
          <p className="opacity-60 text-sm leading-8 lg:w-3/4">
            Adproof is in no way affiliated with any of the third-party brands
            or websites referenced on this page.
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div className="text-sm pt-0">
            <p className="font-semibold p-2">Company</p>
            <p className="opacity-60 p-2">
              <Link href="/support">Support</Link>
            </p>
            <p className="opacity-60 p-2">
              <Link href="/about-adproof">About Adproof</Link>
            </p>
          </div>
          <div className="text-sm pt-0">
            <p className="font-semibold p-2">Legal</p>
            <p className="opacity-60 p-2">
              <Link href="/terms-of-service">Terms of Service</Link>
            </p>
            <p className="opacity-60 p-2">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:px-24 px-4 justify-center items-center flex">
        <hr className="w-full" />
      </div>
      <div className="hidden lg:block grid grid-cols-2 px-24 text-sm opacity-70 pt-4 pb-4">
        <p>&copy; Adproof, All Rights Reserved.</p>
        <div className="justify-end items-center flex font-semibold gap-6">
          <p>
            <a
              href="https://www.facebook.com/profile.php?id=100095085885329"
              target="_blank"
            >
              <img src={Facebook.src} height={50} width={50} />
            </a>
          </p>
          <p>
            <a
              href="https://instagram.com/adprooofapp?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
            >
              <img src={Instagram.src} height={50} width={50} />
            </a>
          </p>
          <p>
            <a href="https://twitter.com/Adproofapp/" target="_blank">
              <img src={Twitter.src} height={30} width={30} />
            </a>
          </p>
        </div>
      </div>
      <div className="lg:hidden px-4 text-center text-sm opacity-70 pt-4 pb-4">
        <p>&copy; Adproof, All Rights Reserved.</p>
        <div className="pt-2 items-center justify-center text-center text-xs flex font-semibold gap-2">
          <p>
            <a
              href="https://www.facebook.com/profile.php?id=100095085885329"
              target="_blank"
            >
              <img src={Facebook.src} height={50} width={50} />
            </a>
          </p>
          <p>
            <a
              href="https://instagram.com/adprooofapp?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
            >
              <img src={Instagram.src} height={50} width={50} />
            </a>
          </p>
          <p>
            <a href="https://twitter.com/Adproofapp/" target="_blank">
              <img src={Twitter.src} height={30} width={30} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
