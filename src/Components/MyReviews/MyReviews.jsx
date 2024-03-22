import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { Button } from "@material-tailwind/react";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [singlePrRev, setSinglePrRev] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
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
      fetch(`http://localhost:5000/reviews/${id}`, {
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
                    <div className="flex items-center gap-0 5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
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
