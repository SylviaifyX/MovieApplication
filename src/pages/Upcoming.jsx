import UpcomingCard from "../components/UpcomingPage";
import SideBar from "../components/Sidebar";
const Upcoming = () => {
    return (
        <div className="grid md:grid-cols-[min-content_1fr]">
            <SideBar />
            <UpcomingCard />
        </div>
    )
}
export default Upcoming;