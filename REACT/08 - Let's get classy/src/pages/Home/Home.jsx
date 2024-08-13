import React from "react";
import React, { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import { Shimmer } from "../../Components/Shimmer";
import { Link } from "react-router-dom";
import { HOME_API } from "../../utils/constants";


export const Home = () => {
  const [list, setList] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Bypass the CORS
    // const url = 'https://corsproxy.io/?' + encodeURIComponent('https://www.swiggy.com/mapi/homepage/getCards?lat=28.7040592&lng=77.10249019999999');

    const api = await fetch(HOME_API);

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
          Top Rated Restaurants
        </button>
      </div>

      <div className="cards">
        {filterRes.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            <Card {...res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
