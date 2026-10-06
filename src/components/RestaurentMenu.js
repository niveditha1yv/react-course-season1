import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  const handleChange = (index) => {
    index !== showIndex ? setShowIndex(index) : setShowIndex(false);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, avgRatingString } =
    resInfo?.cards[2]?.card?.card?.info;
  const menuList =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (data) =>
        data?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-3xl my-4"> {name} </h1>
        <h2 className="font-light text-xl">
          {cuisines.join(", ")} : <span>{avgRatingString} stars</span>
        </h2>
        <div>
          {/* // after lifting the child state to parent now it become a controlled
          compoent // Now RestaurentMenu is controlling the Accordian show/hide
          function in RestaurentCategory */}
          {/* controlled component */}
          {menuList.map((data, index) => (
            <RestaurentCategory
              key={data?.card?.card?.title}
              data={data?.card?.card}
              show={index === showIndex ? true : false}
              handleClick={() => handleChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurentMenu;
