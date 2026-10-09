import { useDispatch } from "react-redux";
import { addItems } from "../redux/cartSlice";

const ItemMenu = ({ data }) => {
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div>
      {data?.map((data) => (
        <div
          key={data.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div>
              <span> {data.card.info.name}</span>
              {" - "}
              <span>
                $
                {data.card.info.defaultPrice
                  ? data.card.info.defaultPrice / 100
                  : data.card.info.price / 100}
              </span>
            </div>
            <div className="text-xs">{data.card.info.description}</div>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button
                className="bg-white p-2 my-10 mx-15 shadow-lg rounded-xl cursor-pointer"
                onClick={() => handleAdd(data)}
              >
                Add +
              </button>
            </div>
            <img
              className="rounded-lg "
              alt="card-img"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/8/28/dd0327b8-5772-4089-aa4e-2e7938187fe7_1188660.jpg"
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemMenu;
