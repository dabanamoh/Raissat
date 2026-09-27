const ARROW = "/assets/Profiles/right-arrow.svg";

export const MemberName = ({ member }) => {
  const [first, ...rest] = member.name.split(" ");
  return (
    <>
      <span className="uppercase">{first}</span> {rest.join(" ")} -{" "}
      <span className="font-normal">{member.role}</span>
    </>
  );
};

const Card = ({ member, onOpen }) => {
  return (
    <div className="bg-white p-3 rounded-xl shadow-2xl w-full flex flex-col">
      <div className="mb-3 aspect-[4/5] overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover object-top"
          src={member.image}
          alt={member.name}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col grow">
        <h3 className="font-semibold mb-3">
          <MemberName member={member} />
        </h3>
        <p className="text-sm leading-6">{member.summary}</p>
        <div className="flex justify-end mt-auto pt-5">
          <button
            type="button"
            onClick={onOpen}
            aria-label={`Read ${member.name}'s full profile`}
            className="p-2 -m-2 cursor-pointer rounded-full hover:bg-bright-gray transition"
          >
            <img className="size-8" src={ARROW} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
