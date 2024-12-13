import Image from "next/image";

import { poppins, spicyRice } from "@/lib/fonts";

const TapRichSection = () => {
  return (
    <div className="w-full pt-10 relative pb-10 lg:mt-24 bg-[#FFC882] flex flex-col items-center">
      <h1 className={`lg:text-[3rem] text-[1.5rem] ${spicyRice.className}`}>
        Tap your way to Riches
      </h1>

      <Image
        src="/riches/rays.svg"
        className="z-0 absolute top-0 h-full w-full"
        fill
        alt="logo"
      />
      <Image
        src="/riches/3 1.png"
        className="z-10 relative"
        width={500}
        height={500}
        alt="logo"
      />
      <div className="w-full -bottom-5 lg:-top-16  h-[800px] lg:h-[1000px] relative">
        <Image
          src="/riches/BigBox.svg"
          fill
          alt=""
          className="hidden lg:block"
        />
        <div className="absolute top-[10%] lg:left-[19%]  mx-auto gap-5 h-full flex flex-col items-center ">
          <div className="bg-[#FFC67C] border-4 shadow-[10px_10px_0px_#000000] border-black w-[90%] lg:w-[850px] lg:h-[200px] flex items-center justify-between p-4 lg:p-8">
            <h2 className={`lg:text-[1.5rem] ${poppins.className}`}>
              <span className="font-bold">Earn $GULULU Tokens: </span>
              <br />
              Every tap brings you closer to greatness.
            </h2>
            <div className="relative lg:w-[200px] w-12 h-12 lg:h-[100px]">
              <Image src={"/riches/coin.svg"} alt="" fill />
            </div>
          </div>
          <div className="bg-[#FFC67C] border-4 shadow-[10px_10px_0px_#000000] border-black w-[90%] lg:w-[850px] lg:h-[200px] flex flex-row-reverse items-center justify-between p-4 lg:p-8">
            <h2 className={`lg:text-[1.5rem] ${poppins.className}`}>
              <span className="font-bold">Level Up the Fight: </span>
              <br />
              Use boosters from the GULULU Pass to tap faster and earn more.
            </h2>
            <div className="relative lg:w-[200px] w-12 h-12 lg:h-[100px]">
              <Image src={"/riches/box.svg"} alt="" fill />
            </div>
          </div>
          <div className="bg-[#FFC67C] border-4 shadow-[10px_10px_0px_#000000] border-black w-[90%] lg:w-[850px] lg:h-[200px] flex items-center justify-between p-4 lg:p-8">
            <h2 className={`lg:text-[1.5rem] ${poppins.className}`}>
              <span className="font-bold"> Join the Legacy:</span>
              <br />
              Each token you earn contributes to the defense of Gululand.
            </h2>
            <div className="relative lg:w-[200px] w-12 h-12 lg:h-[100px]">
              <Image src={"/riches/legacy.svg"} alt="" fill />
            </div>
          </div>
          <div className="bg-[#FFC67C] border-4 shadow-[10px_10px_0px_#000000] border-black w-[90%] lg:w-[850px] lg:h-[200px] flex flex-row-reverse items-center justify-between p-4 lg:p-8">
            <h2 className={`lg:text-[1.5rem] ${poppins.className}`}>
              <span className="font-bold"> Easy on Telegram: </span>
              <br />
              No extra apps—play directly in your favorite messaging app.
            </h2>
            <div className="relative lg:w-[200px] w-12 h-12 lg:h-[100px]">
              <Image src={"/riches/telegram.svg"} alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TapRichSection;
