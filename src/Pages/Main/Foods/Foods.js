import React, { useEffect, useState } from "react";
import Food from "../Food/Food";

const Foods = ({ selectedFood }) => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const displayFood = foods.filter((food) => food.type === selectedFood);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-5/6 mx-auto">
      {displayFood.map((food) => (
        <Food key={food._id} food={food}></Food>
      ))}
    </div>
  );
};

export default Foods;
