import React, { useEffect, useState } from "react";
import FoodCardDetails from "./FoodCardDetails";
import PageTitle from "../PageTitle";

const FoodCard = () => {
  // const foodItems = useLoaderData();
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
        setFoodItems(sortedData);
        console.log(sortedData);
      });
  }, []);

  return (
    <div className="my-8">
      <PageTitle title="Menu Items" />
      <h1 className="text-6xl font-semibold text-center">Our Food Menu</h1>
      <div className="grid grid-cols-3 gap-4">
        {foodItems.map((foodItem) => (
          <FoodCardDetails key={foodItem._id} foodItem={foodItem} />
        ))}
      </div>
    </div>
  );
};

export default FoodCard;
