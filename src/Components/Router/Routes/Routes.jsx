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
import EditReview from "../../MyReviews/EditReview";
import AddFoodMenu from "../../AddFoodMenu/AddFoodMenu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://food-cab-server.vercel.app/limitedProducts"),
      },
      {
        path: "/home",
        element: <Home />,
        loader: () =>
          fetch("https://food-cab-server.vercel.app/limitedProducts"),
      },
      {
        path: "/limited-products",
        element: <LimitedProducts />,
      },
      {
        path: "/menus",
        element: (
          <PrivateRoute>
            <FoodCard />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-menu",
        element: (
          <PrivateRoute>
            <AddFoodMenu />
          </PrivateRoute>
        ),
      },
      {
        path: "/menus/:id",
        element: <SingleFoodCardDetails />,
        loader: ({ params }) =>
          fetch(`https://food-cab-server.vercel.app/products/${params.id}`),
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
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/single-food-reviews",
        element: <SingleFoodReviews />,
        loader: ({ params }) =>
          fetch(`https://food-cab-server.vercel.app/products/${params.id}`),
      },
      {
        path: "/edit-review/:id",
        element: <EditReview />,
        loader: ({ params }) =>
          fetch(`https://food-cab-server.vercel.app/reviews/${params.id}`),
      },
    ],
  },
]);
