import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import StarProductReview from "./StarProductReview";

const SingleProductReviews = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [singlePrRev, setSinglePrRev] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
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

  return (
    <div>
      {singlePrRev.map((singlePr) => (
        <div
          key={singlePr._id}
          className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 font-semibold shadow-none"
        >
          <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {singlePr.customerName}
                </h5>
                <div className="flex items-center gap-0 5">
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
        </div>
      ))}
    </div>
  );
};

export default SingleProductReviews;
