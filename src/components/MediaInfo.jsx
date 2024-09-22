
import downArrow from "../assets/Arrow.png";
import starIcon from "../assets/Star.png";
import ticketIcon from "../assets/Tickets.png";
import listIcon from "../assets/List.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MediaInfo = () => {
    const { id, mediaType } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const API_URL = import.meta.env.VITE_API_KEY;

    const [cast, setCast] = useState([])
    const [crew, setCrew] = useState([])

    function filterRole(crew, role) {
        if (!crew) return []
        return crew.filter((person) => person.job.toLowerCase() === role)
            .map((data) => data.name)
    }

    useEffect(() => {
        const fetchCastInfo = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${API_URL}`)
                const { crew, cast } = res.data
                setCast(cast || [])
                setCrew(crew || [])
                console.log(cast, crew)
            } catch (error) {
                console.log("error fetching data", error)
            }

        };
        fetchCastInfo()

    }, [id, mediaType])

    useEffect(() => {
        const fetchMovieInfo = async () => {
            if (id) {
                try {
                    const url =
                        mediaType === "movie"
                            ? `https://api.themoviedb.org/3/movie/${id}?api_key=${API_URL}`
                            : `https://api.themoviedb.org/3/tv/${id}?api_key=${API_URL}`

                    const response = await axios.get(url);
                    setMovieDetails(response.data);
                    console.log(response.data);
                } catch (error) {
                    console.log("error fetching", error);
                }
            }
        };
        fetchMovieInfo();
    }, [id, mediaType, API_URL]);

    return (
        <div className="grid py-4 lg:grid-cols-2 gap-x-6">
            <div className="font-Poppins">
                <div className="flex flex-col gap-1 mb-2">
                    <p className="font-bold text-xl">{mediaType === "movie" ? movieDetails.title : movieDetails.name}</p>
                    <p>{new Date(mediaType === "movie" ? movieDetails.release_date : movieDetails.first_air_date).toUTCString()}</p>
                    <p>
                        {mediaType === "movie" ? movieDetails.runtime : movieDetails.episode_run_time?.[0]}<span className="text-red-500">Mins</span>
                    </p>
                </div>
                <p className="font-medium leading-7">{movieDetails.overview}</p>
                <div className="pt-3 flex flex-col gap-2">
                    <div className="flex gap-2 mt-3 mb-2 items-center">
                        <p className="text-[#333]">Director:</p>
                        <p className="text-[#BE123C]">{filterRole(crew, "director").join(" , ")}</p>
                    </div>
                    <div className="flex gap-2 mt-3 items-center">
                        <p className="text-[#333]">Writer:</p>
                        <p className="text-[#BE123C]">{filterRole(crew, "writer").join(" , ")}</p>
                    </div>
                    <div className="flex gap-2 mt-3 items-center">
                        <p className="text-[#333]">Stars:</p>
                        <p className="text-[#BE123C]">{cast.map((person) => person.name).join(" , ") || ""}</p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-between rounded-md shadow mt-6">
                    <div className=" bg-[#BE123C] rounded-md h-full py-2 px-4 w-full">
                        <p className="text-white text-nowrap"> Top Rated</p>
                    </div>
                    <button className=" text-[#333] flex flex-nowrap gap-1 py-2 px-4 w-full justify-between">
                        <span className="text-nowrap">Awards 9 nominations</span>
                        <img
                            src={downArrow}
                            alt="downarrow-icon"
                            className="w-7 h-7 mr-2"
                        />
                    </button>
                </div>
            </div>
            <div>
                <div className="flex items-center py-3">
                    <img src={starIcon} alt="star-icon" className="w-5 h-5" />
                    <p className="ml-2">
                        <span className="text-[#E8E8E8] mr-1">8.5</span>
                        <span>|</span>
                        <span className="ml-2 text-[#666]">350K</span>
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="bg-[#BE123C] rounded-lg py-2 px-4 flex items-center">
                        <img
                            src={ticketIcon}
                            alt="ticket-icon"
                            className="w-6 h-6 mr-2"
                        />
                        <p className="text-white">See Showtimes</p>
                    </div>
                    <div className="bg-[#f1d9df] border border-[#BE123C] rounded-lg py-2 px-4 flex items-center">
                        <img src={listIcon} alt="list-icon" className="w-6 h-6 mr-2" />
                        <p>More watch options</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MediaInfo
