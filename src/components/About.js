import { useContext } from "react";
import UserContext from "../utils/userContext";

const About = () => {
  const { loggedUser } = useContext(UserContext);

  return (
    <div>
      <h1>About Page</h1>
      <h2 className="font-bold">{loggedUser}</h2>
      <h2>This page conations content of React app</h2>
    </div>
  );
};

export default About;
