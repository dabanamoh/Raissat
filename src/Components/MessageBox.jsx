import { Check } from "lucide-react";
import Dialog from "./Dialog";

const MessageBox = ({ message, onClose }) => {
  return (
    <Dialog onClose={onClose} label="Message sent" className="max-w-md p-6 sm:p-8">
      <div className="flex flex-col items-center text-center gap-5">
        <Check
          aria-hidden="true"
          className="size-16 border-2 text-midnight-green border-midnight-green rounded-full p-2"
        />
        <h2 className="h1 font-normal text-midnight-green">{message || "Message sent"}</h2>
        <p className="p">
          Thank you for reaching out to us. We have received your message and
          will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="btn px-6 bg-midnight-green text-white transition-transform duration-200 hover:scale-[1.02] active:scale-95"
        >
          Close
        </button>
      </div>
    </Dialog>
  );
};

export default MessageBox;
