import { useState } from "react";
import { restaurantList } from "../utils/restaurantData";
import { Card } from "./Card";

const Body = (props) => {
  const [List, setList] = useState(restaurantList);
  return (
    <div id="body">
      <button
        onClick={() => {  
          setList(List.filter((res) => parseInt(res.info.rating.rating_text) > 4));
        }}
      >
        Filter Top rated Restaurants
      </button>
      {restaurantList.map((res) => (
        <Card resData={res} key={res.info.resId} />
      ))}
    </div>
  );
};

export default Body;
