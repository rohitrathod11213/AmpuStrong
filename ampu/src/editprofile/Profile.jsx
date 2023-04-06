import "../stylecss/profile.css";
// import onli from './images/onli.jpg'
import { FaCamera } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { Context } from "../context/Context";
import React, { useContext } from "react";
import img11 from "../images/img11.jpeg";
import { Link } from "react-router-dom";
import Navbar1 from "../pages/navbar1";
import Navbar from "../pages/Navbar";
import Navbar2 from "../therapist/navbar/Navbar2";
// import { useEffect, useState } from "react";
// import axios from "axios";
export default function Profile() {
  const { user } = useContext(Context);
  // let {id} = useParams();

  const PF = "http://localhost:5001/images/";
  return (
    <div style={{margin:"0px"}}>
    {user.cate==="amputee" ? <div className="App" >
        <div className="nav">
          <Navbar1/>
          <Navbar/>
        </div>
      </div> : <div className="App" >
        <div className="nav">
          <Navbar1/>
          <Navbar2/>
        </div>
      </div>}
    <section className="section">
      <div className="profile_page">
        <div className="sectionprofile">
          <div className="profile1">
            <i className="fa fas">
              <FaCamera />
            </i>
          </div>
          <div className="profile-coontainer1">
            <div className="profile-photo-img1">
              <img
                className="imgmargin"
                src={user.profilePic ? PF + user.profilePic : img11}
                alt=""
              />
            </div>
            <div className="profile-photo-details1">
              
              <i className="fa1">
                <FaEllipsisV />
              </i>
            </div>
          </div>
        
        <div className="profile-container1">
          
          <div className="profile-container-content1">
          {/* <div className="profilespan">
                <h3>{user.username}</h3>
              </div> */}
            <span className="profi1">{user.username}</span>
            <Link to="/profile/editprofile">
              <button>
                <i style={{ paddingRight: "20px" }}>
                  <FaPen />
                </i>
                Edit profile
              </button>
              <br />
            </Link>
            <br />
            <span style={{fontWeight:"700"}}>Join Date: {new Date(user.createdAt).toDateString()}</span>
            <br />
            <br />
            {/* <hr className="hr" /> */}
            <fieldset>
            <legend style={{fontSize:"25px",fontWeight:"700"}}>Profile</legend>
            <div className="profiledetails">
              <div className="profiledetailitem">
                <h4>first Name : </h4>
                <div className="profileh4">
                  <p>{user.firstname}</p>
                </div>
              </div>
              <div className="profiledetailitem">
                <h4>lastname Name : </h4>
                <div className="profileh4">
                  <p>{user.lastname}</p>
                </div>
              </div>
              <div className="profiledetailitem">
                <h4>Gender : </h4>
                <div className="profileh4">
                  <p>{user.gender}</p>
                </div>
              </div>
              <div className="profiledetailitem">
                <h4>Date of Birth : </h4>
                <div className="profileh4">
                  <p>{new Date(user.dateofbirth).toDateString()}</p>
                </div>
              </div>
              <div className="profiledetailitem">
                <h4>Phone : </h4>
                <div className="profileh4">
                  <p>{user.phone}</p>
                </div>
              </div>
              <div className="profiledetailitem">
                <h4>Email : </h4>
                <div className="profileh4">
                  <p>{user.email}</p>
                </div>
              </div>
              <div className="profiledetailitem">
                <h4>Address : </h4>
                <p className="address">
                  {user.address1}
                  <span> , </span>
                  {user.address2}
                  <span> , </span>
                  {user.state}
                  <span> , </span>
                  {user.country}
                  <span> , </span>
                  {user.pincode}
                </p>
              </div>
              <div className="profiledetailitem">
                <h4>About Us : </h4>
                <p>{user.about}</p>
              </div>
            </div>
          </fieldset>
          

          </div>
        </div></div>
        <footer>
          {/* <hr style={{ width: "95%", marginBottom: "20px" }} /> */}
          <h3 style={{ fontSize: "25px", paddingBottom: "20px" }}>
            AmpuStrong
          </h3>
        </footer>
      </div>
    </section>
    </div>
  );
}


        //  <div className="sectionprofile2">
        //   <div className="navigatio">
        //     <ul>
        //       <li>
        //         <h4>Profile</h4>
        //       </li>
        //       <li>
        //         <h4>My Booking</h4>
        //       </li>
        //       <li>
        //         <h4>My Wallet</h4>
        //       </li>
        //       <li>
        //         <h4>My Orders</h4>
        //       </li>
        //       <li>
        //         <h4>My Addreses</h4>
        //       </li>
        //       <li>
        //         <h4>My Subscription</h4>
        //       </li>
        //       <li>
        //         <h4>More</h4>
        //       </li>
        //     </ul>
        //   </div>
        // </div>
