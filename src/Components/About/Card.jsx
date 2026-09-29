import { ArrowRight } from "lucide-react";

const Card = ({ member, onOpen, readMoreLabel }) => {
  return (
    <article className="h-full bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-row sm:flex-col">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`${readMoreLabel}: ${member.name}`}
        className="block w-2/5 shrink-0 sm:w-full aspect-[4/5] overflow-hidden cursor-pointer bg-bright-gray"
      >
        <img
          className="w-full h-full object-cover object-top transition-transform duration-300 motion-safe:hover:scale-[1.03]"
          src={member.image}
          alt={member.name}
          loading="lazy"
        />
      </button>
      <div className="p-4 sm:p-5 flex flex-col grow gap-1.5 min-w-0">
        <h3 className="font-semibold text-lg leading-snug text-rich-black text-balance mb-0">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-midnight-green leading-snug">{member.role}</p>
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-3 mt-1.5">
          {member.summary}
        </p>
        <button
          type="button"
          onClick={onOpen}
          className="mt-auto pt-4 self-start inline-flex items-center gap-1.5 text-sm font-semibold text-midnight-green hover:text-indian-yellow cursor-pointer"
        >
          {readMoreLabel}
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};

export default Card;
