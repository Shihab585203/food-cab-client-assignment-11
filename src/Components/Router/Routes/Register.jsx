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
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { registerUser, user, updateProfileData } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;

    registerUser( email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUpdateUser(fullName);
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdateUser = (fullName) => {
    const profile = {
      displayName: fullName
    }
    updateProfileData(profile)
    .then()
    .catch(error => console.log(error))
  }

  return (
    <div className="grid grid-cols-2 my-28 gap-2">
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
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <form onSubmit={handleRegister}>
            <CardBody className="flex flex-col gap-4">
              <Input name="fullName" label="Full Name" type="text" size="lg" />
              <Input name="email" label="Email" type="text" size="lg" />
              <Input
                name="password"
                label="Password"
                type="password"
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
                Register Now!
              </Button>
            </CardFooter>
          </form>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Typography
              as=""
              variant="small"
              color="blue-gray"
              className="ml-1 mb-6 font-bold"
            >
              <Link to="/login">Log In</Link>
            </Typography>
          </Typography>
        </Card>
      </div>
    </div>
  );
};

export default Register;
