import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Home from "../../Home/Home";
import FoodCard from "../../FoodMenu/FoodCard";
import LimitedProducts from "../../LimitedProducts/LimitedProducts";
import SingleFoodCardDetails from "../../FoodMenu/SingleFoodCardDetails";
import Login from "./Login";
import Register from "./Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../../Blog/Blog";
import MyReviews from "../../MyReviews/MyReviews";
import SingleFoodReviews from "../../FoodMenu/SingleFoodReviews";

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
        element: (
          <PrivateRoute>
            <FoodCard />
          </PrivateRoute>
        ),
      },
      {
        path: "/services/:id",
        element: <SingleFoodCardDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/my-reviews",
        element: <MyReviews />,
      },
      {
        path: "/single-food-reviews",
        element: <SingleFoodReviews />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`)
      },
    ],
  },
]);
