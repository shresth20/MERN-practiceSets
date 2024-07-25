// using js
let body = document.querySelector("body");
let h1 = document.createElement("h1");
h1.innerText = "Hello world form js !!";
body.appendChild(h1);

// using react
const head = React.createElement(
  "h1",
  { id: "head" },
  "Hello world form React !!"
);

// create nested tags
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "Me H1 hu !"),
    React.createElement("h2", {}, "Me H2 hu !"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h3", {}, "Me H3 hu !"),
    React.createElement("h4", {}, "Me H4 hu !"),
  ]),
]);

const combined = React.createElement("div", {}, [head, parent]);
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(combined);
