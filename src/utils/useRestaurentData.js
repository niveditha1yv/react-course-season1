import { useEffect, useState } from "react";

const useRestaurentData = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestdata, setFilteredRestdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://namastedev.com/api/v1/listRestaurants",
      );
      const resList = await response.json();
      // optional chaining
      const restaurantData =
        resList?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurant(restaurantData);
      setFilteredRestdata(restaurantData);
    } catch (err) {
      console.log("Error in api", err);
    } finally {
      setLoading(false);
    }
  };

  return { listOfRestaurant, filteredRestdata, loading, setFilteredRestdata };
};

export default useRestaurentData;
