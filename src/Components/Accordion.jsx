import { X, ChevronDown } from "lucide-react";

const Accordion = ({ data, index, isOpen, handleToggle }) => {
  // const [activeIndex, setActiveIndex] = useState(null);

  // const isOpen = activeIndex === index;

  // function handleToggle(index) {
  //   setActiveIndex((prev) => (prev === index ? null : index));
  // }
  return (
    <div
      className={`w-full bg-white rounded-xl font-inter mx-auto px-4 py-3 ${
        data.length - 1 !== index ? "mb-3" : ""
      }`}
    >
      {/* Accordion Header */}
      <div
        onClick={() => handleToggle(index)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h1 className="font-medium text-md text-midnight-green">
          {data.question}
        </h1>
        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {/* Accordion Body */}
      <div
        className={`text-md overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 mt-2 " : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <p className="p">{data.answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
