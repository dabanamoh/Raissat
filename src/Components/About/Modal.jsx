import Dialog from "../Dialog";
import Markdown from "../Markdown";

const Modal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <Dialog
      onClose={onClose}
      label={member.name}
      className="max-w-4xl"
      panelClassName="p-4 sm:p-6"
    >
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="sm:w-2/5 shrink-0 rounded-2xl overflow-hidden self-start">
          <img
            className="w-full aspect-[4/5] object-cover object-top"
            src={member.image}
            alt={member.name}
          />
          <div className="bg-rich-black text-white p-4">
            <h3 className="font-semibold text-lg leading-snug">{member.name}</h3>
            <p className="text-sm text-bright-gray/80 mt-1">{member.role}</p>
          </div>
        </div>

        <div className="sm:flex-1 min-w-0 font-inter">
          {member.summary && <p className="p font-medium text-midnight-green mb-4">{member.summary}</p>}
          <Markdown className="p">{member.body}</Markdown>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
