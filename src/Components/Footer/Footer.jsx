import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date();
  return (
    <div>
      <footer className="w-full bg-orange-600 p-8 font-bold">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
          <h3 className="text-2xl lobster">FoodCaB</h3>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Link to="/menus">
                <Typography
                  color="blue-gray"
                  className="font-semibold transition-colors"
                >
                  Food Menu
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/blogs">
                <Typography
                  color="blue-gray"
                  className="font-semibold transition-colors"
                >
                  Blogs
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <Typography
                  color="blue-gray"
                  className="font-semibold transition-colors"
                >
                  Login
                </Typography>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-black" />
        <Typography className="text-center font-bold">
          &copy; {year.getFullYear()} All right reserve by FoodCaB
        </Typography>
      </footer>
    </div>
  );
};

export default Footer;
