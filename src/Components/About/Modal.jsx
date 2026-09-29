import { Mail } from "lucide-react";
import Dialog from "../Dialog";
import Markdown from "../Markdown";

const Modal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <Dialog onClose={onClose} label={member.name} className="max-w-4xl" panelClassName="p-0">
      <div className="grid sm:grid-cols-[240px_1fr] md:grid-cols-[280px_1fr] font-inter">
        <aside className="bg-rich-black text-white sm:h-full">
          <div className="p-5 pr-14 sm:p-6 flex flex-wrap sm:flex-col gap-4 sm:gap-5 items-center sm:items-stretch sm:sticky sm:top-0">
            <img
              className="size-20 sm:size-auto sm:w-full sm:aspect-[4/5] rounded-lg sm:rounded-xl object-cover object-top shrink-0"
              src={member.image}
              alt={member.name}
            />
            <div className="flex-1 min-w-0 sm:flex-none">
              <h3 className="font-semibold text-lg sm:text-xl leading-snug mb-0 text-balance">
                {member.name}
              </h3>
              <p className="text-sm text-bright-gray/80 mt-1 leading-snug">{member.role}</p>
            </div>
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="basis-full sm:basis-auto -mt-1 sm:-mt-2 inline-flex items-center gap-1.5 text-sm text-indian-yellow hover:underline underline-offset-2 [overflow-wrap:anywhere]"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {member.email}
              </a>
            )}
          </div>
        </aside>

        <div className="p-5 sm:p-8">
          <Markdown className="p max-w-[62ch] text-rich-black">{member.body}</Markdown>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
