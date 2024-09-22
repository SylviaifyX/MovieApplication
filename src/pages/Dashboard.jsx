
import DashMain from "../components/DashMain"
import SideBar from "../components/Sidebar"


const Dashboard = () => {
    return (
        <div className="grid md:grid-cols-[min-content_1fr]">
            <SideBar />
            <DashMain />
        </div>
    )
}
export default Dashboard