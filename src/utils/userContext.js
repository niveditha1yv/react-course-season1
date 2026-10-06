import { createContext } from "react";

// create context
const UserContext = createContext({
  loggedUser: "Default user",
});

export default UserContext;
