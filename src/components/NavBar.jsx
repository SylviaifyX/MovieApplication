import Holder from "./Holder";
import imgg from "../assets/tv.png";
import imggg from "../assets/Search.png";
import img from "../assets/Menu.png";
const Nav = ({ dark }) => {
  return (
    <nav className="relative bg-[#0000006c] py-4">
      <Holder className="flex justify-between">
        <div className="flex items-center flex-nowrap gap-4">
          <img src={imgg} className="w-12 h-12" alt="logo" />
          <p
            className={`font-DM Sans text-xl font-bold ${
              dark ? "text-black" : "text-white"
            }`}
          >
            MovieBox
          </p>
        </div>

        <div className="hidden relative min-w-72 md:block">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="bg-transparent outline-none w-full h-full pr-12 pl-4 rounded-md border-2 border-[#D1D5DB] text-white "
          />
          <img
            src={imggg}
            className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2"
            alt=""
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="text-white font-bold">SignIn</button>
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
