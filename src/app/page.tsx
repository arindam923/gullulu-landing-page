import HeroSection from "@/components/sections/HeroSection";
import EsseenSection from "@/components/sections/EsseenSection";
import FightAgainstGreed from "@/components/sections/FightAgainstGreed";
import TapRichSection from "@/components/sections/TapRichSection";
import FaqSections from "@/components/sections/FaqSections";
import GurdianSection from "@/components/sections/GurdianSection";
import VictorySection from "@/components/sections/VictorySection";

export default function Home() {
  return (
    <div className="bg-[#FFC882] pb-10 text-black min-h-screen">
      <HeroSection />
      <EsseenSection />
      <FightAgainstGreed />
      <TapRichSection />
      <VictorySection />
      <FaqSections />
      <GurdianSection />
    </div>
  );
}
