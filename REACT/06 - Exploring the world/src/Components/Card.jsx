import React from "react";
import "../../style.css";

export const Card = ({
  cloudinaryImageId,
  name,
  cuisines,
  costForTwo,
  avgRating,
}) => {
  return (
    <div id="card">
      <div className="card-img">
        <img
          id="cardImg"
          alt="Image"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
      </div>
      <h3>{name}</h3>
      {/* <h6>{cuisines.join(", ")}</h6> */}
      <h3>{costForTwo}</h3>
      <h2>{avgRating}⭐</h2>
    </div>
  );
};
