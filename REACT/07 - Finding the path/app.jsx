import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./src/Components/Header";
import Footer from "./src/Components/Footer";
import { Home } from "./src/pages/Home";
import { Contact } from "./src/pages/Contact";
import { About } from "./src/pages/About";
import { ErrPage } from "./src/pages/ErrPage";
import { Cart } from "./src/pages/Cart";

const Applayout = () => (
  <div id="layout">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
    errorElement: <ErrPage />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={AppRoutes} />);
