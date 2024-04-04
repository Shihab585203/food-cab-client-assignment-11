import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import StarProductReview from "./StarProductReview";

const SingleProductReviews = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [singlePrRev, setSinglePrRev] = useState([]);

  useEffect(() => {
    const getToken = localStorage.getItem("food-cab");
    console.log(getToken);
    //fetch data to specify user with query Email
    fetch(`https://food-cab-server.vercel.app/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${getToken}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOutUser();
        }
        return res.json();
      })
      .then((data) => {
        setSinglePrRev(data);
        if (!getToken) {
          setSinglePrRev(data);
          localStorage.setItem("food-cab", getToken);
        }
      });
  }, [user?.email]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const token = localStorage.getItem("food-cab");
  //       if (!token) {
  //         // If token is not available, log out the user
  //         logOutUser();
  //         return;
  //       }

  //       if(user?.email){

  //       }
  //       const response = await fetch(`https://food-cab-server.vercel.app/reviews?email=${user?.email}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       if (!response.ok) {
  //         // Handle unauthorized or forbidden responses
  //         if (response.status === 401 || response.status === 403) {
  //           logOutUser();
  //         }
  //         throw new Error("Failed to fetch reviews");
  //       }

  //       const data = await response.json();
  //       setSinglePrRev(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, [user?.email, logOutUser]);

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
