
import { Link } from "react-router-dom"
import movieIcon from "../assets/tv.png"
import menuIcon from "../assets/Menu.png"
import image1 from "../assets/Home.png";
import image2 from "../assets/MovieProjector.png";
import image3 from "../assets/TVShow.png";
import image4 from "../assets/Calendar.png";
import logIcon from "../assets/Logout.png"
import { useState } from "react";

const SideBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const open = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="md:h-dvh overflow-y-scroll no-scrollbar lg:w-72 p-2 md:p-0">
            <nav className="">
                <div className="py-4">
                    <div className="px-4 flex items-center justify-between">
                        <Link to="/">
                            <div className="flex items-center gap-3">

                                <img src={movieIcon} alt="" className="w-12 h-12" />

                                <p className="font-bold text-black text-xl font-DM Sans">MovieBox</p>

                            </div>
                        </Link>
                        <button className="md:hidden" onClick={open}>

                            <img src={menuIcon} alt="menu-icon" />
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`transition-all duration-300 ease-in-out ${menuOpen ?
                "max-h-screen opacity-100" : "max-h-0 opacity-0"} 
                 overflow-hidden md:w-60 lg:w-72 link-section md:max-h-full md:opacity-100  p-4 md:p-0`}>

                <Link to="/">
                    <div className="flex items-center gap-2 py-4 md:pl-12 cursor-pointer">

                        <img src={image1} alt="home-icon" />

                        <p className="w-[61px] text-[#666] font-Poppins text-nowrap">Home</p>
                    </div>
                </Link>
                <Link to="/movie">
                    <div className="flex items-center gap-2 py-4 bg-pink-200 md:pl-12 cursor-pointer">
                        <img src={image2} alt="movie-icon" />
                        <p className="w-[61px] text-[#666] font-Poppins text-nowrap">Movies</p>
                    </div>
                </Link>
                <Link to="/tv">
                    <div className="flex items-center gap-2 py-4 md:pl-12 cursor-pointer">
                        <img src={image3} alt="tvseries-icon" />
                        <p className="w-[61px] text-[#666] font-Poppins text-nowrap">Tv Series</p>
                    </div>
                </Link>
                <div>
                    <Link to="/upcoming" className="flex items-center gap-2 py-4 md:pl-12 cursor-pointer">
                        <img src={image4} alt="upcoming-icon" />
                        <p className="w-[61px] text-[#666] font-Poppins text-nowrap">Upcoming</p>
                    </Link>
                </div>
                <div className="bg-gree-500 w-[170px] rounded-2xl border-[#BE123C] bg-[#F8E7EB] p-4 mx-4 sm:ml-12 mt-4">
                    <p className="font-semibold leading-5">Play movie quizes and earn free tickets</p>
                    <p className="mt-2 text-sm">50k people are playing now</p>
                    <button className="w-28 h-8 mt-3 rounded-full bg-red-200 text-sm text-[#BE123C] font-bold">Start playing</button>
                </div>
                <button className="flex items-center mt-10 px-4 sm:pl-12">
                    <img src={logIcon} alt="logout-icon" />
                    <p className="font-Poppins text-[#666] font-semibold">Log Out</p>
                </button>
            </div>

        </div>
    )
}
export default SideBar