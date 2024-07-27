import React from "react";
import ReactDOM from "react-dom/client";

// Core React code
const core = React.createElement(
  "h1",
  { id: "head", className: "h1" },
  "Core react syntax"
);

// jsx syntax

// React element
const jsx = <h1 className="h1">React element </h1>;

// React function component
const Fun = () => (
  <h1 id="funComponent" className="h1">
    React Function component
    {/* Element in component */ jsx}
  </h1>
);

// Component composition - a component composized in another component.
const Com1 = () => <h1>Me Component One hu</h1>;
const Com2 = () => (
  <div>
    <Com1 />
    <h1>Me Component Two hu</h1>
  </div>
);

const combined = React.createElement("div", {}, [core, jsx, <Fun />, <Com2 />]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(combined);
