import Navbar1 from "./navbar1";
import Navbar from "./Navbar";
import "../stylecss/appoint.css";
import AppointBox from "./AppointBox.jsx";

import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";

export default function MyAppointment() {
  const [appoints, setAppoints] = useState([]);
  const {user} =useContext(Context);
  const username = user.username;

  useEffect(() => {
    const fetchAppoints = async () => {
      const res = await axios.get("http://localhost:5001/api/appointments?user=" + user.username);
      setAppoints(res.data);
    };
    fetchAppoints();
  }, [appoints]);

  const handleDelete = async (appointId) => {
    await axios.delete("http://localhost:5001/api/appointments/" + appointId, {data: {username}});
    setAppoints([]);
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="App">
        <div className="nav">
          <Navbar1 />
          <Navbar />
        </div>
      </div>
      <div className="appointsection">
        <div className="appointbox">
          {appoints.map((appoint) => (
            <AppointBox appoint={appoint} appointDelete={handleDelete} />
          ))}
          
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
