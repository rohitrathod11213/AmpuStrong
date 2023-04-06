import Navbar1 from "../pages/navbar1"
import Navbar2 from "./navbar/Navbar2"
// import doctor from "../images/doctor1.jpg"
import back from "../images/doc_back.jpg"
import "./thome.css"
import Contact from "../pages/Contact"
export default function Therapisthome(){
    return(
        <>
        <div className="App" >
        <div className="nav">
            <Navbar1/>
            <Navbar2/>
        </div>
        </div>
        <div className="homesection" >
            <div className="doctorimg" style={{backgroundImage:`url(${back})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"83vh"}}>
            <div className="doctcont"><span>Your Health</span>
            <h2>OUR FIRST PIRORITY</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error libero exercitationem animi consectetur quos excepturi tenetur vel consequatur similique expedita.</p></div>
            <div className="doctimg"></div>
            </div>
            
        </div>
        <Contact/>
        {/* <footer>
            <h1>Ampustrong</h1>
        </footer> */}
        </>
    )
}