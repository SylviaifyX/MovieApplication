import Holder from "./Holder"
import Nav from "./NavBar"
import { useState, useEffect } from "react";
import image1 from "../assets/Rotten.png"
import image2 from "../assets/Icon.png"
import axios from "axios";

const Header = () => {
  const [banner, setBanner] = useState([])
  const bgImage = `https://image.tmdb.org/t/p/original/${banner.backdrop_path}`
  const API_URL = import.meta.env.VITE_API_KEY

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${API_URL}`

        );
        const images = response.data.results
        // console.log(images)
        const currentIndex = Math.floor(Math.random() * images.length)
        // console.log(currentIndex)
        setBanner(images[currentIndex])
      } catch (error) {
        console.log(error)
      }
    }
    fetchBanner();
  }, [])
  return (
    <section className="min-h-[680px] bg-center bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
      <Nav />
      <Holder>
        <div className="max-w-72 flex flex-col gap-3 mt-14">
          <h1 className="text-5xl font-bold leading-[56px] text-white">
            {banner.original_title}
          </h1>
          <div className="w-48 flex justify-between mt-2">
            <img src={image1} className="" alt="rottenImage" />
            <img src={image2} className="" alt="IconeImage" />
          </div>
          
          <p className="text-white line-clamp-6">{banner.overview}</p>

          <button className="w-[169px] h-9 rounded-md flex items-center bg-[#BE123C] gap-2 py-2 px-4 mt-6 mb-8">
            <p className="font-bold capitalize text-white">Watch trailer</p>
          </button>
        </div>
      </Holder>
    </section>

  )
}
export default Header