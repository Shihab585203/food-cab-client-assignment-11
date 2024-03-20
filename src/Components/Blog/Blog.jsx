import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 mx-auto lg:grid-cols-3 md:grid-cols-2 gap-4 my-8">
      <div className="relative flex mx-auto flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Difference between SQL and NoSQL
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            While SQL databases are best used for structured data, NoSQL
            databases are suitable for structured, semi-structured, and
            unstructured data. As a result, NoSQL databases don't follow a rigid
            schema but instead have more flexible structures to accommodate
            their data-types.
          </p>
        </div>
      </div>
      <div className="relative flex mx-auto flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            What is JWT, and how does it work?
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            JWT stands for JSON Web Token. It is a compact, URL-safe means of
            representing claims to be transferred between two parties. It is
            used to securely transmit information between parties in a JSON
            format. JWTs can be used to authorize access to resources and
            services.
          </p>
        </div>
      </div>

      <div className="relative flex mx-auto flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            What is the difference between javascript and NodeJS?
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            JavaScript is primarily used for client-side programming, while
            Node. js allows developers to build server-side applications using
            JavaScript. Understanding their differences and use cases will help
            you make informed decisions when selecting the right technology for
            your projects.
          </p>
        </div>
      </div>
      <div className="relative flex mx-auto flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            What is the difference between javascript and NodeJS?
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            How NodeJS handle multiple client requests? NodeJS receives multiple
            client requests and places them into EventQueue. NodeJS is built
            with the concept of event-driven architecture. NodeJS has its own
            EventLoop which is an infinite loop that receives requests and
            processes them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
