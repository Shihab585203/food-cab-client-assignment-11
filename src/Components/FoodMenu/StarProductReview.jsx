import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const StarProductReview = ({ singlePr }) => {
  const { select } = singlePr;
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let numbers = index + 0.5;

    return (
      <span key={index}>
        {select >= index + 1 ? (
          <FaStar />
        ) : select >= numbers ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });
  return <div className="flex text-orange-800 gap-1">{ratingStar}</div>;
};

export default StarProductReview;
