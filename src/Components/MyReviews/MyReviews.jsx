import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { Button } from "@material-tailwind/react";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PageTitle from "../PageTitle";
import StarProductReview from "../FoodMenu/StarProductReview";

const MyReviews = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [singlePrRev, setSinglePrRev] = useState([]);

  useEffect(() => {
    fetch(`https://food-cab-server.vercel.app/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("food-cab")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOutUser();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSinglePrRev(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are You sure you want to delete this review?"
    );
    if (proceed) {
      fetch(`https://food-cab-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount === 1) {
            alert("Delete Items Successfully!");
            const remaining = singlePrRev.filter(
              (singlePr) => singlePr._id !== id
            );
            setSinglePrRev(remaining);
          }
        });
    }
  };

  return (
    <div>
      <PageTitle title="My Reviews" />
      {singlePrRev.length === 0 ? (
        <h2 className="flex justify-center items-center py-20 text-3xl font-medium">
          NO REVIEWS WERE ADDED!
        </h2>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-11/12 mx-auto my-8 gap-8">
          {singlePrRev.map((singlePr) => (
            <div
              key={singlePr._id}
              singlePrRev={singlePrRev}
              className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none"
            >
              <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {singlePr.customerName}
                    </h5>
                    <div className="flex items-center gap-1">
                      <StarProductReview singlePr={singlePr} />
                    </div>
                  </div>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                    Title: {singlePr.title}
                  </p>
                </div>
              </div>
              <div className="p-0 mb-6">
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  {singlePr.textarea}
                </p>
              </div>
              <div className="flex justify-end">
                <Link to={`/edit-review/${singlePr._id}`}>
                  <Button variant="gradient" size="md" className="">
                    <span>
                      <FaEdit />
                    </span>
                  </Button>
                </Link>

                <Button
                  onClick={() => handleDelete(singlePr._id)}
                  variant="gradient"
                  size="md"
                  className="ml-3"
                >
                  <span>
                    <FaTrashCan />
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
