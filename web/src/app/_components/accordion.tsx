"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Install using: npm install lucide-react

interface AccordionItem {
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  { title: "How does the coin flip work?", content: "How the Coin Flip Works: A Fair and Transparent System to Let You Play Double or Nothing with Your Polygon Tokens." },
  { title: "What tokens can I use to play?", content: "How the Coin Flip Works: A Fair and Transparent System to Let You Play Double or Nothing with Your Polygon Tokens." },
  { title: "Is the game provably fair?", content: "How the Coin Flip Works: A Fair and Transparent System to Let You Play Double or Nothing with Your Polygon Tokens." },
  { title: "How do I claim my winnings?", content: "How the Coin Flip Works: A Fair and Transparent System to Let You Play Double or Nothing with Your Polygon Tokens." },
  { title: "What happens if I lose?", content: "How the Coin Flip Works: A Fair and Transparent System to Let You Play Double or Nothing with Your Polygon Tokens." },
];

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {accordionData.map((item, index) => (
        <div key={index} className="rounded-lg overflow-hidden bg-[#282C39]">
          {/* Header */}
          <button
            className="w-full flex justify-between items-center px-4 py-[20px] px-[16px] text-left bg-[#282C39] transition  font-semibold text-[20px] leading-[100%] tracking-[0%]"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-semibold">{item.title}</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* Content with Smooth Animation */}
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              openIndex === index ? "grid-rows-[1fr] opacity-100 py-3 px-4" : "grid-rows-[0fr] opacity-0 py-0 px-4"
            }`}
          >
            <div className="overflow-hidden font-normal text-[18px] leading-[140%] tracking-[0%]">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
