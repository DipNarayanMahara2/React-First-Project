import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../../config";

const Form = ({ type, onSubmit, initialData, blogId }) => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    if (initialData) {
      setData({
        title: initialData.title || "",
        subtitle: initialData.subtitle || "",
        description: initialData.description || "",
        category: initialData.category || "",
        image: "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (type === "edit") {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
          formData.append(key, data[key]);
        });

        const response = await axios.patch(
          `${baseUrl}/blog/${blogId}`,
          formData,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );

        if (response.status === 200) {
          alert("Blog Updated Successfully!");
          onSubmit(response.data.data); // Pass updated data back to parent
        }
      } else {
        onSubmit(data);
      }
    } catch (error) {
      console.error("Failed to submit blog:", error);
    }
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
              value={data.title}
              onChange={handleChange}
            />
            <input
              className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subtitle*"
              name="subtitle"
              value={data.subtitle}
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
              value={data.category}
              onChange={handleChange}
            />
          </div>

          <div className="my-4">
            <textarea
              placeholder="Description*"
              className="w-full h-32 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </div>

          <div className="w-full">
            <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-white p-3 rounded-lg w-full hover:bg-blue-800 transition">
              {type === "edit" ? "Update" : "Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
