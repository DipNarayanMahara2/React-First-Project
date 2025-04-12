import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <Link to="/blog/id">
      <div className="w-full bg max-w-[280px] rounded overflow-hidden shadow-lg mb-7 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
        <img
          className="w-full h-auto object-cover"
          src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_640.png"
          alt="Sunset in the mountains"
        />
        <div className="px-4 py-3">
          <div className="font-bold text-lg mb-1">The Coldest Sunset</div>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-4 pt-3 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
