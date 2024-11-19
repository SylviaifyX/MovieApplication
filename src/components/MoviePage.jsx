import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const MovieCard = () => {
   const [Movie, setMovie] = useState([]);
   const API_URL = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_URL}`
                );
                setMovie(response.data.results);
                // console.log(response.data.results)
            } catch (error) {
                console.log("couldn't fetch upcoming movie", error);
            }
        };
        fetchMovies();
    }, [API_URL]);

    return (
        <section className="md:max-w-[1240px] grid grid-cols-1 p-4 xs:grid-cols-2 sm:grid-cols-3 sm-p-3 
              md:p-3 md:mx-auto 
              md:grid-cols-2 lg:grid-cols-4 
              gap-[15px] h-dvh overflow-y-scroll">
            {Movie.map((movie) => (
                <div className="flex flex-col md:flex-col md:gap-3 w-full shadow-xl mx-auto relative" key={movie.id} >
                    <div>
                        <Link to={`/${movie.media_type}/${movie.id}`}>
                            <img
                                datatestid="movie-poster"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title || movie.name}
                                className="h-[460px] w-full object-cover cursor-pointer"
                            />
                        </Link>
                        <div className="absolute top-2 mr-3 w-[19px] h-[19px] right-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 30 30"
                                fill="none"
                            >
                                <g filter="url(#filter0_b_39697_79)">
                                    <ellipse
                                        cx="15"
                                        cy="15.1842"
                                        rx="15"
                                        ry="14.6053"
                                        fill="#F3F4F6"
                                        fillOpacity="0.5"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_b_39697_79"
                                        x="-2"
                                        y="-1.42105"
                                        width="34"
                                        height="33.2105"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
                                        <feComposite
                                            in2="SourceAlpha"
                                            operator="in"
                                            result="effect1_backgroundBlur_39697_79"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_backgroundBlur_39697_79"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className="absolute top-2 mr-3 w-[19px] h-[19px] right-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
                                    fill="#D1D5DB"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="p-2 flex flex-col gap-2">
                        <p
                            className=" h-[16px] font-bold text-xs md:text-[15px] text-[#9CA3AF] "
                            data-testid="movie-release-date"
                        >
                            {movie.release_date || movie.first_air_date}
                        </p>
                        <h1
                            className="w-full  font-bold text-[16px] md:text-[18px] text-[#111827] flex-wrap"
                            data-testid="movie-title"
                        >
                            {movie.title || movie.name}
                        </h1>
                        <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center">
                                <p className="text-xs font-medium text-[#111827]  h-[12px] leading-[12px]">
                                    86.0 / 100
                                </p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-xs font-medium text-[#111827]   h-[12px] leading-[12px]">
                                    97%
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <p
                                className="font-bold text-base text-[#9CA3AF]"
                                data-testid="movie-type"
                            >
                                {movie.media_type}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default MovieCard;
