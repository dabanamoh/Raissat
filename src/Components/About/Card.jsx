import { rightArrow } from "../../assets/assets";

// import { truncateText } from '../../utils'

const Card = ({ name, img, profileSummary, handleToggleModal }) => {
  // console.log(profileSummary)
  return (
    <div className="bg-white p-3 rounded-xl shadow-2xl">
      <div className="text-center mb-3 h-[350px] overflow-hidden rounded-xl">
        <img className="w-full" src={img} alt="profile" />
      </div>
      <div>
        <h3 className="font-semibold mb-3">{name}</h3>
        <p className="text-sm leading-6">{profileSummary}</p>
        <div className="flex justify-end mt-5">
          <img
            onClick={handleToggleModal}
            className="size-8 cursor-pointer"
            src={rightArrow}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
