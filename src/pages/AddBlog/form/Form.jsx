import React, { useState } from "react";

const Form = ({ type, onSubmit }) => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    image: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <div className="flex justify-center mt-10 h-full bg-white">
      <div className="w-full max-w-2xl mx-auto p-6 rounded-2xl shadow-2xl bg-white">
        <div className="mb-6">
          <h1 className="font-bold uppercase text-4xl">
            {type} <br /> Blog
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <input
              className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Title*"
              name="title"
              onChange={handleChange}
            />
            <input
              className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subtitle*"
              name="subtitle"
              onChange={handleChange}
            />
            <input
              className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="file"
              name="image"
              onChange={handleChange}
            />
            <input
              className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Category*"
              name="category"
              onChange={handleChange}
            />
          </div>

          <div className="my-4">
            <textarea
              placeholder="Description*"
              className="w-full h-32 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              name="description"
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-white p-3 rounded-lg w-full hover:bg-blue-800 transition">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
