import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import LimitedProducts from "../LimitedProducts/LimitedProducts";
import Explore from "../Explore/Explore";

const Home = () => {
  return (
    <>
      <div>
        {/* Carousel Section */}
        <Carousel
          transition={{ duration: 1.5 }}
          loop={true}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          className="rounded-xl"
        >
          <div className="relative h-full w-full">
            <img
              src="https://i.ibb.co/dg4xZ2t/1.jpg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/25">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Best food in this City
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  In this city, culinary delights abound, offering a symphony of
                  flavors that tantalize taste buds and satisfy cravings. From
                  quaint cafes tucked in charming corners to bustling eateries
                  along vibrant streets, the options are endless.
                </Typography>
                <div className="flex gap-2">
                  <Link to="/services">
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://i.ibb.co/XZ7WwR8/2.jpg"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full justify-items-end text-right items-center ">
              <div className="w-3/4 pr-12 md:w-2/4 md:pr-20 lg:pr-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  The Food you want to take!
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  Savor the irresistible allure of the food you crave, beckoning
                  with its tantalizing aroma and mouthwatering flavors. Whether
                  it&apos;s a hearty burger, a steaming bowl of ramen, or a
                  slice of decadent cheesecake, indulge in the culinary delights
                  that captivate your senses.
                </Typography>
                <div className="flex justify-end gap-2">
                  <Button size="lg" color="white">
                    <Link to="/services">Explore</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://i.ibb.co/p4xQDyv/3.jpg"
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/25">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Grab your Favourite Food
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  Get ready to satisfy your cravings and elevate your mood as
                  you grab your favorite food. Whether it&apos;s a comforting
                  slice of pizza, a crispy fried chicken sandwich, or a
                  refreshing salad, treat yourself to the flavors you love most.
                </Typography>
                <div className="flex gap-2">
                  <Button size="lg" color="white">
                    <Link to="/menus">Explore</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <LimitedProducts />
      <Explore/>
    </>
  );
};

export default Home;
