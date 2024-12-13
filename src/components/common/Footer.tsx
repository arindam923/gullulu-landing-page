"use client";

import { Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="p-[4vw] flex flex-col items-center text-black bg-[#FFDEB3] text-xs sm:text-base">
      <div className="w-full flex justify-between items-start">
        <div className="flex items-center gap-1">
          <div className="lg:w-[70px] lg:h-[70px] w-[30px] h-[30px]">
            <Image
              src="/navbar/paws.png"
              width={500}
              height={500}
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="lg:h-[30px] h-[12px]">
            <Image
              src="/navbar/logo.png"
              width={500}
              height={500}
              alt="logo"
              className="w-auto h-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-semibold">Contact us</div>
          <div className="flex items-center gap-1">
            <div className="text-2xl font-bold">
              {/* <CiMail /> */}
              <Mail />
            </div>
            <div>9Y9aK@example.com</div>
          </div>
        </div>
      </div>
      <div className="w-full text-center mt-10 font-semibold">
        Copyright © 2024 GULULU Templates
      </div>
      <div className="w-full h-[1px] bg-black mt-5"></div>
      <div className="flex items-center gap-2 mt-2 ">
        <div>All Rights Reserved</div>
        <div className="h-[15px] w-[1px] bg-black"></div>
        <a className="text-blue-600 underline" href="">
          Terms and Conditions
        </a>
        <div className="h-[15px] w-[1px] bg-black"></div>
        <a className="text-blue-600 underline" href="">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
