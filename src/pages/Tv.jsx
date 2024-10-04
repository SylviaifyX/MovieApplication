import SideBar from "../components/Sidebar";
import TVPage from "../components/TvPage";
const Tv = () => {
    return (
        <div className="grid md:grid-cols-[min-content_1fr]">
            <SideBar />
            <TVPage/>
        </div>
    )
}
export default Tv;