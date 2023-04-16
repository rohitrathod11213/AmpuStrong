import Navbar1 from "../../pages/navbar1";
import Navbar2 from "../navbar/Navbar2";
import "./appoint.css";
import AppointBox from "./AppointBox.jsx";

import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Context } from "../../context/Context";

export default function Appointment() {
  const [appoints, setAppoints] = useState([]);
  const {user} =useContext(Context);

  useEffect(() => {
    const fetchAppoints = async () => {
      const res = await axios.get("http://localhost:5001/api/appointments?docuser=" + user.username);
      setAppoints(res.data);
    };
    fetchAppoints();
  }, []);

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
          {appoints.map((appoint) => (
            <AppointBox appoint={appoint} />
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
