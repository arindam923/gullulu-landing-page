import { spicyRice } from "@/lib/fonts";
import Image from "next/image";
import { Questions } from "../ui/Questions";

const FaqSections = () => {
  return (
    <div className="flex flex-col items-center gap-10 lg:px-14 px-2 mt-20 w-full">
      <div
        className={`lg:text-6xl text-2xl ${spicyRice.className} w-full text-center`}
      >
        Frequently Asked Questions
      </div>

      <div className="bg-orange-light h-full flex flex-col lg:flex-row gap-4 items-center rounded-3xl lg:py-24 lg:px-10 px-2 py-8">
        <div className="lg:w-[30%] w-[50%] order-2 lg:order-1">
          <Image
            src={"/faq/7 9.svg"}
            width={500}
            height={500}
            alt="logo"
            className="w-full"
          />
        </div>
        <div className="lg:w-[70%] w-full order-1 lg:order-2">
          <Questions />
        </div>
      </div>
    </div>
  );
};

export default FaqSections;
