import React from "react";
import ReactDOM from "react-dom/client";

const Search = () => (
  <div id="serachBar">
    <input placeholder="Search food"></input>
    <button formAction="submit">Search</button>
  </div>
);

const Header = () => (
  <div id="header">
    <div id="logo" className="navItems">
      <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-by-simplepixelsl-brandcrowd.png" />
      <Search />
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
    </div>
  </div>
);

const Card = (props) => (
  <div id="card">
    <div id="cardImg">
      <img src={props.Img} />
    </div>
    <h2>{props.foodName}</h2>
    <h4>Rs.{props.price}</h4>
    <i>{props.shop}</i>
    <b>{props.star}⭐</b>
    {/* {console.log(props)} */}
  </div>
);

const Body = () => (
  <div id="body">
    <Card
      foodName="Pav Bhaji"
      Img="https://i2.wp.com/vegecravings.com/wp-content/uploads/2016/10/pav-bhaji-recipe-step-by-step-instructions.jpg?w=2418&quality=65&strip=all&ssl=1"
      price="99"
      shop="Jai Shree street"
      star="5"
    />
    <Card
      foodName="Doosha"
      Img="https://lh6.ggpht.com/-DD-jjAyzJZg/U_zc81ZuyJI/AAAAAAAAAMs/CDKnp1xbMLY/s1600/IMG_20140827_001705.JPG"
      price="99"
      shop="South Indian Doosha"
      star="5"
    />
    <Card
      foodName="Idli Sambhar"
      Img="https://www.mapsofindia.com/ci-moi-images/my-india/Idli-Sambhar.jpg"
      price="99"
      shop="Anna Itly wale"
      star="5"
    />
    <Card
      foodName="Pizza"
      Img="https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-cheese-tomatoes-olives-hd-wallpaper-preview.jpg"
      price="99"
      shop="Pizza Hat"
      star="5"
    />

    <Card
      foodName="Pav Bhaji"
      Img="https://i2.wp.com/vegecravings.com/wp-content/uploads/2016/10/pav-bhaji-recipe-step-by-step-instructions.jpg?w=2418&quality=65&strip=all&ssl=1"
      price="99"
      shop="Jai Shree street"
      star="5"
    />
    <Card
      foodName="Doosha"
      Img="https://lh6.ggpht.com/-DD-jjAyzJZg/U_zc81ZuyJI/AAAAAAAAAMs/CDKnp1xbMLY/s1600/IMG_20140827_001705.JPG"
      price="99"
      shop="South Indian Doosha"
      star="5"
    />
    <Card
      foodName="Idli Sambhar"
      Img="https://www.mapsofindia.com/ci-moi-images/my-india/Idli-Sambhar.jpg"
      price="99"
      shop="Anna Itly wale"
      star="5"
    />
    <Card
      foodName="Pizza"
      Img="https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-cheese-tomatoes-olives-hd-wallpaper-preview.jpg"
      price="99"
      shop="Pizza Hat"
      star="5"
    />

    <Card
      foodName="Pav Bhaji"
      Img="https://i2.wp.com/vegecravings.com/wp-content/uploads/2016/10/pav-bhaji-recipe-step-by-step-instructions.jpg?w=2418&quality=65&strip=all&ssl=1"
      price="99"
      shop="Jai Shree street"
      star="5"
    />
    <Card
      foodName="Doosha"
      Img="https://lh6.ggpht.com/-DD-jjAyzJZg/U_zc81ZuyJI/AAAAAAAAAMs/CDKnp1xbMLY/s1600/IMG_20140827_001705.JPG"
      price="99"
      shop="South Indian Doosha"
      star="5"
    />
    <Card
      foodName="Idli Sambhar"
      Img="https://www.mapsofindia.com/ci-moi-images/my-india/Idli-Sambhar.jpg"
      price="99"
      shop="Anna Itly wale"
      star="5"
    />
    <Card
      foodName="Pizza"
      Img="https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-cheese-tomatoes-olives-hd-wallpaper-preview.jpg"
      price="99"
      shop="Pizza Hat"
      star="5"
    />
  </div>
);

const Applayout = () => (
  <div id="layout">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Applayout />);
