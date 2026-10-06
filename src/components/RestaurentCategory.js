import { useState } from "react";
import ItemMenu from "./ItemMenu";

const RestaurentCategory = ({ data, show, handleClick }) => {
  // Lifting this state to up to the parent - as its a un controlled component
  // const [showItems, setShowItems] = useState(false);

  // const handleClick = () => {
  //   // setShowItems(!showItems);
  // };
  return (
    <div>
      <div className="w-6/12 m-auto bg-gray-50 shadow-lg p-4  my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="items-center font-bold">
            {data.title} - ({data.itemCards.length})
          </span>
          <span>💚</span>
        </div>

        {show && <ItemMenu data={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurentCategory;
