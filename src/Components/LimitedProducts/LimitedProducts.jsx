import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FoodCardDetails from "../FoodMenu/FoodCardDetails";
import { Button } from "@material-tailwind/react";

const LimitedProducts = () => {
  const [limitedFoodItems, setLimitedFoodItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/limitedProducts")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
        });
        setLimitedFoodItems(sortedData);
      });
  }, []);

  return (
    <div className="my-8">
      <h1 className="text-6xl font-semibold text-center">Our Food Menu</h1>
      <div className="grid grid-cols-3 gap-4">
        {limitedFoodItems.map((foodItem) => (
          <FoodCardDetails key={foodItem._id} foodItem={foodItem} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/menus">
          <Button variant="gradient" className="font-semibold text-md my-4">
            See All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LimitedProducts;
