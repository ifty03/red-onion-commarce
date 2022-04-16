import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import FoodDetails from "./foodDetails/FoodDetails";
// import FoodDetails from "./foodDetails/FoodDetails";

import Foods from "./Foods/Foods";
import Sarvices from "./Sarvices/Sarvices";

const Main = () => {
  const [breackfast, setBreckfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [selectedFood, setSelectedFood] = useState("lunch");
  useEffect(() => {
    if (breackfast) {
      setSelectedFood("breakfast");
    }
    if (lunch) {
      setSelectedFood("lunch");
    }
    if (dinner) {
      setSelectedFood("dinner");
    }
  }, [breackfast, lunch, dinner]);
  return (
    <div className="">
      <nav className="my-4 flex items-center justify-center mb-8">
        <p
          className={
            breackfast
              ? "text-rose-600 cursor-pointer border-b-2 border-rose-700 mx-5 font-sans font-semibold"
              : "mx-5 font-sans cursor-pointer font-semibold"
          }
          onClick={() => {
            setBreckfast(true);
            setDinner(false);
            setLunch(false);
          }}
        >
          Breakfast
        </p>
        <p
          className={
            lunch
              ? "text-rose-600 border-b-2 cursor-pointer border-rose-700 mx-5 font-sans font-semibold"
              : "mx-5 cursor-pointer font-sans font-semibold"
          }
          onClick={() => {
            setBreckfast(false);
            setDinner(false);
            setLunch(true);
          }}
        >
          Lunch
        </p>
        <p
          className={
            dinner
              ? "text-rose-600 cursor-pointer border-b-2 border-rose-700 mx-5 font-sans font-semibold"
              : "mx-5 font-sans cursor-pointer font-semibold"
          }
          onClick={() => {
            setBreckfast(false);
            setDinner(true);
            setLunch(false);
          }}
        >
          Dinner
        </p>
      </nav>

      <Foods selectedFood={selectedFood}></Foods>
      <button className="block my-10 mx-auto relative px-6 py-3 font-medium text-white group">
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-rose-500 group-hover:bg-rose-700 group-hover:skew-x-12"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-rose-700 group-hover:bg-rose-500 group-hover:-skew-x-12"></span>

        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-rose-600 -rotate-12"></span>
        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-rose-400 -rotate-12"></span>
        <span className="relative">Checkout Your Food</span>
      </button>
      <Sarvices></Sarvices>
    </div>
  );
};

export default Main;
