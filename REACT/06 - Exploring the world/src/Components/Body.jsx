import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import "../../style.css";
import { Shimmer } from "./Shimmer";
export const Search = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div id="serachBar">
      <input
        placeholder="Search food"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button>Search</button>
    </div>
  );
};

const Body = () => {
  // console.log("Body rendered");
  const [list, setList] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Bypass the CORS
    // const url = 'https://corsproxy.io/?' + encodeURIComponent('https://www.swiggy.com/mapi/homepage/getCards?lat=28.7040592&lng=77.10249019999999');

    const api = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=28.7040592&lng=77.10249019999999"
    );

    // optional chainning
    const Json = await api.json();

    setList(
      Json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRes(
      Json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // conditional rendering
  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div id="body">
      <div className="filter">
        {/* <Search /> */}

        <div id="serachBar">
          <input
            placeholder="Search food"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              setFilterRes(
                list.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>

        <button
          className="top-btn"
          onClick={() => {
            setFilterRes(list.filter((res) => Number(res.info.avgRating) > 4));
          }}
        >
          Top rated Restaurants
        </button>
      </div>

      <div className="cards">
        {filterRes.map((res) => (
          <Card {...res.info} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
