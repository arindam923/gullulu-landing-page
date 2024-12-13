"use client";
import { racingSans } from "@/lib/fonts";
import { Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full lg:mt-10 mt-4 lg:px-12 px-3">
      <div className="mx-auto bg-[#FFB100] w-full lg:px-10 px-4 flex justify-between lg:py-2 py-1 items-center lg:border-[5px] border-[3px] border-black lg:rounded-3xl rounded-xl relative z-20">
        <div className="lg:h-[30px] h-[15px] absolute lg:left-[-25px] left-[-12.5px]">
          <Image
            src="/navbar/fixedIcon.png"
            width={500}
            height={500}
            alt="logo"
            className="w-auto h-full"
          />
        </div>
        <div className="lg:h-[30px] h-[15px] absolute lg:right-[-25px] right-[-12.5px]">
          <Image
            src="/navbar/fixedIcon.png"
            width={500}
            height={500}
            alt="logo"
            className="w-auto h-full"
          />
        </div>
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
        <div className="flex items-center gap-4">
          <Link
            href="https://x.com/gululucoin"
            target="_blank"
            className="lg:h-[60px] h-[25px] hidden md:block"
          >
            <div className="h-12 w-12 shadow-lg bg-[#FFDDBA] rounded-md grid place-items-center">
              <Image
                src={"/gurdian/Twitter-Logо.svg"}
                width={30}
                height={30}
                alt=""
              />
            </div>
          </Link>
          <Link
            href={"https://t.me/gululucoin"}
            className="lg:h-[60px] h-[25px] hidden md:block"
          >
            <div className="h-12 w-12 shadow-lg bg-[#FFDDBA] rounded-md grid place-items-center">
              <Image src={"/gurdian/87413.svg"} width={30} height={30} alt="" />
            </div>
          </Link>
          <Link href="https://t.me/GululuTapBot" className="w-full md:w-auto">
            <button
              className={`w-full md:w-auto lg:h-[60px] h-[40px] shadow-lg border-2 border-black flex items-center justify-center gap-2 bg-[#FFDDBA] px-4 py-2 rounded-lg ${racingSans.className}`}
            >
              <Wallet className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-sm md:text-base">Connect Wallet</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
