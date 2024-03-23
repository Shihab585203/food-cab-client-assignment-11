import React from "react";

const ServicesSample = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 w-11/12 mx-auto mb-12 gap-6">
        <div className="">
          <img
            className="w-11/12"
            src="https://i.ibb.co/LrpGtPp/pexels-flo-dahm-541216.jpg"
            alt=""
          />
        </div>
        <div className="">
          <h3 className="text-xl font-bold rajdhani-light">OUR SERVICES</h3>
          <p className="text-3xl my-6 font-semibold rajdhani-light">
            Dive into the world of our special services
          </p>
          <p className="text-2xl mb-20 font-semibold rajdhani-light">
            Explore our exclusive services, where every dive immerses you in a
            world of unparalleled experiences and exceptional benefits.
          </p>
          <img
            src="https://i.ibb.co/S08pVyh/pexels-chan-walrus-941861.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSample;
