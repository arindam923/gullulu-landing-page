import { poppins, spicyRice } from "@/lib/fonts";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GurdianSection = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-2 md:px-14 mt-20">
      <div
        className={`
        ${spicyRice.className} 
        text-2xl 
        lg:text-6xl 
        text-center
      `}
      >
        Become a Guardian Today!
      </div>

      <div className="bg-orange-light w-full flex items-center justify-center h-auto lg:h-[650px]">
        <div
          className="
          relative 
          w-full 
          h-full 
          lg:h-[90%] 
          flex 
          flex-col 
          lg:flex-row 
          items-center 
          justify-center 
          gap-4 
          rounded-xl 
          py-10 
          lg:py-20 
          px-2 
          md:px-5 
          overflow-hidden
        "
        >
          {/* Background Card Image */}
          <div className="absolute inset-0 z-0">
            <Image
              fill
              src="/gurdian/card.svg"
              alt="Background Card"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Container */}
          <div
            className="
            relative 
            z-10 
            flex 
            flex-col 
            lg:flex-row 
            items-center 
            justify-center 
            w-full 
            max-w-6xl 
            px-4 
            lg:px-10
          "
          >
            {/* Text and Social Section */}
            <div
              className="
              w-full 
              lg:w-[60%] 
              flex 
              flex-col 
              items-center 
              justify-center 
              mb-6 
              lg:mb-0
            "
            >
              <div
                className="
                bg-[#F6E8D4] 
                shadow-[10px_10px_0px_#000000] 
                text-[1rem] 
                lg:text-[1.2rem] 
                flex 
                flex-col 
                items-center 
                px-4 
                lg:px-6 
                py-4 
                border-4 
                border-black 
                text-black 
                mb-5 
                w-full 
                max-w-md
              "
              >
                <h2
                  className="
                  font-black 
                  text-center 
                  text-lg 
                  lg:text-xl
                "
                >
                  JOIN THE GULULU MOVEMENT
                </h2>
                <p className="text-center text-base lg:text-lg">
                  take your place as a defender of the Gululuverse.
                </p>
              </div>

              <p
                className="
                text-center 
                mt-0 
                lg:mt-5 
                text-base 
                lg:text-[1.2rem] 
                font-medium 
                max-w-md
              "
              >
                Connect with us on social media to stay updated and join the
                fight!
              </p>

              <div
                className="
                mt-4 
                lg:mt-6 
                flex 
                justify-center 
                items-center 
                gap-3 
                lg:gap-5
              "
              >
                {[
                  "/gurdian/Twitter-Logо.svg",
                  "/gurdian/87413.svg",
                  "/gurdian/Instagram.svg",
                ].map((icon, index) => (
                  <div
                    key={index}
                    className="
                      h-8 
                      w-8 
                      lg:h-10 
                      lg:w-10 
                      shadow-[4px_4px_0px_#000000] 
                      bg-[#FFDDBA] 
                      rounded-md 
                      grid 
                      place-items-center
                    "
                  >
                    <Image
                      src={icon}
                      width={24}
                      height={24}
                      alt={`Social icon ${index + 1}`}
                      className="w-5 h-5 lg:w-[30px] lg:h-[30px]"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Illustration Image */}
            <div
              className="
              w-full 
              lg:w-auto 
              max-w-xs 
              lg:max-w-none 
              mt-6 
              lg:mt-0
            "
            >
              <Image
                src="/gurdian/6 8.svg"
                width={500}
                height={500}
                alt="Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GurdianSection;
