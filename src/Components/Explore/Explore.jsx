import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h3 className="text-2xl font-semibold mb-4 lobster">BE OUR GUEST</h3>
        <h1 className="text-4xl protest-strike">
          Explore our Restaurant&apos;s finest Menu
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-11/12 mx-auto gap-6">
        <div className="text-center py-20 my-6 border border-orange-800">
          <PhotoProvider>
            <PhotoView src="https://i.ibb.co/gwTv3vy/diet.png">
              <img
                className="w-24 mx-auto"
                src="https://i.ibb.co/gwTv3vy/diet.png"
                alt=""
              />
            </PhotoView>
          </PhotoProvider>
          <h3 className=" text-2xl my-6 protest-strike">BEST SNACKS</h3>
          <p className=" px-8 pt-8 protest-strike">
            "Indulge in the ultimate satisfaction with the best snacks, where
            every bite is a savory delight. From crunchy chips to decadent
            chocolates, explore a world of flavors that tantalize your taste
            buds."
          </p>
          <Link to="/menus">
            <button className="btn text-2xl mt-8">
              <FaArrowRightLong />
            </button>
          </Link>
        </div>

        <div className="text-center py-20 my-6 border border-orange-800">
          <PhotoProvider>
            <PhotoView src="https://i.ibb.co/VQ2r0SJ/restaurant.png">
              <img
                className="w-24 mx-auto"
                src="https://i.ibb.co/VQ2r0SJ/restaurant.png"
                alt=""
              />
            </PhotoView>
          </PhotoProvider>
          <h3 className="text-2xl my-6 protest-strike">BEST DISHES</h3>
          <p className="px-8 pt-8 protest-strike">
            "Embark on a culinary journey with the best dishes, where each bite
            tells a story of flavor and tradition. From sizzling steaks to
            delicate pastries, indulge in moments of gastronomic bliss."
          </p>
          <Link to="/menus">
            <button className="btn text-2xl mt-8">
              <FaArrowRightLong />
            </button>
          </Link>
        </div>
        <div className="text-center py-20 my-6 border border-orange-800">
          <PhotoProvider>
            <PhotoView src="https://i.ibb.co/BjvkBpN/fast-food.png">
              <img
                className="w-24 mx-auto"
                src="https://i.ibb.co/BjvkBpN/fast-food.png"
                alt=""
              />
            </PhotoView>
          </PhotoProvider>

          <h3 className="text-2xl my-6 protest-strike">BEST DRINKS</h3>
          <p className="px-8 pt-8 protest-strike">
            "Sip away into bliss with the best drinks, where every pour is a
            symphony of taste and refreshment. From aromatic coffees to
            tantalizing cocktails, quench your thirst with perfection in every
            sip."
          </p>
          <Link to="/menus">
            <button className="btn text-2xl mt-8">
              <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;
