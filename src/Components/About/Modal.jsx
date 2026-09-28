import Dialog from "../Dialog";
import Markdown from "../Markdown";
import { MemberName } from "./Card";

const Modal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <Dialog
      onClose={onClose}
      label={`${member.name} profile`}
      className="max-w-4xl max-h-[88vh] overflow-y-auto p-4 sm:p-6"
    >
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="sm:w-2/5 shrink-0 rounded-2xl overflow-hidden self-start">
          <img
            className="w-full aspect-[4/5] object-cover object-top"
            src={member.image}
            alt={member.name}
          />
          <div className="bg-rich-black text-white p-4 text-center">
            <h3 className="font-semibold">
              <MemberName member={member} />
            </h3>
          </div>
        </div>

        <Markdown className="sm:w-3/5 font-inter p">{member.body}</Markdown>
      </div>
    </Dialog>
  );
};

export default Modal;
