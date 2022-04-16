import React from "react";
import "./Baner.css";

const Baner = () => {
  return (
    <div style={{ height: "500px" }} className="baner-image-container">
      <h1 className="pt-44 text-4xl font-sans font-semibold text-center ">
        Best Food Waiting For Your bally
      </h1>
      <div className="flex items-center justify-center">
        <div className="flex mt-6 rounded">
          <input
            type="text"
            className="rounded-full px-4 py-2 w-55 lg:w-80"
            placeholder="Search..."
          />
          <button className="px-4 -ml-10 rounded-full text-white bg-rose-600 hover:bg-rose-700 border-l ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Baner;
