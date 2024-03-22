import React, { useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { logOutUser, user } = useContext(AuthContext);
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  //Log out User
  const handleLogOut = () => {
    logOutUser(() => {
      Navigate("/");
    })
      .then()
      .catch((error) => console.log(error));
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <Link to="/home" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <Link to="/menus" className="flex items-center">
          Food Menu
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold"
      >
        <Link to="/blog" className="flex items-center">
          Blogs
        </Link>
      </Typography>
      {user?.uid ? (
        <>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-semibold"
          >
            <Link to="/add-menu" className="flex items-center">
              Add Menu
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-semibold"
          >
            <Link to="/my-reviews" className="flex items-center">
              My Reviews
            </Link>
          </Typography>
        </>
      ) : (
        <></>
      )}
    </ul>
  );

  return (
    <div className="-m-6 sticky py-5 max-h-[768px] w-[calc(100%+48px)]">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-8 lg:px-8 lg:py-8">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography as="" className="mr-4 cursor-pointer py-1.5 font-medium">
            <Link to="/">FoodCaB</Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {user?.uid ? (
                <Button
                  onClick={handleLogOut}
                  fullWidth
                  variant="gradient"
                  size="sm"
                  className=""
                >
                  <span>Log Out</span>
                </Button>
              ) : (
                <>
                  <Link to="/login">
                    <Button
                      variant="gradient"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <span>Log In</span>
                    </Button>
                  </Link>

                  <Link to="/register">
                    <Button
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <span>Register</span>
                    </Button>
                  </Link>
                </>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            {user?.uid ? (
              <Button
                onClick={handleLogOut}
                fullWidth
                variant="gradient"
                size="sm"
                className=""
              >
                <span>Log Out</span>
              </Button>
            ) : (
              <>
                <Link to="/login">
                  <Button fullWidth variant="text" size="sm" className="">
                    <span>Log In</span>
                  </Button>
                </Link>

                <Link to="/register">
                  <Button fullWidth variant="gradient" size="sm" className="">
                    <span>Register</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
