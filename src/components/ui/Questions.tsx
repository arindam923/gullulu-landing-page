import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { poppins } from "@/lib/fonts";
export function Questions() {
  return (
    <Accordion
      type="single"
      collapsible
      className={`w-full flex flex-col h-full lg:gap-6 gap-3 ${poppins.className}`}
    >
      <AccordionItem
        value="item-1"
        className="bg-orange-dark w-full lg:px-5 px-2 border-2 border-black rounded-2xl newAccordianShadow"
      >
        <AccordionTrigger className="lg:text-3xl text-lg w-full font-bold">
          Q: What is GULULU?
        </AccordionTrigger>
        <AccordionContent className="lg:text-2xl text-lg w-full font-semibold">
          A: GULULU is a TON-powered token and gaming ecosystem where players
          earn rewards by tapping in our Telegram-based game.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="bg-orange-dark w-full lg:px-5 px-2 border-2 border-black rounded-2xl newAccordianShadow"
      >
        <AccordionTrigger className="lg:text-3xl text-lg w-full font-bold">
          Q: How does the Tap 2 Earn game work?
        </AccordionTrigger>
        <AccordionContent className="lg:text-2xl text-lg w-full font-semibold">
          A: It&apos;s simple! Tap to mine $GULULU tokens, use boosters to
          maximize rewards, and contribute to the defense of Gululand.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="bg-orange-dark w-full lg:px-5 px-2 border-2 border-black rounded-2xl newAccordianShadow"
      >
        <AccordionTrigger className="lg:text-3xl text-lg w-full font-bold">
          Q: What&apos;s the GULULU Pass?
        </AccordionTrigger>
        <AccordionContent className="lg:text-2xl text-lg w-full font-semibold">
          A: The GULULU Pass gives you access to exclusive perks like trading
          bots, private sales, premium rewards, and event invites.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-4"
        className="bg-orange-dark w-full lg:px-5 px-2 border-2 border-black rounded-2xl newAccordianShadow"
      >
        <AccordionTrigger className="lg:text-3xl text-lg w-full font-bold">
          Q: Where can I get started?
        </AccordionTrigger>
        <AccordionContent className="lg:text-2xl text-lg w-full font-semibold">
          A: Jump into the action on Telegram! Follow our links to connect and
          begin your journey.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
