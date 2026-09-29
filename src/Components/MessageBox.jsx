import { Check } from "lucide-react";
import Dialog from "./Dialog";
import { contact } from "../content";

const MessageBox = ({ onClose }) => {
  const copy = contact.success || {};
  return (
    <Dialog onClose={onClose} label={copy.heading} className="max-w-md" panelClassName="p-6 sm:p-8">
      <div className="flex flex-col items-center text-center gap-5">
        <Check
          aria-hidden="true"
          className="size-16 border-2 text-midnight-green border-midnight-green rounded-full p-2"
        />
        <h2 className="h1 font-normal text-midnight-green">{copy.heading}</h2>
        <p className="p">{copy.text}</p>
        <button
          type="button"
          onClick={onClose}
          className="btn px-6 bg-midnight-green text-white transition-transform duration-200 hover:scale-[1.02] active:scale-95"
        >
          {copy.closeLabel}
        </button>
      </div>
    </Dialog>
  );
};

export default MessageBox;
