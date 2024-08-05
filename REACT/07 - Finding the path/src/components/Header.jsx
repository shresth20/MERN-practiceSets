import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const LogBtn = () => {
  const [logBtn, setLogBtn] = useState("Login");

  console.log("btn render");
  useEffect(() => {
    console.log("useEffect called");
  }, [logBtn]);

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

// const HeadOption = (name, url) => <li><Link to={url}>{name}</Link></li>;

const Options = () => (
  <ul>
    {/* <HeadOption url="/">Home</HeadOption>
    <HeadOption url="/cart">Cart</HeadOption>
    <HeadOption url="/about">About</HeadOption>
    <HeadOption url="/contact">Contact</HeadOption>
    <HeadOption url="#">{<LogBtn />}</HeadOption> */}
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      
      <Link to="/cart">Cart</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="#">
        <LogBtn />
      </Link>
    </li>
  </ul>
);

const Header = () => {
  console.log("Header render");

  return (
    <div id="header">
      <div id="logo" className="navItems">
        <img src={LOGO_URL} />
        {/* <Search /> */}
        <Options />
      </div>
    </div>
  );
};
export default Header;
