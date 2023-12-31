"use client";
import React from "react";
import SuccessImg from "../../public/images/success.png";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const SuccessPage = () => {
  const router = useRouter();

  const params = useSearchParams();

  const suc = params.get("suc");

  if (suc !== "1axaW68594wxfGfrP_8sudjejhb8934hsdnsm") {
    router.push("/support#GetInTouch");
  }

  return (
    <div className="sm:p-32 p-6 text-sm flex h-screen justify-center items-center text-center bg-white text-black">
      <center>
        <Link href="/">
          <div className="h-[150px] cursor-pointer w-[150px] relative">
            <img src={SuccessImg.src} />
          </div>
        </Link>
        <div className="text-2xl font-semibold">Request has been submitted</div>
        <div>
          <br />
          <p className="opacity-60">
            Thank you for reaching out to us. We are pleased to inform you that
            your submission was successful, we understand the importance of your
            message, and we assure you that our team will carefully review and
            respond to it within the designated timeframe. <br />
            <br />
            Best regards,
            <br />
            <b>Adproof Team</b>
          </p>
          <br />
          <Link href="/">
            <img src={"/images/adproof-logo.png"} />
          </Link>
        </div>
      </center>
    </div>
  );
};

export default SuccessPage;
