import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const FoodCardDetails = ({ foodItem }) => {
  const { _id, title, rating, price, desc, img } = foodItem;
  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <PhotoProvider>
          <PhotoView src={img}>
            <img
              src={img}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </PhotoView>
        </PhotoProvider>
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="orange" className="font-medium text-lg text-orange-700">
            {title}
          </Typography>
          <Typography color="" className="font-medium text-lg text-orange-700">
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
        <Link to={`/services/${_id}`}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-orange-700 text-blue-gray-900 text-sm shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FoodCardDetails;
