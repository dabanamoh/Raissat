import { profiles } from "../../assets";

const Card = ({ name, plainName, img, profileSummary, onOpen }) => {
  const { rightArrow } = profiles;

  return (
    <div className="bg-white p-3 rounded-xl shadow-2xl w-full flex flex-col">
      <div className="mb-3 aspect-[4/5] overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover object-top"
          src={img}
          alt={plainName}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col grow">
        <h3 className="font-semibold mb-3">{name}</h3>
        <p className="text-sm leading-6">{profileSummary}</p>
        <div className="flex justify-end mt-auto pt-5">
          <button
            type="button"
            onClick={onOpen}
            aria-label={`Read ${plainName}'s full profile`}
            className="p-2 -m-2 cursor-pointer rounded-full hover:bg-bright-gray transition"
          >
            <img className="size-8" src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
