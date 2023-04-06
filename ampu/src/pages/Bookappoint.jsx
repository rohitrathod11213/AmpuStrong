import "../stylecss/Home.css";
import "../stylecss/Navbar.css";
import img10 from "../images/img10.jpeg";
import img9 from "../images/img9.jpeg";
import { useContext } from "react";
import axios from "axios";
import { Context } from "../context/Context";
import Navbar1 from "./navbar1";
import Navbar from "./Navbar";

export default function Bookapp() {
  const { user } = useContext(Context);
  const username = user.username;
  const profile = user.profilePic;

  const handleBooking = async (title, duration, cost) => {
    try {
      await axios.post("http://localhost:5001/api/appointments", {
        title,
        duration,
        cost,
        username,
        profile,
      });
      alert("Appointment booked successfully");
    } catch (err) {
      console.log(err);
      alert("Couldn't book the appointment");
    }
  };

  return (
    <>
    <div className="App" >
        <div className="nav">
          <Navbar1/>
          <Navbar/>
        </div>
      </div>
    <div className="services">
      <div className="box-container-box1">
        <h1>Our Services</h1>
        <div className="box-container-box1-content">
          <div className="box-container-box1-content-box1">
            <img src={img10} alt="logo" />
            <div>
              <h2>Physiotherapy</h2>
              <hr />
              <span>1 hr</span>
              <h4>Rs 1,300</h4>
              <button
                style={{ backgroundColor: "white" }}
                onClick={() => handleBooking("Physiotherapy", 1, 1300)}
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="box-container-box1-content-box1">
            <img src={img9} alt="logo" />
            <div>
              <h2>Psychotherapy</h2>
              <hr />
              <span>1 hr</span>
              <h4>Rs 1,500</h4>
              <button
                style={{ backgroundColor: "white" }}
                onClick={() => handleBooking("Psychotherapy", 1, 1500)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
