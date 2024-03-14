import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Home from "../../Home/Home";
import FoodCard from "../../FoodMenu/FoodCard";
import LimitedProducts from "../../LimitedProducts/LimitedProducts";
import SingleFoodCardDetails from "../../FoodMenu/SingleFoodCardDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/limitedProducts"),
      },
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/limitedProducts"),
      },
      {
        path: "/limited-products",
        element: <LimitedProducts />,
        loader: () => fetch("http://localhost:5000/limitedProducts"),
      },
      {
        path: "/services",
        element: <FoodCard />,
      },
      {
        path: "/services/:id",
        element: <SingleFoodCardDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);
