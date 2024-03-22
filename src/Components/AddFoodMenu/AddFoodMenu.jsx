import React, { useContext } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const AddFoodMenu = () => {

    const handleAddMenu = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const thumbImg = form.thumbImg.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const desc = form.desc.value;

        const foodItem = {
            title,
            img: thumbImg,
            price,
            rating,
            desc,
        }

        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(foodItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success("Food Item added successfully!")
            form.reset();
        })

    } 
  return (
    <div className="flex justify-center items-center my-12">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-center">
          Add New Dishes!
        </Typography>
        <form onSubmit={handleAddMenu} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Title
            </Typography>
            <Input
              size="lg"
              placeholder="Menu Title"
              type="text"
              name="title"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Thumbnail Image URL
            </Typography>
            <Input
              size="lg"
              placeholder="Thumbnail Image URL"
              type="url"
              name="thumbImg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Price
            </Typography>
            <Input
              size="lg"
              type="number"
              name="price"
              placeholder="Ex: 50"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Rating
          </Typography>

          <div className="relative h-10 w-100 min-w-[200px] my-7">
            <select
              name="rating"
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Select a Number
            </label>
          </div>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Menu Description
          </Typography>
          <div className="w-96">
            <div className="relative w-full min-w-[200px] my-7">
              <textarea
                name="desc"
                className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                required
              ></textarea>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Write about Menu in details!
              </label>
            </div>
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Add Menu
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddFoodMenu;
