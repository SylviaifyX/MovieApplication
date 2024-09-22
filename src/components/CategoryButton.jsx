import Holder from "./Holder";
import image from "../assets/Chevronright.jpg";
import { useEffect, useState } from "react";
import CardInfo from "./Card";
import axios from "axios";
import { ColorRing } from "react-loader-spinner"

const Tabs = () => {
  const [loader, setLoader] = useState(false)
  const [clickButton, setClickButton] = useState("all");
  const [data, setData] = useState([]);
  let arr = ["All", "Movie", "Tv"];
  const API_URL = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    getData();
  }, [clickButton]);

  const URL = {
    all: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_URL}`,
    tv: `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_URL}`,
    movie: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_URL}`,
  };
  const getData = async () => {
    const url = URL[clickButton];
    try {
      setLoader(true)
      const response = await axios.get(url);
      setData(response.data.results.slice(0, 20));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoader(false)
    }
  };
  return (
    <div>
      {loader ? (
        <div className="flex items-center justify-center">
          <ColorRing visible={true}
            height="80"
            width="80"
            className="bg-red-500 mx-auto "
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />
        </div>
      ) : (
        <div>
          <Holder className="md:py-3">
            <div className="md:flex md:items-center md:justify-between p-2">
              <div className="flex items-center gap-8 p-2 justify-between md:justify-start">
                {arr.map((value) => (
                  <div
                    onClick={() => setClickButton(value.toLocaleLowerCase())}
                    key={value}
                    className="flex items-center justify-between cursor-pointer font-bold"
                  >
                    {value}
                  </div>
                ))}
              </div>

              <button className="items-center hidden md:flex md:gap-3">
                <span className="text-[#BE123C]">See more</span>
                <img src={image} className="h-[20px]" alt="See more icon" />
              </button>
            </div>
          </Holder>

          <div
            className="md:max-w-[1240px] grid grid-cols-1 xs:grid-cols-2 
              sm:grid-cols-3 sm-p-3 
              md:p-3 md:mx-auto mt-6 
              md:grid-cols-3 lg:grid-cols-4 
              gap-[15px] p-3 lg:p-0"
          >
            {data.map((datas) => (
              <CardInfo datas={datas} key={datas.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
};
export default Tabs;
