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
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const FoodCardDetails = ({ foodItem }) => {
  const { _id, title, rating, price, desc, img } = foodItem;

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let numbers = index + 0.5;

    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar />
        ) : rating >= numbers ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

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
          <Typography
            color="orange"
            className="font-medium text-lg text-orange-700"
          >
            {title}
          </Typography>
          <Typography color="" className="flex font-medium text-lg text-orange-700">
            {ratingStar}
          </Typography>
        </div>
        <Typography color="" className="font-medium text-lg mb-4">
          Price: ${price}
        </Typography>
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
