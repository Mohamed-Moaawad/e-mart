import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// PWA APP
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// React Routet
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFoundPage from "./Pages/NotFoundPage";
import Blog from "./Pages/Blog";
import Services from "./Pages/Services";
import FAQs from "./Pages/FAQs";
import ShoppingCart from "./Pages/ShoppingCart";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Shop from "./Pages/Shop";
import FavoriteCart from "./Pages/FavoriteCart";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ProductDetails from "./Pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shopping-cart",
    element: <ShoppingCart />,
  },
  {
    path: "/faqs",
    element: <FAQs />,
  },
  {
    path: "/log-in",
    element: <LogIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/favorite-cart",
    element: <FavoriteCart />,
  },
  {
    path: "/details/:id",
    element: <ProductDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// PWA APP
serviceWorkerRegistration.register();