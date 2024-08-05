import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const LogBtn = () => {
  const [logBtn, setLogBtn] = useState("Login");
  return (
    <button
      className="log-btn"
      onClick={() =>
        logBtn == "Login" ? setLogBtn("Logout") : setLogBtn("Login")
      }
    >
      {logBtn}
    </button>
  );
};


const Options = () => (
  <ul>
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">Cart</a>
    </li>
    <li>
      <a href="#">About</a>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
    <li>
      <a href="#">
        <LogBtn />
      </a>
    </li>
  </ul>
);

const Header = () => (
  <div id="header">
    <div id="logo" className="navItems">
      <img src={LOGO_URL} />
      {/* <Search /> */}
      <Options />
    </div>
  </div>
);

export default Header;
