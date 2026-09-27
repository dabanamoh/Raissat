import { ChevronDown } from "lucide-react";
import Markdown from "./Markdown";

const Accordion = ({ data, index, isOpen, handleToggle }) => {
  const panelId = `faq-panel-${index}`;

  return (
    <div className="w-full bg-white rounded-xl font-inter px-4 py-3">
      <h3 className="m-0 font-medium text-base text-midnight-green">
        <button
          type="button"
          onClick={() => handleToggle(index)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full flex justify-between items-center gap-4 text-left cursor-pointer py-2"
        >
          <span>{data.question}</span>
          <ChevronDown
            aria-hidden="true"
            className={`shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>

      {/* Height animates to the content's real size, so nothing is clipped. */}
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <Markdown className="p pt-3">{data.answer}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
