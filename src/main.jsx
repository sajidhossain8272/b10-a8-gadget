// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
import Dashboard from "./Components/Dashboard";

import { useState } from "react";
import ErrorPage from "./Components/ErrorPage";
import Contact from "./Components/Contact";

// Shared functions for adding to cart and wishlist
function MainApp() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item.product_id === product.product_id)) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/product/:id",
      element: <ProductDetails addToCart={addToCart} addToWishlist={addToWishlist} />,
    },
    {
      path: "/dashboard",
      element: <Dashboard addToCart={addToCart} addToWishlist={addToWishlist} cart={cart} wishlist={wishlist} />,
    },
    {
      path: "/contact",
      element: <Contact></Contact>
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>
    },

  ]);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);

export default MainApp;