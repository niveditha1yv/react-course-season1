import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const isOnlineStatus = useOnlineStatus();

  const { loggedUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-blue-200">
      <div>
        <img className="w-35" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex p-4 m-4 items-center">
          <li>Online : {isOnlineStatus ? "💚" : "❤️"}</li>
          <li className="px-4 ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 ">
            <Link to="./about">About us</Link>
          </li>
          <li className="px-4 ">
            <Link to="contact">Contact us</Link>
          </li>
          <li className="px-4 ">
            {" "}
            <Link to="./cart"> cart ({cartItems.length})</Link>
          </li>

          <button
            className="bg-blue-500 px-5 py-3 rounded-lg"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>

          <li className="px-4 font-bold">{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
