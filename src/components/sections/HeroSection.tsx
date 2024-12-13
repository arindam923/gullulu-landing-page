import Image from "next/image";
import Link from "next/link";

import { poppins, racingSans, samuraiShadow, spicyRice } from "@/lib/fonts";

const HeroSection = () => {
  return (
    <div
      className={`
      ${poppins.className} 
      min-h-screen 
      pt-20
      lg:pt-40
      flex 
      flex-col 
      lg:flex-row 
      items-center 
      justify-center 
      px-4 
      py-12 
      lg:py-0 
      home-bg-image 
      text-black
    `}
    >
      <div
        className="
        w-full 
        lg:w-1/2 
        flex 
        flex-col 
        items-center 
        text-center 
        px-4 
        lg:px-0
      "
      >
        <h3
          className="
          text-4xl 
          md:text-5xl 
          lg:text-6xl 
          leading-tight
        "
        >
          Welcome to
        </h3>
        <h1
          className={`
          ${racingSans.className}
          text-6xl 
          md:text-7xl 
          lg:text-8xl 
          uppercase 
          leading-tight
        `}
        >
          gululand
        </h1>
        <h2
          className={`
          ${samuraiShadow.className}
          text-5xl 
          lg:text-6xl 
          leading-tight 
          text-[#C82200]
        `}
        >
          The Battle Begins !
        </h2>
        <p
          className={`
          ${spicyRice.className}
          text-xl 
          md:text-2xl 
          lg:text-3xl 
          mt-6 
          lg:mt-10 
          max-w-md
        `}
        >
          Enter Gululand, where every tap earns $GULULU tokens and strengthens
          the legendary Gululu Vault. Fight greed, shape the Gululuverse and
          make history—all on Telegram!
        </p>
        <div
          className="
          mt-4 
          h-1 
          bg-black 
          w-[150px] 
          md:w-[200px]
        "
        />
        <p
          className={`
          ${spicyRice.className}
          mt-4 
          text-3xl 
          lg:text-4xl
        `}
        >
          Ready to Join the battle?
        </p>
        <button
          className={`
          ${spicyRice.className}
          mt-5 
          w-full 
          max-w-xs 
          py-2 
          rounded-lg 
          text-2xl 
          md:text-3xl 
          lg:text-4xl 
          bg-[#FFDBAE] 
          hover:bg-[#ffdbae]/50 
          shadow-[6px_6px_0px_#000000] 
          hover:shadow-[0px_3px_0px_#000000] 
          transition-all 
          duration-300
        `}
        >
          Join Now!
        </button>
      </div>
      <div
        className="
        w-full 
        lg:w-1/2 
        flex 
        justify-center 
        items-center 
        mt-8 
        lg:mt-0
      "
      >
        <div
          className="
          w-full 
          max-w-md 
          lg:max-w-xl
        "
        >
          <Image
            src="/1 1.svg"
            alt="Gululand Hero"
            width={900}
            height={800}
            className="
              w-full 
              h-auto 
              object-contain
            "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
