import { useState } from "react";
import { restaurantList } from "../utils/restaurantData";
import { Card } from "./Card";

const Body = (props) => {
  const [List, setList] = useState(restaurantList);
  return (
    <div id="body">
      <div className="filter">
        <button
          onClick={() => {
            setList(
              List.filter((res) => Number(res.info.rating.rating_text) > 4)
            );
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="cards">
        {List.map((res) => (
          <Card resData={res} key={res.info.resId} />
        ))}
      </div>
    </div>
  );
};

export default Body;
