import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ blog }) => {
  return (
    <Link to={`/blog/${blog._id}`}>
      <div className="w-full bg max-w-[280px] rounded overflow-hidden shadow-lg mb-7 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
        <img
          className="w-full h-auto object-cover"
          src={blog.imageUrl}
          alt="Sunset in the mountains"
        />
        <div className="px-4 py-3">
          <div className="font-bold text-lg mb-1">{blog.title}</div>
          <p className="text-gray-700 text-sm">
            {blog.description.length > 50
              ? `${blog.description.slice(0, 50)}....`
              : blog.description}
          </p>
        </div>
        <div className="px-4 pt-3 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
            {blog.category}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
