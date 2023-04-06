import "./stylecss/Navbar.css";
import "./stylecss/Home.css";
// import img1 from "././images/userr.jpg";
import Home from "./pages/Home";
import Signup from "./auth/Signup";
import CreateBlog from "./blog/CreateBlog";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Bookapp from "./pages/Bookappoint";
// import Navbar from "./pages/Navbar";
import Therapisthome from "./therapist/Therapisthome";
// import { AiFillBell, AiOutlineLogout } from "react-icons/ai";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Profile from "./editprofile/Profile";
import Blog from "./blog/Blog";
import Signin from "./auth/Signin";
import Messenger from "./messenger/Messenger";
import Editprofile from "./editprofile/Editprofile";
import Appointment from "./therapist/appoint/Appointment";
import Ecommerce from "./ecommerce/ecommerce";
import Proddetail from "./ecommerce/proddetail";
import Mycart from "./ecommerce/mycart";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/therapist" element={<Therapisthome />} />
        <Route exact path="/booking" element={<Appointment />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/bookappoint" element={<Bookapp />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/login" element={<Signin />} />
        <Route exact path="/create" element={<CreateBlog />} />
        <Route exact path="/messenger" element={<Messenger />} />
        <Route exact path="/profile/editprofile" element={<Editprofile />} />
        <Route exact path="/mycart" element={<Mycart/>}/>
        <Route exact path="/ecommerce" element={<Ecommerce/>}/>
        <Route exact path="/proddet" element={<Proddetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
