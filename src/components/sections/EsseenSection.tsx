import { racingSans, spicyRice } from "@/lib/fonts";
import Image from "next/image";

const EssenceSection = () => {
  return (
    <div className="w-[90%]  mt-16 mx-auto p-10 rounded-xl flex flex-col lg:flex-row items-center bg-[#FFD49C]">
      <Image src="/2 1.png" width={400} height={400} alt="logo" />
      <div className="flex-1 relative shadow-[10px_10px_0px_#000000] bg-[#FFC67C] p-10 flex flex-col items-center justify-center h-[400px] border-4 border-black">
        <div className="h-[30px]  absolute top-10 left-[-25px]">
          <Image
            src="/navbar/fixedIcon.png"
            width={500}
            height={500}
            alt="logo"
            className="w-auto h-full"
          />
        </div>

        <div className="h-[30px]  absolute bottom-10 left-[-25px]">
          <Image
            src="/navbar/fixedIcon.png"
            fill
            alt="logo"
            className="w-auto h-full"
          />
        </div>

        <h3 className={`text-[2rem] leading-none`}>the essence of</h3>
        <h1
          className={`text-[5rem] ${racingSans.className} uppercase leading-none`}
        >
          gululand
        </h1>
        <p className={`text-[1.5rem] text-center mt-5 ${spicyRice.className}`}>
          Four hundred and fifty cat years ago, Gululand thrived as a utopia
          powered by the magical Gululu Vault. Today, the battle continues as
          greed threatens the balance of the Gululuverse.
        </p>
        <p className={`text-[1.5rem] text-center mt-5 ${spicyRice.className}`}>
          But hope is not lost. With the power of $GULULU tokens, modern heroes
          like you are stepping up to defend the realm.
        </p>
      </div>
    </div>
  );
};

export default EssenceSection;
