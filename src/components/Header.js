import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";

const Title = () => (
  <a href="/">
    <img
      alt="logo"
      className="h-28 p-2"
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline=useOnline()
  const green="top-9 start-50 absolute w-3.5 h-3.5 bg-green-500 border-2 border-black dark:border-gray-800 rounded-full"
  const red="top-9 start-50 absolute w-3.5 h-3.5 bg-red-500 border-2 border-black dark:border-gray-800 rounded-full"

  return (
    <div className="flex justify-between bg-orange-100 shadow-lg">
      <Title />
      <div className="navList">
        <ul className="flex py-10 ">
          <li className="px-4 hover:bg-orange-400 rounded mr-8 items-center font-semibold text-lg">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:bg-orange-400 rounded mr-8 items-center font-semibold text-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:bg-orange-400 rounded mr-8 items-center font-semibold text-lg">
            <Link to="/contact">Contact </Link>
          </li>
          <li className="px-4 hover:bg-orange-400 rounded mr-8 items-center font-semibold text-lg">
            <Link to="/cart">Cart </Link>
          </li>
          <li className="px-4 hover:bg-orange-400 rounded mr-8 items-center font-semibold text-lg">
            {
                (isLoggedIn)?(
                   
                <button onClick={()=> setIsLoggedIn(!isLoggedIn)} >
                  LogOut<span className={isOnline?green:red}></span>
                </button>
                ):
                (
                    <button onClick={()=> setIsLoggedIn(!isLoggedIn)} >
                    LogIn<span className={isOnline?green:red}></span>
                  </button> 
                )
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
