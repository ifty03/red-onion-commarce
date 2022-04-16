import React from "react";
import { useNavigate } from "react-router-dom";

const Food = ({ food }) => {
  const { balance, about, name, picture, _id } = food;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/food/" + _id);
      }}
      className="cursor-pointer mx-4 p-4 rounded-lg hover:shadow-2xl"
    >
      <div className="text-center">
        <img className="p-4" src={picture} alt="" />
        <h3 className="font-semibold text-xl">{name}</h3>
        <p>{about}</p>
        <h2 className="text-2xl font-sans font-semibold">{balance}</h2>
      </div>
    </div>
  );
};

export default Food;
