import Dialog from "../Dialog";
import { aboutPage } from "../../constants";

const { team } = aboutPage;

const Modal = ({ memberId, onClose }) => {
  const member = team.find((m) => m.id === memberId);
  if (!member) return null;

  return (
    <Dialog
      onClose={onClose}
      label={`${member.plainName} profile`}
      className="max-w-4xl max-h-[88vh] overflow-y-auto p-4 sm:p-6"
    >
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="sm:w-2/5 shrink-0 rounded-2xl overflow-hidden self-start">
          <img
            className="w-full aspect-[4/5] object-cover object-top"
            src={member.image}
            alt={member.plainName}
          />
          <div className="bg-rich-black text-white p-4 text-center">
            <h3 className="font-semibold">{member.name}</h3>
          </div>
        </div>

        <div className="sm:w-3/5 font-inter p">{member.profileFull}</div>
      </div>
    </Dialog>
  );
};

export default Modal;
