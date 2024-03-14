import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const FoodCardDetails = ({ foodItem }) => {
  console.log(foodItem);
  const { _id, title, rating, price, desc, img } = foodItem;
  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={img}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium text-lg">
            {title}
          </Typography>
          <Typography color="blue-gray" className="font-medium text-lg">
            ${price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {desc.slice(0, 150)}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-orange-700 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCardDetails;
