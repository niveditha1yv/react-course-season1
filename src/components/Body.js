import RestaurentCard, { withResturentLabel } from "./RestaurentCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import useRestaurentData from "../utils/useRestaurentData";
import UserContext from "../utils/userContext";

const Body = () => {
  const { listOfRestaurant, filteredRestdata, loading, setFilteredRestdata } =
    useRestaurentData();
  // console.log(listOfRestaurant);
  const [searchText, setSearchText] = useState("");

  // use context in the component
  const { loggedUser, setUserName } = useContext(UserContext);

  // High order component
  const RestaurentCardPromoted = withResturentLabel(<RestaurentCard />);

  const filterData = () => {
    setFilteredRestdata(
      listOfRestaurant.filter((res) => res.info.avgRating > 4.5),
    );
  };

  const isOnlineStatus = useOnlineStatus();

  if (!isOnlineStatus) {
    return <h1>Inrernent connection is off</h1>;
  }
  return listOfRestaurant.length === 0 && loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="p-1 m-4 w-100 border-2 border-gray-300 rounded-xl"
          />
          <button
            className="py-2 px-5 bg-gray-400 rounded-lg mr-5 hover:bg-blue-300 hover:cursor-pointer"
            onClick={() => {
              const filterRestData = listOfRestaurant.filter((data) =>
                data.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestdata(filterRestData);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="py-2 px-5 bg-gray-400 rounded-lg mr-5  hover:bg-blue-300 hover:cursor-pointer"
            onClick={() => filterData()}
          >
            Top rated Restaurents
          </button>
        </div>
        <div>
          UserName :{" "}
          <input
            type="text"
            className="p-2 border border-black"
            value={loggedUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestdata.map((card) => (
          <Link to={"restuarent/" + card.info.id} key={card.info.id}>
            {card.info.avgRating > 4.5 ? (
              <RestaurentCardPromoted resData={card.info} />
            ) : (
              <RestaurentCard resData={card.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
