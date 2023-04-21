import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import img1 from "../images/userr.jpg";
import { AiOutlineLogout } from "react-icons/ai";
import {Link} from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { Context } from "../context/Context";
import { useContext ,useState} from "react";
export default function Navbar1(){
  const [show, setShow] = useState(false);
  const cat = useRef("menu");
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5001/images/";
  useEffect(()=>{
    const closeOpenMenus = (e) => {
      if (!cat.current && show && !cat.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", closeOpenMenus);
  })
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/login");
  };
    return(
          <div className="header1">
            {user && (
              <div
                
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  paddingTop: "5px",
                }}
              >
                {user.cate==="amputee" ? <i className="fa">
                  <Link to="/mycart">
                    <FaShoppingCart/>
                  </Link>
                </i> : null}
                
                <i className="fa">
                  <Link
                    to={user.firstname ? "/profile" : "/profile/editprofile"}
                  >
                    {user.profilePic ? (
                      <img
                        src={PF + user.profilePic}
                        className="profile_img"
                        alt=""
                      />
                    ) : (
                      <FaUserCircle />
                    )}
                  </Link>
                </i>
                <i>
                  <span style={{ paddingRight: "10px" }}>{user.username}</span>
                </i>
                <i
                  className="fa"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  <FaChevronDown />
                </i>
                <i className="fa" onClick={handleLogout}>
                  <AiOutlineLogout />
                </i>
                <div
                  className={`sub-menu-wrap ${show ? "active" : "inactive"} `}
                  id="subMenu"
                >
                  {show ? (
                    <div className="sub-menu">
                      <img
                        src={user.profilePic ? PF + user.profilePic : img1}
                        style={{
                          height: "70px",
                          width: "70px",
                          borderRadius: "50%",
                          border: "3px solid white",
                          alignItems: "center",
                          marginLeft: "25%",
                        }}
                        alt=""
                      />
                      <br />
                      <h2 style={{ fontSize: "16px", marginLeft: "25%" }}>
                        {user.username}
                      </h2>
                      <hr />
                      <Link
                        to={
                          user.firstname ? "/profile" : "/profile/editprofile"
                        }
                      >
                        <h4>profile</h4>
                      </Link>
                      <Link to="/profile/editprofile">
                        <h4>Edit Profile</h4>
                      </Link>
                      {/* <Link to="">
                        <h4>My Wallet</h4>
                      </Link> */}
                      <Link to="/mycart">
                        <h4>My Cart</h4>
                      </Link>
                      <Link to="/myappointments">
                        <h4>My Appointments</h4>
                      </Link>

                      {/* <hr /> */}
                    </div>
                  ) : null}
                </div>
              </div>
            )}
            {!user && (
              <div className="logout-header1">
                <div>
                  <Link to="/login">Login</Link>
                </div>
                <div>
                  <Link to="/signup">Register</Link>
                </div>
              </div>
            )}
          </div>
    )
}