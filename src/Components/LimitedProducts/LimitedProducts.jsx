import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FoodCardDetails from '../FoodMenu/FoodCardDetails';
import { Button } from '@material-tailwind/react';

const LimitedProducts = () => {
    const limitedPr = useLoaderData();
    return (
        <div className="my-8">
        <h1 className="text-6xl font-semibold text-center">Our Food Menu</h1>
        <div className="grid grid-cols-3 gap-4">
          {limitedPr.map((foodItem) => (
            <FoodCardDetails key={foodItem._id} foodItem={foodItem} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="gradient" className="font-semibold text-md my-4">
            <Link to="/services">See All</Link>
          </Button>
        </div>
      </div>
    );
};

export default LimitedProducts;