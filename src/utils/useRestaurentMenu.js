import { useEffect, useState } from "react";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    const data = await fetch(
      `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`,
    );
    const json = await data.json();

    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurentMenu;
