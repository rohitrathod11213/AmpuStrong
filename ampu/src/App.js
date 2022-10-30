// import logo from './logo.svg';
import "./stylecss/Navbar.css";
import "./stylecss/Home.css";
import Home from './Home';
import Signup from './Signup';
import About from './About';
import Faq from './Faq';
import Bookapp from './Bookappoint';
import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { AiFillBell, AiOutlineLogout } from "react-icons/ai";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useContext } from 'react';
import Contact from "./Contact";
import Team from "./Team";
import Profile from "./Profile";
// import Group from './Group';
import Blog from './Blog';
import Signin from './Signin';
import { Context } from "./context/Context";



function App() {
  const [show, setShow] = useState(false);

  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/login");
  };



  return (
    <Router>
      <div className="App" >
        <div className="nav">
          <div className="header1">
            { user &&
            <div>
              <i className="fa"><Link to=""><AiFillBell /></Link></i>
              <i className="fa"><Link to="/profile"><FaUserCircle /></Link></i>
              <i className="fa" onClick={() => { setShow(!show) }}><FaChevronDown /></i>
              <i className="fa" onClick={handleLogout}><AiOutlineLogout /></i>
              <div className={`sub-menu-wrap ${show ? 'active' : 'inactive'} `} id="subMenu">
                <div className="sub-menu" onClick={(show)}>
                  <Link to="/profile"><h4 >profile</h4></Link>
                  <Link to=""><h4>My booking</h4></Link>
                  <Link to=""><h4>My Wallet</h4></Link>
                  <Link to=""><h4>My Orders</h4></Link>
                  <Link to=""><h4>My Address</h4></Link>
                  <Link to=""><h4>My Subscription</h4></Link>
                  <Link to=""><h4>My account</h4></Link>
                  <hr />

                </div>
              </div>
            </div>
            }
            {
              !user &&
              <div className="logout-header1">
                <div><Link to="/login">Login</Link></div>
                <div><Link to="/signup">Register</Link></div>
              </div>
            }
          </div>
          <div className="nav1">
            <div className="header">
              <h3>AMPUSTRONG</h3>
            </div>
            <div className="search">
              <FaSearch /><input type="text" placeholder="Search..." />
            </div>
            <div className="list">
              <ul>
                <li>
                  <Link to="/"><h3>Home</h3></Link>
                </li>
                <li>
                  <Link to={user ? "/bookappoint" : "/login"}><h3>Book Appointments</h3></Link>
                </li>
                <li>
                  <Link to="/blog"><h3>Blogs</h3></Link>
                </li>
                {/* <li>
                  <Link to="/group"><h3>Groups</h3></Link>
                </li> */}
                <li>
                  <Link to="/about"><h3>About</h3></Link>
                </li>
                <li>
                  <Link to="/faq"><h3>FAQ</h3></Link>
                </li>
                <li>
                  <Link to="/team"><h3>Meet The Team</h3></Link>
                </li>
                <li>
                  <Link to="/contact"><h3>Contact</h3></Link>
                </li>
                <li>
                  <Link to="/more"><h3>More</h3></Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/bookappoint" element={<Bookapp />} />
        <Route exact path="/blog" element={<Blog/>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/team" element={<Team/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/login" element={<Signin/>}/>
        {/* <Route exact path="/group" element={<Group/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
