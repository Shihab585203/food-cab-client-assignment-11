import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import Lottie from "lottie-react";
import LoginAnimation from "../../../AnimationData/login-animation.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import PageTitle from "../../PageTitle";

const googleAuth = new GoogleAuthProvider();

const Login = () => {
  const { signInUser, googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogIn = () => {
    googleLogIn(googleAuth)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="grid grid-cols-2 my-28 gap-2">
      <PageTitle title="Login" />
      <div className="ml-16">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardBody className="flex flex-col gap-4">
              <Input name="email" type="text" label="Email" size="lg" />
              <Input
                name="password"
                type="password"
                label="Password"
                size="lg"
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                type="submit"
                variant="gradient"
                className="text-sm"
                fullWidth
              >
                Sign In
              </Button>
            </CardFooter>
          </form>
          <div className="text-center">
            <span className="font-semibold text-lg  text-black mt-3">OR</span>
            <br />
            <button onClick={handleGoogleLogIn}>
              <img
                src="https://www.pngall.com/wp-content/uploads/5/Google-G-Logo-PNG-Image.png"
                className="w-12 mx-auto"
                alt=""
              />
            </button>
          </div>
          <Typography variant="small" className="mt-6 mb-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              <Link to="/register">Sign up</Link>
            </Typography>
          </Typography>
        </Card>
      </div>
      <div>
        <Lottie animationData={LoginAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Login;
