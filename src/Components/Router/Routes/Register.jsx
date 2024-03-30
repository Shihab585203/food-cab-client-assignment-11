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
import RegisterAnimation from "../../../AnimationData/register-animation.json";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import PageTitle from "../../PageTitle";
import toast from "react-hot-toast";

const Register = () => {
  const { registerUser, user, updateProfileData } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;

    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUpdateUser(fullName);
        form.reset();
        toast.success("User Created Successfully!")
        Navigate("/login")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdateUser = (fullName) => {
    const profile = {
      displayName: fullName,
    };
    updateProfileData(profile)
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="grid grid-cols-2 my-28 gap-2">
      <PageTitle title="Register" />
      <div>
        <Lottie animationData={RegisterAnimation} loop={true} />
      </div>
      <div className="ml-16">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <div className="text-3xl text-white">
              Sign Up
            </div>
          </CardHeader>
          <form onSubmit={handleRegister}>
            <CardBody className="flex flex-col gap-4">
              <Input
                name="fullName"
                label="Full Name"
                type="text"
                size="lg"
                required
              />
              <Input
                name="email"
                label="Email"
                type="text"
                size="lg"
                required
              />
              <Input
                name="password"
                label="Password"
                type="password"
                size="lg"
                required
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                type="submit"
                variant="gradient"
                className="text-sm"
                fullWidth
              >
                Register Now!
              </Button>
            </CardFooter>
          </form>
          <div className="mt-6 flex justify-center">
            Already have an account?
            <div
              className="ml-1 mb-6 text-blue-gray-700 font-bold"
            >
              <Link to="/login">Log In</Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Register;
