import Image from "next/image";
import { poppins, racingSans, spicyRice } from "@/lib/fonts";
import { Star } from "lucide-react";

const VictorySection = () => {
  return (
    <div className="flex relative flex-col items-center gap-10 md:px-14 px-2 mt-20">
      <Image
        src="/victory/5 7.svg"
        width={500}
        height={500}
        alt="logo"
        className="absolute hidden lg:block left-0 top-[10%]"
      />

      <h1
        className={`lg:text-[3rem] text-[1.5rem] ${spicyRice.className} w-full text-center`}
      >
        Your Gateway to Victory
      </h1>

      <div className="bg-orange-light  flex flex-col lg:items-end w-full lg:py-10 ">
        <div className="flex flex-col lg:flex-row justify-end gap-5 items-center">
          <div className="lg:h-[700px] flex w-[450px] shadow-[-6px_6px_0px_#000000] border-2 border-black bg-[#F6E8D4]">
            <div className="w-[20%] border-r-2 h-full border-black flex items-center justify-center">
              <h1
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "mixed",
                }}
                className={`${poppins.className} font-bold text-[3rem]`}
              >
                Silver Pass
              </h1>
            </div>
            <div className="flex w-full flex-col justify-between">
              <div
                className={`flex-1 text-[1.6rem] flex flex-col justify-center ml-4 space-y-4 ${poppins.className}`}
              >
                <p>✔️ Access to the exclusive trading group.</p>
                <p>✔️ Unlock standard in game skins</p>
                <p>✔️ Boost your rewards by 10% per tap</p>
              </div>
              <div
                className={` w-full border-t-2 border-black flex flex-col   items-end justify-end p-4 ${spicyRice.className} `}
              >
                <p className={`text-[2rem] `}>Price: 9.99</p>
                <button className="text-[2rem] hover:scale-105 transition-all duration-300 ease-in-out border-2 border-black px-4 rounded-2xl shadow-[6px_6px_0px_#000000]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="lg:h-[700px] w-[450px] flex shadow-[-6px_6px_0px_#000000] border-2 border-black bg-[#FFB100] mr-4">
            <div className="w-[20%] border-r-2 h-full border-black flex items-center justify-center">
              <h1
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "mixed",
                }}
                className={`${poppins.className} font-bold text-[3rem]`}
              >
                Gold Pass
              </h1>
            </div>
            <div className="flex w-full flex-col justify-between">
              <div
                className={`flex-1 text-[1.6rem]  flex flex-col justify-center ml-4 space-y-4 ${poppins.className}`}
              >
                <p>✔️ Includes all Silver Pass perks.</p>
                <p>✔️ Premium skins for ultimate customization.</p>

                <p>✔️ Supercharge rewards by 25% per tap.</p>
                <p>✔️ Access to token private sales and exclusive events.</p>
                <p>✔️ Advanced trading bots to dominate the market.</p>
              </div>
              <div
                className={` w-full border-t-2 border-black flex flex-col   items-end justify-end p-4 ${spicyRice.className} `}
              >
                <p className={`text-[2rem] `}>Price: 15.99</p>
                <button className="text-[2rem] hover:scale-105 transition-all duration-300 ease-in-out border-2 border-black px-4 rounded-2xl shadow-[6px_6px_0px_#000000]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`bg-[#FBAC82] flex items-center justify-around mt-5 text-[1.8rem] lg:w-[500px] lg:mr-40 py-2 rounded-2xl text-center ${racingSans.className}`}
        >
          <Star />
          <span>LIMITED TIME OFFER</span>
          <Star />
        </div>
      </div>
    </div>
  );
};

export default VictorySection;
