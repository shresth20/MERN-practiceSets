import { LOGO_URL } from "../utils/constants";

const HeadOption = (name, url) => <a href={url}>{name}</a>;

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
  </ul>
);

const Search = () => (
  <div id="serachBar">
    <input placeholder="Search food"></input>
    <button formAction="submit">Search</button>
  </div>
);

const Header = () => (
  <div id="header">
    <div id="logo" className="navItems">
      <img src={LOGO_URL} />
      <Search />
      <Options />
    </div>
  </div>
);

export default Header;
