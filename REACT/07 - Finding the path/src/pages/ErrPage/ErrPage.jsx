import React from "react";
import { useRouteError } from "react-router-dom";
import './ErrPage.css'
export const ErrPage = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div className="err-page">
      <h1>{err.status} : {err.statusText}</h1>
      <h3>{err.data}</h3>
    </div>
  );
};
