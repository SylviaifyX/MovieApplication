import Holder from "./Holder";
import imgg from "../assets/tv.png";
import imggg from "../assets/Search.png";
import img from "../assets/Menu.png";
import { Link } from "react-router-dom"
import { useState } from "react";

const Nav = ({ dark, searchValue, handlerFn}) => {
  //handling debouncing//
  // const [timeOut, setTimeOut] = useState(null);

  // const Trigger = (e) => {
  //   clearTimeout(timeOut);
  //   const value = e.target.value;
  //   const timeout = setTimeout(() => handlerFn(value), 500); // Debouncing
  //   setTimeOut(timeout);
  // };

  
  return (
    <nav className="relative bg-[#0000006c] py-4">
      <Holder className="flex justify-between items-center p-2">
        <Link to="/">
          <div className="flex items-center flex-nowrap gap-2 md:gap-4">
            <img src={imgg} className="w-12 h-12 " alt="logo" />
            <p
              className={`font-DM Sans text-sm md:text-2xl font-bold ${dark ? "text-black" : "text-white"
                }`}
            >
              MovieBox
            </p>
          </div>
        </Link>

        <form className=" w-1/2 h-8  relative md:min-w-72 md:block md:w-auto md:h-14 ">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="bg-transparent outline-none w-full h-full pr-12 pl-4 md:text-base rounded-md border-2 border-[#D1D5DB] text-white placeholder-transparent md:placeholder:text-white md:placeholder:text-base"
            onChange={(e)=>handlerFn(e.target.value)}
            value={searchValue}
          />
          <img
            src={imggg}
            className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            alt=""
          />
        </form>

        <div className="flex items-center gap-4">
          <button className="hidden md:block text-white font-bold text-sm md:text-2xl">SignIn</button>
          <button>
            <img src={img} alt="logo" />
          </button>
        </div>
      </Holder>

      <div className="absolute w-full bg-gradient-to-b h-20 from-[#0000006c] top-full "></div>
    </nav>
  );
};
export default Nav;
