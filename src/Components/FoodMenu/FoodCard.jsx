import React, { useEffect, useState } from "react";
import FoodCardDetails from "./FoodCardDetails";
import PageTitle from "../PageTitle";

const FoodCard = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    //fetch data and sorted to show newest first data.
    fetch("https://food-cab-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
        });
        setFoodItems(sortedData);
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
