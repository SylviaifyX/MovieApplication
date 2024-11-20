import { useEffect, useState } from "react";
import textImg from "../assets/Poster.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

const Person = () => {
    const [getPerson, setGetPersonId] = useState([]);
    const API_URL = import.meta.env.VITE_API_KEY;
    const { id } = useParams();

    useEffect(() => {
        const fetchPersonId = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/person/${id}?api_key=${API_URL}`
                );
                setGetPersonId(response.data);
                console.log("this is person:", response.data);
            } catch (error) {
                console.log("cannot fetch:", error);
            }
        };
        fetchPersonId();
    }, [id, API_URL]);

    const getAge = (birthday) => {
        const today = new Date()
        const birth = new Date(birthday)
        let age = today.getFullYear() - birth.getFullYear()
        const monthDifference = today.getMonth() - birth.getMonth();

        // Adjust if the current date is before the birth date in the current year
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        return age;
    }
    return (
        <div className="h-dvh overflow-y-scroll ">
            <div className="w-full mt-10 px-4  max-w-[1800px] mx-auto">
                <div className="flex w-full flex-col  lg:flex-row lg:items-start gap-10">
                    <div className="relative w-full lg:w-1/2  h-[600px] mx-auto rounded-lg overflow-hidden" key={getPerson.id} style={{ maxWidth: "100%" }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${getPerson.profile_path || "no Image"}`}
                            alt="txtInegicon"
                            className="w-full h-full object-cover  block"
                        />
                    </div>
                    <div className="mt-4 w-full lg:w-1/2 text-justify font-Poppins">
                        <h1 className="text-black text-2xl font-bold text-center">{getPerson.name}</h1>
                        <p className="text-black mt-2 leading-6">
                            {getPerson.biography ? (
                                getPerson.biography.split("\n").map((paragraph, index) => (
                                    <p key={index} className="text-black mt-2 leading-6">
                                        {paragraph.trim()}
                                    </p>
                                ))
                            ) : (
                                <p className="text-black mt-2 leading-6">Biography not available.</p>
                            )}
                        </p>
                    </div>

                </div>
                <div className=" p-3 flex flex-col lg:flex-row items-center text-center justify-between gap-6 mt-10">
                    <div className="bg-red-50 w-full lg:w-1/2 p-3 rounded-lg">
                        <span className="text-2xl font-Poppins">Born</span>
                        <h1 className="text-2xl"> <span>{getPerson.birthday || "no Birthday available"}</span></h1>
                    </div>
                    <div className="bg-red-50 w-full lg:w-1/2 p-3 rounded-md">
                        <span className="text-2xl font-Poppins">Age</span>
                        <h1 className="text-2xl">{getAge(getPerson.birthday)}</h1>
                    </div>

                </div>
                <div className=" p-3 flex flex-col lg:flex-row items-center text-center justify-between gap-6 mt-4">
                    <div className="bg-red-50 w-full lg:w-1/2 p-3 rounded-md">
                        <span className="text-2xl font-Poppins">Career</span>
                        <h1 className="text-2xl mt-2"> {getPerson.known_for_department}</h1>
                    </div>
                    <div className="bg-red-50 w-full lg:w-1/2 p-3 rounded-lg">
                        <span className="text-2xl font-Poppins">Place Of Birth</span>
                        <h1 className="text-2xl mt-2"> <span>{getPerson.place_of_birth || "place of birth not available"}</span></h1>
                    </div>

                </div>

            </div>
        </div>


    );
};

export default Person;
