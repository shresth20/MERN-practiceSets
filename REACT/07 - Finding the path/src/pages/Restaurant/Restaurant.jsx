import { useEffect, useState } from "react";
import "./Restaurant.css";
import { useParams } from "react-router-dom";
import { Shimmer } from "../../Components/Shimmer";
import { RES_MENU_API } from "../../utils/constants";

export const Restaurant = () => {
  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const api = await fetch(RES_MENU_API + resId);
      const json = await api.json();
      setResData(json?.data?.cards || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data");
      setLoading(false);
    }
  };

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const restaurantInfo = resData[2]?.card?.card?.info;
  const allMenu = resData[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  //   const menu = allMenu[1]?.card?.card?.itemCards || [];

  return (
    <div className="restaurant-page">
      {restaurantInfo && (
        <>
          <h1>{restaurantInfo.name}</h1>
          <h3>{restaurantInfo.cuisines?.join(", ")}</h3>
          <h3>{restaurantInfo.costForTwoMessage}</h3>
          <h2>{restaurantInfo.avgRating}⭐</h2>
        </>
      )}
      <br />

      {allMenu.map((res, index) => (
        <div key={index}>
          <h2>{res?.card?.card?.title}</h2>
          <ol>
            {res?.card?.card?.itemCards?.map((item, idx) => (
              <li key={idx}>
                {item?.card?.info?.name || "Name"} - Rs.
                {item?.card?.info?.price / 100 || "Price"}
              </li>
            ))}
          </ol>
          <br />
        </div>
      ))}
    </div>
  );
};
