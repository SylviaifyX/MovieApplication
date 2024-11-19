import Person from "../components/PersonInfo"
import SideBar from "../components/Sidebar"

const SinglePerson = () =>{
    return(
        <div className="grid md:grid-cols-[min-content_1fr]">
            <SideBar />
            <Person/>
        </div>
    )
}

export default SinglePerson