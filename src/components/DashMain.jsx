// import posterImage from "../assets/Poster.jpg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import YouTube from "react-youtube"; 
import MediaInfo from "./MediaInfo";

const DashMain = () => {
    const {id, mediaType} = useParams();
    // console.log(mediaType)
    // const [mediaType, setMediaType] = useState("ifeoma");
  
    const [videoPlayerId, setVideoPlayerId] = useState("")
    const API_URL = import.meta.env.VITE_API_KEY;
    

    useEffect(() =>{
        const fetchMovieVideo = async() =>{
            if (id) {
                try {
                    const url =
                        mediaType === "tv"
                            ?  `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_URL}`
                            :`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_URL}`

                    const response = await axios.get(url); 
                    const videos = response.data.results;
                    // console.log(response.data.results);
                    const youtubeVideo = 
                    videos.find(video => video.site === "YouTube" 
                    && (video.type === "Trailer" || video.type === "Teaser"));
                    if (youtubeVideo) {
                        setVideoPlayerId(youtubeVideo.key); 
                    } else {
                        console.log("No YouTube trailer available");
                    }
                } catch (error) {
                    console.log("error fetching", error);
                }
            }
           
        };
        fetchMovieVideo()
    }, [id, mediaType, API_URL]);

    const videoOptions = {
        width: "100%",
        height: "100%",
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div className="h-dvh overflow-y-scroll ">
            <div className="w-full px-4 md:pl-6">
                <div className="md:pt-4">
                    <YouTube videoId={videoPlayerId} opts={videoOptions} 
                    className="w-full aspect-[12/7] md:aspect-[2/1] md:rounded-2xl overflow-hidden"/>
                    {/* <img
                        src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
                        alt="poster-image"
                        className="object-cover w-full aspect-[12/7] md:aspect-[2/1] md:rounded-2xl"
                    /> */}
                    {/* {movieDetails.backdrop_path ? (
                    <img
                    src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
                    alt="poster-image"
                    className="object-cover w-full aspect-[12/7] md:aspect-[2/1] md:rounded-2xl"
                     />
                    ) : (
                    <img
                    src={posterImage}
                    alt="default-poster-image"
                    className="object-cover w-full aspect-[12/7] md:aspect-[2/1] md:rounded-2xl"
                    />
                    )} */}
                </div>
               <MediaInfo/>
            </div>
        </div>
    );
};
export default DashMain;
