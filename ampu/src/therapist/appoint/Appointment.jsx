import Navbar1 from "../../pages/navbar1";
import Navbar2 from "../navbar/Navbar2";
import img10 from "../../images/img10.jpeg";
import "./appoint.css";
export default function Appointment() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="App">
        <div className="nav">
          <Navbar1 />
          <Navbar2 />
        </div>
      </div>
      <div className="appointsection">
        <div className="appointbox">
          <div className="appointboxcont">
            <div className="userimg">
              <img src={img10} alt="" />
            </div>
            <div className="appointusername">
              <h3>Rohit</h3>
            </div>
            <div className="date">
              <h5>25 Febraury 2023</h5>
              <span>2:00pm - 3: 00pm</span>
            </div>
          </div>
          <div className="appointboxcont">
            <div className="userimg">
              <img src={img10} alt="" />
            </div>
            <div className="appointusername">
              <h3>Rohit</h3>
            </div>
            <div className="date">
              <h5>25 Febraury 2023</h5>
              <span>2:00pm - 3: 00pm</span>
            </div>
          </div>
          <div className="appointboxcont">
            <div className="userimg">
              <img src={img10} alt="" />
            </div>
            <div className="appointusername">
              <h3>Rohit</h3>
            </div>
            <div className="date">
              <h5>25 Febraury 2023</h5>
              <span>2:00pm - 3: 00pm</span>
            </div>
          </div>
          
        </div>
      </div>
      <div style={{textAlign:"center",backgroundColor:"black",padding:"20px"}}>
      <span style={{color:"white",textAlign:"center",fontSize:"30px"}}>
          AmpuStrong
        </span>
      </div>
        
      
    </div>
  );
}
