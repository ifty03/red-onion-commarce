import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../../../images/logo2.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handelSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="flex items-center justify-between px-2 md:px-14 h-24">
      <Link to="/" className="cursor-pointer ">
        <img style={{ height: "30px" }} src={logo} alt="" />
      </Link>
      <div className="flex items-center">
        <Link className="mx-3 font-sans font-semibold" to="/cart">
          <FiShoppingCart />
        </Link>
        {user ? (
          <span
            onClick={handelSignOut}
            className="mx-3 font-sans font-semibold cursor-pointer"
          >
            Sign Out
          </span>
        ) : (
          <Link className="mx-3 font-sans font-semibold" to="/login">
            Login
          </Link>
        )}
        <Link
          to="/signUp"
          className="font-sans font-semibold mx-3 bg-rose-600 hover:bg-rose-700 text-white py-2 px-7 rounded-full"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Header;
