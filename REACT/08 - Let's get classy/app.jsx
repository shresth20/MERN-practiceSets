import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./src/Components/Header";
import Footer from "./src/Components/Footer";
import { Home } from "./src/pages/Home/Home";
import { Contact } from "./src/pages/Contact/Contact";
import { About } from "./src/pages/About/About";
import { ErrPage } from "./src/pages/ErrPage/ErrPage";
import { Cart } from "./src/pages/Cart/Cart";
import { Restaurant } from "./src/pages/Restaurant/Restaurant";

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
      { path: "/restaurant/:resId", element: <Restaurant /> },
    ],
    errorElement: <ErrPage />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={AppRoutes} />);
