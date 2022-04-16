import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodDetails = () => {
  const { foodId } = useParams();
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);

  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  // useEffect(() => {
  //   const currentFood = foods.find((food) => food._id == foodId);
  //   setSelectedFood(currentFood);
  // }, [foodId]);
  console.log(selectedFood);
  return (
    <div>
      <h2>this is your food {foodId}</h2>
      {/* <img src={selectedFood?.picture} alt="" /> */}
    </div>
  );
};

export default FoodDetails;
