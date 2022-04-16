import React from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo2.png";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, fakeuser, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="login-container">
      <img className="h-24 mx-auto pt-14" src={logo} alt="" />
      <div className="lg:w-2/6 mx-auto">
        <form onSubmit={handelLogin} className="">
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
            className="block h-12 w-80 px-4 rounded-lg mt-3 mx-auto"
            type="password"
            name="password"
            placeholder="password"
            id="2"
            required
          />
          <div className="flex items-center w-4/6 mx-auto mb-5">
            <Link className="text-blue-600" to="/signUp">
              Create a new account
            </Link>
            <p className="text-rose-600 cursor-pointer ml-2">Forget Password</p>
          </div>
          <p className="text-center text-red-600">{error?.message}</p>
          <input
            className="block text-white font-sans font-semibold text-xl cursor-pointer bg-rose-600 h-12 w-80 px-4 rounded-lg mb-5 mx-auto"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
