import Image from "next/image";

import { poppins, spicyRice } from "@/lib/fonts";

const FightAgainstGreed = () => {
  return (
    <div className="w-full pt-10 pb-10 mt-24 bg-[#FFD49C] flex flex-col items-center">
      <h1
        className={`lg:text-[3rem] text-[1.5rem] text-center ${spicyRice.className}`}
      >
        Your Weapon in the Fight Against Greed
      </h1>

      <div className="mx-auto w-[90%]  flex flex-col lg:flex-row items-center justify-between lg:mt-10">
        <div className="relative lg:w-[40%] flex items-center justify-center w-[100%] h-[300px] lg:h-[500px]">
          <Image src="/Group 48095937.svg" fill alt="logo" />
          <h2
            className={`absolute   text-center  lg:text-[1.2rem] font-semibold ${poppins.className} lg:leading-[50px]`}
          >
            The Immortal Devil may have his Thiefs, but you have the power of
            taps! Join the battle on Telegram through our Tap 2 Earn game.
          </h2>
        </div>
        <div className="relative lg:w-[60%] w-[90%] h-[250px] lg:h-[700px]">
          <Image src="/4 851118.svg" fill alt="logo" />
        </div>
      </div>
      <div className="mt-16">
        <h1
          className={`lg:text-[3rem] text-[1.5rem] text-center font-black ${poppins.className}`}
        >
          Here&apos;s how it works:
        </h1>
      </div>

      <div className="flex flex-col items-center w-full mx-auto gap-0 lg:gap-10 lg:mt-20 ">
        <div className="relative w-[95%] lg:w-full h-[200px] lg:h-[350px]">
          <Image src="/Group 48095929.svg" fill alt="logo" />
          <div className="absolute top-0 lg:top-0 lg:left-[18%]  inset-0 flex items-center ">
            <h2
              className={`lg:text-[2rem] text-center lg:text-left w-full lg:w-[60%] font-semibold ${poppins.className} lg:leading-[50px] mb-4 lg:mb-0`}
            >
              Tap to mine $GULULU tokens and strengthen your role in Gululand.
            </h2>
            <div className="lg:w-[200px] h-20 w-20 lg:h-[200px] relative">
              <Image src="/greed/phone.svg" alt="" fill />
            </div>
          </div>
        </div>
        <div className="relative w-[95%] lg:w-full h-[200px] lg:h-[350px]">
          <Image src="/greed/2nd-card.svg" fill alt="logo" />
          <div className="absolute top-3 left-1 lg:top-0 lg:left-[18%]  inset-0 flex items-center ">
            <h2
              className={`lg:text-[2rem] text-center lg:text-left w-full lg:w-[60%] font-semibold ${poppins.className} lg:leading-[50px] mb-4 lg:mb-0`}
            >
              The more you tap, the more you earn— no complex tasks, just pure
              determination!
            </h2>
            <div className="lg:w-[200px] h-20 w-20 lg:h-[200px] relative">
              <Image src="/greed/Coin2.svg" alt="" fill />
            </div>
          </div>
        </div>
        <div className="relative w-[95%] lg:w-full h-[200px] lg:h-[350px]">
          <Image src="/greed/3rd-card.svg" fill alt="logo" />
          <div className="absolute top-1 left-1 lg:top-0 lg:left-[18%]  inset-0 flex items-center ">
            <h2
              className={`lg:text-[2rem] text-center lg:text-left w-full lg:w-[60%] font-semibold ${poppins.className} lg:leading-[50px] mb-4 lg:mb-0`}
            >
              Unlock powerful boosts with the GULULU Pass to maximize your
              rewards and secure your place as a defender of the Vault.{" "}
            </h2>
            <div className="lg:w-[200px] h-20 w-20 lg:h-[200px] relative">
              <Image src="/greed/sheild.svg" alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FightAgainstGreed;
