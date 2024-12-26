import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// The FAQ Item component
const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the accordion open/close state
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer">
      {/* Header Section */}
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAccordion}
      >
        {/* Question Text */}
        <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
          {item.question}
        </h4>

        {/* Toggle Button */}
        <div
          className="w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center cursor-pointer"
        >
          {isOpen ? <AiOutlineMinus className="text-black" /> : <AiOutlinePlus className="text-black" />}
        </div>
      </div>

      {/* Accordion Content Section */}
      {isOpen && (
        <div className="pt-3 lg:pt-4 text-[14px] lg:text-[16px] text-gray-700 leading-6">
          {item.content}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
