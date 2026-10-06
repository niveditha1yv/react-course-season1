import { useContext } from "react";
import UserContext from "../utils/userContext";

const RestaurentCard = (resData) => {
  const { name, cuisines, avgRating, sla, costForTwo } = resData.resData;

  const { loggedUser } = useContext(UserContext);
  return (
    <div className="p-4 m-4 w-60 bg-gray-300 rounded-lg">
      <img
        className="rounded-lg w-100"
        alt="card-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/8/28/dd0327b8-5772-4089-aa4e-2e7938187fe7_1188660.jpg"
        }
      />
      <h3 className="font-bold py-3">{name}</h3>
      <h4 className="font-normal py-1">{cuisines.join(", ")}</h4>
      <h4 className="font-normal py-1">{avgRating} stars</h4>
      <h4 className="font-normal py-1">{costForTwo}</h4>
      <h4 className="font-normal py-0.5">{sla.slaString}</h4>
      <h4 className="font-normal py-0.5"> UserName: {loggedUser}</h4>
    </div>
  );
};

export const withResturentLabel = () => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-1 m-1 rounded-lg">
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
