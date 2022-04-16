import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import logo from "../../images/logo2.png";
import auth from "../../firebase.init";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [matchError, setMatchError] = useState();
  const handelSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
      console.log("hello");
    } else {
      setMatchError("password not match");
    }
  };
  return (
    <div className="login-container">
      <img className="h-24 mx-auto pt-14" src={logo} alt="" />
      <div className="lg:w-2/6 mx-auto">
        <form onSubmit={handelSignUp} className="">
          <input
            className="block h-12 w-80 px-4 rounded-lg mt-4 mx-auto"
            type="text"
            name="userName"
            placeholder="User name"
            id="0"
          />
          <input
            className="block h-12 w-80 px-4 rounded-lg mt-4 mx-auto"
            type="email"
            name="email"
            placeholder="Email"
            id="1"
            required
          />
          <input
            className="block h-12 w-80 px-4 rounded-lg my-3 mx-auto"
            type="password"
            name="password"
            placeholder="password"
            id="2"
            required
          />
          <input
            className="block h-12 w-80 px-4 rounded-lg my-3 mx-auto"
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            id="3"
            required
          />
          <p className="text-center mr-2 mb-5">
            Already have an account?
            <Link to="/login" className="text-blue-600 cursor-pointer">
              Login
            </Link>
          </p>
          <p className="text-center text-red-700">
            {error?.message || matchError}
          </p>
          <input
            className="block text-white font-sans font-semibold text-xl cursor-pointer bg-rose-600 h-12 w-80 px-4 rounded-lg mb-5 mx-auto"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
