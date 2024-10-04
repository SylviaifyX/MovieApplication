
import MovieCard from "../components/MoviePage";
import SideBar from "../components/Sidebar";
const Movie = () => {
    return (
        <div className="grid md:grid-cols-[min-content_1fr]">
            <SideBar />
            <MovieCard/>
        </div>
    )
}
export default Movie;