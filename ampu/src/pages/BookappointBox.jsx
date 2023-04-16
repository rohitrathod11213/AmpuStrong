import "../stylecss/Home.css";
import "../stylecss/Navbar.css";
import img10 from "../images/img10.jpeg";
import { useContext } from "react";
import axios from "axios";
import { Context } from "../context/Context";

export default function BookappointBox({title, appointDate, duration, cost, docusername}) {
  const { user } = useContext(Context);
  const username = user.username;
  const profile = user.profilePic;

  const handleBooking = async () => {
    appointDate = new Date(appointDate).toISOString();
    try {
      await axios.post("http://localhost:5001/api/appointments", {
        title,
        appointDate,
        duration,
        cost,
        username,
        docusername,
        profile,
      });
      alert("Appointment booked successfully");
    } catch (err) {
      console.log(err);
      alert("Couldn't book the appointment");
    }
  };

  return (
        <div className="box-container-box1-content-box1">
            <img src={img10} alt="logo" />
            <div>
              <h2>{title}</h2>
              <hr />
              <h4>Date: {new Date(appointDate).toLocaleString()}</h4>
              <span>{duration} hr</span>
              <h4>Rs {cost}</h4>
              <i>Doc. Username: @{docusername}</i>
              <button
                style={{ backgroundColor: "white" }}
                onClick={() => handleBooking()}
                >
                Book Now
              </button>
            </div>
        </div>
    );
}
