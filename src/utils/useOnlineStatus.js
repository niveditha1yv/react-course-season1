import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
  const [isOnlineStatus, setIsonlineStatus] = useState(true);

  useEffect(() => {
    addEventListener("offline", () => {
      setIsonlineStatus(false);
    });
    addEventListener("online", () => {
      setIsonlineStatus(true);
    });
  }, []);
  // boolean value
  return isOnlineStatus;
};
