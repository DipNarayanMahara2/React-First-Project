import React, { useState } from "react";
import "./Background.css";
import { Link } from "react-router-dom";

const Form = ({ type, onSubmit }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Background floating blobs */}
      <div className="absolute w-[32rem] h-[32rem] bg-blue-600 opacity-30 rounded-full blur-3xl animate-float top-[-10rem] left-[-10rem] z-0" />
      <div className="absolute w-[28rem] h-[28rem] bg-indigo-500 opacity-30 rounded-full blur-3xl animate-float-delay bottom-[-10rem] right-[-10rem] z-0" />

      {/* Form container */}

      <div className="relative z-10 w-full max-w-sm p-4 mx-auto mt-7 border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={hanldeSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            {type} in to our platform
          </h5>
          {type === "Register" && (
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="AdamJones...."
                required
              />
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              // required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          {type === "Login" && (
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div>
          )}
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {type}
          </button>
          {type === "Login" ? (
            <div className="flex text-lg text-gray-500 dark:text-gray-300">
              <p className="mr-3">Don't have an account?</p>
              <Link
                to="/register"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="text-sm flex font-medium text-gray-500 dark:text-gray-300">
              <p className="mr-3 text-lg">Already have an account?</p>
              <Link
                to="/login"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                <p className=" text-lg">Login</p>
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
