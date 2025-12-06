import { X } from "lucide-react";
import { aboutPage } from "../../constants";

import { useEvent } from "../../utils";

const { team } = aboutPage;

const Modal = ({ memberId, handleToggleModal }) => {
  useEvent(handleToggleModal);
  // const [isOpen, setIsOpen] = useState(false);

  const member = team.find((m) => m.id === memberId);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/30 backdrop-blur-sm wrapper">
      {/* Backdrop Fade In */}
      <div
        className="
      w-full 
      max-w-lg sm:max-w-2xl md:max-w-4xl
      mx-4

      p-4 sm:p-8
      bg-white/60 backdrop-blur-3xl
      rounded-xl
      flex flex-col sm:flex-row
      gap-6
      relative
      max-h-[70vh]
     

     
      opacity-0 scale-95 
      animate-[fadeInScale_0.25s_ease-out_forwards]
    "
      >
        {/* Close Button */}
        <button
          onClick={handleToggleModal}
          className="
        absolute 
        -top-2 
        -right-2 
        bg-midnight-green 
        text-white 
        rounded-full 
        p-2 sm:p-3  
        shadow-lg 
        cursor-pointer
        transition-all 
        duration-200 
        hover:scale-110 
        active:scale-90
      "
        >
          <X className="size-5 sm:size-6" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[500px] md:h-auto rounded-2xl overflow-hidden">
          <img
            className="w-full max-sm:h-full h-[80%]"
            src={member.image}
            alt="profile-image"
          />
          <div className="bg-rich-black text-white rounded-b-lg p-4 h-[20%] text-center">
            <h3 className="font-semibold">{member.name}</h3>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 font-inter pt-2 h-[500px] overflow-y-auto">
          <span>{member.profileFull}</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
